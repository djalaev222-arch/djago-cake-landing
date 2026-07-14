(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function triggerReveal() {
    document.body.classList.add('is-loaded');
  }

  function initHeaderScroll() {
    var header = document.querySelector('.header');
    if (!header) return;

    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var panel = document.getElementById('mobileNav');
    if (!toggle || !panel) return;

    function close() {
      toggle.setAttribute('aria-expanded', 'false');
      panel.classList.remove('is-open');
    }

    function open() {
      toggle.setAttribute('aria-expanded', 'true');
      panel.classList.add('is-open');
    }

    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) close(); else open();
    });

    panel.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    document.addEventListener('click', function (e) {
      if (!panel.contains(e.target) && !toggle.contains(e.target)) close();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    requestAnimationFrame(triggerReveal);
    initHeaderScroll();
    initMobileNav();
  });
})();
