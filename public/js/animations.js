(() => {
  // Counter animation
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1800;
    const start = performance.now();

    // Determine display format
    const isMillions = target >= 1000000;
    const isThousands = target >= 1000 && target < 1000000;

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function formatNumber(num) {
      if (isMillions) {
        return (num / 1000000).toFixed(1);
      }
      if (isThousands) {
        return (num / 1000).toFixed(0);
      }
      return Math.round(num).toString();
    }

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = eased * target;

      el.textContent = prefix + formatNumber(current) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // Observe slides becoming active and trigger counters
  function initCounters() {
    const deck = document.getElementById('deck');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const counters = entry.target.querySelectorAll('.counter:not(.counted)');
          counters.forEach((counter, i) => {
            counter.classList.add('counted');
            setTimeout(() => animateCounter(counter), i * 150);
          });
        }
      });
    }, {
      root: deck,
      threshold: 0.5,
    });

    document.querySelectorAll('.slide').forEach(slide => observer.observe(slide));
  }

  // Process flow arrow animations
  function initFlowArrows() {
    const arrows = document.querySelectorAll('.flow-arrow');
    arrows.forEach(arrow => {
      const path = arrow.querySelector('path, line');
      if (path) {
        const length = path.getTotalLength ? path.getTotalLength() : 30;
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      }
    });
  }

  // Animate flow arrows when slide 3 becomes active
  function observeFlowSlide() {
    const deck = document.getElementById('deck');
    const slide3 = document.querySelector('[data-slide="how"]');
    if (!slide3) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const arrows = entry.target.querySelectorAll('.flow-arrow path, .flow-arrow line');
          arrows.forEach((path, i) => {
            setTimeout(() => {
              path.style.transition = 'stroke-dashoffset 0.6s var(--ease-out-quart)';
              path.style.strokeDashoffset = '0';
            }, 400 + i * 250);
          });
        }
      });
    }, { root: deck, threshold: 0.5 });

    observer.observe(slide3);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initCounters();
      initFlowArrows();
      observeFlowSlide();
    });
  } else {
    initCounters();
    initFlowArrows();
    observeFlowSlide();
  }
})();
