// Efectos del hero: luz que sigue al cursor, profundidad en las piezas del retrato y botón magnético.
// Solo con mouse y sin "reducir movimiento". Las variables se escriben con CSSOM (compatible con la CSP).
(function () {
  var hero = document.querySelector('[data-hero]');
  if (!hero) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  var portrait = hero.querySelector('[data-portrait]');
  var magnets = Array.prototype.slice.call(hero.querySelectorAll('[data-magnetic]'));
  var target = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
  var raf = 0;

  function tick() {
    cur.x += (target.x - cur.x) * 0.08;
    cur.y += (target.y - cur.y) * 0.08;
    if (portrait) {
      portrait.style.setProperty('--px', cur.x.toFixed(3));
      portrait.style.setProperty('--py', cur.y.toFixed(3));
    }
    if (Math.abs(target.x - cur.x) > 0.001 || Math.abs(target.y - cur.y) > 0.001) raf = requestAnimationFrame(tick);
    else raf = 0;
  }
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }

  hero.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    var r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
    hero.setAttribute('data-pointer', '');
    target.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    target.y = ((e.clientY - r.top) / r.height) * 2 - 1;
    kick();

    magnets.forEach(function (m) {
      var b = m.getBoundingClientRect();
      var dx = e.clientX - (b.left + b.width / 2), dy = e.clientY - (b.top + b.height / 2);
      var near = Math.abs(dx) < b.width / 2 + 40 && Math.abs(dy) < b.height / 2 + 40;
      m.style.setProperty('--tx', near ? (dx * 0.18).toFixed(1) + 'px' : '0px');
      m.style.setProperty('--ty', near ? (dy * 0.28).toFixed(1) + 'px' : '0px');
    });
  });
  hero.addEventListener('pointerleave', function () {
    hero.removeAttribute('data-pointer');
    target.x = 0; target.y = 0; kick();
    magnets.forEach(function (m) { m.style.setProperty('--tx', '0px'); m.style.setProperty('--ty', '0px'); });
  });
})();
