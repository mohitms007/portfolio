(function() {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function isDark() {
    const theme = root.getAttribute('data-theme');
    return theme ? theme === 'dark' : prefersDark.matches;
  }

  if (toggle) {
    toggle.addEventListener('click', function() {
      const next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        // Storage can be blocked; the toggle still works for this visit.
      }
    });
  }
})();
