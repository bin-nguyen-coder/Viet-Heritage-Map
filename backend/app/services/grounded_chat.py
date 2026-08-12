"""
Grounded chat service — retrieval from treasures.json with strict citation.

All factual answers are paraphrased ONLY from matched treasure entries.
If no match is found, returns a refusal: "I don't know / I can't prove this."
No LLM, no hallucination, 100% grounded.
"""
from __future__ import annotations

import json
import logging
import re
from pathlib import Path
from typing import Any

logger = logging.getLogger(__name__)

_TREASURES_PATH = Path(__file__).resolve().parents[1] / "data" / "treasures.json"
_TREASURES: list[dict[str, Any]] | None = None


def _load_treasures() -> list[dict[str, Any]]:
    global _TREASURES
    if _TREASURES is None:
        try:
            _TREASURES = json.loads(_TREASURES_PATH.read_text(encoding="utf-8"))
        except Exception as e:
            logger.error("Failed to load treasures.json: %s", e)
            _TREASURES = []
    return _TREASURES


# Vietnamese stopwords for keyword extraction
_STOPWORDS_VI = {
    "là", "của", "có", "và", "cũng", "được", "cho", "với", "tại", "sao",
    "thế", "nào", "như", "khi", "nơi", "đâu", "ai", "gì", "về", "những",
    "các", "một", "này", "đó", "cho", "biết", "giải", "thích", "hãy",
    "kể", "tôi", "bạn", "muốn", "tìm", "hiểu",
}
_STOPWORDS_EN = {
    "the", "is", "are", "was", "were", "a", "an", "of", "in", "on",
    "at", "to", "for", "with", "and", "or", "not", "what", "how",
    "why", "when", "where", "who", "tell", "me", "about", "i", "you",
    "want", "know", "find", "understand", "please", "can",
}


def _extract_keywords(question: str, lang: str = "vi") -> list[str]:
    """Extract meaningful keywords from the question."""
    stopwords = _STOPWORDS_VI if lang == "vi" else _STOPWORDS_EN
    words = re.findall(r"\b\w+\b", question.lower())
    keywords = [w for w in words if len(w) > 2 and w not in stopwords]
    return keywords[:15]


def _score_treasure_match(treasure: dict[str, Any], keywords: list[str], lang: str) -> float:
    """Score how well a treasure matches the keywords."""
    if not keywords:
        return 0.0

    # Build searchable text from the treasure
    if lang == "vi":
        search_text = " ".join([
            str(treasure.get("name", "")),
            str(treasure.get("english", "")),
            str(treasure.get("location", "")),
            str(treasure.get("desc_vi", "")),
            str(treasure.get("quote", "")),
            " ".join(treasure.get("provinces", [])),
        ]).lower()
    else:
        search_text = " ".join([
            str(treasure.get("english", "")),
            str(treasure.get("name", "")),
            str(treasure.get("location", "")),
            str(treasure.get("desc", "")),
            str(treasure.get("quote", "")),
            " ".join(treasure.get("provinces", [])),
        ]).lower()

    score = 0.0
    for kw in keywords:
        if kw in search_text:
            # Weight: name match > desc match > other
            if kw in str(treasure.get("name", "")).lower() or kw in str(treasure.get("english", "")).lower():
                score += 3.0
            elif kw in str(treasure.get("desc_vi", "")).lower() or kw in str(treasure.get("desc", "")).lower():
                score += 2.0
            else:
                score += 1.0

    return score


