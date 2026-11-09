// Casos: al hacer clic en una imagen se abre ampliada en un diálogo.
// Esc, el botón o un clic fuera la cierran; con varias imágenes, ← → pasan de una a otra.
(function () {
  var dialog = document.querySelector('[data-lightbox]');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  var img = dialog.querySelector('[data-lightbox-img]');
  var close = dialog.querySelector('[data-lightbox-close]');
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-zoom]'));
  var current = 0;
  var opener = null;

  function show(i) {
    current = (i + buttons.length) % buttons.length;
    var btn = buttons[current];
    var thumb = btn.querySelector('img');
    img.src = btn.getAttribute('data-zoom');
    img.alt = thumb ? thumb.alt : '';
  }

  buttons.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      opener = btn;
      show(i);
      dialog.showModal();
    });
  });

  close.addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', function (e) {
    if (buttons.length < 2) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); show(current + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(current - 1); }
  });
  dialog.addEventListener('close', function () {
    img.removeAttribute('src');
    if (opener) opener.focus();
  });
})();
