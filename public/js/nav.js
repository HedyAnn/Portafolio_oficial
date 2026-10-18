// Navbar: indicador deslizante, sección activa en el inicio, estado al hacer scroll y menú móvil.
(function () {
  var header = document.querySelector('[data-header]');
  if (!header) return;

  // --- Estado al hacer scroll ---
  var onScroll = function () {
    if (window.scrollY > 8) header.setAttribute('data-scrolled', '');
    else header.removeAttribute('data-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Indicador deslizante ---
  var track = header.querySelector('[data-nav-list]');
  var indicator = header.querySelector('[data-nav-indicator]');
  var links = track ? Array.prototype.slice.call(track.querySelectorAll('a')) : [];
  var active = links.filter(function (a) { return a.getAttribute('aria-current') === 'page'; })[0] || null;

  function moveTo(a) {
    if (!indicator || !track) return;
    if (!a) { indicator.classList.remove('is-on'); return; }
    var t = track.getBoundingClientRect();
    var r = a.getBoundingClientRect();
    var pad = 4;
    indicator.style.setProperty('--l', (r.left - t.left - pad) + 'px');
    indicator.style.setProperty('--r', (r.right - t.left - pad) + 'px');
    indicator.classList.add('is-on');
  }
  function setActive(a) {
    links.forEach(function (l) { l.classList.toggle('is-active', l === a); });
    active = a;
    moveTo(a);
  }
  if (track) {
    // Sin transición en la primera posición
    indicator.style.transition = 'none';
    setActive(active);
    track.setAttribute('data-ready', '');
    requestAnimationFrame(function () { requestAnimationFrame(function () { indicator.style.transition = ''; }); });
    links.forEach(function (a) {
      a.addEventListener('pointerenter', function () { moveTo(a); });
      a.addEventListener('focus', function () { moveTo(a); });
    });
    track.addEventListener('pointerleave', function () { moveTo(active); });
    track.addEventListener('focusout', function (e) { if (!track.contains(e.relatedTarget)) moveTo(active); });
    window.addEventListener('resize', function () { moveTo(active); });
    if (document.fonts) document.fonts.ready.then(function () { moveTo(active); });
  }

  // --- Sección visible en el inicio ---
  var spied = Array.prototype.slice.call(document.querySelectorAll('[data-spy]'));
  if (spied.length && 'IntersectionObserver' in window) {
    var visible = new Map();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible.set(e.target, e.isIntersecting ? e.intersectionRatio : 0); });
      var best = null, bestRatio = 0;
      visible.forEach(function (ratio, el) { if (ratio > bestRatio) { best = el; bestRatio = ratio; } });
      var key = best ? best.getAttribute('data-spy') : null;
      var link = key ? links.filter(function (a) { return a.getAttribute('data-spy-target') === key; })[0] : null;
      setActive(link || null);
    }, { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] });
    spied.forEach(function (s) { io.observe(s); });
  }

  // --- Menú móvil ---
  var btn = header.querySelector('[data-menu-toggle]');
  var panel = header.querySelector('[data-menu-panel]');
  function close(focusBtn) {
    if (!panel || panel.hidden) return;
    panel.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', btn.dataset.labelOpen || 'Abrir menú');
    if (focusBtn) btn.focus();
  }
  function open() {
    panel.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', btn.dataset.labelClose || 'Cerrar menú');
    var first = panel.querySelector('a');
    if (first) first.focus();
  }
  if (btn && panel) {
    btn.addEventListener('click', function () { panel.hidden ? open() : close(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(true); });
    document.addEventListener('click', function (e) { if (!header.contains(e.target)) close(false); });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) close(false); });
    window.matchMedia('(min-width: 860px)').addEventListener('change', function (m) { if (m.matches) close(false); });
  }
})();
