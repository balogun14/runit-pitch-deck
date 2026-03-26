(() => {
  function initDonuts() {
    const deck = document.getElementById('deck');
    const askSlide = document.querySelector('[data-slide="ask"]');
    if (!askSlide) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const donuts = entry.target.querySelectorAll('.donut:not(.animated)');
          donuts.forEach((donut, i) => {
            donut.classList.add('animated');
            const target = parseInt(donut.dataset.percentage);
            animateDonut(donut, target, i * 100);
          });
        }
      });
    }, { root: deck, threshold: 0.5 });

    observer.observe(askSlide);
  }

  function animateDonut(el, target, delay) {
    const duration = 1500;
    const start = performance.now() + delay;

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function update(now) {
      const elapsed = now - start;
      if (elapsed < 0) {
        requestAnimationFrame(update);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = eased * target;

      el.style.setProperty('--donut-fill', current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.classList.add('sweep-done');
      }
    }

    requestAnimationFrame(update);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDonuts);
  } else {
    initDonuts();
  }
})();
