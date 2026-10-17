// Botón de tema claro/oscuro. Guarda la preferencia en este navegador.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  var meta = document.querySelector('meta[name="theme-color"]');
  function sync() {
    if (meta) meta.setAttribute('content', root.dataset.scheme === 'dark' ? '#0f0b1a' : '#fbf8ff');
    var next = root.dataset.scheme === 'dark' ? 'claro' : 'oscuro';
    btn.setAttribute('aria-label', 'Cambiar a tema ' + next);
  }
  sync();
  btn.addEventListener('click', function () {
    var theme = root.dataset.scheme === 'dark' ? 'light' : 'dark';
    root.dataset.scheme = theme;
    try { localStorage.setItem('hh-theme', theme); } catch (e) {}
    sync();
  });
})();
