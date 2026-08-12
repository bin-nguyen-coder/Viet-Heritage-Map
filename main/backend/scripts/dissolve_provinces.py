#!/usr/bin/env python3
"""Dissolve ALL internal borders within each province in vn_geo.json.

Two-pass approach:
1. Merge features with the same name using unary_union
2. For each resulting MultiPolygon, union all internal polygons
   to eliminate any remaining shared borders
"""
import json
from pathlib import Path

from shapely.geometry import mapping, shape
from shapely.ops import unary_union
from shapely.validation import make_valid

INPUT = Path(__file__).resolve().parents[2] / "Project" / "vn_geo.json"
OUTPUT = Path(__file__).resolve().parents[2] / "Project" / "vn_geo.json"

with INPUT.open(encoding="utf-8") as f:
    geo = json.load(f)


def fix_geom(g):
    """Aggressively fix invalid geometries."""
    if g.is_valid:
        return g
    # Try make_valid first
    try:
        g = make_valid(g)
        if g.is_valid:
            return g
    except Exception:
        pass
    # Try buffer(0)
    try:
        g = g.buffer(0)
        if g.is_valid:
            return g
    except Exception:
        pass
    # Try negative then positive buffer
    try:
        g = g.buffer(-0.0001).buffer(0.0001)
        if g.is_valid:
            return g
    except Exception:
        pass
    return g


# PASS 1: Group by name and merge
groups = {}
for feat in geo["features"]:
    name = feat.get("properties", {}).get("name", "Unknown")
    groups.setdefault(name, []).append(feat)

merged_features = []
for name, features in groups.items():
    if len(features) == 1:
        merged_features.append(features[0])
        continue

    geoms = []
    for f in features:
        g = shape(f["geometry"])
        if not g.is_empty:
            g = fix_geom(g)
            if not g.is_empty:
                geoms.append(g)

    try:
        merged_geom = unary_union(geoms)
        if not merged_geom.is_valid:
            merged_geom = fix_geom(merged_geom)
    except Exception as e:
        print(f"  Warning: union failed for {name}: {e}")
        # Fallback: just combine coordinates
        all_polys = []
        for f in features:
            geom = f["geometry"]
            if geom["type"] == "MultiPolygon":
                all_polys.extend(geom["coordinates"])
            elif geom["type"] == "Polygon":
                all_polys.append(geom["coordinates"])
        merged_features.append({
            "type": "Feature",
            "properties": {**features[0].get("properties", {}), "name": name},
            "geometry": {"type": "MultiPolygon", "coordinates": all_polys},
        })
        continue

    merged_features.append({
        "type": "Feature",
        "properties": {**features[0].get("properties", {}), "name": name},
        "geometry": mapping(merged_geom),
    })

# PASS 2: For each MultiPolygon, try to union all internal polygons
final_features = []
for feat in merged_features:
    geom = feat["geometry"]
    if geom["type"] != "MultiPolygon" or len(geom["coordinates"]) <= 1:
        final_features.append(feat)
        continue

    name = feat["properties"]["name"]
    polys_before = len(geom["coordinates"])

    # Build shapely polygons from each ring
    shapely_polys = []
    for poly_coords in geom["coordinates"]:
        try:
            p = shape({"type": "Polygon", "coordinates": poly_coords})
            if not p.is_valid:
                p = fix_geom(p)
            if not p.is_empty:
                shapely_polys.append(p)
        except Exception:
            pass

    if len(shapely_polys) <= 1:
        final_features.append(feat)
        continue

    try:
        unioned = unary_union(shapely_polys)
        if not unioned.is_valid:
            unioned = fix_geom(unioned)

        polys_after = 1 if unioned.geom_type == "Polygon" else len(unioned.geoms) if hasattr(unioned, 'geoms') else 1

        if polys_after < polys_before:
            print(f"  {name}: {polys_before} polys -> {polys_after} polys")
            final_features.append({
                "type": "Feature",
                "properties": feat["properties"],
                "geometry": mapping(unioned),
            })
        else:
            final_features.append(feat)
    except Exception as e:
        print(f"  Warning: internal union failed for {name}: {e}")
        final_features.append(feat)

result = {"type": "FeatureCollection", "features": final_features}

with OUTPUT.open("w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, separators=(",", ":"))

print(f"Pass 1: {len(geo['features'])} -> {len(merged_features)} features")
print(f"Pass 2: {len(merged_features)} -> {len(final_features)} features")
print(f"Written to {OUTPUT}")
