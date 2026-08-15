# Consolidated Learnings

## Lunar Calendar Feature (Viet-Heritage-Map)

- **lunar-javascript library**: browser build is `node_modules/lunar-javascript/lunar.js`. It is a UMD bundle that exposes `Solar`, `Lunar`, `LunarYear`, `LunarMonth` as global objects when loaded via a plain `<script>` tag. Copied as `Project/lunar-core.js`.
- **Vietnamese Can Chi mapping**: The library returns GanZhi in Chinese characters; map them to Vietnamese via static `CAN`/`CHI` lookup tables before display.
- **Leap months**: `Lunar.getMonth()` returns a negative number for a leap month; use `Math.abs()` and check `< 0`.
- **Date conversion accuracy**: `Solar.fromYmd(y,m,d).getLunar()` and `Lunar.fromYmd(y,m,d,leap).getSolar()` are accurate for years 1200–2199 per Vietnamese lunar rules (UTC+7).

## Navigation & i18n (index.html)

- The homepage `index.html` had **pre-existing unresolved git merge-conflict markers** (`<<<<<<< HEAD` / `=======` / `>>>>>>>`) inside the `UI` i18n object, which caused a JavaScript parse error and broke the language toggle and `applyLang()`. When adding nav items, resolve these carefully.
- **Lesson**: `replace_in_file` SEARCH/REPLACE can be corrupted/duplicated when the target region contains merge-conflict markers and is matched repeatedly. The safe recovery is to rewrite the whole file via `write_to_file` using a clean reconstruction.
- Nav i18n keys follow the pattern `nav-<id>` element id ↔ `nav<Key>` in UI object (e.g., `nav-lunar` ↔ `navLunar`).
- All pages share the `vnmt_lang` localStorage key for language persistence.

## Workflow

- Shell is **PowerShell**, not cmd: `&&` is invalid as a statement separator. Use `;` or separate commands. `cd path` is `Set-Location path`.
- Project static files served/dev-tested from `Project/` directory via `python -m http.server 8000 --directory Project`.