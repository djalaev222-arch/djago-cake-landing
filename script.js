(function () {
  'use strict';

  var DESSERTS = [
    {
      name: 'Чизкейк «Манго-кокос»',
      diet: 'keto',
      dietLabel: 'Кето',
      composition: 'Кокосовая мука, манго, эритрит',
      price: '1 450 ₽',
      gradient: 'radial-gradient(circle at 22% 28%, #fff 0 5px, transparent 6px),' +
        'radial-gradient(circle at 68% 18%, #fff 0 4px, transparent 5px),' +
        'radial-gradient(circle at 40% 70%, #fff 0 4.5px, transparent 5.5px),' +
        'radial-gradient(circle at 78% 62%, #E8823D 0 9px, transparent 10px),' +
        'radial-gradient(circle at 30% 55%, #F0A868 0 7px, transparent 8px),' +
        'linear-gradient(135deg, #F3C79A, #C97B4A 70%)'
    },
    {
      name: 'Брауни без глютена',
      diet: 'gf',
      dietLabel: 'БГБКБС',
      composition: 'Миндальная мука, какао, кленовый сироп',
      price: '390 ₽',
      gradient: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18) 0 2px, transparent 3px),' +
        'radial-gradient(circle at 60% 55%, rgba(255,255,255,0.12) 0 1.5px, transparent 2.5px),' +
        'radial-gradient(circle at 75% 20%, #2E2018 0 7px, transparent 8px),' +
        'radial-gradient(circle at 20% 70%, #2E2018 0 6px, transparent 7px),' +
        'linear-gradient(135deg, #8A6D3B, #4A362A 70%)'
    },
    {
      name: 'Веган-тарт с ягодами',
      diet: 'vegan',
      dietLabel: 'Веган',
      composition: 'Овсяная основа, кешью-крем, сезонные ягоды',
      price: '520 ₽',
      gradient: 'radial-gradient(circle at 25% 30%, #7B2D43 0 6px, transparent 7px),' +
        'radial-gradient(circle at 45% 55%, #9C3B5A 0 5px, transparent 6px),' +
        'radial-gradient(circle at 65% 25%, #4A5A8A 0 5px, transparent 6px),' +
        'radial-gradient(circle at 75% 60%, #7B2D43 0 4.5px, transparent 5.5px),' +
        'radial-gradient(circle at 35% 75%, #9C3B5A 0 4px, transparent 5px),' +
        'linear-gradient(135deg, #A9BC9C, #7A8B6F 70%)'
    },
    {
      name: 'Кето-панна-котта',
      diet: 'keto',
      dietLabel: 'Кето',
      composition: 'Кокосовые сливки, ваниль, эритрит',
      price: '480 ₽',
      gradient: 'radial-gradient(circle at 20% 30%, #2E2018 0 1.2px, transparent 2px),' +
        'radial-gradient(circle at 35% 55%, #2E2018 0 1px, transparent 1.8px),' +
        'radial-gradient(circle at 55% 35%, #2E2018 0 1.3px, transparent 2.1px),' +
        'radial-gradient(circle at 70% 60%, #2E2018 0 1px, transparent 1.8px),' +
        'radial-gradient(circle at 45% 70%, #2E2018 0 1.1px, transparent 1.9px),' +
        'radial-gradient(circle at 80% 25%, #2E2018 0 1px, transparent 1.8px),' +
        'linear-gradient(135deg, #F0DCC9, #C97B4A 70%)'
    },
    {
      name: 'Морковный кекс БГБКБС',
      diet: 'gf',
      dietLabel: 'БГБКБС',
      composition: 'Рисовая мука, морковь, финики',
      price: '350 ₽',
      gradient: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0 30%, transparent 32%),' +
        'radial-gradient(circle at 30% 65%, #B5651D 0 4px, transparent 5px),' +
        'radial-gradient(circle at 60% 75%, #8A4A15 0 3.5px, transparent 4.5px),' +
        'radial-gradient(circle at 75% 55%, #B5651D 0 3px, transparent 4px),' +
        'linear-gradient(135deg, #E7B98A, #B5651D 70%)'
    },
    {
      name: 'Веган-чизкейк с фисташкой',
      diet: 'vegan',
      dietLabel: 'Веган',
      composition: 'Кешью, фисташка, кокосовое масло',
      price: '560 ₽',
      gradient: 'radial-gradient(circle at 25% 25%, #5C6E4F 0 4px, transparent 5px),' +
        'radial-gradient(circle at 55% 45%, #7A8B6F 0 3.5px, transparent 4.5px),' +
        'radial-gradient(circle at 70% 30%, #5C6E4F 0 3px, transparent 4px),' +
        'radial-gradient(circle at 40% 70%, #7A8B6F 0 3px, transparent 4px),' +
        'radial-gradient(circle at 80% 65%, #5C6E4F 0 2.5px, transparent 3.5px),' +
        'linear-gradient(135deg, #C9D3BE, #7A8B6F 70%)'
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
        '<div class="dessert-stack-item">' +
          '<article class="dessert-card">' +
            '<div class="dessert-thumb" style="background:' + d.gradient + '"></div>' +
            '<span class="dessert-diet" data-diet-badge="' + d.diet + '">' + d.dietLabel + '</span>' +
            '<p class="dessert-name">' + d.name + '</p>' +
            '<p class="dessert-composition">' + d.composition + '</p>' +
            '<div class="dessert-bottom">' +
              '<span class="dessert-price">' + d.price + '</span>' +
              '<button class="dessert-order" type="button">Заказать <i data-lucide="arrow-right"></i></button>' +
            '</div>' +
          '</article>' +
        '</div>'
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
