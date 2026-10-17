// Hero: puntos de datos sueltos que se ordenan en un gráfico de metas por tienda.
// Datos ficticios. Sin dependencias. Respeta prefers-reduced-motion.
(function () {
  var root = document.querySelector('[data-units]');
  if (!root) return;
  var canvas = root.querySelector('canvas');
  var btn = root.querySelector('[data-units-toggle]');
  var label = root.querySelector('[data-units-label]');
  var caption = root.querySelector('[data-units-caption]');
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HEIGHTS = [9, 13, 12, 7, 14, 11, 16, 10, 13, 8, 15, 12]; // vendedores por tienda
  var META = 11;
  var COLS = HEIGHTS.length;
  var total = HEIGHTS.reduce(function (a, b) { return a + b; }, 0);
  var over = HEIGHTS.filter(function (h) { return h >= META; }).length;

  var W = 0, H = 0, dpr = 1, geo = null;
  var colors = {};
  var ordered = false;
  var pointer = null;
  var running = false;
  var last = 0;
  var startedAt = 0;
  var visible = true;

  // Generador pseudoaleatorio con semilla: el "caos" es siempre el mismo
  var seed = 7;
  function rand() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }

  var dots = [];
  HEIGHTS.forEach(function (h, c) {
    for (var i = 0; i < h; i++) {
      dots.push({ col: c, idx: i, hit: h >= META, x: 0, y: 0, rx: rand(), ry: rand(), ph: rand() * Math.PI * 2, sp: 0.4 + rand() * 0.6, mix: 0, delay: c * 45 + i * 6 });
    }
  });

  function hexToRgb(v) {
    v = v.trim();
    if (v.charAt(0) !== '#') return [180, 170, 210];
    if (v.length === 4) v = '#' + v[1] + v[1] + v[2] + v[2] + v[3] + v[3];
    return [parseInt(v.slice(1, 3), 16), parseInt(v.slice(3, 5), 16), parseInt(v.slice(5, 7), 16)];
  }
  function readColors() {
    var cs = getComputedStyle(document.documentElement);
    colors = {
      muted: hexToRgb(cs.getPropertyValue('--text-subtle')),
      primary: hexToRgb(cs.getPropertyValue('--primary')),
      accent: hexToRgb(cs.getPropertyValue('--accent')),
      text: cs.getPropertyValue('--text').trim(),
      subtle: cs.getPropertyValue('--text-subtle').trim(),
      grid: cs.getPropertyValue('--border').trim(),
      font: cs.getPropertyValue('--font-sans').trim(),
    };
  }

  function layout() {
    var r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    var pl = W < 420 ? 20 : 32, pr = W < 420 ? 16 : 28, pt = 76, pb = 40;
    var colW = (W - pl - pr) / COLS;
    var maxRows = Math.max.apply(null, HEIGHTS);
    var s = Math.min(colW * 0.9, (H - pt - pb) / (maxRows + 0.5));
    geo = { pl: pl, pr: pr, pt: pt, pb: pb, colW: colW, s: s, base: H - pb, r: Math.max(2.4, s * 0.36) };
  }

  function target(d) {
    var cx = geo.pl + geo.colW * (d.col + 0.5);
    return { x: cx, y: geo.base - (d.idx + 0.5) * geo.s };
  }
  function scatter(d, t) {
    var drift = reduce ? 0 : 1;
    return {
      x: geo.pl + d.rx * (W - geo.pl - geo.pr) + Math.sin(t * 0.0006 * d.sp + d.ph) * 10 * drift,
      y: geo.pt * 0.6 + d.ry * (H - geo.pt * 0.6 - geo.pb * 0.5) + Math.cos(t * 0.0005 * d.sp + d.ph) * 8 * drift,
    };
  }

  function mixRgb(a, b, t) {
    return 'rgb(' + Math.round(a[0] + (b[0] - a[0]) * t) + ',' + Math.round(a[1] + (b[1] - a[1]) * t) + ',' + Math.round(a[2] + (b[2] - a[2]) * t) + ')';
  }

  function draw(now) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    var avgMix = 0;
    dots.forEach(function (d) { avgMix += d.mix; });
    avgMix /= dots.length;

    // Línea de meta y etiquetas: aparecen a medida que los datos se ordenan
    if (avgMix > 0.02) {
      ctx.globalAlpha = Math.min(1, avgMix * 1.2);
      var my = geo.base - META * geo.s;
      ctx.strokeStyle = colors.text;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 6]);
      ctx.beginPath(); ctx.moveTo(geo.pl - 8, my); ctx.lineTo(W - geo.pr + 4, my); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = colors.text;
      ctx.font = '600 13px ' + colors.font;
      ctx.textBaseline = 'bottom';
      ctx.fillText('Meta', geo.pl - 6, my - 6);
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(geo.pl - 8, geo.base + 2); ctx.lineTo(W - geo.pr + 4, geo.base + 2); ctx.stroke();
      if (W > 360) {
        ctx.fillStyle = colors.subtle;
        ctx.font = '500 11px ' + colors.font;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        for (var c = 0; c < COLS; c++) ctx.fillText('T' + (c + 1), geo.pl + geo.colW * (c + 0.5), geo.base + 10);
        ctx.textAlign = 'start';
      }
      ctx.globalAlpha = 1;
    }

    dots.forEach(function (d) {
      var px = d.x, py = d.y;
      if (pointer) {
        var dx = px - pointer.x, dy = py - pointer.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 70 && dist > 0.01) {
          var f = Math.pow(1 - dist / 70, 2) * 20;
          px += (dx / dist) * f; py += (dy / dist) * f;
        }
      }
      var to = d.hit ? colors.primary : colors.accent;
      ctx.fillStyle = mixRgb(colors.muted, to, d.mix);
      ctx.globalAlpha = 0.55 + 0.45 * d.mix;
      ctx.beginPath();
      ctx.arc(px, py, geo.r * (0.8 + 0.2 * d.mix), 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function step(now) {
    if (!running) return;
    var dt = Math.min(64, now - (last || now));
    last = now;
    var elapsed = now - startedAt;
    var settled = true;
    var k = 1 - Math.exp(-dt / 110);
    dots.forEach(function (d) {
      var goal = ordered ? target(d) : scatter(d, now);
      var active = elapsed > (ordered ? d.delay : d.delay * 0.4);
      if (active) {
        d.x += (goal.x - d.x) * k;
        d.y += (goal.y - d.y) * k;
        d.mix += ((ordered ? 1 : 0) - d.mix) * k;
      }
      if (Math.abs(goal.x - d.x) > 0.3 || Math.abs(goal.y - d.y) > 0.3 || Math.abs((ordered ? 1 : 0) - d.mix) > 0.01) settled = false;
    });
    draw(now);
    // En estado ordenado y quieto, el bucle se detiene para no gastar batería
    if ((ordered && settled && !pointer) || !visible) { running = false; return; }
    requestAnimationFrame(step);
  }
  function kick() {
    if (running || reduce) { if (reduce) snap(); return; }
    running = true; last = 0;
    requestAnimationFrame(step);
  }
  function snap() {
    dots.forEach(function (d) {
      var g = ordered ? target(d) : scatter(d, 0);
      d.x = g.x; d.y = g.y; d.mix = ordered ? 1 : 0;
    });
    draw(0);
  }

  function setOrdered(v) {
    ordered = v;
    startedAt = performance.now();
    btn.dataset.ordered = String(v);
    label.textContent = v ? 'Ver los datos crudos' : 'Ordenar los datos';
    if (caption) caption.textContent = v ? over + ' de ' + COLS + ' tiendas sobre la meta' : total + ' registros sin contexto';
    kick();
  }

  btn.addEventListener('click', function () { setOrdered(!ordered); });
  canvas.addEventListener('pointermove', function (e) {
    var r = canvas.getBoundingClientRect();
    pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
    kick();
  });
  canvas.addEventListener('pointerleave', function () { pointer = null; kick(); });

  var ro = new ResizeObserver(function () { layout(); if (running) return; snapOrKeep(); });
  function snapOrKeep() { if (reduce || ordered) snap(); else kick(); }
  new MutationObserver(function () { readColors(); draw(performance.now()); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-scheme'] });
  new IntersectionObserver(function (entries) {
    visible = entries[0].isIntersecting;
    if (visible) kick();
  }).observe(canvas);

  readColors();
  layout();
  ro.observe(canvas);
  // Fuentes listas antes de dibujar texto en el canvas
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () {
    if (reduce) { ordered = true; setOrdered(true); return; }
    // Momento de entrada: los datos llegan desordenados y se ordenan solos
    dots.forEach(function (d) { var g = scatter(d, 0); d.x = g.x; d.y = g.y; });
    setOrdered(false);
    setTimeout(function () { setOrdered(true); }, 900);
  });
})();
