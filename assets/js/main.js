/* Freesun's blog · 交互脚本
   只做两件事：深浅色切换、页脚年份。禁用 JS 也不影响阅读。 */
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  if (toggle) {
    toggle.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      toggle.setAttribute('aria-pressed', String(next === 'dark'));
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
