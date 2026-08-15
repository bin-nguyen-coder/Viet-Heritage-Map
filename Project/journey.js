/* ═══════════════════════════════════════════════════════════
   HÀNH TRÌNH BẢO VẬT  ·  TREASURES JOURNEY  (map page logic)
   Data + helpers live in journey_sites.js (loaded before this).
   This file renders the map, the numbered pins, the journey path,
   the sidebar, and the site detail modal.
   ═══════════════════════════════════════════════════════════ */

const STRINGS = {
  vi: {
    navHome: 'Trang chủ', navMap: 'Bản đồ', navDb: 'Kho lưu trữ', navAbout: 'Giới thiệu', navJourney: 'Hành trình Bảo vật',
    pageTitle: 'Hành trình Bảo vật — VietHeritage Map',
    eyebrow: 'Bảo Vật Quốc Gia Việt Nam',
    title1: 'Hành trình',
    titleEm: 'Bảo vật',
    title2: 'xuyên thời gian',
    subtitle: 'Những địa điểm lưu giữ nhiều bảo vật quốc gia, nối liền các thời kỳ lịch sử từ thuở dựng nước đến triều Nguyễn.',
    statSites: 'Điểm dừng', statTreasures: 'Bảo vật', statEras: 'Thời kỳ',
    stopsLabel: 'Các điểm dừng',
    treasures: 'bảo vật', eras: 'thời kỳ',
    viewDetails: 'Xem chi tiết',
    viewSiteDetails: 'Xem trang chi tiết về địa điểm',
    modalArtifacts: 'Bảo vật tại đây', modalEra: 'Thời kỳ', modalRegion: 'Vùng', modalCount: 'Bảo vật',
    modalTimeline: 'Dòng thời gian', modalBack: '← Trở lại hành trình',
    openMaps: 'Mở Google Maps',
    mapReset: '⟳ Đặt lại',
    footerCopyright: '© 2026 Hành trình Bảo vật Việt Nam',
    footerCredit: 'Bản đồ: <em>CartoDB / OpenStreetMap</em> · Dữ liệu: <em>357 Bảo vật Quốc gia</em>',
    step: 'Chặng',
  },
  en: {
    navHome: 'Home', navMap: 'Map', navDb: 'Database', navAbout: 'About', navJourney: 'Treasures Journey',
    pageTitle: 'Treasures Journey — VietHeritage Map',
    eyebrow: 'National Treasures of Vietnam',
    title1: 'Treasures',
    titleEm: 'Journey',
    title2: 'through time',
    subtitle: 'The sites across Vietnam that hold multiple national treasures, linking historical periods from the founding era to the Nguyễn dynasty.',
    statSites: 'Stops', statTreasures: 'Treasures', statEras: 'Eras',
    stopsLabel: 'Stops',
    treasures: 'treasures', eras: 'eras',
    viewDetails: 'View details',
    viewSiteDetails: 'Open the site detail page',
    modalArtifacts: 'Treasures here', modalEra: 'Era', modalRegion: 'Region', modalCount: 'Treasures',
    modalTimeline: 'Timeline', modalBack: '← Back to journey',
    openMaps: 'Open Google Maps',
    mapReset: '⟳ Reset view',
    footerCopyright: '© 2026 Vietnam Treasures Journey',
    footerCredit: 'Map: <em>CartoDB / OpenStreetMap</em> · Data: <em>357 National Treasures</em>',
    step: 'Stop',
  },
};

function t(key) { return STRINGS[lang][key]; }

/* ═══════════════════════════════════════════════════════════
   MAP
   ═══════════════════════════════════════════════════════════ */
let map, journeyLayer, journeyPath, activeSiteId = null;

function initMap() {
  map = L.map('map', { zoomControl: true, scrollWheelZoom: true }).setView([16.2, 106.6], 6);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  journeyLayer = L.layerGroup().addTo(map);
  renderPins();
  renderPath();
  fitJourney();
}

