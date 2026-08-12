"""
Recommendation service — MCQ survey scoring engine.

Scores TREASURES entries against user MCQ answers and returns top-N matches.
100% deterministic, 100% grounded in treasures.json. No ML required.
"""
from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Any

logger = logging.getLogger(__name__)

# Load treasures once at module level (singleton)
_TREASURES_PATH = Path(__file__).resolve().parents[1] / "data" / "treasures.json"
_TREASURES: list[dict[str, Any]] | None = None


def _load_treasures() -> list[dict[str, Any]]:
    """Load treasures.json once and cache."""
    global _TREASURES
    if _TREASURES is None:
        try:
            _TREASURES = json.loads(_TREASURES_PATH.read_text(encoding="utf-8"))
            logger.info("Loaded %d treasures from %s", len(_TREASURES), _TREASURES_PATH)
        except Exception as e:
            logger.error("Failed to load treasures.json: %s", e)
            _TREASURES = []
    return _TREASURES


# ── Region mapping ──
# Maps provinces to broad regions for MCQ matching
_NORTH_PROVINCES = {
    "Hà Nội", "Bắc Ninh", "Phú Thọ", "Cao Bằng", "Hà Giang",
    "Lạng Sơn", "Tuyên Quang", "Lào Cai", "Yên Bái",
}
_CENTRAL_PROVINCES = {
    "Thừa Thiên Huế", "Đà Nẵng", "Quảng Ngãi", "Gia Lai",
    "Nghệ An", "Hà Tĩnh", "Khánh Hòa", "Lâm Đồng",
    "Ninh Thuận", "Bình Thuận",
}
_SOUTH_PROVINCES = {
    "Cần Thơ", "Hậu Giang", "Sóc Trăng", "Bạc Liêu", "Cà Mau", "An Giang",
}
_HIGHLANDS_PROVINCES = {
    "Đắk Lắk", "Gia Lai", "Sơn La", "Lai Châu", "Điện Biên",
}


def _province_to_region(provinces: list[str]) -> str:
    """Determine the primary region for a treasure based on its provinces."""
    for p in provinces:
        if p in _NORTH_PROVINCES:
            return "north"
        if p in _CENTRAL_PROVINCES:
            return "central"
        if p in _SOUTH_PROVINCES:
            return "south"
        if p in _HIGHLANDS_PROVINCES:
            return "highlands"
    # Fallback: use lat
    return "central"


def _year_to_era(year_str: str) -> str:
    """Map year string to era bucket."""
    try:
        year = int(year_str)
    except (ValueError, TypeError):
        return "recent"
    if year < 2010:
        return "early"
    if year < 2020:
        return "mid"
    return "recent"


