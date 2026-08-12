import re
from typing import List, Optional, Literal, cast
from uuid import UUID
from sqlalchemy import select, func, or_
from sqlalchemy.ext.asyncio import AsyncSession
import httpx
from app.core.config import settings
from app.models.artisan import KnowledgeChunk, ArtisanPersona, ArtisanResponse
from app.schemas.chat import ArtisanResponse as ArtisanResponseSchema, Citation
from app.services.embedding_service import EmbeddingService
from app.services.openrouter_service import OpenRouterService


class HeritageRAGLite:
    """
    Lightweight RAG: Keyword search + Few-shot prompting with vector fallback.
    Uses OpenRouter as primary LLM provider.
    """

    def __init__(
        self,
        db: AsyncSession,
        openrouter_client: Optional[OpenRouterService] = None,
    ):
        self.db = db
        self.openrouter = openrouter_client or OpenRouterService()
        self.persona_prompts = self._load_persona_prompts()
        self.embedding_service = EmbeddingService()

    async def _generate_with_openrouter(self, prompt: str) -> Optional[str]:
        """Generate text using OpenRouter (primary method)"""
        try:
            return await self.openrouter.generate(prompt)
        except Exception:
            return None

    async def _vector_search(
        self, question: str, persona_id: Optional[UUID], limit: int = 5
    ) -> List[KnowledgeChunk]:
        """Search knowledge chunks using vector similarity fallback"""
        try:
            results = await self.embedding_service.vector_search(
                self.db, question, persona_id=str(persona_id) if persona_id else None,
                limit=limit, threshold=0.5
            )
            chunks = []
            for r in results:
                chunk = KnowledgeChunk(
                    id=r["id"],
                    content_vi=r["content_vi"],
                    content_en=r.get("content_en"),
                    source_type=r["source_type"],
                    category=r.get("category", "general"),
                )
                chunks.append(chunk)
            return chunks
        except Exception:
            return []

    def _load_persona_prompts(self) -> dict:
        """Load few-shot prompts for each persona"""
        return {
            "default": """Bạn là {persona_name}, nghệ nhân gạo cội từ {region}.
Chuyên môn: {specialty}.

NGUYÊN TẮC:
1. CHỈ trả lời dựa trên NGỮ CẢNH dưới đây
2. KHÔNG bịa đặt, suy diễn, dùng kiến thức ngoài
3. Nếu ngữ cảnh không đủ → "Tri thức này hiện chưa được xác thực bởi nghệ nhân, tôi không thể bịa đặt."
4. Giọng văn: Ấm áp, tôn trọng, như bậc trưởng bối kể chuyện
5. Ngôn ngữ: {language}

NGỮ CẢNH:
{context}

VÍ DỤ:
Hỏi: "Tại sao hát Quan họ phải trao trầu?"
Trả lời: "Theo lời các bậc tiền bối, trầu trân là lễ nghĩa, biểu tượng trăm năm..."

CÂU HỎI: {question}
TRẢ LỜI:"""
        }

    def _extract_keywords(self, question: str) -> List[str]:
        """Extract Vietnamese keywords from question"""
        stopwords = {"là", "của", "có", "và", "có", "được", "cho", "với", "tại", "sao", "thế", "nào", "như", "khi", "nơi", "đâu", "ai", "gì"}
        words = re.findall(r"\b\w+\b", question.lower())
        keywords = [w for w in words if len(w) > 2 and w not in stopwords]
        return keywords[:10]

    async def _keyword_search(
        self, keywords: List[str], persona_id: Optional[UUID], limit: int = 5
    ) -> List[KnowledgeChunk]:
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
    ) -> Optional[ArtisanResponseSchema]:
        """Check for pre-recorded responses matching question intent"""
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
                return ArtisanResponseSchema(
                    text=text or "",
                    lang=cast(Literal["vi", "en"], lang),
                    confidence=resp.confidence,
                    citations=[],
                    audio_url=audio_url,
                )
        return None

    def _chunk_to_citation(self, chunk: KnowledgeChunk) -> Citation:
        return Citation(
            chunk_id=UUID(chunk.id) if isinstance(chunk.id, str) else chunk.id,
            source_type=cast(Literal["interview", "document", "recording", "unesco", "academic"], chunk.source_type),
            excerpt_vi=chunk.content_vi[:200] + "..." if len(chunk.content_vi) > 200 else chunk.content_vi,
            excerpt_en=chunk.content_en[:200] + "..." if chunk.content_en and len(chunk.content_en) > 200 else chunk.content_en or "",
        )

    def _build_few_shot_prompt(
        self, question: str, chunks: List[KnowledgeChunk], persona: ArtisanPersona, lang: str
    ) -> str:
        context = "\n\n".join([
            f"[Nguồn: {c.source_type}] {c.content_vi}" for c in chunks
        ])

        template = self.persona_prompts.get(persona.specialty or "default", self.persona_prompts["default"])
        
        return template.format(
            persona_name=persona.name_vi,
            region=persona.region or "Việt Nam",
            specialty=persona.specialty or "di sản văn hóa",
            language="Tiếng Việt" if lang == "vi" else "English",
            context=context,
            question=question,
        )

    def _calculate_confidence(self, chunks: List[KnowledgeChunk], answer: str) -> float:
        """Heuristic confidence based on chunk relevance and answer length"""
        if not chunks:
            return 0.0
        
        base = min(0.3 + 0.15 * len(chunks), 0.9)
        
        if len(answer.strip()) < 50:
            base *= 0.5
            
        return round(base, 2)

    def _unknown_response(self, lang: str, chunks: Optional[List[KnowledgeChunk]] = None) -> ArtisanResponseSchema:
        text = (
            "Tri thức này hiện chưa được xác thực bởi nghệ nhân, tôi không thể bịa đặt."
            if lang == "vi"
            else "This knowledge has not been verified by artisans; I cannot fabricate."
        )
        citations = [self._chunk_to_citation(c) for c in (chunks or [])]
        return ArtisanResponseSchema(
            text=text,
            lang=cast(Literal["vi", "en"], lang),
            confidence=0.0,
            citations=citations,
            audio_url=None,
        )

    async def ask(
        self,
        question: str,
        persona_id: UUID,
        lang: str = "vi",
    ) -> ArtisanResponseSchema:
        # 1. Check pre-recorded responses
        cached = await self._find_cached_response(question, persona_id, lang)
        if cached:
            return cached

        # 2. Get persona
        query = select(ArtisanPersona).where(ArtisanPersona.id == str(persona_id))
        result = await self.db.execute(query)
        persona = result.scalar_one_or_none()
        if not persona:
            raise ValueError(f"Persona {persona_id} not found")

        # 3. Keyword search
        keywords = self._extract_keywords(question)
        chunks = await self._keyword_search(keywords, persona_id, limit=5)

        # 4. Vector search fallback if keyword search returns < 3 chunks
        if len(chunks) < 3:
            vec_chunks = await self._vector_search(question, persona_id, limit=5)
            existing_ids = {c.id for c in chunks}
            for chunk in vec_chunks:
                if chunk.id not in existing_ids:
                    chunks.append(chunk)
        
        # 5. If no chunks after fallback, return unknown
        if not chunks:
            return self._unknown_response(lang)

        # 6. Few-shot prompt
        prompt = self._build_few_shot_prompt(question, chunks, persona, lang)

        # 7. Generate with OpenRouter
        answer = await self._generate_with_openrouter(prompt)
        if not answer:
            return self._unknown_response(lang, chunks)

        # 8. Confidence check
        confidence = self._calculate_confidence(chunks, answer)
        if confidence < 0.6:
            return self._unknown_response(lang, chunks)

        # 9. Return response
        return ArtisanResponseSchema(
            text=answer,
            lang=cast(Literal["vi", "en"], lang),
            confidence=confidence,
            citations=[self._chunk_to_citation(c) for c in chunks],
            audio_url=None,
        )