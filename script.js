(function () {
  'use strict';

  var DESSERTS = [
    {
      name: 'Чизкейк «Манго-кокос»',
      diet: 'keto',
      dietLabel: 'Кето',
      composition: 'Кокосовая мука, манго, эритрит',
      price: '1 450 ₽',
      gradient: 'linear-gradient(135deg, #F3C79A, #C97B4A 70%)'
    },
    {
      name: 'Брауни без глютена',
      diet: 'gf',
      dietLabel: 'БГБКБС',
      composition: 'Миндальная мука, какао, кленовый сироп',
      price: '390 ₽',
      gradient: 'linear-gradient(135deg, #8A6D3B, #4A362A 70%)'
    },
    {
      name: 'Веган-тарт с ягодами',
      diet: 'vegan',
      dietLabel: 'Веган',
      composition: 'Овсяная основа, кешью-крем, сезонные ягоды',
      price: '520 ₽',
      gradient: 'linear-gradient(135deg, #A9BC9C, #7A8B6F 70%)'
    },
    {
      name: 'Кето-панна-котта',
      diet: 'keto',
      dietLabel: 'Кето',
      composition: 'Кокосовые сливки, ваниль, эритрит',
      price: '480 ₽',
      gradient: 'linear-gradient(135deg, #F0DCC9, #C97B4A 70%)'
    },
    {
      name: 'Морковный кекс БГБКБС',
      diet: 'gf',
      dietLabel: 'БГБКБС',
      composition: 'Рисовая мука, морковь, финики',
      price: '350 ₽',
      gradient: 'linear-gradient(135deg, #E7B98A, #B5651D 70%)'
    },
    {
      name: 'Веган-чизкейк с фисташкой',
      diet: 'vegan',
      dietLabel: 'Веган',
      composition: 'Кешью, фисташка, кокосовое масло',
      price: '560 ₽',
      gradient: 'linear-gradient(135deg, #C9D3BE, #7A8B6F 70%)'
    }
  ];

  function renderCatalog(filter) {
    var grid = document.getElementById('catalogGrid');
    if (!grid) return;

    var items = filter === 'all'
      ? DESSERTS
      : DESSERTS.filter(function (d) { return d.diet === filter; });

    grid.innerHTML = items.map(function (d) {
      return (
        '<article class="dessert-card">' +
          '<div class="dessert-thumb" style="background:' + d.gradient + '"></div>' +
          '<span class="dessert-diet" data-diet-badge="' + d.diet + '">' + d.dietLabel + '</span>' +
          '<p class="dessert-name">' + d.name + '</p>' +
          '<p class="dessert-composition">' + d.composition + '</p>' +
          '<div class="dessert-bottom">' +
            '<span class="dessert-price">' + d.price + '</span>' +
            '<button class="dessert-order" type="button">Заказать <i data-lucide="arrow-right"></i></button>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  function initCatalogTabs() {
    var tabs = document.querySelectorAll('.catalog-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
        renderCatalog(tab.getAttribute('data-diet'));
      });
    });
    renderCatalog('all');
  }

  function initScrollReveal() {
    var targets = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var groups = new Map();
    targets.forEach(function (el) {
      var parentNode = el.parentElement || el;
      if (!groups.has(parentNode)) groups.set(parentNode, []);
      groups.get(parentNode).push(el);
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = groups.get(el.parentElement) || [el];
        var index = siblings.indexOf(el);
        var delay = Math.max(0, index) * 90;
        setTimeout(function () {
          el.classList.add('is-visible');
        }, delay);
        observer.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) { observer.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (window.lucide) window.lucide.createIcons();
    initCatalogTabs();
    initScrollReveal();
  });
})();