/* Compact numbered pin — no image; the panorama appears only on click */
function siteIcon(site) {
  const count = site.treasures.length;
  const name = siteName(site);
  const html =
    '<div class="journey-pin" style="--c:' + site.theme + '">' +
      '<div class="journey-pin-pill">' +
        '<span class="journey-pin-num">' + site.order + '</span>' +
        '<span class="journey-pin-name">' + esc(name) + '</span>' +
        '<span class="journey-pin-count">' + count + ' ' + esc(t('treasures')) + '</span>' +
      '</div>' +
      '<div class="journey-pin-tip"></div>' +
    '</div>';
  return L.divIcon({ className: 'journey-icon', html, iconSize: [196, 52], iconAnchor: [98, 52], popupAnchor: [0, -46] });
}

function renderPins() {
  SITES.forEach(site => {
    const marker = L.marker([site.lat, site.lng], { icon: siteIcon(site), siteId: site.id });
    marker.on('click', () => openSite(site.id));
    marker.addTo(journeyLayer);
  });
}

function renderPath() {
  const pts = SITES.map(s => [s.lat, s.lng]);
  journeyPath = L.polyline(pts, { color: '#c9a84c', weight: 2, dashArray: '6 8', opacity: 0.7 }).addTo(journeyLayer);
}

function fitJourney() {
  const pts = SITES.map(s => [s.lat, s.lng]);
  map.fitBounds(L.latLngBounds(pts).pad(0.18));
}

/* ═══════════════════════════════════════════════════════════
   SIDEBAR
   ═══════════════════════════════════════════════════════════ */
function renderSidebar() {
  const list = document.getElementById('stops-list');
  if (!list) return;
  list.innerHTML = SITES.map(site => {
    const eraChips = site.eras.map(k =>
      '<span class="chip" style="color:' + eraColor(k) + ';border-color:' + eraColor(k) + '55;background:' + eraColor(k) + '11">' + esc(eraLabel(k)) + '</span>'
    ).join('');
    return (
      '<button class="stop-card" data-id="' + site.id + '">' +
        '<span class="stop-num" style="background:' + site.theme + '">' + site.order + '</span>' +
        '<span class="stop-body">' +
          '<span class="stop-name">' + esc(siteName(site)) + '</span>' +
          '<span class="stop-meta">' + esc(site.region[lang]) + ' · ' + site.treasures.length + ' ' + esc(t('treasures')) + '</span>' +
          '<span class="stop-chips">' + eraChips + '</span>' +
        '</span>' +
      '</button>'
    );
  }).join('');

  list.querySelectorAll('.stop-card').forEach(btn => {
    btn.addEventListener('click', () => openSite(btn.dataset.id));
  });
}

/* ═══════════════════════════════════════════════════════════
   SITE DETAIL MODAL  (panorama appears here, on click)
   ═══════════════════════════════════════════════════════════ */
