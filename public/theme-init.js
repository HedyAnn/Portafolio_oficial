// Se carga en <head> antes de pintar: evita el parpadeo de tema.
(function () {
  var t = null;
  try { t = localStorage.getItem('hh-theme'); } catch (e) {}
  document.documentElement.dataset.scheme = t === 'light' || t === 'dark' ? t : 'light';
})();
