/* ═══════════════════════════════════════════════════════════
   JOURNEY SITES — shared data + helpers for the Treasures Journey.
   Loaded by both journey.html (map) and site.html (site detail).
   Depends on (loaded before this file):
     - national_treasures.js   → NATIONAL_TREASURES
     - location_en.js          → LOCATION_EN
     - treasure_common.js      → ntEraKey, ntType, ntLocation, NT_ERA_CONFIG
   ═══════════════════════════════════════════════════════════ */

let lang = localStorage.getItem('vnmt_lang') || 'vi';

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/* Lighten a hex colour toward white by `amt` (0..1) */
function shade(hex, amt) {
  const h = (hex || '#8a6a20').replace('#', '');
  const n = parseInt(h, 16);
  const r = Math.round(((n >> 16) & 255) + (255 - ((n >> 16) & 255)) * amt);
  const g = Math.round(((n >> 8) & 255) + (255 - ((n >> 8) & 255)) * amt);
  const b = Math.round((n & 255) + (255 - (n & 255)) * amt);
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* ── Panoramic landmark silhouettes (SVG fragments, ground at y=120) ── */
const SILHOUETTES = {
  mountain: '<path d="M0 120 V78 L32 54 L64 76 L96 44 L130 70 L164 48 L202 74 L240 58 V120 Z"/>',
  temple:   '<path d="M70 120 V104 H82 V90 H94 V76 H106 V64 H116 V50 H124 V64 H134 V76 H146 V90 H158 V104 H170 V120 Z"/>',
  citadel:  '<path d="M40 120 V100 H200 V120 Z M96 100 V78 H144 V100 Z M114 78 V58 H126 V78 Z M120 58 V40 L128 46 L120 52 Z"/>',
  museum:   '<path d="M56 120 V92 H184 V120 Z M56 92 L120 66 L184 92 Z M72 120 V92 H84 V120 Z M104 120 V92 H116 V120 Z M136 120 V92 H148 V120 Z M168 120 V92 H180 V120 Z"/>',
  tower:    '<path d="M84 120 V96 H156 V120 Z M92 96 V74 H148 V96 Z M100 74 V56 H140 V74 Z M108 56 V42 H132 V56 Z M120 42 V28 L126 34 L120 40 Z"/>',
};

/* Canonical display order for era keys (oldest → newest) */
const ERA_ORDER = ['prehistoric', 'dongson', 'dinh', 'ly', 'tran', 'le', 'mac', 'tayson', 'nguyen', 'cham', 'oceo', 'modern', 'other'];

/* ═══════════════════════════════════════════════════════════
   JOURNEY SITES  (curated, north → south)
   `locations` lists the exact `location` strings from
   national_treasures.js that belong to this site. Treasures are
   grouped automatically; `lat`/`lng` are fallbacks only.
   ═══════════════════════════════════════════════════════════ */
const JOURNEY_SITES = [
  {
    id: 'den-hung',
    name: { vi: 'Đền Hùng', en: 'Hùng Kings Temple' },
    region: { vi: 'Bắc Bộ', en: 'Northern' },
    theme: '#8a6f3f', silhouette: 'mountain',
    lat: 21.3643, lng: 105.3153,
    desc: {
      vi: 'Cội nguồn dân tộc — nơi thờ các Vua Hùng, gắn với truyền thuyết Lạc Long Quân – Âu Cơ và thời kỳ dựng nước Văn Lang.',
      en: 'The ancestral cradle of the nation — dedicated to the Hùng Kings, tied to the Lạc Long Quân – Âu Cơ legend and the founding of Văn Lang.',
    },
    locations: [
      'Khu di tích lịch sử Đền Hùng, thành phố Việt Trì, tỉnh Phú Thọ',
      'Khu di tích Đền Mẫu Âu Cơ, xã Hiền Lương, huyện Hạ Hòa, tỉnh Phú Thọ',
      'Bảo tàng Hùng Vương, tỉnh Phú Thọ',
    ],
  },
  {
    id: 'co-loa',
    name: { vi: 'Thành Cổ Loa', en: 'Cổ Loa Citadel' },
    region: { vi: 'Bắc Bộ', en: 'Northern' },
    theme: '#c4624a', silhouette: 'citadel',
    lat: 21.1116, lng: 105.8733,
    desc: {
      vi: 'Thành cổ của nhà nước Âu Lạc thời An Dương Vương, với kiến trúc thành xoáy ốc độc đáo cùng kho tàng trống đồng, mũi tên đồng Đông Sơn.',
      en: 'The ancient citadel of the Âu Lạc state under King An Dương Vương, famed for its spiral ramparts and Đông Sơn bronze drums and arrowheads.',
    },
    locations: ['Khu di tích Cổ Loa, xã Cổ Loa, huyện Đông Anh, thành phố Hà Nội'],
  },
  {
    id: 'thang-long',
    name: { vi: 'Hoàng thành Thăng Long', en: 'Thăng Long Imperial Citadel' },
    region: { vi: 'Bắc Bộ', en: 'Northern' },
    theme: '#d4875e', silhouette: 'citadel',
    lat: 21.0332, lng: 105.8392,
    desc: {
      vi: 'Kinh đô nghìn năm của Đại Việt, nơi hội tụ bảo vật qua các triều Lý, Trần, Lê đến Nguyễn.',
      en: 'The thousand-year imperial capital of Đại Việt, gathering treasures across the Lý, Trần, Lê and Nguyễn dynasties.',
    },
    locations: [
      'Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội',
      'Điện Kính Thiên, Khu Trung tâm Hoàng thành Thăng Long - Hà Nội',
    ],
  },
  {
    id: 'btlsqg',
    name: { vi: 'Bảo tàng Lịch sử Quốc gia', en: 'National Museum of History' },
    region: { vi: 'Bắc Bộ', en: 'Northern' },
    theme: '#5a8a9f', silhouette: 'museum',
    lat: 21.0245, lng: 105.8597,
    desc: {
      vi: 'Bảo tàng hàng đầu Việt Nam, lưu giữ bộ sưu tập bảo vật quốc gia lớn nhất trải dài mọi thời kỳ lịch sử.',
      en: 'Vietnam\u2019s foremost museum, holding the largest collection of national treasures spanning every historical period.',
    },
    locations: ['Bảo tàng Lịch sử quốc gia, Hà Nội'],
  },
  {
    id: 'but-thap',
    name: { vi: 'Chùa Bút Tháp', en: 'Bút Tháp Pagoda' },
    region: { vi: 'Bắc Bộ', en: 'Northern' },
    theme: '#4caf84', silhouette: 'temple',
    lat: 21.065, lng: 106.068,
    desc: {
      vi: 'Ngôi cổ tự nổi tiếng với pho tượng Quan Âm nghìn mắt nghìn tay và hệ thống tượng Phật thời Lê – Mạc.',
      en: 'A famed ancient pagoda home to the thousand-arm Guanyin statue and Buddhist sculpture of the Lê – Mạc era.',
    },
    locations: ['Chùa Bút Tháp, xã Đình Tổ, huyện Thuận Thành, tỉnh Bắc Ninh'],
  },
  {
    id: 'hoa-lu',
    name: { vi: 'Cố đô Hoa Lư', en: 'Hoa Lư Ancient Capital' },
    region: { vi: 'Bắc Bộ', en: 'Northern' },
    theme: '#7fa64b', silhouette: 'mountain',
    lat: 20.2799, lng: 105.8933,
    desc: {
      vi: 'Kinh đô đầu tiên của nhà nước phong kiến tập quyền, gắn với hai triều Đinh và Tiền Lê.',
      en: 'The first capital of the centralized feudal state, tied to the Đinh and Early Lê dynasties.',
    },
    locations: ['Khu di tích Cố đô Hoa Lư, Ninh Bình', 'Khu di tích Cố đô Hoa Lư, tỉnh Ninh Bình'],
  },

  {
    id: 'lam-kinh',
    name: { vi: 'Khu di tích Lam Kinh', en: 'Lam Kinh Relic Site' },
    region: { vi: 'Bắc Trung Bộ', en: 'North Central' },
    theme: '#e8c96a', silhouette: 'citadel',
    lat: 19.9263, lng: 105.4089,
    desc: {
      vi: 'Đất phát tích của nhà Lê, nơi lưu giữ các bảo vật gắn với vua Lê Lợi và triều Hậu Lê.',
      en: 'The ancestral land of the Lê dynasty, preserving treasures linked to Emperor Lê Lợi and the Later Lê.',
    },
    locations: ['Khu di tích lịch sử Lam Kinh, huyện Thọ Xuân, tỉnh Thanh Hóa'],
  },
  {
    id: 'hue',
    name: { vi: 'Cung đình Huế', en: 'Huế Imperial Court' },
    region: { vi: 'Trung Bộ', en: 'Central' },
    theme: '#5a8a9f', silhouette: 'citadel',
    lat: 16.4713, lng: 107.5819,
    desc: {
      vi: 'Kinh đô triều Nguyễn, nơi lưu giữ ấn kiếm, ngọc tỷ và bảo vật cung đình tinh xảo.',
      en: 'The Nguyễn dynasty capital, home to imperial seals, jade and refined court treasures.',
    },
    locations: [
      'Bảo tàng Cổ vật Cung đình Huế, Thừa Thiên Huế',
      'Bảo tàng Cổ vật Cung đình Huế',
      'Bảo tàng Cổ vật Cung đình Huế, tỉnh Thừa Thiên Huế',
      'Trung tâm Bảo tồn Di tích Cố đô Huế, tỉnh Thừa Thiên Huế',
      'Chùa Thiên Mụ, thành phố Huế, tỉnh Thừa Thiên Huế',
    ],
  },
  {
    id: 'cham-da-nang',
    name: { vi: 'Bảo tàng Điêu khắc Chăm', en: 'Cham Sculpture Museum' },
    region: { vi: 'Trung Bộ', en: 'Central' },
    theme: '#a97fd0', silhouette: 'tower',
    lat: 16.0604, lng: 108.2234,
    desc: {
      vi: 'Bảo tàng chuyên về nghệ thuật điêu khắc Champa, với bộ sưu tập tượng thần, đài thờ từ Mỹ Sơn và Trà Kiệu.',
      en: 'A museum devoted to Champa sculpture, with statues and altars from Mỹ Sơn and Trà Kiệu.',
    },
    locations: ['Bảo tàng Điêu khắc Chăm, Đà Nẵng'],
  },
  {
    id: 'binh-dinh',
    name: { vi: 'Bình Định', en: 'Bình Định (Vijaya)' },
    region: { vi: 'Trung Bộ', en: 'Central' },
    theme: '#b08968', silhouette: 'tower',
    lat: 13.7707, lng: 109.2339,
    desc: {
      vi: 'Vùng đất Vijaya của Champa, nơi lưu giữ tượng thần, tháp cổ và bảo vật văn hóa Chăm.',
      en: 'The Vijaya land of Champa, preserving deities, ancient towers and Cham cultural treasures.',
    },
    locations: [
      'Bảo tàng tỉnh Bình Định',
      'Chùa Linh Sơn, thành phố Quy Nhơn, tỉnh Bình Định',
      'Chùa Nhạn Sơn, xã Nhơn Hậu, thị xã An Nhơn, tỉnh Bình Định',
      'Khu di tích Thành Hoàng Đế, xã Nhơn Hậu, thị xã An Nhơn, tỉnh Bình Định',
    ],
  },
  {
    id: 'oc-eo',
    name: { vi: 'Óc Eo', en: 'Óc Eo (Funan)' },
    region: { vi: 'Nam Bộ', en: 'Southern' },
    theme: '#6fbf9b', silhouette: 'mountain',
    lat: 10.2548, lng: 105.1549,
    desc: {
      vi: 'Di chỉ văn hóa Óc Eo – Phù Nam, nơi phát lộ tượng Phật, thần Vishnu và hiện vật giao thương cổ.',
      en: 'The Óc Eo – Funan archaeological site, revealing Buddha and Vishnu statues and ancient trade relics.',
    },
    locations: [
      'Bảo tàng tỉnh An Giang',
      'Ban Quản lý di tích Văn hóa Óc Eo, tỉnh An Giang',
      'Ban Quản lý Di tích Văn hóa Óc Eo, tỉnh An Giang',
    ],
  },
  {
    id: 'btls-hcm',
    name: { vi: 'Bảo tàng Lịch sử TP. Hồ Chí Minh', en: 'Museum of History, HCMC' },
    region: { vi: 'Nam Bộ', en: 'Southern' },
    theme: '#c9943a', silhouette: 'museum',
    lat: 10.7881, lng: 106.7050,
    desc: {
      vi: 'Bảo tàng lớn phương Nam, hội tụ bảo vật từ Óc Eo, Champa đến các triều đại phong kiến.',
      en: 'The great museum of the South, gathering treasures from Óc Eo, Champa to the feudal dynasties.',
    },
    locations: ['Bảo tàng Lịch sử thành phố Hồ Chí Minh'],
  },
];

/* ═══════════════════════════════════════════════════════════
   PANORAMIC IMAGE  — generated SVG (sky + sun + silhouette + name)
   Optional w/h scale the render (viewBox stays 240×120);
   showName=false omits the in-image label (for HTML-overlay heroes).
   ═══════════════════════════════════════════════════════════ */
function panoramaSVG(site, w, h, showName) {
  const theme = site.theme || '#8a6a20';
  const light = shade(theme, 0.55);
  const name = (site.name && site.name[lang]) || site.name.vi || '';
  const sil = SILHOUETTES[site.silhouette] || SILHOUETTES.mountain;
  const W = w || 240, H = h || 120;
  const label = (showName === false)
    ? ''
    : '<text x="10" y="114" fill="#fff" font-family="Merriweather,serif" font-size="11" font-weight="700">' + esc(name) + '</text>';
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 240 120">' +
    '<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0" stop-color="' + light + '"/><stop offset="1" stop-color="' + theme + '"/>' +
    '</linearGradient></defs>' +
    '<rect width="240" height="120" fill="url(#sky)"/>' +
    '<circle cx="196" cy="26" r="13" fill="#f7e7ae" opacity="0.95"/>' +
    '<path d="M0 120 V80 L34 58 L64 78 L98 46 L132 72 L166 50 L204 76 L240 60 V120 Z" fill="' + theme + '" opacity="0.28"/>' +
    '<g fill="#160f08" opacity="0.86">' + sil + '</g>' +
    label +
    '</svg>';
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

/* ═══════════════════════════════════════════════════════════
   SITE GROUPING — attach treasures + era spans to each site
   ═══════════════════════════════════════════════════════════ */
function buildSites() {
  const treasures = Array.isArray(NATIONAL_TREASURES) ? NATIONAL_TREASURES : [];
  return JOURNEY_SITES.map((site, idx) => {
    const locSet = {};
    (site.locations || []).forEach(l => { locSet[l] = true; });

    const items = treasures.filter(tr => locSet[tr.location]);

    let lat = site.lat, lng = site.lng;
    if (items.length) { lat = items[0].lat; lng = items[0].lng; }

    const eraSet = {};
    items.forEach(tr => { eraSet[ntEraKey(tr)] = true; });
    const eras = ERA_ORDER.filter(k => eraSet[k]);

    return Object.assign({}, site, { order: idx + 1, lat, lng, treasures: items, eras });
  });
}

const SITES = buildSites();

/* ═══════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════ */
function eraLabel(key) { return (NT_ERA_CONFIG[key] && NT_ERA_CONFIG[key][lang] && NT_ERA_CONFIG[key][lang].short) || key; }
function eraColor(key) { return (NT_ERA_CONFIG[key] && NT_ERA_CONFIG[key].color) || '#8a7c5e'; }
function siteName(site) { return (site.name && site.name[lang]) || site.name.vi; }



