/* ═══════════════════════════════════════════════════════════
   TOUR PLANNER — Viet Heritage AI Tour Curator
   Gemini integration via the FastAPI backend proxy (/api/v1/chat).
   The API key lives server-side (backend/.env → GEMINI_API_KEY).
   Falls back to a local demo mode when the backend is unreachable.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── CONFIG ── */
  // The Gemini call is proxied through the backend at POST /api/v1/chat,
  // which holds GEMINI_API_KEY server-side (see backend/.env).
  // When the backend is unreachable, the page falls back to a local demo.
  const CHAT_ENDPOINT = '/api/v1/chat';

  /* ── I18N ── */
  const lang = () => localStorage.getItem('vnmt_lang') || 'vi';

  const STR = {
    vi: {
      navHome: 'Trang chủ', navBook: 'Đặt tour', navFest: 'Lễ hội', navJourney: 'Hành trình Bảo vật',
      navDb: 'Kho lưu trữ', navAbout: 'Giới thiệu', navLunar: 'Lịch Âm', navShop: 'Cửa hàng',
      navAiBtn: 'Tour AI', navMapBtn: 'Mở bản đồ',
      statusReady: 'Sẵn sàng',
      statusThinking: 'Đang suy nghĩ...',
      statusDemo: 'Chế độ demo (chưa kết nối AI)',
      welcome: 'Xin chào! 👋 Tôi là Tour AI — trợ lý thân thiện của Viet Heritage, sẵn sàng đồng hành cùng bạn lên kế hoạch hành trình di sản văn hóa Việt Nam.\n\nHãy cho tôi biết về chuyến đi của bạn: ngân sách, thời gian, nhịp độ và vùng miền yêu thích. Tôi sẽ gợi ý lộ trình di sản phù hợp nhất cho bạn.',
      thinking: 'AI đang suy nghĩ',
      placeholder: 'Hỏi về ngân sách, thời gian, vùng miền...',
      suggestions: ['Gợi ý tour 3 ngày miền Bắc', 'Ngân sách 5 triệu, 5 ngày', 'Tôi thích lễ hội và âm nhạc', 'Tour di sản miền Trung'],
      shareTitle: 'Chia sẻ chuyến đi',
      shareBtn: 'Chia sẻ chuyến đi',
      shareCopied: 'Đã sao chép liên kết chia sẻ!',
      shareEmpty: 'Hãy trò chuyện với AI để tạo lộ trình trước khi chia sẻ.',
      mapOverlayTitle: 'Lộ trình của bạn sẽ hiển thị tại đây',
      mapOverlaySub: 'Trò chuyện với Tour AI để tạo lộ trình di sản',
      clearConfirm: 'Xóa toàn bộ hội thoại?',
      error: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.',
      planCreated: '✅ **Plan đã tạo!** Lộ trình đã sẵn sàng — hãy đặt chỗ ngay.',
      eyebrow: 'Viet Heritage · Tour AI',
      titleA: 'Trợ lý Tour AI',
      titleB: 'đồng hành cùng bạn',
      sub: 'Trò chuyện với trợ lý AI thân thiện để lên kế hoạch hành trình di sản Việt Nam phù hợp với ngân sách, thời gian và sở thích của bạn.',
      chatTitle: 'Tour AI · Viet Heritage',
      previewEyebrow: 'Bản đồ di sản',
      previewTitle: 'Xem trước lộ trình',
      clearTitle: 'Xóa hội thoại',
      sendLabel: 'Gửi',
      footCopy: '© 2026 Di sản văn hóa phi vật thể Việt Nam',
      footData: 'Dữ liệu: <em>UNESCO</em> · Bản đồ: <em>CartoDB / OpenStreetMap</em>',
    },
    en: {
      navHome: 'Home', navBook: 'Book a trip', navFest: 'Festivals', navJourney: 'Treasure Journey',
      navDb: 'Archive', navAbout: 'About', navLunar: 'Lunar Calendar', navShop: 'Shop',
      navAiBtn: 'Tour AI', navMapBtn: 'Open map',
      statusReady: 'Ready',
      statusThinking: 'Thinking...',
      statusDemo: 'Demo mode (AI not connected)',
      welcome: 'Hello! 👋 I am Tour AI — your friendly Viet Heritage assistant, here to help you plan Vietnamese cultural heritage journeys.\n\nTell me about your trip: budget, duration, pace, and preferred regions. I will suggest the most suitable heritage routes for you.',
      thinking: 'AI is thinking',
      placeholder: 'Ask about budget, duration, region...',
      suggestions: ['Suggest a 3-day North tour', 'Budget 5M VND, 5 days', 'I like festivals and music', 'Central heritage tour'],
      shareTitle: 'Share trip',
      shareBtn: 'Share trip',
      shareCopied: 'Share link copied!',
      shareEmpty: 'Chat with the AI to build a route before sharing.',
      mapOverlayTitle: 'Your route will appear here',
      mapOverlaySub: 'Chat with Tour AI to create a heritage route',
      clearConfirm: 'Clear entire conversation?',
      error: 'Sorry, something went wrong. Please try again.',
      planCreated: '✅ **Plan created!** Your route is ready — book now.',
      eyebrow: 'Viet Heritage · Tour AI',
      titleA: 'Tour AI Assistant',
      titleB: 'here to help you',
      sub: 'Chat with a friendly AI assistant to plan a Vietnamese heritage journey that fits your budget, duration, and interests.',
      chatTitle: 'Tour AI · Viet Heritage',
      previewEyebrow: 'Heritage map',
      previewTitle: 'Route preview',
      clearTitle: 'Clear conversation',
      sendLabel: 'Send',
      footCopy: '© 2026 Vietnam Intangible Cultural Heritage',
      footData: 'Data: <em>UNESCO</em> · Map: <em>CartoDB / OpenStreetMap</em>',
    },
  };
  const t = k => STR[lang()][k];

  /* ── DOM refs ── */
  const $ = id => document.getElementById(id);
  const messagesEl = $('chat-messages');
  const inputEl = $('chat-input');
  const sendBtn = $('chat-send');
  const clearBtn = $('chat-clear');
  const statusEl = $('chat-status');
  const statusText = $('chat-status-text');
  const suggestionsEl = $('chat-suggestions');
  const shareBtn = $('share-btn');
  const shareResult = $('share-result');
  const mapOverlayTitle = $('map-overlay-title');
  const mapOverlaySub = $('map-overlay-sub');

  let conversation = [];
  let isBusy = false;

  /* ── Phase 2: <FINAL_PLAN_JSON> parsing (self-contained here so the
       hidden JSON block is always stripped from the visible chat bubble,
       even if the renderer module has not loaded yet). ── */
  function tryParseJson(raw) {
    try {
      const p = JSON.parse(raw);
      return p && typeof p === 'object' ? p : null;
    } catch (e) {
      return null;
    }
  }

  function parseFinalPlan(raw) {
    if (typeof raw !== 'string') return { text: raw, plan: null };

    // Primary: match the exact XML-like wrapper (case-insensitive).
    const reTag = /<FINAL_PLAN_JSON>\s*([\s\S]*?)\s*<\/FINAL_PLAN_JSON>/i;
    const m = raw.match(reTag);
    let text = raw;
    let plan = null;

    if (m) {
      text = raw.replace(reTag, '').replace(/\s+$/, '').trim();
      const parsed = tryParseJson(m[1]);
      if (parsed && Array.isArray(parsed.locations)) plan = parsed;
    }

    // Fallback: if no wrapper matched but there's a JSON object containing a
    // "locations" array, extract that too so we stay resilient to formatting.
    if (!plan) {
      const reObj = /\{[\s\S]*?"locations"\s*:\s*\[[\s\S]*?\][\s\S]*?\}/;
      const objMatch = raw.match(reObj);
      if (objMatch) {
        const parsed = tryParseJson(objMatch[0]);
        if (parsed && Array.isArray(parsed.locations)) {
          plan = parsed;
          text = raw.replace(reObj, '').replace(/\s+$/, '').trim();
        }
      }
    }

    return { text: text || raw, plan: plan };
  }

  // Expose for the renderer module; harmless if the renderer also defines it.
  if (typeof window.VHParseFinalPlan !== 'function') {
    window.VHParseFinalPlan = parseFinalPlan;
  }

  /* ── Booking routing: keep users on our platform.
       We take data from Booking.com but the CTA goes to tour_booking.html
       (which embeds Booking.com in an iframe) rather than leaving the site. ── */
  function tourBookingUrl(plan) {
    const base = window.location.origin
      + window.location.pathname.replace(/[^/]*$/, 'tour_booking.html');
    return base + '?plan=' + encodeURIComponent(JSON.stringify(plan));
  }

  function buildBookingLinksText(plan) {
    const url = tourBookingUrl(plan);
    return '**Đặt chỗ & Di chuyển ngay trên trang của chúng tôi** (Booking.com tích hợp, không rời khỏi Viet Heritage):\n'
      + '\n- [🏨 Đặt phòng & Di chuyển →](' + url + ')';
  }

  /* ── Markdown rendering (safe: escapes HTML first) ── */
  function escapeHtml(s) {
    return s
      .replace(/&/g, '&' + 'amp;')
      .replace(/</g, '&' + 'lt;')
      .replace(/>/g, '&' + 'gt;')
      .replace(/"/g, '&' + 'quot;');
  }

  function inlineMd(s) {
    let h = escapeHtml(s);
    h = h.replace(/`([^`]+)`/g, '<code>$1</code>');
    h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    h = h.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
    h = h.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    return h;
  }

  function renderMarkdown(src) {
    const lines = src.split('\n');
    let out = '';
    let inUl = false;
    let inOl = false;
    let inCode = false;

    const closeLists = () => {
      if (inUl) { out += '</ul>'; inUl = false; }
      if (inOl) { out += '</ol>'; inOl = false; }
    };

    for (const raw of lines) {
      if (/^```/.test(raw.trim())) {
        if (inCode) { out += '</code></pre>'; inCode = false; }
        else { closeLists(); out += '<pre><code>'; inCode = true; }
        continue;
      }
      if (inCode) { out += escapeHtml(raw) + '\n'; continue; }

      const t = raw.trim();
      if (!t) { closeLists(); continue; }

      let m = t.match(/^(#{1,4})\s+(.*)$/);
      if (m) {
        closeLists();
        const lvl = m[1].length;
        out += '<h' + (lvl + 1) + '>' + inlineMd(m[2]) + '</h' + (lvl + 1) + '>';
        continue;
      }

      m = t.match(/^[-*•]\s+(.*)$/);
      if (m) {
        if (!inUl) { closeLists(); out += '<ul>'; inUl = true; }
        out += '<li>' + inlineMd(m[1]) + '</li>';
        continue;
      }

      m = t.match(/^\d+[.)]\s+(.*)$/);
      if (m) {
        if (!inOl) { closeLists(); out += '<ol>'; inOl = true; }
        out += '<li>' + inlineMd(m[1]) + '</li>';
        continue;
      }

      m = t.match(/^>\s?(.*)$/);
      if (m) {
        closeLists();
        out += '<blockquote>' + inlineMd(m[1]) + '</blockquote>';
        continue;
      }

      if (/^(-{3,}|\*{3,})$/.test(t)) { closeLists(); out += '<hr>'; continue; }

      closeLists();
      out += '<p>' + inlineMd(t) + '</p>';
    }

    closeLists();
    if (inCode) out += '</code></pre>';
    return out;
  }

  /* ── Message rendering ── */
  function addMsg(text, role) {
    const d = document.createElement('div');
    d.className = 'msg ' + role;
    if (role === 'ai') {
      d.innerHTML = renderMarkdown(text);
    } else {
      d.textContent = text;
    }
    messagesEl.appendChild(d);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return d;
  }

  function addThinking() {
    const d = document.createElement('div');
    d.className = 'msg ai thinking';
    d.innerHTML = '<span>' + t('thinking') + '</span><span class="thinking-dots"><span></span><span></span><span></span></span>';
    messagesEl.appendChild(d);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return d;
  }

  /* Streaming effect: reveal text progressively */
  function streamText(el, fullText, onDone) {
    el.classList.add('streaming');
    let i = 0;
    const step = () => {
      i += 2; // 2 chars per tick for a smooth, fast effect
      el.innerHTML = renderMarkdown(fullText.slice(0, i));
      messagesEl.scrollTop = messagesEl.scrollHeight;
      if (i < fullText.length) {
        setTimeout(step, 16);
      } else {
        el.classList.remove('streaming');
        if (onDone) onDone();
      }
    };
    step();
  }

  /* ── Status ── */
  function setThinking(on) {
    statusEl.classList.toggle('thinking', on);
    statusText.textContent = on ? t('statusThinking') : t('statusReady');
  }

  function setDemoMode(on) {
    statusEl.classList.toggle('demo', on);
    if (on) {
      statusText.textContent = t('statusDemo');
    } else {
      statusText.textContent = t('statusReady');
    }
  }

  /* ── Gemini API (via backend proxy) ──
     Returns { reply, plan } where plan is null until the user confirms.
     Retries transient failures (network / 5xx) before giving up. */
  async function callGemini(userText) {
    const messages = conversation.map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      text: m.text,
    }));

    const MAX_ATTEMPTS = 3;
    let lastErr = null;
    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      try {
        const res = await fetch(CHAT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages }),
        });

        if (res.status === 429 || res.status >= 500) {
          // Transient — retry with backoff.
          lastErr = new Error('Chat API error ' + res.status);
          if (attempt < MAX_ATTEMPTS - 1) {
            await new Promise(r => setTimeout(r, 1000 * Math.pow(2, attempt)));
            continue;
          }
          throw lastErr;
        }

        if (!res.ok) {
          const errText = await res.text();
          throw new Error('Chat API error ' + res.status + ': ' + errText);
        }

        const data = await res.json();
        const reply = data.reply;
        if (!reply) throw new Error('Empty response from chat API');
        return { reply: reply, plan: data.plan || null };
      } catch (e) {
        lastErr = e;
        if (attempt < MAX_ATTEMPTS - 1) {
          await new Promise(r => setTimeout(r, 1000 * Math.pow(2, attempt)));
          continue;
        }
      }
    }
    throw lastErr || new Error('Chat API unavailable');
  }

  /* Demo fallback when no API key */
  function demoReply(userText) {
    const msg = userText.toLowerCase();
    // Confirmation trigger (Phase 2): exercising the FINAL_PLAN_JSON flow
    // without a live AI connection so the map + booking UI can be verified.
    if (msg.includes('chốt plan') || msg.includes('chốt') || msg.includes('đồng ý') ||
        msg.includes('đòng ý') || msg.includes('ok luôn') || msg === 'ok' || msg === 'ok, chốt') {
      return 'Tuyệt vời! Hành trình của bạn đã sẵn sàng! 🎉\n\n' +
        '## Chuyến đi 3 ngày Cố đô Huế & Hội An\n\n' +
        '• **Ngày 1** — Huế: Đại Nội, Chùa Thiên Mụ, Nhã nhạc cung đình\n' +
        '• **Ngày 2** — Hội An: Phố cổ, chợ đêm, ẩm thực Thu Bồn\n' +
        '• **Ngày 3** — Thảnh thơi, Mỹ Sơn và chia tay miền di sản\n\n' +
        'Em đã vẽ lộ trình của bạn lên bản đồ! Bấm *Đặt chỗ & Di chuyển ngay* để hoàn tất. Chúc bạn có chuyến đi đáng nhớ! ✨\n\n' +
        '<FINAL_PLAN_JSON>\n' +
        '{\n' +
        '  "plan_confirmed": true,\n' +
        '  "summary": "Chuyến đi 3 ngày Cố đô Huế & Hội An",\n' +
        '  "locations": [\n' +
        '    {"name": "Đại Nội Huế", "lat": 16.4686, "lng": 107.5776, "day": 1},\n' +
        '    {"name": "Chùa Thiên Mụ", "lat": 16.4527, "lng": 107.5452, "day": 1},\n' +
        '    {"name": "Phố cổ Hội An", "lat": 15.8801, "lng": 108.3380, "day": 2}\n' +
        '  ],\n' +
        '  "accommodation_links": [\n' +
        '    {"city": "Huế", "checkin": "2026-09-01", "checkout": "2026-09-02"},\n' +
        '    {"city": "Hội An", "checkin": "2026-09-02", "checkout": "2026-09-03"}\n' +
        '  ],\n' +
        '  "transport_segments": [\n' +
        '    {"from": "Hà Nội", "to": "Huế", "type": "flight_or_train"},\n' +
        '    {"from": "Huế", "to": "Hội An", "type": "bus_or_car"}\n' +
        '  ]\n' +
        '}\n' +
        '</FINAL_PLAN_JSON>';
    }
    if (msg.includes('bắc') || msg.includes('north')) {
      return 'Tuyệt vời! Tôi gợi ý lộ trình 3 ngày miền Bắc:\n\n• Ngày 1: Hà Nội — Văn Miếu, Hoàng thành Thăng Long\n• Ngày 2: Bắc Ninh — Quan họ, chùa Dâu\n• Ngày 3: Phú Thọ — Đền Hùng, hát Xoan\n\nBạn muốn tôi điều chỉnh theo ngân sách hoặc thời gian không?';
    }
    if (msg.includes('trung') || msg.includes('central')) {
      return 'Miền Trung là lựa chọn tuyệt vời cho di sản! Gợi ý:\n\n• Huế — Nhã nhạc cung đình, Đại Nội\n• Quảng Nam — Hội An, Mỹ Sơn\n• Quảng Bình — Phong Nha\n\nBạn thích nhịp độ thong thả hay nhanh?';
    }
    if (msg.includes('lễ hội') || msg.includes('festival') || msg.includes('âm nhạc') || msg.includes('music')) {
      return 'Bạn yêu lễ hội và âm nhạc — thật tuyệt! 🎶\n\nGợi ý: Cồng Chiêng Tây Nguyên, Quan họ Bắc Ninh, Đờn ca tài tử Nam Bộ.\n\nBạn muốn đi vào tháng nào? Tôi sẽ chọn lễ hội phù hợp nhất.';
    }
    if (msg.includes('ngân sách') || msg.includes('budget') || msg.includes('triệu')) {
      return 'Về ngân sách, tôi có thể tối ưu lộ trình cho bạn:\n\n• Tiết kiệm: di chuyển bằng xe khách, homestay\n• Trung bình: combo tour 3-5 ngày\n• Cao cấp: trải nghiệm riêng tư, hướng dẫn chuyên sâu\n\nBạn dự định đi bao nhiêu ngày?';
    }
    return 'Cảm ơn bạn! Để tôi gợi ý lộ trình phù hợp, bạn có thể cho tôi biết thêm:\n\n• Vùng miền yêu thích (Bắc/Trung/Nam/Tây Nguyên)\n• Số ngày và ngân sách\n• Sở thích (lễ hội, âm nhạc, ẩm thực, thủ công)\n\nTôi sẽ xây dựng hành trình di sản hoàn hảo cho bạn! ✨';
  }

  /* ── Chat flow ── */
  async function sendMessage(text) {
    const msg = text.trim();
    if (!msg || isBusy) return;

    addMsg(msg, 'user');
    conversation.push({ role: 'user', text: msg });
    inputEl.value = '';
    isBusy = true;
    sendBtn.disabled = true;
    setThinking(true);

    const thinkingEl = addThinking();

    try {
      let result;
      try {
        result = await callGemini(msg);
      } catch (e) {
        // Backend unreachable or no key — fall back to local demo.
        console.warn('Chat API unavailable, using demo mode:', e);
        setDemoMode(true);
        await new Promise(r => setTimeout(r, 700));
        const demoText = demoReply(msg);
        // Demo mode still emits the legacy <FINAL_PLAN_JSON> block; parse it
        // so the map/booking UI works identically to the live path.
        const parsed = (typeof window.VHParseFinalPlan === 'function')
          ? window.VHParseFinalPlan(demoText)
          : { text: demoText, plan: null };
        result = { reply: parsed.text, plan: parsed.plan };
      }

      // The live API returns a structured envelope: reply is the markdown
      // bubble text, plan is a first-class field (null until confirmed).
      const replyText = result.reply;
      const plan = result.plan || null;

      conversation.push({ role: 'model', text: replyText });
      thinkingEl.remove();
      const aiEl = addMsg('', 'ai');
      streamText(aiEl, replyText, () => {
        isBusy = false;
        sendBtn.disabled = false;
        setThinking(false);
        // Only treat the plan as final when the user actually confirmed it AND
        // it carries real route data. The backend returns a plan object (with
        // plan_confirmed=false and empty arrays) on every non-confirmation
        // reply, so we must not show the "plan created" message or a booking
        // link until the user genuinely chốt the plan.
        const isConfirmed = plan
          && plan.plan_confirmed === true
          && Array.isArray(plan.locations)
          && plan.locations.length > 0;
        if (isConfirmed) {
          // Hand the plan to the map/booking renderer. Two paths keep this
          // resilient: a stored reference (read on renderer init) and a
          // dispatched event (delivered to any already-registered listener).
          window.__lastPlan = plan;
          window.dispatchEvent(new CustomEvent('tourplan:ready', { detail: plan }));
          // Visible confirmation shot after the plan is done, so the user sees
          // that tourplan:ready fired and the plan was created.
          addMsg(t('planCreated'), 'ai');
          // Always show zero-backend Booking.com + Google links in the chat,
          // so the user can purchase instantly even if the side card is absent.
          const linksText = buildBookingLinksText(plan);
          if (linksText) addMsg(linksText, 'ai');
        }
      });
    } catch (e) {
      console.error('Chat error:', e);
      thinkingEl.remove();
      addMsg(t('error'), 'ai');
      isBusy = false;
      sendBtn.disabled = false;
      setThinking(false);
    }
  }

  /* ── Suggestion chips ── */
  function renderSuggestions() {
    suggestionsEl.innerHTML = '';
    STR[lang()].suggestions.forEach(s => {
      const chip = document.createElement('button');
      chip.className = 'suggestion-chip';
      chip.textContent = s;
      chip.addEventListener('click', () => sendMessage(s));
      suggestionsEl.appendChild(chip);
    });
  }

  /* ── Share trip (mock link) ── */
  function shareTrip() {
    const hasRoute = conversation.some(m => m.role === 'model');
    if (!hasRoute) {
      shareResult.hidden = false;
      shareResult.textContent = t('shareEmpty');
      return;
    }
    const id = 'vh-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
    const link = window.location.origin + window.location.pathname + '?trip=' + id;
    shareResult.hidden = false;
    shareResult.textContent = link;
    // copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).then(() => {
        shareResult.textContent = t('shareCopied') + ' ' + link;
      }).catch(() => {});
    }
  }

  /* ── Language toggle (mirrors site convention) ── */
  function initLangToggle() {
    const btns = document.querySelectorAll('.lang-btn');
    const apply = () => {
      const l = lang();
      document.documentElement.classList.toggle('lang-vi', l === 'vi');
      btns.forEach(b => b.classList.toggle('active', b.dataset.lang === l));
      // update nav links
      $('nav-home').textContent = t('navHome');
      $('nav-book-link').textContent = t('navBook');
      $('nav-fest-link').textContent = t('navFest');
      $('nav-journey-link').textContent = t('navJourney');
      $('nav-db-link').textContent = t('navDb');
      $('nav-about').textContent = t('navAbout');
      $('nav-lunar').textContent = t('navLunar');
      $('nav-shop').textContent = t('navShop');
      $('nav-ai-btn-text').textContent = t('navAiBtn');
      $('nav-map-btn-text').textContent = t('navMapBtn');
      // update static texts
      statusText.textContent = t('statusReady');
      inputEl.placeholder = t('placeholder');
      mapOverlayTitle.textContent = t('mapOverlayTitle');
      mapOverlaySub.textContent = t('mapOverlaySub');
      shareBtn.querySelector('#share-btn-text').textContent = t('shareBtn');
      // page header
      $('planner-eyebrow').textContent = t('eyebrow');
      $('planner-title-a').textContent = t('titleA');
      $('planner-title-b').textContent = t('titleB');
      $('planner-sub').textContent = t('sub');
      // chat header
      $('chat-title').textContent = t('chatTitle');
      clearBtn.title = t('clearTitle');
      sendBtn.setAttribute('aria-label', t('sendLabel'));
      // preview panel
      $('preview-eyebrow').textContent = t('previewEyebrow');
      $('preview-title').textContent = t('previewTitle');
      // footer
      $('foot-copy').textContent = t('footCopy');
      $('foot-data').innerHTML = t('footData');
      renderSuggestions();
    };
    btns.forEach(b => b.addEventListener('click', () => {
      localStorage.setItem('vnmt_lang', b.dataset.lang);
      apply();
    }));
    apply();
  }

  /* ── Init ── */
  function init() {
    initLangToggle();

    // Greeting
    addMsg(t('welcome'), 'ai');

    // Events
    sendBtn.addEventListener('click', () => sendMessage(inputEl.value));
    inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(inputEl.value); });
    clearBtn.addEventListener('click', () => {
      if (confirm(t('clearConfirm'))) {
        messagesEl.innerHTML = '';
        conversation = [];
        addMsg(t('welcome'), 'ai');
      }
    });
    shareBtn.addEventListener('click', shareTrip);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();