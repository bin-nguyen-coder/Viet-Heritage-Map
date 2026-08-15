/* ═══════════════════════════════════════════════════════════
   TOUR PLANNER — PLAN RENDERER (Phase 2)
   Renders the confirmed itinerary as a self-contained, elegant route map
   (SVG — no external tiles/CDN, so it always displays), and builds the
   zero-backend booking page link (tour_booking.html).

   Design follows planner.css tokens (gold/amber #c9a84c, red-bright #c42b2b,
   dark surfaces) to match the website.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Internal booking routing: keep users on our platform. ── */
  function tourBookingUrl(plan) {
    const base = window.location.origin
      + window.location.pathname.replace(/[^/]*$/, 'tour_booking.html');
    return base + '?plan=' + encodeURIComponent(JSON.stringify(plan));
  }

  /* ── HTML escape (built via fromCharCode so writes can't mangle it) ── */
  const AMP = String.fromCharCode(38);
  const LT = String.fromCharCode(60);
  const GT = String.fromCharCode(62);
  const QUOT = String.fromCharCode(34);

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, AMP + 'amp;')
      .replace(/</g, LT + 'lt;')
      .replace(/>/g, GT + 'gt;')
      .replace(/"/g, QUOT + 'quot;');
  }

  /* ── Compact simplified Vietnam boundary (approx, for an elegant overview) ──
     Each entry is [lat, lng]. Encloses mainland Vietnam's S-shape.           */
  const VN_OUTLINE = [
    [22.48, 103.03], [22.34, 103.82], [22.18, 104.18], [21.95, 104.85],
    [21.55, 105.33], [21.28, 105.85], [21.05, 106.06], [20.93, 106.55],
    [20.40, 106.61], [20.13, 106.59], [19.80, 105.88], [19.53, 105.78],
    [19.25, 105.33], [18.83, 105.68], [18.48, 105.76], [18.05, 106.29],
    [17.57, 106.57], [17.08, 107.05], [16.59, 107.44], [16.19, 108.06],
    [15.79, 108.34], [15.38, 108.84], [14.95, 109.05], [14.54, 109.11],
    [14.07, 109.31], [13.65, 109.15], [13.31, 109.23], [12.95, 109.39],
    [12.55, 109.28], [12.24, 109.11], [11.94, 109.31], [11.61, 109.11],
    [11.33, 108.77], [10.98, 108.44], [10.64, 107.88], [10.31, 107.40],
    [10.02, 106.71], [9.78, 106.33], [9.54, 106.06], [9.32, 105.55],
    [9.06, 105.13], [8.62, 105.05], [8.42, 105.00], [8.62, 104.94],
    [9.17, 104.76], [9.80, 104.60], [10.25, 104.22], [10.61, 104.20],
    [11.00, 103.95], [11.55, 103.60], [12.17, 103.47], [12.75, 103.47],
    [13.40, 103.45], [14.10, 103.48], [14.47, 103.53], [15.01, 103.90],
    [15.60, 104.09], [16.08, 104.40], [16.63, 104.77], [17.10, 105.30],
    [17.55, 105.60], [17.95, 105.95], [18.48, 105.76], [18.83, 105.68],
    [19.25, 105.33], [19.53, 105.78], [19.80, 105.88], [20.13, 106.59],
    [20.40, 106.61], [20.93, 106.55], [21.05, 106.06], [21.28, 105.85],
    [21.55, 105.33], [21.95, 104.85], [22.18, 104.18], [22.34, 103.82],
    [22.48, 103.03]
  ];

  /* ── State ── */
  let svg = null;
  let svgNS = 'http://www.w3.org/2000/svg';
  let overlay = null;

  const VIEW_W = 520;
  const VIEW_H = 440;
  const PAD = 34; // padding so pins/labels fit inside the viewBox
  const ROUTE_COLOR = '#e8a428'; // amber/gold

  /* ── Coordinate fallback for common places & landmarks.
       Real Gemini output may give lat/lng as strings, imprecise, or missing;
       we resolve a location to its coordinates this way:
         1) numeric lat/lng on the location,
         2) numeric-string lat/lng (coerced),
         3) name lookup against this known map,
         4) otherwise the location is skipped gracefully.                  ── */
  const KNOWN_COORDS = {
    // Major cities
    'hà nội': [21.0285, 105.8542], 'ha noi': [21.0285, 105.8542], 'hanoi': [21.0285, 105.8542],
    'hồ chí minh': [10.8231, 106.6297], 'tp. hồ chí minh': [10.8231, 106.6297], 'saigon': [10.8231, 106.6297],
    'đà nẵng': [16.0544, 108.2022], 'da nang': [16.0544, 108.2022], 'danang': [16.0544, 108.2022],
    'huế': [16.4637, 107.5909], 'hue': [16.4637, 107.5909], 'cố đô huế': [16.4637, 107.5909],
    'hội an': [15.8801, 108.3380], 'hoi an': [15.8801, 108.3380], 'phố cổ hội an': [15.8801, 108.3380],
    'đà lạt': [11.9404, 108.4583], 'da lat': [11.9404, 108.4583], 'dalat': [11.9404, 108.4583],
    'nha trang': [12.2388, 109.1967], 'nha trang': [12.2388, 109.1967],
    'đà lạt': [11.9404, 108.4583], 'sa pa': [22.3364, 103.8438], 'sapa': [22.3364, 103.8438],
    'cần thơ': [10.0452, 105.7469], 'can tho': [10.0452, 105.7469], 'hạ long': [20.9101, 107.1839], 'ha long': [20.9101, 107.1839],
    'quy nhơn': [13.7820, 109.2196], 'phan thiết': [10.9306, 108.1034], 'vũng tàu': [10.4111, 107.1050],
    'bắc ninh': [21.1861, 106.0763], 'bac ninh': [21.1861, 106.0763], 'phú thọ': [21.3922, 105.2342],
    'ninh bình': [20.2506, 105.9745], 'ninh binh': [20.2506, 105.9745], 'quảng ninh': [21.0228, 107.3150],
    'hải phòng': [20.8449, 106.6881], 'hai phong': [20.8449, 106.6881],
    'mỹ sơn': [15.7640, 108.1082], 'my son': [15.7640, 108.1082], 'phong nha': [17.5821, 106.2834],
    'sơn đoòng': [17.5680, 106.2834], 'bến tre': [10.2331, 106.3765], 'miền tây': [10.0452, 105.7469],
    'điện biên phủ': [21.3864, 103.0234], 'lào cai': [22.4809, 103.9701], 'yên bái': [21.7164, 104.8981],
    // Well-known landmarks (common AI suggestions)
    'đại nội huế': [16.4686, 107.5776], 'dai noi': [16.4686, 107.5776],
    'chùa thiên mụ': [16.4527, 107.5452], 'thien mu': [16.4527, 107.5452],
    'văn miếu': [21.0289, 105.8356], 'van mieu': [21.0289, 105.8356],
    'hoàng thành thăng long': [21.0328, 105.8398], 'hoàng thành': [21.0328, 105.8398],
    'chùa một cột': [21.0357, 105.8335], 'chùa một cột': [21.0357, 105.8335],
    'hồ hoàn kiếm': [21.0285, 105.8523], 'ho hoan kiem': [21.0285, 105.8523],
    'lăng khải định': [16.3997, 107.5909], 'lăng tẩm huế': [16.3997, 107.5909],
    'nhã nhạc cung đình huế': [16.4637, 107.5909],
    'quan họ bắc ninh': [21.1861, 106.0763],
    'cồng chiêng tây nguyên': [12.7149, 108.2436],
    'đờn ca tài tử': [10.0452, 105.7469],
    'xòe thái': [21.0302, 103.8384],
  };

  function normName(s) {
    return String(s == null ? '' : s).toLowerCase().replace(/[^\wàáảãạăâđèéẻẽẹêìíỉĩịòóỏõọôơùúủũụưứửữựýỷỹỵ]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  /* ── Resolve a location to numeric [lat, lng] or null. ── */
  function resolveCoord(loc) {
    if (!loc) return null;
    const lat = loc.lat;
    const lng = loc.lng;
    // 1) numeric, 2) numeric string
    let latN = typeof lat === 'number' ? lat : parseFloat(lat);
    let lngN = typeof lng === 'number' ? lng : parseFloat(lng);
    if (typeof latN === 'number' && !isNaN(latN) && typeof lngN === 'number' && !isNaN(lngN)
        && latN > 5 && latN < 25 && lngN > 100 && lngN < 112) {
      return [latN, lngN];
    }
    // 3) name lookup (try full name, then last word / city name)
    const n = normName(loc.name);
    if (KNOWN_COORDS[n]) return KNOWN_COORDS[n];
    const words = n.split(' ');
    for (let i = words.length; i >= 1; i--) {
      const k = words.slice(0, i).join(' ');
      if (KNOWN_COORDS[k]) return KNOWN_COORDS[k];
    }
    const last = words[words.length - 1];
    if (last && KNOWN_COORDS[last]) return KNOWN_COORDS[last];
    return null;
  }

  /* SVG helpers */
  function S(name, attrs) {
    const n = document.createElementNS(svgNS, name);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    }
    return n;
  }

  function clearLayer(layerId) {
    const g = document.getElementById(layerId);
    if (g) g.innerHTML = '';
  }

  /* ── Projection: equirectangular over the bbox of the drawn points,
       auto-fits the route (Google-Maps-fitBounds style). ── */
  function project(lat, lng, meta) {
    const x = (lng - meta.minLng) * meta.kx + PAD;
    const y = (meta.maxLat - lat) * meta.ky + PAD;
    return [x, y];
  }

  function buildProjection(lats, lngs) {
    let minLat = Infinity, maxLat = -Infinity, minLng = Infinity, maxLng = -Infinity;
    lats.forEach(function (v) { if (v < minLat) minLat = v; if (v > maxLat) maxLat = v; });
    lngs.forEach(function (v) { if (v < minLng) minLng = v; if (v > maxLng) maxLng = v; });

    // Ensure a minimum span so a single point / tiny cluster isn't degenerate.
    if (maxLat - minLat < 0.5) { const c = (maxLat + minLat) / 2; minLat = c - 0.25; maxLat = c + 0.25; }
    if (maxLng - minLng < 0.5) { const c = (maxLng + minLng) / 2; minLng = c - 0.25; maxLng = c + 0.25; }

    const spanLat = maxLat - minLat;
    const spanLng = maxLng - minLng;
    const availW = VIEW_W - PAD * 2;
    const availH = VIEW_H - PAD * 2;
    const s = Math.min(availW / spanLng, availH / spanLat);
    const kx = s;
    const ky = s;

    return { minLat: minLat, maxLat: maxLat, minLng: minLng, maxLng: maxLng, kx: kx, ky: ky };
  }

  /* Smooth path through points (Catmull-Rom -> cubic bezier) for elegance. */
  function catmullRomPath(pts) {
    if (pts.length < 2) return pts.length ? ('M ' + pts[0][0] + ' ' + pts[0][1]) : '';
    let d = 'M ' + pts[0][0] + ' ' + pts[0][1];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;
      const c1x = p1[0] + (p2[0] - p0[0]) / 6;
      const c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6;
      const c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ' C ' + c1x + ' ' + c1y + ', ' + c2x + ' ' + c2y + ', ' + p2[0] + ' ' + p2[1];
    }
    return d;
  }

  /* ── Render the full route onto the SVG ── */
  function renderPlan(plan) {
    if (!svg) return;

    // Resolve coordinates for each location (robust to real Gemini output:
    // numeric, numeric-string, or missing → looked up by name). Skipped if
    // we cannot determine a valid Vietnamese coordinate.
    const locs = (Array.isArray(plan.locations) ? plan.locations : [])
      .map(function (l) {
        const c = resolveCoord(l);
        return c ? { loc: l, lat: c[0], lng: c[1] } : null;
      })
      .filter(Boolean);

    if (locs.length === 0) {
      showMapOverlay();
      return;
    }
    hideMapOverlay();

    // Auto-fit projection over the route bounds.
    const meta = buildProjection(
      locs.map(function (l) { return l.lat; }),
      locs.map(function (l) { return l.lng; })
    );

    // Layers (order bottom→top so the country sits behind pins/path).
    let gLand = document.getElementById('rm-layer-land');
    if (!gLand) { gLand = S('g', { id: 'rm-layer-land' }); svg.appendChild(gLand); }
    let gRoute = document.getElementById('rm-layer-route');
    if (!gRoute) { gRoute = S('g', { id: 'rm-layer-route' }); svg.appendChild(gRoute); }
    let gPins = document.getElementById('rm-layer-pins');
    if (!gPins) { gPins = S('g', { id: 'rm-layer-pins' }); svg.appendChild(gPins); }

    gLand.innerHTML = '';
    gRoute.innerHTML = '';
    gPins.innerHTML = '';

    // 1) Vietnam outline (projected in the same space; clipped is fine).
    const outline = VN_OUTLINE.map(function (p) { return project(p[0], p[1], meta); });
    const landPath = 'M ' + outline.map(function (p) { return p[0] + ' ' + p[1]; }).join(' L ') + ' Z';
    gLand.appendChild(S('path', { d: landPath, class: 'rm-land' }));
    gLand.appendChild(S('path', { d: landPath, class: 'rm-land-shadow' }));

    // 2) Smooth route path (glow + core).
    const pts = locs.map(function (l) { return project(l.lat, l.lng, meta); });
    const routeD = catmullRomPath(pts);
    const glow = S('path', { d: routeD, class: 'rm-route rm-route-glow', fill: 'none' });
    glow.setAttribute('pathLength', '300');
    const core = S('path', { d: routeD, class: 'rm-route rm-route-core', fill: 'none' });
    core.setAttribute('pathLength', '300');
    core.style.strokeDasharray = '300';
    gRoute.appendChild(glow);
    gRoute.appendChild(core);
    // trigger the draw animation by resetting dashoffset
    requestAnimationFrame(function () { core.style.strokeDashoffset = '300'; });
    requestAnimationFrame(function () { core.style.strokeDashoffset = '0'; });

    // 3) Numbered gold/red waypoints with day labels + hover tooltips.
    pts.forEach(function (pt, i) {
      const l = locs[i].loc;
      const x = pt[0];
      const y = pt[1];
      const day = l.day || (i + 1);
      const name = String(l.name || ('Chặng ' + (
        d: 'M ' + x + ' ' + (y - 14) +
           ' C ' + (x + 9) + ' ' + (y - 14) + ' ' + (x + 9) + ' ' + y + ' ' + x + ' ' + (y + 9) +
           ' C ' + (x - 9) + ' ' + y + ' ' + (x - 9) + ' ' + (y - 14) + ' ' + x + ' ' + (y - 14) + ' Z'
      });
      g.appendChild(teardrop);

      g.appendChild(S('text', {
        class: 'rm-pin-num', x: x, y: y - 2,
        'text-anchor': 'middle', 'dominant-baseline': 'central'
      })).textContent = idx;

      gPins.appendChild(g);

      // Label below the pin (day + name), offset so it stays in view.
      const labelY = Math.min(y + 24, VIEW_H - 6);
      const lbl = S('g', { class: 'rm-label' });
      lbl.appendChild(S('text', { class: 'rm-label-day', x: x, y: labelY })).textContent = 'NGÀY ' + day;
      lbl.appendChild(S('text', { class: 'rm-label-name', x: x, y: labelY + 13 })).textContent = name;
      gPins.appendChild(lbl);

      // Tooltip (sibling of pin so :hover works via ~ )
      const tip = S('g', { class: 'rm-tooltip' });
      const tx = Math.max(8, Math.min(x, VIEW_W - 8));
      const ty = Math.max(20, y - 34);
      const w = 150;
      const h = 26;
      const bx = Math.max(8, Math.min(tx - w / 2, VIEW_W - w - 8));
      tip.appendChild(S('rect', { class: 'rm-tooltip-box', x: bx, y: ty, width: w, height: h, rx: 6 }));
      const t = S('text', { class: 'rm-tooltip-text', x: bx + w / 2, y: ty + 16, 'text-anchor': 'middle' });
      t.textContent = 'Chặng ' + idx + ': ' + name + ' · Ngày ' + day;
      tip.appendChild(t);
      gPins.appendChild(tip);
    });

    // 4) Endpoint rings (start & end).
    const s = pts[0];
    const e = pts[pts.length - 1];
    gPins.appendChild(S('circle', { class: 'rm-endpoint', cx: s[0], cy: s[1], r: 6 }));
    gPins.appendChild(S('circle', { class: 'rm-endpoint', cx: e[0], cy: e[1], r: 6 }));
  }

  function showMapOverlay() {
    if (overlay) overlay.style.display = 'flex';
  }

  function hideMapOverlay() {
    if (overlay) overlay.style.display = 'none';
  }

  /* ── Booking UI (keeps the user on our platform: the CTA opens
       tour_booking.html, which embeds Booking.com in an iframe). ── */
  function buildBookingCard(plan) {
    const card = document.getElementById('booking-ready');
    if (!card) return;

    const acc = Array.isArray(plan.accommodation_links) ? plan.accommodation_links : [];
    const trans = Array.isArray(plan.transport_segments) ? plan.transport_segments : [];

    let cities = '';
    if (acc.length) {
      cities = '<h4 class="bk-group-title">Nơi lưu trú (Booking.com)</h4>'
        + acc.map(function (a) {
          const sub = a.checkin && a.checkout
            ? ' · ' + esc(a.checkin) + ' → ' + esc(a.checkout)
            : '';
          return '<div class="bk-city">🏨 ' + esc(a.city) + sub + '</div>';
        }).join('');
    }

    let transHtml = '';
    if (trans.length) {
      transHtml = '<h4 class="bk-group-title">Di chuyển</h4>'
        + trans.map(function (seg) {
          return '<div class="bk-city">✈️ ' + esc(seg.from) + ' → ' + esc(seg.to) + '</div>';
        }).join('');
    }

    const summary = plan.summary
      ? '<div class="bk-summary">' + esc(plan.summary) + '</div>'
      : '';

    const url = tourBookingUrl(plan);

    card.innerHTML =
      '<div class="bk-badge">✦ Sẵn sàng lên đường!</div>'
      + summary
      + cities
      + transHtml
      + '<a class="bk-cta" href="' + url + '">Đặt chỗ & Di chuyển ngay</a>';

    card.hidden = false;
  }

  /* ── Toast ── */
  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () { toast.classList.remove('show'); }, 4200);
  }

  /* ── Boot ── */
  function boot() {
    svg = document.getElementById('route-map');
    overlay = document.getElementById('map-overlay');
    if (window.__lastPlan) {
      renderPlan(window.__lastPlan);
      buildBookingCard(window.__lastPlan);
      showToast('Lộ trình đã được vẽ lên bản đồ! ✦');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  document.addEventListener('tourplan:ready', function (e) {
    const plan = e && e.detail;
    if (!plan) return;
    renderPlan(plan);
    buildBookingCard(plan);
    showToast('Lộ trình đã được vẽ lên bản đồ! ✦');
  });
})();