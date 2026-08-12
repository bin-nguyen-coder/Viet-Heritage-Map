#!/usr/bin/env python3
"""Test script for the chatbot services."""
import sys
import asyncio
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from app.services.recommendation import recommendation_service
from app.services.grounded_chat import grounded_chat_service
from app.services.small_talk import small_talk_service


async def test_small_talk_async():
    print("=== Small Talk Test ===")
    result = await small_talk_service.respond("hello", lang="vi")
    print(f"Response: {result['text'][:80]}...")
    assert result["steer_to_survey"] is True
    print("PASS\n")


def test_recommendation():
    print("=== Recommendation Test ===")
    recs = recommendation_service.recommend(genre="singings", region="north", top_n=5, lang="vi")
    print(f"Got {len(recs)} recommendations:")
    for r in recs:
        print(f"  - {r['name']} (score={r['score']})")
    assert len(recs) == 5, f"Expected 5, got {len(recs)}"
    print("PASS\n")


def test_grounded_chat():
    print("=== Grounded Chat Test ===")
    result = grounded_chat_service.ask("Quan ho la gi?", lang="vi")
    print(f"Confidence: {result['confidence']}")
    print(f"Response: {result['text'][:120]}...")
    assert result["confidence"] > 0, "Expected non-zero confidence for heritage query"
    print("PASS\n")

    # Test refusal
    result2 = grounded_chat_service.ask("xyzabc123", lang="vi")
    print(f"Refusal confidence: {result2['confidence']}")
    assert result2["confidence"] == 0.0, "Expected zero confidence for unknown query"
    print("PASS\n")


def test_off_topic():
    print("=== Off-topic Detection Test ===")
    assert small_talk_service.is_off_topic("hello") is True
    assert small_talk_service.is_off_topic("quan ho") is False
    assert small_talk_service.is_off_topic("what is the weather") is True
    assert small_talk_service.is_off_topic("di sản UNESCO") is False
    print("PASS\n")


async def main():
    test_recommendation()
    test_grounded_chat()
    await test_small_talk_async()
    test_off_topic()
    print("=" * 50)
    print("ALL TESTS PASSED!")
    print("=" * 50)


if __name__ == "__main__":
    asyncio.run(main())