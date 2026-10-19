document.querySelectorAll('.talk-toggle').forEach((toggle) => {
  const panel = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!panel) return;

  panel.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.hidden = false;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    panel.hidden = expanded;
    toggle.setAttribute('aria-expanded', String(!expanded));
  });
});
