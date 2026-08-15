/* ═══════════════════════════════════════════════════════════
   TRIP CHATBOT — shared heritage trip-planning assistant.
   Used by booking.html and index.html (replaces "Curator AI").
   Self-contained: injects its own CSS + DOM, exposes VH core.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.__VH_CHATBOT_INIT__) return;
  window.__VH_CHATBOT_INIT__ = true;

  const lang = () => localStorage.getItem('vnmt_lang') || 'vi';

  const STR = {
    vi: {
      title: 'Trợ lý du lịch di sản', status: 'Sẵn sàng · chạy cục bộ',
      placeholder: 'Hỏi về điểm đến, lễ hội...',
      welcome: 'Xin chào! 👋 Tôi là trợ lý du lịch di sản. Hãy cho tôi biết bạn muốn đi khi nào, vùng nào và thích gì — tôi sẽ gợi ý điểm đến và lễ hội phù hợp.',
      hint: 'Bạn có thể thử: "Miền Bắc", "tháng 4", "âm nhạc", hoặc "gợi ý cho tôi".',
      suggest: 'Dựa trên lựa chọn của bạn, tôi gợi ý những điểm đến sau:',
      fests: 'Lễ hội phù hợp: ',
      book: 'Đặt tour này',
      more: 'Hãy cho tôi biết thêm: bạn muốn đi vùng nào (Miền Bắc/Trung/Nam/Tây Nguyên) và thích gì (âm nhạc, hát, tín ngưỡng, lễ hội, thủ công)?',
    },
    en: {
      title: 'Heritage travel assistant', status: 'Ready · running locally',
      placeholder: 'Ask about sites, festivals...',
      welcome: 'Hello! 👋 I am your heritage travel assistant. Tell me when, where and what you like — I will suggest matching sites and festivals.',
      hint: 'Try: "North", "April", "music", or "suggest for me".',
      suggest: 'Based on your choices, I suggest these sites:',
      fests: 'Matching festivals: ',
      book: 'Book this trip',
      more: 'Tell me more: which region (North/Central/South/Highlands) and what you like (music, singing, belief, festival, craft)?',
    },
  };
  const t = k => STR[lang()][k];

  // Region mapping (province → broad region)
  const NORTH = ['Hà Nội','Bắc Ninh','Phú Thọ','Cao Bằng','Hà Giang','Lạng Sơn','Tuyên Quang','Lào Cai','Yên Bái','Ninh Bình','Thái Bình','Nam Định','Hưng Yên','Hải Dương','Bắc Giang','Vĩnh Phúc','Hòa Bình','Quảng Ninh'];
  const CENTRAL = ['Thừa Thiên Huế','Đà Nẵng','Quảng Ngãi','Nghệ An','Hà Tĩnh','Khánh Hòa','Ninh Thuận','Bình Thuận','Quảng Nam','Quảng Bình','Quảng Trị','Phú Yên','Bình Định'];
  const SOUTH = ['Cần Thơ','Hậu Giang','Sóc Trăng','Bạc Liêu','Cà Mau','An Giang','TP. Hồ Chí Minh','Đồng Tháp','Tiền Giang','Bến Tre','Vĩnh Long','Trà Vinh','Kiên Giang','Đồng Nai','Bình Dương','Tây Ninh','Long An'];
  const HIGHLANDS = ['Đắk Lắk','Gia Lai','Kon Tum','Lâm Đồng','Sơn La','Lai Châu','Điện Biên'];
  function provinceRegion(provinces) {
    for (const p of (provinces || [])) {
      if (NORTH.includes(p)) return 'north';
      if (CENTRAL.includes(p)) return 'central';
      if (SOUTH.includes(p)) return 'south';
      if (HIGHLANDS.includes(p)) return 'highlands';
    }
    return 'central';
  }
  const INTEREST_GENRES = { music: 'instrumental', singing: 'singings', belief: 'belief', festival: 'festival', craft: 'craft' };

  function suggestSites(startDate, region, interests) {
    const treasures = (typeof TREASURES !== 'undefined') ? TREASURES : [];
    const scored = [];
    treasures.forEach(tr => {
      let score = 0;
      const trRegion = provinceRegion(tr.provinces);
      if (region && trRegion === region) score += 3;
      (interests || []).forEach(i => { if (tr.genre === INTEREST_GENRES[i]) score += 2; });
      if (tr.status === 'inscribed') score += 0.5;
      if (score > 0) scored.push({ tr, score });
    });
    scored.sort((a, b) => b.score - a.score);
    const sites = scored.slice(0, 5).map(s => ({
      id: s.tr.id, name: s.tr.name, english: s.tr.english, location: s.tr.location,
      region: provinceRegion(s.tr.provinces), genre: s.tr.genre, status: s.tr.status,
      badge: s.tr.badge, desc_vi: s.tr.desc_vi, desc: s.tr.desc, lat: s.tr.lat, lng: s.tr.lng, score: s.score,
    }));

    let tripMonth = null;
    if (startDate) { const m = parseInt(startDate.split('-')[1], 10); if (m) tripMonth = m; }
    const festivals = [];
    (typeof FESTIVALS !== 'undefined' ? FESTIVALS : []).forEach(f => {
      if ((tripMonth && f.month === tripMonth) || (region && f.region === region)) {
        if (!festivals.find(x => x.id === f.id)) festivals.push(f);
      }
    });
    return { sites, festivals: festivals.slice(0, 4) };
  }

  async function fetchSuggestions(startDate, region, interests) {
    try {
      const res = await fetch('/api/v1/trip/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ start_date: startDate || null, region: region || null, interests: interests || [], lang: lang() }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.sites) && data.sites.length) return data;
      }
    } catch (e) { /* backend offline — use local scoring */ }
    return suggestSites(startDate, region, interests);
  }

  // Expose core for the booking wizard
  window.VH = { suggestSites, fetchSuggestions };

  // ── Inject CSS ──
  const css = `
.vh-chat-fab{position:fixed;bottom:28px;right:28px;z-index:9999;width:56px;height:56px;border-radius:50%;background:#c42b2b;color:#fff;border:none;font-size:24px;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;transition:transform .2s;}
.vh-chat-fab:hover{transform:scale(1.08);}
.vh-chat-panel{position:fixed;bottom:96px;right:28px;z-index:9999;width:380px;max-width:90vw;height:520px;background:#110f04;border:1px solid #2c2507;border-radius:12px;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.65);transform:translateY(12px) scale(.97);opacity:0;pointer-events:none;transition:transform .25s,opacity .22s;overflow:hidden;font-family:'DM Sans',sans-serif;}
.vh-chat-panel.visible{transform:translateY(0) scale(1);opacity:1;pointer-events:all;}
.vh-chat-header{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #2c2507;background:#181500;}
.vh-chat-header .t{font-family:'Playfair Display',serif;font-size:14px;color:#f5f0e6;}
.vh-chat-header .s{font-size:10.5px;color:#8a7c5e;}
.vh-chat-close{background:none;border:none;color:#8a7c5e;font-size:16px;cursor:pointer;}
.vh-chat-msgs{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:12px;}
.vh-msg{max-width:88%;padding:10px 14px;border-radius:10px;font-size:13px;line-height:1.6;}
.vh-msg.ai{align-self:flex-start;background:#181500;border:1px solid #2c2507;border-left:3px solid #c9a84c;color:#e8dfc8;}
.vh-msg.user{align-self:flex-end;background:#c42b2b;color:#fff;}
.vh-msg .sites{margin-top:8px;display:flex;flex-direction:column;gap:6px;}
.vh-msg .site-pill{background:#110f04;border:1px solid #2c2507;border-radius:6px;padding:6px 10px;font-size:12px;color:#e8c96a;cursor:pointer;}
.vh-msg .site-pill:hover{border-color:#c9a84c;}
.vh-quick-row{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.vh-quick{background:transparent;border:1px solid #2c2507;color:#e8c96a;border-radius:14px;padding:5px 12px;font-size:11.5px;cursor:pointer;}
.vh-quick:hover{border-color:#c9a84c;}
.vh-chat-input-row{display:flex;gap:8px;padding:10px 12px;border-top:1px solid #2c2507;background:#181500;}
.vh-chat-input{flex:1;background:#110f04;border:1px solid #2c2507;border-radius:6px;padding:9px 12px;color:#e8dfc8;font-size:13px;outline:none;font-family:inherit;}
.vh-chat-input:focus{border-color:#c9a84c;}
.vh-chat-send{background:#c42b2b;border:none;border-radius:6px;width:36px;height:36px;color:#fff;cursor:pointer;}
@media (max-width:440px){.vh-chat-panel{width:calc(100vw - 16px);right:8px;bottom:80px;}}
`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── Inject DOM ──
  const fab = document.createElement('button');
  fab.className = 'vh-chat-fab';
  fab.id = 'vh-chat-fab';
  fab.title = 'Trợ lý AI';
  fab.innerHTML = '💬';
  document.body.appendChild(fab);

  const panel = document.createElement('div');
  panel.className = 'vh-chat-panel';
  panel.id = 'vh-chat-panel';
  panel.innerHTML =
    '<div class="vh-chat-header">' +
      '<div><div class="t">' + t('title') + '</div><div class="s">' + t('status') + '</div></div>' +
      '<button class="vh-chat-close" aria-label="Close">✕</button>' +
    '</div>' +
    '<div class="vh-chat-msgs"></div>' +
    '<div class="vh-chat-input-row">' +
      '<input class="vh-chat-input" type="text" placeholder="' + t('placeholder') + '" />' +
      '<button class="vh-chat-send">➤</button>' +
    '</div>';
  document.body.appendChild(panel);

  const msgs = panel.querySelector('.vh-chat-msgs');
  const input = panel.querySelector('.vh-chat-input');
  const sendBtn = panel.querySelector('.vh-chat-send');
  const closeBtn = panel.querySelector('.vh-chat-close');

  let chatRegion = null;
  let chatMonth = null;

  function addMsg(html, role) {
    const d = document.createElement('div');
    d.className = 'vh-msg ' + role;
    d.innerHTML = html;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  function botSitesHtml(sites) {
    if (!sites || !sites.length) return '';
    let h = '<div class="sites">';
    sites.forEach(s => {
      const name = lang() === 'vi' ? s.name : (s.english || s.name);
      h += '<div class="site-pill">📍 ' + name + ' — ' + s.location + '</div>';
    });
    h += '</div>';
    return h;
  }

  async function botRespond(text) {
    const msg = text.toLowerCase();
    const regionMap = { 'miền bắc': 'north', 'north': 'north', 'miền trung': 'central', 'central': 'central', 'miền nam': 'south', 'south': 'south', 'tây nguyên': 'highlands', 'highlands': 'highlands' };
    for (const [kw, r] of Object.entries(regionMap)) { if (msg.includes(kw)) chatRegion = r; }
    const monthMatch = msg.match(/tháng\s*(\d{1,2})/) || msg.match(/(january|february|march|april|may|june|july|august|september|october|november|december)/);
    if (monthMatch) {
      const en = ['january','february','march','april','may','june','july','august','september','october','november','december'];
      if (monthMatch[1] && !isNaN(parseInt(monthMatch[1], 10))) chatMonth = parseInt(monthMatch[1], 10);
      else if (monthMatch[1]) chatMonth = en.indexOf(monthMatch[1]) + 1;
    }
    const interests = [];
    const interestMap = { 'âm nhạc': 'music', 'nhạc': 'music', 'music': 'music', 'hát': 'singing', 'dân ca': 'singing', 'singing': 'singing', 'tín ngưỡng': 'belief', 'belief': 'belief', 'lễ hội': 'festival', 'festival': 'festival', 'thủ công': 'craft', 'craft': 'craft', 'gốm': 'craft' };
    for (const [kw, i] of Object.entries(interestMap)) { if (msg.includes(kw)) interests.push(i); }

    const startDate = chatMonth ? ('2026-' + String(chatMonth).padStart(2, '0') + '-15') : null;
    const res = await fetchSuggestions(startDate, chatRegion, interests);

    let reply = '';
    if (res.sites && res.sites.length) {
      reply = t('suggest');
      reply += botSitesHtml(res.sites);
      if (res.festivals && res.festivals.length) {
        reply += '<br>🎉 ' + t('fests') + res.festivals.map(f => lang() === 'vi' ? f.name_vi : f.name_en).join(', ');
      }
      reply += '<br><div class="vh-quick-row"><button class="vh-quick" data-q="book">' + t('book') + '</button></div>';
    } else {
      reply = t('more');
    }
    addMsg(reply, 'ai');
  }

  function sendChat() {
    const text = input.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    input.value = '';
    botRespond(text);
  }

  function bookNow() {
    if (typeof window.vhShowPanel === 'function') {
      window.vhShowPanel(1);
    } else {
      window.location.href = 'booking.html';
    }
    panel.classList.remove('visible');
  }

  fab.addEventListener('click', () => {
    panel.classList.toggle('visible');
    if (panel.classList.contains('visible') && !msgs.children.length) {
      addMsg(t('welcome'), 'ai');
      addMsg(t('hint'), 'ai');
    }
  });
  closeBtn.addEventListener('click', () => panel.classList.remove('visible'));
  sendBtn.addEventListener('click', sendChat);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendChat(); });
  msgs.addEventListener('click', e => {
    const q = e.target.closest('.vh-quick');
    if (q && q.dataset.q === 'book') bookNow();
  });
})();


