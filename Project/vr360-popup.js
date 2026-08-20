/* ── VR360 Popup — shared component ──
   Injects a "VR 360" button into every page's .nav-right,
   and an almost-fullscreen modal that embeds the VR360 viewer.
   Usage: <script src="vr360-popup.js"></script> before </body>. */
(function () {
  'use strict';

  var VR360_URL = 'https://vr360.yoolife.vn/d-ca-tru-zac3157u164495';

  /* ── Inject styles ── */
  var style = document.createElement('style');
  style.textContent =
    '.vr360-btn{display:inline-flex;align-items:center;gap:6px;' +
    'background:rgba(201,168,76,.12);color:#c9a84c;border:1.5px solid rgba(201,168,76,.45);' +
    'padding:5px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:.06em;' +
    'cursor:pointer;transition:all .2s;font-family:inherit;white-space:nowrap;}' +
    '.vr360-btn:hover{background:rgba(201,168,76,.22);border-color:#c9a84c;transform:translateY(-1px);}' +
    '.vr360-btn svg{flex-shrink:0;}' +
    '.vr360-overlay{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;' +
    'background:rgba(10,9,0,.88);backdrop-filter:blur(6px);padding:2.5vh 2.5vw;}' +
    '.vr360-overlay.open{display:flex;}' +
    '.vr360-modal{position:relative;width:95vw;height:95vh;max-width:1600px;max-height:1000px;' +
    'background:#0a0900;border:1px solid rgba(201,168,76,.3);border-radius:12px;overflow:hidden;' +
    'box-shadow:0 30px 80px rgba(0,0,0,.7);display:flex;flex-direction:column;}' +
    '.vr360-head{display:flex;align-items:center;justify-content:space-between;gap:12px;' +
    'padding:12px 18px;background:#110f04;border-bottom:1px solid rgba(201,168,76,.14);flex-shrink:0;}' +
    '.vr360-title{display:flex;align-items:center;gap:10px;color:#e8dfc8;font-family:Merriweather,serif;' +
    'font-size:14px;font-weight:700;}' +
    '.vr360-title svg{color:#c9a84c;}' +
    '.vr360-close{background:none;border:1px solid #2c2507;color:#8a7c5e;border-radius:50%;' +
    'width:32px;height:32px;font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;' +
    'transition:all .2s;flex-shrink:0;}' +
    '.vr360-close:hover{color:#c9a84c;border-color:#c9a84c;background:rgba(201,168,76,.08);}' +
    '.vr360-frame{flex:1;min-height:0;}' +
    '.vr360-frame iframe{width:100%;height:100%;border:0;display:block;}' +
    '.vr360-note{padding:8px 18px;background:#110f04;border-top:1px solid rgba(201,168,76,.14);' +
    'font-size:11px;color:#8a7c5e;line-height:1.6;flex-shrink:0;}' +
    '.vr360-note a{color:#e8c96a;text-decoration:underline;}' +
    '.vr360-note a:hover{color:#c9a84c;}' +
    '@media(max-width:640px){.vr360-overlay{padding:0;}.vr360-modal{width:100vw;height:100vh;border-radius:0;border:none;}}';

  document.head.appendChild(style);

  /* ── Build button ── */
  function buildButton() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'vr360-btn';
    btn.setAttribute('aria-label', 'Mở xem VR 360');
    btn.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M22 12h-2M2 12h2M12 2v2M12 20v2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"/>' +
      '<circle cx="12" cy="12" r="4"/></svg>' +
      '<span>VR 360</span>';
    return btn;
  }

  /* ── Build modal ── */
  function buildModal() {
    var overlay = document.createElement('div');
    overlay.className = 'vr360-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Xem VR 360');

    var modal = document.createElement('div');
    modal.className = 'vr360-modal';

    var head = document.createElement('div');
    head.className = 'vr360-head';

    var title = document.createElement('div');
    title.className = 'vr360-title';
    title.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M22 12h-2M2 12h2M12 2v2M12 20v2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"/>' +
      '<circle cx="12" cy="12" r="4"/></svg>' +
      '<span>Đàn ca tài tử — Xem VR 360</span>';

    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'vr360-close';
    close.setAttribute('aria-label', 'Đóng');
    close.innerHTML = '✕';

    head.appendChild(title);
    head.appendChild(close);

    var frame = document.createElement('div');
    frame.className = 'vr360-frame';
    var iframe = document.createElement('iframe');
    iframe.src = VR360_URL;
    iframe.title = 'VR 360 - Đàn ca tài tử';
    iframe.setAttribute('allow', 'fullscreen; accelerometer; gyroscope; xr-spatial-tracking');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('referrerpolicy', 'no-referrer');
    frame.appendChild(iframe);

    var note = document.createElement('div');
    note.className = 'vr360-note';
    note.innerHTML = 'Nếu cửa sổ VR không hiển thị, bạn có thể ' +
      '<a href="' + VR360_URL + '" target="_blank" rel="noopener noreferrer">mở trực tiếp trên trang VR 360 ↗</a>.';

    modal.appendChild(head);
    modal.appendChild(frame);
    modal.appendChild(note);
    overlay.appendChild(modal);

    document.body.appendChild(overlay);

    /* ── Close handlers ── */
    function closeModal() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    close.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });

    return { overlay: overlay, open: function () { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; } };
  }

  /* ── Wire up ── */
  function init() {
    // Standard pages: button goes into .nav-right
    var navRight = document.querySelector('.nav-right');
    // VNMT.html: button goes into the header .lang-toggle
    var headerToggle = document.querySelector('header .lang-toggle');

    var target = navRight || headerToggle;
    if (!target) return;

    var btn = buildButton();
    var modal = buildModal();

    btn.addEventListener('click', function () {
      modal.open();
    });

    target.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
