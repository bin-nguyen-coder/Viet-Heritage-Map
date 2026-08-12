"""
Local fallback chat service - no external LLM required.
Uses pre-recorded responses and keyword-based retrieval.
"""
import re
from typing import List, Optional, Literal, cast
from uuid import UUID
from sqlalchemy import select, or_
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.artisan import KnowledgeChunk, ArtisanPersona, ArtisanResponse
from app.schemas.chat import ArtisanResponse as ArtisanResponseSchema, Citation


class LocalChatService:
    """
    Local chat service using keyword matching and pre-recorded responses.
    No external LLM required.
    """

    def __init__(self, db: AsyncSession):
        self.db = db

    def _extract_keywords(self, question: str) -> List[str]:
        """Extract Vietnamese keywords from question"""
        stopwords = {"là", "của", "có", "và", "cũng", "được", "cho", "với", "tại", "sao", "thế", "nào", "như", "khi", "nơi", "đâu", "ai", "gì", "về", "những", "các", "một", "này", "đó"}
        words = re.findall(r"\b\w+\b", question.lower())
        keywords = [w for w in words if len(w) > 2 and w not in stopwords]
        return keywords[:10]

    async def _keyword_search(
        self, keywords: List[str], persona_id: Optional[UUID], limit: int = 5
    ):
        """Search knowledge chunks by keyword matching"""
        if not keywords:
            return []

        conditions = []
        for kw in keywords:
            conditions.append(KnowledgeChunk.content_vi.ilike(f"%{kw}%"))
            conditions.append(KnowledgeChunk.content_en.ilike(f"%{kw}%"))

        query = (
            select(KnowledgeChunk)
            .where(or_(*conditions))
            .limit(limit)
        )

        if persona_id:
            query = query.where(KnowledgeChunk.artisan_persona_id == str(persona_id))

        result = await self.db.execute(query)
        return list(result.scalars().all())

    async def _find_cached_response(
        self, question: str, persona_id: UUID, lang: str
    ):
        """Check for pre-recorded responses matching question intent"""
        from app.models.artisan import ArtisanResponse
        query = select(ArtisanResponse).where(
            ArtisanResponse.persona_id == str(persona_id)
        )
        result = await self.db.execute(query)
        responses = result.scalars().all()

        question_lower = question.lower()
        for resp in responses:
            if resp.question_intent.lower() in question_lower or question_lower in resp.question_intent.lower():
                text = resp.answer_vi if lang == "vi" else resp.answer_en
                audio_url = resp.audio_url_vi if lang == "vi" else resp.audio_url_en
                return {
                    "text": text or "",
                    "lang": lang,
                    "confidence": resp.confidence,
                    "citations": [],
                    "audio_url": audio_url,
                }
        return None

    def _chunk_to_citation(self, chunk) -> Citation:
        return Citation(
            chunk_id=UUID(chunk.id) if isinstance(chunk.id, str) else chunk.id,
            source_type=chunk.source_type,
            excerpt_vi=chunk.content_vi[:200] + "..." if len(chunk.content_vi) > 200 else chunk.content_vi,
            excerpt_en=chunk.content_en[:200] + "..." if chunk.content_en and len(chunk.content_en) > 200 else chunk.content_en or "",
        )

    def _build_response_from_chunks(self, question: str, chunks, persona, lang: str) -> str:
        """Build a response from retrieved knowledge chunks using templates"""
        if not chunks:
            return "Tri thức này hiện chưa được xác thực bởi nghệ nhân, tôi không thể bịa đặt." if lang == "vi" else "This knowledge has not been verified by artisans; I cannot fabricate."

        # Get persona info
        persona_name = persona.name_vi
        specialty = persona.specialty or "di sản văn hóa"

        # Build context from chunks
        context_parts = []
        for c in chunks:
            context_parts.append(f"[{c.source_type}] {c.content_vi}")

        context = "\n\n".join(context_parts)

        # Generate response based on question type
        question_lower = question.lower()

        if any(kw in question_lower for kw in ["tại sao", "why", "lý do", "nguyên nhân"]):
            template = "Theo lời {name}, {context}. Đây là những gì các bậc tiền bối truyền lại." if lang == "vi" else "According to {name}, {context}. This is what the elders have passed down."
        elif any(kw in question_lower for kw in ["như thế nào", "how", "cách nào", "làm sao"]):
            template = "{name} cho biết: {context}. Cách thực hiện cần sự hướng dẫn trực tiếp từ nghệ nhân." if lang == "vi" else "{name} shares: {context}. The technique requires direct guidance from the artisan."
        elif any(kw in question_lower for kw in ["là gì", "what is", "định nghĩa", "khái niệm"]):
            template = "{name} giải thích: {context}. Đây là di sản quý giá của dân tộc." if lang == "vi" else "{name} explains: {context}. This is a precious heritage of our nation."
        else:
            template = "{name} chia sẻ: {context}. Muốn hiểu sâu hơn, bạn nên tìm đến trực tiếp các nghệ nhân tại {region}." if lang == "vi" else "{name} shares: {context}. To understand deeper, visit the artisans in {region} directly."

        context_summary = "\n\n".join(context_parts[:2])  # Limit context length
        region = "Việt Nam"  # default

        return template.format(
            name=persona.name_vi,
            context=context_summary,
            region=region
        )

    async def ask(self, question: str, persona_id: str, lang: str = "vi"):
        from uuid import UUID
        persona_uuid = UUID(persona_id)

        # 1. Check pre-recorded responses
        cached = await self._find_cached_response(question, persona_uuid, lang)
        if cached:
            return cached

        # 2. Get persona
        from app.models.artisan import ArtisanPersona
        query = select(ArtisanPersona).where(ArtisanPersona.id == str(persona_uuid))
        result = await self.db.execute(query)
        persona = result.scalar_one_or_none()
        if not persona:
            raise ValueError(f"Persona {persona_id} not found")

        # 3. Keyword search
        keywords = self._extract_keywords(question)
        chunks = await self._keyword_search(keywords, persona_uuid, limit=5)

        # 3b. If no chunks with persona_id, search without it
        if not chunks:
            chunks = await self._keyword_search(keywords, None, limit=5)

        # 4. If still no chunks, return unknown
        if not chunks:
            return {
                "text": "Tri thức này hiện chưa được xác thực bởi nghệ nhân, tôi không thể bịa đặt." if lang == "vi" else "This knowledge has not been verified by artisans; I cannot fabricate.",
                "lang": lang,
                "confidence": 0.0,
                "citations": [],
                "audio_url": None,
            }

        # 5. Build response from chunks
        answer = self._build_response_from_chunks(question, chunks, persona, lang)

        # 6. Calculate confidence
        base = min(0.3 + 0.15 * len(chunks), 0.8)
        if len(answer.strip()) < 50:
            base *= 0.5
        confidence = round(base, 2)

        # 7. Return response
        from uuid import UUID as UUIDClass
        citations = []
        for c in chunks:
            citations.append({
                "chunk_id": UUIDClass(c.id) if isinstance(c.id, str) else c.id,
                "source_type": c.source_type,
                "excerpt_vi": c.content_vi[:200] + "..." if len(c.content_vi) > 200 else c.content_vi,
                "excerpt_en": c.content_en[:200] + "..." if c.content_en and len(c.content_en) > 200 else c.content_en or "",
            })

        return {
            "text": answer,
            "lang": lang,
            "confidence": confidence,
            "citations": citations,
            "audio_url": None,
        }

    def _extract_keywords(self, question: str):
        stopwords = {"là", "của", "có", "và", "cũng", "được", "cho", "với", "tại", "sao", "thế", "nào", "như", "khi", "nơi", "đâu", "ai", "gì", "về", "những", "các", "một", "này", "đó"}
        words = re.findall(r"\b\w+\b", question.lower())
        keywords = [w for w in words if len(w) > 2 and w not in stopwords]
        return keywords[:10]

    async def _keyword_search(
        self, keywords: List[str], persona_id: Optional[UUID], limit: int = 5
    ):
        """Search knowledge chunks by keyword matching"""
        if not keywords:
            return []

        conditions = []
        for kw in keywords:
            conditions.append(KnowledgeChunk.content_vi.ilike(f"%{kw}%"))
            conditions.append(KnowledgeChunk.content_en.ilike(f"%{kw}%"))

        query = (
            select(KnowledgeChunk)
            .where(or_(*conditions))
            .limit(limit)
        )

        if persona_id:
            query = query.where(KnowledgeChunk.artisan_persona_id == str(persona_id))

        result = await self.db.execute(query)
        return list(result.scalars().all())

    async def _find_cached_response(
        self, question: str, persona_id: UUID, lang: str
    ):
        """Check for pre-recorded responses matching question intent"""
        from app.models.artisan import ArtisanResponse
        query = select(ArtisanResponse).where(
            ArtisanResponse.persona_id == str(persona_id)
        )
        result = await self.db.execute(query)
        responses = result.scalars().all()

        question_lower = question.lower()
        for resp in responses:
            if resp.question_intent.lower() in question_lower or question_lower in resp.question_intent.lower():
                text = resp.answer_vi if lang == "vi" else resp.answer_en
                audio_url = resp.audio_url_vi if lang == "vi" else resp.audio_url_en
                return {
                    "text": text or "",
                    "lang": lang,
                    "confidence": resp.confidence,
                    "citations": [],
                    "audio_url": audio_url,
                }
        return None

    def _chunk_to_citation(self, chunk) -> Citation:
        from uuid import UUID
        return Citation(
            chunk_id=UUID(chunk.id) if isinstance(chunk.id, str) else chunk.id,
            source_type=chunk.source_type,
            excerpt_vi=chunk.content_vi[:200] + "..." if len(chunk.content_vi) > 200 else chunk.content_vi,
            excerpt_en=chunk.content_en[:200] + "..." if chunk.content_en and len(chunk.content_en) > 200 else chunk.content_en or "",
        )

    def _build_response_from_chunks(self, question: str, chunks, persona, lang: str) -> str:
        """Build a response from retrieved knowledge chunks using templates"""
        if not chunks:
            return "Tri thức này hiện chưa được xác thực bởi nghệ nhân, tôi không thể bịa đặt." if lang == "vi" else "This knowledge has not been verified by artisans; I cannot fabricate."

        # Get persona info
        persona_name = persona.name_vi
        specialty = persona.specialty or "di sản văn hóa"

        # Build context from chunks
        context_parts = []
        for c in chunks:
            context_parts.append(f"[{c.source_type}] {c.content_vi}")

        context = "\n\n".join(context_parts)

        # Generate response based on question type
        question_lower = question.lower()

        if any(kw in question_lower for kw in ["tại sao", "why", "lý do", "nguyên nhân"]):
            template = "Theo lời {name}, {context}. Đây là những gì các bậc tiền bối truyền lại." if lang == "vi" else "According to {name}, {context}. This is what the elders have passed down."
        elif any(kw in question_lower for kw in ["như thế nào", "how", "cách nào", "làm sao"]):
            template = "{name} cho biết: {context}. Cách thực hiện cần sự hướng dẫn trực tiếp từ nghệ nhân." if lang == "vi" else "{name} shares: {context}. The technique requires direct guidance from the artisan."
        elif any(kw in question_lower for kw in ["là gì", "what is", "định nghĩa", "khái niệm"]):
            template = "{name} giải thích: {context}. Đây là di sản quý giá của dân tộc." if lang == "vi" else "{name} explains: {context}. This is a precious heritage of our nation."
        else:
            template = "{name} chia sẻ: {context}. Muốn hiểu sâu hơn, bạn nên tìm đến trực tiếp các nghệ nhân tại {region}." if lang == "vi" else "{name} shares: {context}. To understand deeper, visit the artisans in {region} directly."

        context_summary = "\n\n".join(context_parts[:2])  # Limit context length
        region = "Việt Nam"  # default

        return template.format(
            name=persona.name_vi,
            context=context_summary,
            region=region
        )

    def _chunk_to_citation(self, chunk) -> Citation:
        from uuid import UUID
        return Citation(
            chunk_id=UUID(chunk.id) if isinstance(chunk.id, str) else chunk.id,
            source_type=chunk.source_type,
            excerpt_vi=chunk.content_vi[:200] + "..." if len(chunk.content_vi) > 200 else chunk.content_vi,
            excerpt_en=chunk.content_en[:200] + "..." if chunk.content_en and len(chunk.content_en) > 200 else chunk.content_en or "",
        )

    def _build_response_from_chunks(self, question: str, chunks, persona, lang: str) -> str:
        """Build a response from retrieved knowledge chunks using templates"""
        if not chunks:
            return "Tri thức này hiện chưa được xác thực bởi nghệ nhân, tôi không thể bịa đặt." if lang == "vi" else "This knowledge has not been verified by artisans; I cannot fabricate."

        # Get persona info
        persona_name = persona.name_vi
        specialty = persona.specialty or "di sản văn hóa"

        # Build context from chunks
        context_parts = []
        for c in chunks:
            context_parts.append(f"[{c.source_type}] {c.content_vi}")

        context = "\n\n".join(context_parts)

        # Generate response based on question type
        question_lower = question.lower()

        if any(kw in question_lower for kw in ["tại sao", "why", "lý do", "nguyên nhân"]):
            template = "Theo lời {name}, {context}. Đây là những gì các bậc tiền bối truyền lại." if lang == "vi" else "According to {name}, {context}. This is what the elders have passed down."
        elif any(kw in question_lower for kw in ["như thế nào", "how", "cách nào", "làm sao"]):
            template = "{name} cho biết: {context}. Cách thực hiện cần sự hướng dẫn trực tiếp từ nghệ nhân." if lang == "vi" else "{name} shares: {context}. The technique requires direct guidance from the artisan."
        elif any(kw in question_lower for kw in ["là gì", "what is", "định nghĩa", "khái niệm"]):
            template = "{name} giải thích: {context}. Đây là di sản quý giá của dân tộc." if lang == "vi" else "{name} explains: {context}. This is a precious heritage of our nation."
        else:
            template = "{name} chia sẻ: {context}. Muốn hiểu sâu hơn, bạn nên tìm đến trực tiếp các nghệ nhân tại {region}." if lang == "vi" else "{name} shares: {context}. To understand deeper, visit the artisans in {region} directly."

        context_summary = "\n\n".join(context_parts[:2])  # Limit context length
        region = "Việt Nam"  # default

        return template.format(
            name=persona.name_vi,
            context=context_summary,
            region=region
        )

    def _chunk_to_citation(self, chunk) -> Citation:
        from uuid import UUID
        return Citation(
            chunk_id=UUID(chunk.id) if isinstance(chunk.id, str) else chunk.id,
            source_type=chunk.source_type,
            excerpt_vi=chunk.content_vi[:200] + "..." if len(chunk.content_vi) > 200 else chunk.content_vi,
            excerpt_en=chunk.content_en[:200] + "..." if chunk.content_en and len(chunk.content_en) > 200 else chunk.content_en or "",
        )

    def _build_response_from_chunks(self, question: str, chunks, persona, lang: str) -> str:
        """Build a response from retrieved knowledge chunks using templates"""
        if not chunks:
            return "Tri thức này hiện chưa được xác thực bởi nghệ nhân, tôi không thể bịa đặt." if lang == "vi" else "This knowledge has not been verified by artisans; I cannot fabricate."

        # Get persona info
        persona_name = persona.name_vi
        specialty = persona.specialty or "di sản văn hóa"

        # Build context from chunks
        context_parts = []
        for c in chunks:
            context_parts.append(f"[{c.source_type}] {c.content_vi}")

        context = "\n\n".join(context_parts)

        # Generate response based on question type
        question_lower = question.lower()

        if any(kw in question_lower for kw in ["tại sao", "why", "lý do", "nguyên nhân"]):
            template = "Theo lời {name}, {context}. Đây là những gì các bậc tiền bối truyền lại." if lang == "vi" else "According to {name}, {context}. This is what the elders have passed down."
        elif any(kw in question_lower for kw in ["như thế nào", "how", "cách nào", "làm sao"]):
            template = "{name} cho biết: {context}. Cách thực hiện cần sự hướng dẫn trực tiếp từ nghệ nhân." if lang == "vi" else "{name} shares: {context}. The technique requires direct guidance from the artisan."
        elif any(kw in question_lower for kw in ["là gì", "what is", "định nghĩa", "khái niệm"]):
            template = "{name} giải thích: {context}. Đây là di sản quý giá của dân tộc." if lang == "vi" else "{name} explains: {context}. This is a precious heritage of our nation."
        else:
            template = "{name} chia sẻ: {context}. Muốn hiểu sâu hơn, bạn nên tìm đến trực tiếp các nghệ nhân tại {region}." if lang == "vi" else "{name} shares: {context}. To understand deeper, visit the artisans in {region} directly."

        context_summary = "\n\n".join(context_parts[:2])  # Limit context length
        region = "Việt Nam"  # default

        return template.format(
            name=persona.name_vi,
            context=context_summary,
            region=region
        )

    def _chunk_to_citation(self, chunk) -> Citation:
        from uuid import UUID
        return Citation(
            chunk_id=UUID(chunk.id) if isinstance(chunk.id, str) else chunk.id,
            source_type=chunk.source_type,
            excerpt_vi=chunk.content_vi[:200] + "..." if len(chunk.content_vi) > 200 else chunk.content_vi,
            excerpt_en=chunk.content_en[:200] + "..." if chunk.content_en and len(chunk.content_en) > 200 else chunk.content_en or "",
        )