class RecommendationService:
    """
    Scores treasures against MCQ answers and returns top-N recommendations.
    All answers are optional — missing answers simply don't contribute to scoring.
    """

    # Scoring weights
    WEIGHTS = {
        "genre": 3.0,
        "region": 2.0,
        "status": 1.5,
        "era": 1.0,
    }

    def recommend(
        self,
        genre: str | None = None,
        region: str | None = None,
        status: str | None = None,
        era: str | None = None,
        top_n: int = 5,
        lang: str = "vi",
    ) -> list[dict[str, Any]]:
        """
        Score all treasures and return top-N matches.

        Args:
            genre: "instrumental" | "singings" | "belief" | "festival" | "craft"
            region: "north" | "central" | "south" | "highlands"
            status: "inscribed" | "urgent" | "national"
            era: "early" (<2010) | "mid" (2010-2019) | "recent" (2020+)
            top_n: number of results (default 5)
            lang: "vi" or "en" for display fields

        Returns:
            List of recommendation dicts with score, treasure data, and display fields.
        """
        treasures = _load_treasures()
        if not treasures:
            return []

        scored: list[dict[str, Any]] = []
        for t in treasures:
            score = 0.0

            # Genre match (exact)
            if genre and t.get("genre") == genre:
                score += self.WEIGHTS["genre"]

            # Region match
            if region:
                t_region = _province_to_region(t.get("provinces", []))
                if t_region == region:
                    score += self.WEIGHTS["region"]

            # Status match (exact)
            if status and t.get("status") == status:
                score += self.WEIGHTS["status"]

            # Era match
            if era:
                t_era = _year_to_era(t.get("year", ""))
                if t_era == era:
                    score += self.WEIGHTS["era"]

            # Always include, even if score is 0 (for diversity)
            # Add small randomization factor based on id for tie-breaking
            score += (t.get("id", 0) % 7) * 0.01

            scored.append({
                "score": round(score, 2),
                "treasure": t,
            })

        # Sort by score descending
        scored.sort(key=lambda x: x["score"], reverse=True)

        # Take top_n
        top = scored[:top_n]

        # Format for display
        results: list[dict[str, Any]] = []
        for item in top:
            t = item["treasure"]
            name = t.get("name", "") if lang == "vi" else t.get("english", t.get("name", ""))
            desc = t.get("desc_vi", "") if lang == "vi" else t.get("desc", "")
            results.append({
                "id": t.get("id"),
                "name": name,
                "location": t.get("location", ""),
                "genre": t.get("genre", ""),
                "status": t.get("status", ""),
                "year": t.get("year", ""),
                "badge": t.get("badge", ""),
                "desc": desc[:200] + ("…" if len(desc) > 200 else ""),
                "score": item["score"],
                "lat": t.get("lat"),
                "lng": t.get("lng"),
                "link": f"VNMT.html?id={t.get('id')}",
            })

        return results

    def get_mcq_questions(self, lang: str = "vi") -> list[dict[str, Any]]:
        """Return the MCQ question set for the frontend."""
        if lang == "vi":
            return [
                {
                    "id": "genre",
                    "question": "Bạn hứng thú với loại hình di sản nào?",
                    "options": [
                        {"value": "instrumental", "label": "Âm nhạc · Nhạc cụ"},
                        {"value": "singings", "label": "Hát · Dân ca"},
                        {"value": "belief", "label": "Tín ngưỡng · Lễ nghi"},
                        {"value": "festival", "label": "Lễ hội dân gian"},
                        {"value": "craft", "label": "Nghề thủ công"},
                    ],
                },
                {
                    "id": "region",
                    "question": "Bạn muốn khám phá vùng nào?",
                    "options": [
                        {"value": "north", "label": "Miền Bắc"},
                        {"value": "central", "label": "Miền Trung"},
                        {"value": "south", "label": "Miền Nam"},
                        {"value": "highlands", "label": "Tây Nguyên"},
                    ],
                },
                {
                    "id": "status",
                    "question": "Bạn quan tâm đến loại di sản nào?",
                    "options": [
                        {"value": "inscribed", "label": "Danh sách đại diện UNESCO"},
                        {"value": "urgent", "label": "Cần bảo vệ khẩn cấp"},
                        {"value": "national", "label": "Di sản quốc gia"},
                    ],
                },
                {
                    "id": "era",
                    "question": "Thời kỳ công nhận nào bạn thích?",
                    "options": [
                        {"value": "early", "label": "Trước 2010"},
                        {"value": "mid", "label": "2010 — 2019"},
                        {"value": "recent", "label": "2020 trở đi"},
                    ],
                },
            ]
        return [
            {
                "id": "genre",
                "question": "What type of heritage interests you?",
                "options": [
                    {"value": "instrumental", "label": "Instrumental Music"},
                    {"value": "singings", "label": "Singing · Folk Songs"},
                    {"value": "belief", "label": "Belief & Ritual"},
                    {"value": "festival", "label": "Folk Festival"},
                    {"value": "craft", "label": "Traditional Craft"},
                ],
            },
            {
                "id": "region",
                "question": "Which region do you want to explore?",
                "options": [
                    {"value": "north", "label": "North"},
                    {"value": "central", "label": "Central"},
                    {"value": "south", "label": "South"},
                    {"value": "highlands", "label": "Highlands"},
                ],
            },
            {
                "id": "status",
                "question": "Which heritage status interests you?",
                "options": [
                    {"value": "inscribed", "label": "UNESCO Representative List"},
                    {"value": "urgent", "label": "Urgent Safeguarding"},
                    {"value": "national", "label": "National Heritage"},
                ],
            },
            {
                "id": "era",
                "question": "Which recognition era do you prefer?",
                "options": [
                    {"value": "early", "label": "Before 2010"},
                    {"value": "mid", "label": "2010 — 2019"},
                    {"value": "recent", "label": "2020 onwards"},
                ],
            },
        ]


# Singleton instance
recommendation_service = RecommendationService()