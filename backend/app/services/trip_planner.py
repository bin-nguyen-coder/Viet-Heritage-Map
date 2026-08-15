"""
Trip planner service — suggests heritage sites & festivals for a trip
based on the visitor's desired dates, region and interests.

100% deterministic and grounded in treasures.json + festivals.json.
No ML required — this runs fully locally.
"""
from __future__ import annotations

import json
import logging
from datetime import date
from pathlib import Path
from typing import Any

logger = logging.getLogger(__name__)

_TREASURES_PATH = Path(__file__).resolve().parents[1] / "data" / "treasures.json"
_FESTIVALS_PATH = Path(__file__).resolve().parents[1] / "data" / "festivals.json"

_TREASURES: list[dict[str, Any]] | None = None
_FESTIVALS: list[dict[str, Any]] | None = None


def _load(path: Path) -> list[dict[str, Any]]:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as e:
        logger.error("Failed to load %s: %s", path, e)
        return []


def _treasures() -> list[dict[str, Any]]:
    global _TREASURES
    if _TREASURES is None:
        _TREASURES = _load(_TREASURES_PATH)
    return _TREASURES


def _festivals() -> list[dict[str, Any]]:
    global _FESTIVALS
    if _FESTIVALS is None:
        _FESTIVALS = _load(_FESTIVALS_PATH)
    return _FESTIVALS


# ── Region mapping (province → broad region) ──
_NORTH = {"Hà Nội", "Bắc Ninh", "Phú Thọ", "Cao Bằng", "Hà Giang", "Lạng Sơn",
          "Tuyên Quang", "Lào Cai", "Yên Bái", "Ninh Bình", "Thái Bình", "Nam Định",
          "Hưng Yên", "Hải Dương", "Bắc Giang", "Vĩnh Phúc", "Hòa Bình", "Quảng Ninh"}
_CENTRAL = {"Thừa Thiên Huế", "Đà Nẵng", "Quảng Ngãi", "Nghệ An", "Hà Tĩnh",
            "Khánh Hòa", "Ninh Thuận", "Bình Thuận", "Quảng Nam", "Quảng Bình",
            "Quảng Trị", "Phú Yên", "Bình Định"}
_SOUTH = {"Cần Thơ", "Hậu Giang", "Sóc Trăng", "Bạc Liêu", "Cà Mau", "An Giang",
          "TP. Hồ Chí Minh", "Đồng Tháp", "Tiền Giang", "Bến Tre", "Vĩnh Long",
          "Trà Vinh", "Kiên Giang", "Đồng Nai", "Bình Dương", "Tây Ninh", "Long An"}
_HIGHLANDS = {"Đắk Lắk", "Gia Lai", "Kon Tum", "Lâm Đồng", "Sơn La", "Lai Châu",
              "Điện Biên"}


def _province_region(provinces: list[str]) -> str:
    for p in provinces:
        if p in _NORTH:
            return "north"
        if p in _CENTRAL:
            return "central"
        if p in _SOUTH:
            return "south"
        if p in _HIGHLANDS:
            return "highlands"
    return "central"


# ── Interest mapping ──
_INTEREST_GENRES = {
    "music": "instrumental",
    "singing": "singings",
    "belief": "belief",
    "festival": "festival",
    "craft": "craft",
}


class TripPlannerService:
    """Suggests an itinerary of heritage sites + festivals for a trip."""

    def suggest(
        self,
        start_date: str | None = None,
        region: str | None = None,
        interests: list[str] | None = None,
        top_n: int = 5,
        lang: str = "vi",
    ) -> dict[str, Any]:
        interests = interests or []
        treasures = _treasures()
        festivals = _festivals()

        # 1) Score treasures by region + interests
        scored: list[dict[str, Any]] = []
        for t in treasures:
            score = 0.0
            reasons: list[str] = []

            t_region = _province_region(t.get("provinces", []))
            if region and t_region == region:
                score += 3.0
                reasons.append("region")

            t_genre = t.get("genre")
            for interest in interests:
                mapped = _INTEREST_GENRES.get(interest, interest)
                if t_genre == mapped:
                    score += 2.0
                    reasons.append("interest")

            # Prefer UNESCO-inscribed entries
            if t.get("status") == "inscribed":
                score += 0.5

            if score > 0:
                scored.append({"treasure": t, "score": score, "reasons": reasons})

        scored.sort(key=lambda x: x["score"], reverse=True)
        top = scored[:top_n]

        sites = []
        for s in top:
            t = s["treasure"]
            sites.append({
                "id": t.get("id"),
                "name": t.get("name"),
                "english": t.get("english"),
                "location": t.get("location"),
                "region": _province_region(t.get("provinces", [])),
                "genre": t.get("genre"),
                "status": t.get("status"),
                "badge": t.get("badge"),
                "desc_vi": t.get("desc_vi"),
                "desc": t.get("desc"),
                "lat": t.get("lat"),
                "lng": t.get("lng"),
                "score": round(s["score"], 2),
            })

        # 2) Find festivals near the trip dates / region
        trip_month = None
        if start_date:
            try:
                trip_month = date.fromisoformat(start_date).month
            except ValueError:
                trip_month = None

        matched_festivals = []
        for f in festivals:
            if trip_month and f.get("month") == trip_month:
                matched_festivals.append(f)
            elif region and f.get("region") == region:
                matched_festivals.append(f)

        # De-duplicate festivals while preserving order
        seen = set()
        unique_festivals = []
        for f in matched_festivals:
            if f["id"] not in seen:
                seen.add(f["id"])
                unique_festivals.append(f)

        return {
            "sites": sites,
            "festivals": unique_festivals[:4],
            "trip_month": trip_month,
            "region": region,
            "interests": interests,
            "lang": lang,
        }


trip_planner_service = TripPlannerService()
