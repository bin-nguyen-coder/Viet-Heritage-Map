#!/usr/bin/env python3
"""
Test trick questions for "I don't know" fallback in RAG-lite.
These questions should trigger the unknown response since they are outside
the knowledge base scope.
"""
import pytest
from uuid import UUID
from unittest.mock import AsyncMock, MagicMock
from app.services.rag_lite import HeritageRAGLite
from app.services.openrouter_service import OpenRouterService


# Trick questions that should NOT match any knowledge chunks
TRICK_QUESTIONS_VI = [
    "Bitcoin là gì và nó có liên quan đến di sản văn hóa Việt Nam không?",
    "Bạn có thể viết một cây đại mô cho tôi không?",
    "Đường Hồng Thái tỉnh nào?",
    "Ai là người phát minh ra điện thoại?",
    "Công thức hóa học của vật liệu xuyên không là gì?",
    "Bạn nghĩ sao về chính trị quốc tế?",
    "Hãy viết một bài thơ về tình yêu bằng tiếng Pháp.",
    "Kỹ thuật nào giúp hàng không với ma lực?",
    "Ai thắng cuộc Sergio Martinez vs. ... ?",
    "Bạn có thể hack được tôi không?",
]

TRICK_QUESTIONS_EN = [
    "What is Bitcoin and does it relate to Vietnamese heritage?",
    "Can you write a novel for me?",
    "Hong Thai street is in which province?",
    "Who invented the telephone?",
    "What is the chemical formula of superconducting material?",
    "What is your opinion on international politics?",
    "Write a poem about love in French.",
    "What warp drive technology exists?",
    "Who won the Sergio Martinez fight?",
    "Can you hack me?",
]


@pytest.mark.unit
@pytest.mark.asyncio
async def test_trick_questions_return_unknown_response():
    """
    Test that trick questions outside heritage scope return unknown response.
    These should not match any knowledge chunks in the database.
    """
    mock_db = AsyncMock()
    mock_openrouter = AsyncMock(spec=OpenRouterService)

    mock_persona = MagicMock()
    mock_persona.id = "artisan-quan-ho-01"
    mock_persona.name_vi = "Bà Nguyễn Thị Hương"
    mock_persona.region = "Bắc Ninh"
    mock_persona.specialty = "quan_ho_singer"

    # Mock empty results for keyword search (no matches)
    mock_db.execute = AsyncMock()
    mock_db.execute.return_value.scalars = MagicMock()
    mock_db.execute.return_value.scalars.return_value.all = MagicMock(return_value=[])
    mock_db.execute.return_value.scalar_one_or_none = MagicMock(return_value=mock_persona)

    rag = HeritageRAGLite(mock_db, mock_openrouter)

    # Test Vietnamese trick questions
    for question in TRICK_QUESTIONS_VI:
        response = await rag.ask(
            question=question,
            persona_id=UUID("artisan-quan-ho-01"),
            lang="vi"
        )
        # Should return unknown response (low confidence or specific message)
        assert response.text is not None
        assert response.confidence == 0.0 or "không thể bịa đặt" in response.text


@pytest.mark.unit
@pytest.mark.asyncio
async def test_known_questions_return_valid_response():
    """
    Test that legitimate heritage questions return valid responses.
    These should match knowledge chunks in the database.
    """
    mock_db = AsyncMock()
    mock_openrouter = AsyncMock(spec=OpenRouterService)

    mock_persona = MagicMock()
    mock_persona.id = "artisan-quan-ho-01"
    mock_persona.name_vi = "Bà Nguyễn Thị Hương"
    mock_persona.region = "Bắc Ninh"
    mock_persona.specialty = "quan_ho_singer"

    # Mock knowledge chunk
    mock_chunk = MagicMock()
    mock_chunk.id = "chunk-quan-ho-history-1"
    mock_chunk.content_vi = "Quan họ hình thành từ thế kỷ 13 tại vùng Kinh Bắc."
    mock_chunk.content_en = "Quan họ formed in the 13th century in Kinh Bac."
    mock_chunk.source_type = "unesco"
    mock_chunk.category = "history"

    # Mock results
    mock_db.execute = AsyncMock()
    mock_db.execute.return_value.scalars = MagicMock()
    mock_db.execute.return_value.scalars.return_value.all = MagicMock(return_value=[mock_chunk])
    mock_db.execute.return_value.scalar_one_or_none = MagicMock(return_value=mock_persona)

    # Mock openrouter response
    mock_openrouter.generate = AsyncMock(return_value="Quan họ formed in the 13th century as per UNESCO records.")

    rag = HeritageRAGLite(mock_db, mock_openrouter)

    response = await rag.ask(
        question="Quan họ bắt nguồn từ đâu?",
        persona_id=UUID("artisan-quan-ho-01"),
        lang="vi"
    )

    # Should have some content
    assert response.text is not None
    assert len(response.text) > 0


if __name__ == "__main__":
    import asyncio
    print("Testing trick questions...")
    asyncio.run(test_trick_questions_return_unknown_response())
    print("All trick questions correctly returned unknown response!")