#!/usr/bin/env python3
"""
Re-export TREASURES from Project/data.js → backend/app/data/treasures.json.

Usage:
    python backend/scripts/export_treasures.py

This keeps the backend's single source of truth in sync with the frontend data file.
Run this whenever Project/data.js is updated.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

# Resolve paths relative to repo root
REPO_ROOT = Path(__file__).resolve().parents[2]
DATA_JS = REPO_ROOT / "Project" / "data.js"
OUTPUT_JSON = REPO_ROOT / "backend" / "app" / "data" / "treasures.json"

# Fields to extract from each TREASURES entry
FIELDS = [
    "id", "name", "english", "lat", "lng", "location", "provinces",
    "year", "status", "genre", "badge", "type", "quote",
    "desc_vi", "desc",
]


def extract_treasures_from_js(js_text: str) -> list[dict]:
    """
    Parse the TREASURES array from data.js using a regex-based approach.
    We extract each object literal and evaluate its fields via a sandboxed
    Node-free parse. Since data.js is hand-authored and well-structured,
    we can safely extract key-value pairs.
    """
    # Find the TREASURES array
    match = re.search(r"const\s+TREASURES\s*=\s*\[", js_text)
    if not match:
        raise RuntimeError("Could not find TREASURES array in data.js")

    start = match.end() - 1  # position of '['
    # Find matching closing bracket
    depth = 0
    end = start
    for i in range(start, len(js_text)):
        if js_text[i] == "[":
            depth += 1
        elif js_text[i] == "]":
            depth -= 1
            if depth == 0:
                end = i + 1
                break

    array_str = js_text[start:end]

    # Use a simple JS-like parser: split by top-level objects
    # Each object starts with { and ends with matching }
    treasures: list[dict] = []
    i = 1  # skip opening [
    while i < len(array_str) - 1:
        # Skip whitespace and commas
        while i < len(array_str) and array_str[i] in " \t\n\r,":
            i += 1
        if i >= len(array_str) - 1:
            break
        if array_str[i] != "{":
            i += 1
            continue

        # Find matching closing brace
        depth = 0
        obj_start = i
        while i < len(array_str):
            if array_str[i] == "{":
                depth += 1
            elif array_str[i] == "}":
                depth -= 1
                if depth == 0:
                    break
            i += 1
        obj_str = array_str[obj_start : i + 1]
        i += 1

        # Parse the object
        treasure = parse_js_object(obj_str)
        if treasure:
            treasures.append(treasure)

    return treasures


def parse_js_object(obj_str: str) -> dict | None:
    """
    Parse a single JS object literal into a Python dict.
    Handles: strings, numbers, booleans, arrays of strings.
    """
    result: dict[str, object] = {}
    # Remove outer braces
    inner = obj_str.strip()
    if inner.startswith("{") and inner.endswith("}"):
        inner = inner[1:-1]

    # Split by top-level commas (not inside brackets/quotes)
    pairs = split_top_level(inner, ",")

    for pair in pairs:
        pair = pair.strip()
        if not pair:
            continue
        # Find the key
        colon_idx = find_top_level_colon(pair)
        if colon_idx == -1:
            continue

        key_part = pair[:colon_idx].strip()
        value_part = pair[colon_idx + 1 :].strip()

        # Strip quotes from key
        if key_part.startswith("'") and key_part.endswith("'"):
            key = key_part[1:-1]
        elif key_part.startswith('"') and key_part.endswith('"'):
            key = key_part[1:-1]
        else:
            key = key_part

        if key not in FIELDS:
            continue

        # Parse value
        value = parse_js_value(value_part)
        if value is not None:
            result[key] = value

    return result if result else None


def parse_js_value(val_str: str) -> object:
    """Parse a JS value literal into a Python value."""
    val_str = val_str.strip()

    # String (single or double quoted)
    if val_str.startswith("'") and val_str.endswith("'"):
        return unescape_js_string(val_str[1:-1])
    if val_str.startswith('"') and val_str.endswith('"'):
        return unescape_js_string(val_str[1:-1])

    # Array of strings
    if val_str.startswith("[") and val_str.endswith("]"):
        inner = val_str[1:-1].strip()
        if not inner:
            return []
        items = split_top_level(inner, ",")
        return [parse_js_value(item.strip()) for item in items if item.strip()]

    # Number
    try:
        if "." in val_str:
            return float(val_str)
        return int(val_str)
    except ValueError:
        pass

    # Boolean
    if val_str == "true":
        return True
    if val_str == "false":
        return False

    return None


def unescape_js_string(s: str) -> str:
    """Unescape JS string escapes."""
    return s.replace("\\'", "'").replace('\\"', '"').replace("\\n", "\n").replace("\\t", "\t")


def split_top_level(s: str, delimiter: str) -> list[str]:
    """Split string by delimiter, respecting brackets and quotes."""
    parts: list[str] = []
    current = ""
    depth = 0
    in_str = False
    quote_char = ""
    i = 0
    while i < len(s):
        c = s[i]
        if in_str:
            current += c
            if c == quote_char and (i == 0 or s[i - 1] != "\\"):
                in_str = False
        else:
            if c in "'\"":
                in_str = True
                quote_char = c
                current += c
            elif c in "[{(":
                depth += 1
                current += c
            elif c in "]})":
                depth -= 1
                current += c
            elif c == delimiter and depth == 0:
                parts.append(current)
                current = ""
            else:
                current += c
        i += 1
    if current.strip():
        parts.append(current)
    return parts


def find_top_level_colon(s: str) -> int:
    """Find the first colon at top level (not inside brackets or quotes)."""
    depth = 0
    in_str = False
    quote_char = ""
    for i, c in enumerate(s):
        if in_str:
            if c == quote_char and (i == 0 or s[i - 1] != "\\"):
                in_str = False
        else:
            if c in "'\"":
                in_str = True
                quote_char = c
            elif c in "[{(":
                depth += 1
            elif c in "]})":
                depth -= 1
            elif c == ":" and depth == 0:
                return i
    return -1


def main() -> int:
    if not DATA_JS.exists():
        print(f"ERROR: {DATA_JS} not found", file=sys.stderr)
        return 1

    print(f"Reading: {DATA_JS}")
    js_text = DATA_JS.read_text(encoding="utf-8")

    print("Parsing TREASURES array...")
    treasures = extract_treasures_from_js(js_text)
    print(f"  Found {len(treasures)} entries")

    # Sort by id for consistency
    treasures.sort(key=lambda t: t.get("id", 0))

    # Ensure output directory exists
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)

    print(f"Writing: {OUTPUT_JSON}")
    OUTPUT_JSON.write_text(
        json.dumps(treasures, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Done. {len(treasures)} treasures exported.")
    return 0


if __name__ == "__main__":
    sys.exit(main())