class GroundedChatService:
    """
    Retrieval-only chat service. Answers are paraphrased from treasure entries.
    Strict refusal if no match is found.
    """

    # Minimum score threshold for a match
    MIN_SCORE = 2.0

    def ask(self, question: str, lang: str = "vi") -> dict[str, Any]:
        """
        Answer a heritage question using only treasures.json data.

        Returns:
            {
                "text": str,          # the answer
                "lang": str,           # "vi" or "en"
                "confidence": float,   # 0.0-1.0
                "citations": list,     # list of source entries
                "matched_treasures": list,  # full treasure data for frontend
            }
        """
        treasures = _load_treasures()
        if not treasures:
            return self._refusal(lang)

        keywords = _extract_keywords(question, lang)

        # Score all treasures
        scored = []
        for t in treasures:
            score = _score_treasure_match(t, keywords, lang)
            if score > 0:
                scored.append((score, t))

        if not scored or scored[0][0] < self.MIN_SCORE:
            return self._refusal(lang)

        # Sort by score descending
        scored.sort(key=lambda x: x[0], reverse=True)

        # Take top matches (up to 3)
        top_matches = scored[:3]
        best_score = top_matches[0][0]

        # Build response from top match
        primary = top_matches[0][1]
        answer = self._build_answer(primary, top_matches, lang)

        # Calculate confidence
        confidence = min(best_score / 10.0, 0.95)

        # Citations
        citations = [
            {
                "id": t[1].get("id"),
                "name": t[1].get("name", "") if lang == "vi" else t[1].get("english", t[1].get("name", "")),
                "source": "treasures.json",
            }
            for t in top_matches
        ]

        return {
            "text": answer,
            "lang": lang,
            "confidence": round(confidence, 2),
            "citations": citations,
            "matched_treasures": [t[1] for t in top_matches],
        }

    def _build_answer(
        self,
        primary: dict[str, Any],
        all_matches: list[tuple[float, dict[str, Any]]],
        lang: str,
    ) -> str:
        """Build a grounded answer from the matched treasure(s)."""
        if lang == "vi":
            name = primary.get("name", "")
            desc = primary.get("desc_vi", "")
            quote = primary.get("quote", "")
            location = primary.get("location", "")
            year = primary.get("year", "")
            status = primary.get("status", "")
            genre = primary.get("genre", "")

            # Status label
            status_labels = {
                "inscribed": "Danh sách đại diện của nhân loại",
                "urgent": "Danh sách cần bảo vệ khẩn cấp",
                "national": "Di sản văn hóa phi vật thể quốc gia",
            }
            status_label = status_labels.get(status, status)

            answer = f"{name} — {desc}"

            if quote:
                answer += f'\n\n"{quote}"'

            answer += f"\n\n📍 Vị trí: {location}"
            answer += f"\n📅 Năm công nhận: {year}"
            answer += f"\n🏆 Danh mục: {status_label}"

            # If there are additional matches, mention them
            if len(all_matches) > 1:
                others = [t[1].get("name", "") for t in all_matches[1:3]]
                answer += f"\n\n📌 Bạn cũng có thể quan tâm: {', '.join(others)}"

            # Citation
            answer += f"\n\n— Nguồn: TREASURES id={primary.get('id')}, {name}"

            return answer
        else:
            name = primary.get("english", primary.get("name", ""))
            desc = primary.get("desc", "")
            quote = primary.get("quote", "")
            location = primary.get("location", "")
            year = primary.get("year", "")
            status = primary.get("status", "")

            status_labels = {
                "inscribed": "Representative List of Humanity",
                "urgent": "Urgent Safeguarding List",
                "national": "National Intangible Heritage",
            }
            status_label = status_labels.get(status, status)

            answer = f"{name} — {desc}"

            if quote:
                answer += f'\n\n"{quote}"'

            answer += f"\n\n📍 Location: {location}"
            answer += f"\n📅 Year: {year}"
            answer += f"\n🏆 Status: {status_label}"

            if len(all_matches) > 1:
                others = [t[1].get("english", t[1].get("name", "")) for t in all_matches[1:3]]
                answer += f"\n\n📌 You may also like: {', '.join(others)}"

            answer += f"\n\n— Source: TREASURES id={primary.get('id')}, {name}"

            return answer

    def _refusal(self, lang: str) -> dict[str, Any]:
        """Return a refusal response when no match is found."""
        if lang == "vi":
            text = (
                "Tôi không biết hoặc tôi không thể chứng minh điều này vì nguồn không đáng tin cậy. "
                "Tôi chỉ có thể trả lời dựa trên 16 di sản UNESCO trong dữ liệu của bảo tàng. "
                "Hãy thử hỏi về một di sản cụ thể, hoặc làm bài khảo sát để nhận gợi ý!"
            )
        else:
            text = (
                "I don't know, or I can't prove this because sources are not credible. "
                "I can only answer based on the 16 UNESCO heritage entries in our museum data. "
                "Try asking about a specific heritage, or take the survey for recommendations!"
            )
        return {
            "text": text,
            "lang": lang,
            "confidence": 0.0,
            "citations": [],
            "matched_treasures": [],
        }


# Singleton
grounded_chat_service = GroundedChatService()