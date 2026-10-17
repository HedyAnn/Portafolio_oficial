// "Cómo trabajo": pestañas accesibles (patrón ARIA tabs): verticales en escritorio, fila horizontal en móvil.
// Sin JS, las etapas se ven apiladas.
(function () {
  var root = document.querySelector('[data-explorer]');
  if (!root) return;
  var tablist = root.querySelector('[data-tablist]');
  var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
  var panels = Array.prototype.slice.call(root.querySelectorAll('[data-panel]'));
  var rail = root.querySelector('[data-rail]');
  var current = 0;

  function select(i, focus) {
    current = i;
    tabs.forEach(function (t, j) {
      var on = j === i;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      t.classList.toggle('done', j < i);
    });
    panels.forEach(function (p, j) { p.hidden = j !== i; });
    if (rail) rail.style.setProperty('--p', tabs.length > 1 ? String(i / (tabs.length - 1)) : '1');
    if (focus) tabs[i].focus();
    // En móvil la fila es horizontal: acerca la etapa activa sin mover la página
    if (tablist.scrollWidth > tablist.clientWidth) {
      var t = tabs[i];
      tablist.scrollTo({ left: t.offsetLeft - 8, behavior: 'smooth' });
    }
  }

  function enable() {
    tablist.hidden = false;
    root.setAttribute('data-ready', '');
    select(current, false);
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(i, false); });
    t.addEventListener('keydown', function (e) {
      var n = tabs.length, k = e.key, next = null;
      if (k === 'ArrowDown' || k === 'ArrowRight') next = (i + 1) % n;
      else if (k === 'ArrowUp' || k === 'ArrowLeft') next = (i - 1 + n) % n;
      else if (k === 'Home') next = 0;
      else if (k === 'End') next = n - 1;
      if (next !== null) { e.preventDefault(); select(next, true); }
    });
  });

  enable();
})();