function openSite(id) {
  const site = SITES.find(s => s.id === id);
  if (!site) return;
  activeSiteId = id;

  const modal = document.getElementById('site-modal');
  const content = document.getElementById('site-modal-content');

  const byEra = {};
  site.treasures.forEach(tr => {
    const k = ntEraKey(tr);
    (byEra[k] = byEra[k] || []).push(tr);
  });
  const eraKeys = ERA_ORDER.filter(k => byEra[k]);

  const eraTimeline = site.eras.map(k =>
    '<span class="chip chip-lg" style="color:' + eraColor(k) + ';border-color:' + eraColor(k) + '55;background:' + eraColor(k) + '11">' + esc(eraLabel(k)) + '</span>'
  ).join('');

  const artifactSections = eraKeys.map(k => {
    const rows = byEra[k].map(tr => {
      const title = lang === 'vi' ? (tr.name || tr.english) : (tr.english || tr.name);
      const sub = lang === 'vi' ? (tr.english || '') : (tr.name || '');
      return (
        '<a class="artifact-row" href="treasure.html?id=' + tr.id + '" target="_blank">' +
          '<span class="artifact-dot" style="background:' + eraColor(k) + '"></span>' +
          '<span class="artifact-name">' + esc(title) + '</span>' +
          (sub ? '<span class="artifact-sub">' + esc(sub) + '</span>' : '') +
        '</a>'
      );
    }).join('');
    return (
      '<div class="era-block">' +
        '<div class="era-block-head" style="color:' + eraColor(k) + '">' + esc(eraLabel(k)) + ' <span class="era-count">' + byEra[k].length + '</span></div>' +
        rows +
      '</div>'
    );
  }).join('');

  const mapsUrl = 'https://www.google.com/maps?q=' + site.lat + ',' + site.lng;
  const siteUrl = 'site.html?id=' + site.id;

  content.innerHTML =
    '<div class="site-modal-hero">' +
      '<img src="' + panoramaSVG(site) + '" alt="" class="site-modal-pano"/>' +
      '<div class="site-modal-hero-overlay">' +
        '<div class="site-modal-region">' + esc(t('step')) + ' ' + site.order + ' · ' + esc(site.region[lang]) + '</div>' +
        '<h2 class="site-modal-title">' + esc(siteName(site)) + '</h2>' +
      '</div>' +
    '</div>' +
    '<div class="site-modal-body">' +
      '<p class="site-modal-desc">' + esc(site.desc[lang] || site.desc.vi) + '</p>' +
      '<div class="site-modal-stats">' +
        '<div class="stat"><span class="stat-n">' + site.treasures.length + '</span><span class="stat-l">' + esc(t('modalCount')) + '</span></div>' +
        '<div class="stat"><span class="stat-n">' + site.eras.length + '</span><span class="stat-l">' + esc(t('modalEra')) + '</span></div>' +
      '</div>' +
      '<div class="site-modal-timeline-label">' + esc(t('modalTimeline')) + '</div>' +
      '<div class="site-modal-timeline">' + eraTimeline + '</div>' +
      '<div class="site-modal-artifacts-label">' + esc(t('modalArtifacts')) + '</div>' +
      '<div class="site-modal-artifacts">' + (artifactSections || '<p class="empty">—</p>') + '</div>' +
      '<div class="site-modal-actions">' +
        '<a class="btn btn-primary" href="' + siteUrl + '">' + esc(t('viewSiteDetails')) + '</a>' +
        '<a class="btn btn-ghost" href="' + mapsUrl + '" target="_blank">' + esc(t('openMaps')) + '</a>' +
        '<button class="btn btn-ghost" id="site-modal-close-btn">' + esc(t('modalBack')) + '</button>' +
      '</div>' +
    '</div>';

  modal.classList.add('open');
  document.body.classList.add('modal-open');

  document.getElementById('site-modal-close-btn').addEventListener('click', closeSite);
  document.getElementById('site-modal-close').addEventListener('click', closeSite);

  map.setView([site.lat, site.lng], 8, { animate: true });
}

function closeSite() {
  document.getElementById('site-modal').classList.remove('open');
  document.body.classList.remove('modal-open');
  activeSiteId = null;
}

/* ═══════════════════════════════════════════════════════════
   LANGUAGE
   ═══════════════════════════════════════════════════════════ */
function applyLang() {
  document.documentElement.lang = lang;
  document.title = t('pageTitle');
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('nav-home', t('navHome'));
  set('nav-map', t('navMap'));
  set('nav-db', t('navDb'));
  set('nav-about', t('navAbout'));
  set('nav-journey', t('navJourney'));
  set('eyebrow', t('eyebrow'));
  set('title1', t('title1'));
  set('title-em', t('titleEm'));
  set('title2', t('title2'));
  set('subtitle', t('subtitle'));
  set('stat-sites-label', t('statSites'));
  set('stat-treasures-label', t('statTreasures'));
  set('stat-eras-label', t('statEras'));
  set('stops-label', t('stopsLabel'));
  set('map-reset', t('mapReset'));
  set('footer-copyright', t('footerCopyright'));
  document.getElementById('footer-credit').innerHTML = t('footerCredit');

  const totalTreasures = SITES.reduce((n, s) => n + s.treasures.length, 0);
  const eraSet = {};
  SITES.forEach(s => s.eras.forEach(k => { eraSet[k] = true; }));
  set('stat-sites', String(SITES.length));
  set('stat-treasures', String(totalTreasures));
  set('stat-eras', String(Object.keys(eraSet).length));

  renderSidebar();
  if (journeyLayer) {
    journeyLayer.clearLayers();
    renderPins();
    renderPath();
  }
  if (activeSiteId) openSite(activeSiteId);
}

/* ═══════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════ */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    lang = btn.dataset.lang;
    localStorage.setItem('vnmt_lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    applyLang();
  });
});

document.getElementById('map-reset').addEventListener('click', () => fitJourney());

document.getElementById('site-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeSite();
});

applyLang();
initMap();



