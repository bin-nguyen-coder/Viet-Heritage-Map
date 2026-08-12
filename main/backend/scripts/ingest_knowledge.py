#!/usr/bin/env python3
"""
Ingest knowledge chunks into vector database for RAG-lite.
Run after seed_database.py to embed all knowledge chunks.
Usage: python scripts/ingest_knowledge.py
"""
import asyncio
import sys
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import async_session_maker, init_db
from app.models.artisan import KnowledgeChunk
from app.services.embedding_service import EmbeddingService


async def ingest_knowledge(db: AsyncSession) -> int:
    """Embed all knowledge chunks and store in vector table"""
    service = EmbeddingService()

    # Get all chunks
    result = await db.execute(select(KnowledgeChunk))
    chunks = result.scalars().all()

    count = 0
    for chunk in chunks:
        # Combine Vietnamese and English content for embedding
        combined = chunk.content_vi
        if chunk.content_en:
            combined += f"\n\n{chunk.content_en}"

        embedding_bytes = await service.generate_embedding(combined)

        # Store in vector table
        from app.core.database import engine
        async with engine.connect() as conn:
            await conn.execute(
                "INSERT INTO knowledge_chunks_vec (chunk_id, embedding) "
                "VALUES (?, ?) "
                "ON CONFLICT(chunk_id) DO UPDATE SET embedding = excluded.embedding",
                (chunk.id, embedding_bytes)
            )
            await conn.commit()
        count += 1
        print(f"Embedded chunk {count}/{len(chunks)}: {chunk.id}")

    return count


async def main():
    print("Initializing database...")
    await init_db()

    async with async_session_maker() as db:
        count = await ingest_knowledge(db)
        print(f"Successfully embedded {count} knowledge chunks into vector database")


if __name__ == "__main__":
    asyncio.run(main())