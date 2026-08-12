"""
Embedding service for knowledge chunks using OpenRouter nomic-embed-text model.
Stores embeddings in sqlite-vec virtual table for similarity search.
"""
import asyncio
import json
from typing import List, Optional
from sqlalchemy import select, insert
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.config import settings
from app.models.artisan import KnowledgeChunk
from app.services.openrouter_service import OpenRouterService


class EmbeddingService:
    """Generate embeddings and store in sqlite-vec using OpenRouter"""
    
    EMBEDDING_DIM = 768  # OpenRouter nomic-embed output dimension
    
    def __init__(self, openrouter_client: Optional[OpenRouterService] = None):
        self.openrouter = openrouter_client or OpenRouterService()
    
    async def generate_embedding(self, text: str) -> bytes:
        """Generate embedding for text and return as bytes"""
        embedding = await self.openrouter.embeddings(
            prompt=text,
        )
        # Convert to bytes (float32 array)
        import struct
        return struct.pack(f"{len(embedding)}f", *embedding)
    
    async def embed_and_store(
        self, db: AsyncSession, chunk_id: str, content: str
    ) -> None:
        """Embed content and store in vector table"""
        embedding_bytes = await self.generate_embedding(content)

        # Insert into sqlite-vec virtual table
        from app.core.database import engine
        async with engine.connect() as conn:
            await conn.execute(
                f"""
                INSERT INTO knowledge_chunks_vec (chunk_id, embedding)
                VALUES (?, ?)
                ON CONFLICT(chunk_id) DO UPDATE SET embedding = excluded.embedding
                """,
                (chunk_id, embedding_bytes)
            )
            await conn.commit()
    
    async def vector_search(
        self, 
        db: AsyncSession, 
        query: str, 
        persona_id: Optional[str] = None,
        limit: int = 5,
        threshold: float = 0.5
    ) -> List[dict]:
        """Search for similar chunks using vector similarity"""
        query_embedding = await self.generate_embedding(query)
        import struct

        # Query sqlite-vec using knn_search
        from app.core.database import engine
        query_sql = f"""
            SELECT k.id, k.content_vi, k.content_en, k.source_type, k.category,
                   vec_distance(*, ?) as distance
            FROM knowledge_chunks k
            JOIN knowledge_chunks_vec v ON k.id = v.chunk_id
            WHERE k.id IN (
                SELECT chunk_id FROM knowledge_chunks_vec
                WHERE embedding MATCH ?
                ORDER BY distance
                LIMIT ?
            )
        """
        params = [query_embedding, query_embedding, limit]

        if persona_id:
            query_sql += " AND k.artisan_persona_id = ?"
            params.insert(2, str(persona_id))
        
        query_sql += " ORDER BY distance"

        async with engine.connect() as conn:
            result = await conn.execute(query_sql, tuple(params))
            rows = result.fetchall()
            return [
                {
                    "id": row[0],
                    "content_vi": row[1],
                    "content_en": row[2],
                    "source_type": row[3],
                    "category": row[4],
                    "similarity": 1.0 - float(row[5]),  # Convert distance to similarity
                }
                for row in rows
                if 1.0 - float(row[5]) >= threshold
            ]


async def ingest_all_chunks(db: AsyncSession) -> int:
    """Embed all knowledge chunks and store in vector table"""
    service = EmbeddingService()

    # Get all chunks
    result = await db.execute(select(KnowledgeChunk))
    chunks = result.scalars().all()

    count = 0
    for chunk in chunks:
        # Combine Vietnamese and English content for embedding
        combined = f"{chunk.content_vi}"
        if chunk.content_en:
            combined += f"\n\n{chunk.content_en}"

        embedding_bytes = await service.generate_embedding(combined)

        # Store in vector table
        from app.core.database import engine
        async with engine.connect() as conn:
            await conn.execute(
                f"""
                INSERT INTO knowledge_chunks_vec (chunk_id, embedding)
                VALUES (?, ?)
                ON CONFLICT(chunk_id) DO UPDATE SET embedding = excluded.embedding
                """,
                (chunk.id, embedding_bytes)
            )
            await conn.commit()
        count += 1

    return count


if __name__ == "__main__":
    # Test the embedding service
    async def test():
        from app.core.database import async_session_maker, init_db
        await init_db()
        async with async_session_maker() as db:
            count = await ingest_all_chunks(db)
            print(f"Embedded {count} knowledge chunks")
    
    asyncio.run(test())