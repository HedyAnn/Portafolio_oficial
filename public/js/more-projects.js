// Inicio: el botón "Ver los N proyectos" despliega en la misma página los casos que no están destacados.
// Sin JavaScript se mantiene el enlace a la página de proyectos.
(function () {
  var button = document.querySelector('[data-more-toggle]');
  if (!button) return;
  var fallback = document.querySelector('[data-more-fallback]');
  var extras = document.querySelectorAll('.case-card.extra');
  if (!extras.length) return;
  if (fallback) fallback.hidden = true;
  button.hidden = false;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var behavior = reduce ? 'auto' : 'smooth';
  button.addEventListener('click', function () {
    var open = button.getAttribute('aria-expanded') === 'true';
    extras.forEach(function (el) { el.hidden = open; });
    button.setAttribute('aria-expanded', String(!open));
    button.textContent = open ? button.dataset.labelMore : button.dataset.labelLess;
    if (!open) extras[0].scrollIntoView({ behavior: behavior, block: 'start' });
    else button.closest('section').scrollIntoView({ behavior: behavior, block: 'start' });
  });
})();
