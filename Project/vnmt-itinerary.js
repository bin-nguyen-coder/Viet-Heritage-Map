/* ═══════════════════════════════════════════════════════════
   VNMT ITINERARY RENDERER (Phase 2)
   Shared module that reuses the VNMT map logic to draw a
   confirmed chatbot itinerary:

     • numbered heritage pins with popups
         "Chặng X: [Tên địa điểm] (Ngày Y)"
     • an amber/gold polyline connecting locations in order
     • automatic fitBounds to contain every path point

   On VNMT.html it attaches to the existing global `map` created
   by VNMT.js (exposed as window.VHMap). On planner.html it creates
   a map with the identical setup (Carto light_all tiles, same
   styling) so the plan renders consistently across both pages.

   Design follows the site tokens (gold/amber #c9a84c / #e8a428,
   dark surfaces) to match the website.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Brand route colour (amber/gold matching the site) ── */
  const ROUTE_COLOR = '#e8a428';

  /* ── Coordinate fallback for common places & landmarks.
       Real Gemini output may give lat/lng as strings, imprecise, or
       missing; we resolve a location to its coordinates this way:
         1) numeric lat/lng on the location,
         2) numeric-string lat/lng (coerced),
         3) name lookup against this known map,
         4) otherwise the location is skipped gracefully.          ── */
  const KNOWN_COORDS = {
    'hà nội': [21.0285, 105.8542], 'ha noi': [21.0285, 105.8542], 'hanoi': [21.0285, 105.8542],
    'hồ chí minh': [10.8231, 106.6297], 'tp. hồ chí minh': [10.8231, 106.6297], 'saigon': [10.8231, 106.6297],
    'đà nẵng': [16.0544, 108.2022], 'da nang': [16.0544, 108.2022], 'danang': [16.0544, 108.2022],
    'huế': [16.4637, 107.5909], 'hue': [16.4637, 107.5909], 'cố đô huế': [16.4637, 107.5909],
    'hội an': [15.8801, 108.3380], 'hoi an': [15.8801, 108.3380], 'phố cổ hội an': [15.8801, 108.3380],
    'đà lạt': [11.9404, 108.4583], 'da lat': [11.9404, 108.4583], 'dalat': [11.9404, 108.4583],
    'nha trang': [12.2388, 109.1967],
    'sa pa': [22.3364, 103.8438], 'sapa': [22.3364, 103.8438],
    'cần thơ': [10.0452, 105.7469], 'can tho': [10.0452, 105.7469],
    'hạ long': [20.9101, 107.1839], 'ha long': [20.9101, 107.1839],
    'quy nhơn': [13.7820, 109.2196], 'phan thiết': [10.9306, 108.1034], 'vũng tàu': [10.4111, 107.1050],
    'bắc ninh': [21.1861, 106.0763], 'bac ninh': [21.1861, 106.0763], 'phú thọ': [21.3922, 105.2342],
    'ninh bình': [20.2506, 105.9745], 'ninh binh': [20.2506, 105.9745], 'quảng ninh': [21.0228, 107.3150],
    'hải phòng': [20.8449, 106.6881], 'hai phong': [20.8449, 106.6881],
    'mỹ sơn': [15.7640, 108.1082], 'my son': [15.7640, 108.1082], 'phong nha': [17.5821, 106.2834],
    'sơn đoòng': [17.5680, 106.2834], 'bến tre': [10.2331, 106.3765], 'miền tây': [10.0452, 105.7469],
    'điện biên phủ': [21.3864, 103.0234], 'lào cai': [22.4809, 103.9701], 'yên bái': [21.7164, 104.8981],
    'đại nội huế': [16.4686, 107.5776], 'dai noi': [16.4686, 107.5776],
    'chùa thiên mụ': [16.4527, 107.5452], 'thien mu': [16.4527, 107.5452],
    'văn miếu': [21.0289, 105.8356], 'van mieu': [21.0289, 105.8356],
    'hoàng thành thăng long': [21.0328, 105.8398], 'hoàng thành': [21.0328, 105.8398],
    'chùa một cột': [21.0357, 105.8335],
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
    let latN = typeof lat === 'number' ? lat : parseFloat(lat);
    let lngN = typeof lng === 'number' ? lng : parseFloat(lng);
    if (typeof latN === 'number' && !isNaN(latN) && typeof lngN === 'number' && !isNaN(lngN)
        && latN > 5 && latN < 25 && lngN > 100 && lngN < 112) {
      return [latN, lngN];
    }
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

  /* ── Map state ── */
  let map = null;
  let routeLayer = null;
  let markersLayer = null;
  let overlay = null;
  let ownMap = false;   // true when this module created the map itself

  /* Reuse the VNMT global map (exposed by VNMT.js as window.VHMap).
     If absent (e.g. planner.html), create an identical map. */
  function ensureMap() {
    if (map) return;

    if (window.VHMap && typeof window.VHMap.addLayer === 'function') {
      map = window.VHMap;
      ownMap = false;
    } else {
      const mapEl = document.getElementById('map');
      if (!mapEl) return;
      if (typeof L === 'undefined') {
        clearTimeout(ensureMap._t);
        ensureMap._t = setTimeout(ensureMap, 100);
        return;
      }
      map = L.map('map', {
        center: [16.0, 107.8],
        zoom: 5,
        zoomControl: true,
        scrollWheelZoom: false,
      });
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);
      ownMap = true;
    }

    overlay = document.getElementById('map-overlay');

    // Dedicated layer groups for the itinerary so we can clear them cleanly
    // without touching VNMT's province / treasure layers.
    routeLayer = L.layerGroup().addTo(map);
    markersLayer = L.layerGroup().addTo(map);

    // Keep the map sized correctly (mirrors VNMT.js invalidateSize pattern).
    setTimeout(function () { if (map) map.invalidateSize(); }, 50);
    window.addEventListener('resize', function () {
      if (map) map.invalidateSize();
    });
  }

  function showMapOverlay() {
    if (overlay) overlay.style.display = 'flex';
  }

  function hideMapOverlay() {
    if (overlay) overlay.style.display = 'none';
  }

  /* Clear any previous markers, popups, and route lines. */
  function clearRoute() {
    if (routeLayer) routeLayer.clearLayers();
    if (markersLayer) markersLayer.clearLayers();
  }

  function makePinIcon(index) {
    return L.divIcon({
      className: 'vhm-pin',
      html: '<span class="vhm-pin-dot"><span>' + (index + 1) + '</span></span>',
      iconSize: [26, 34],
      iconAnchor: [13, 32],
      popupAnchor: [0, -30],
    });
  }

  /* Render a parsed itinerary plan on the (shared) VNMT map. */
  function render(plan) {
    ensureMap();
    if (!map) return;
    clearRoute();

    // Resolve coordinates for each location (robust to real Gemini output).
    const locs = (Array.isArray(plan && plan.locations) ? plan.locations : [])
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

    // Markers with "Chặng X: [name] (Ngày Y)" popups.
    locs.forEach(function (l, i) {
      const title = 'Chặng ' + (i + 1) + ': ' + l.loc.name + ' (Ngày ' + (l.loc.day || (i + 1)) + ')';
      L.marker([l.lat, l.lng], { icon: makePinIcon(i), title: esc(l.loc.name) })
        .addTo(markersLayer)
        .bindPopup('<strong>' + esc(title) + '</strong>');
    });

    // Amber polyline connecting locations in their listed (chronological) order.
    const latlngs = locs.map(function (l) { return [l.lat, l.lng]; });
    L.polyline(latlngs, {
      color: ROUTE_COLOR,
      weight: 4,
      opacity: 0.85,
      lineCap: 'round',
      lineJoin: 'round',
    }).addTo(routeLayer);

    // Fit bounds to contain all markers (single point → setView).
    if (latlngs.length === 1) {
      map.setView(latlngs[0], 13);
    } else {
      map.fitBounds(L.latLngBounds(latlngs).pad(0.25));
    }
  }

  /* Public API — used by VNMT.js and planner-plan.js. */
  window.VHItinerary = {
    render: render,
    clear: clearRoute,
    ensureMap: ensureMap,
  };
})();
