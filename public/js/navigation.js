(() => {
  const deck = document.getElementById('deck');
  const dotNav = document.getElementById('dotNav');
  const progressBar = document.getElementById('progressBar');
  const slideCounter = document.getElementById('slideCounter');
  const counterCurrent = slideCounter?.querySelector('.slide-counter-current');

  const slideNames = [
    'Cover', 'Problem', 'How It Works', 'Product',
    'Market', 'Traction', 'Revenue', 'Competition',
    'Team', 'Canvas', 'The Ask'
  ];

  let currentSlide = 0;
  let slides = [];

  function init() {
    slides = Array.from(document.querySelectorAll('.slide'));
    if (!slides.length) return;

    buildDotNav();
    observeSlides();
    listenKeyboard();
    addKeyboardHint();
  }

  function buildDotNav() {
    if (!dotNav) return;
    dotNav.innerHTML = slides.map((_, i) =>
      `<button class="dot-nav-item${i === 0 ? ' active' : ''}" data-slide="${i}" aria-label="Go to slide ${i + 1}: ${slideNames[i]}">
        <span class="dot-nav-tooltip">${slideNames[i]}</span>
      </button>`
    ).join('');

    dotNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.dot-nav-item');
      if (!btn) return;
      const idx = parseInt(btn.dataset.slide);
      goToSlide(idx);
    });
  }

  function observeSlides() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const idx = slides.indexOf(entry.target);
          if (idx !== -1) setActiveSlide(idx);
        }
      });
    }, {
      root: deck,
      threshold: 0.5,
    });

    slides.forEach(slide => observer.observe(slide));
  }

  function setActiveSlide(idx) {
    currentSlide = idx;

    // Update dots
    const dots = dotNav?.querySelectorAll('.dot-nav-item');
    dots?.forEach((dot, i) => dot.classList.toggle('active', i === idx));

    // Update progress bar
    const progress = ((idx + 1) / slides.length) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;

    // Update counter
    if (counterCurrent) counterCurrent.textContent = String(idx + 1);

    // Trigger slide animations
    slides[idx].classList.add('slide-active');

    // Toggle logo color for dark/light slides
    const darkSlides = ['hero', 'product', 'revenue', 'team', 'ask', 'canvas'];
    const slideName = slides[idx].dataset.slide;
    const logo = document.querySelector('.deck-logo');
    if (logo) {
      logo.classList.toggle('deck-logo--light', darkSlides.includes(slideName));
    }

    // Hide keyboard hint after first navigation
    const hint = document.querySelector('.keyboard-hint');
    if (hint && idx > 0) hint.classList.add('hidden');
  }

  function goToSlide(idx) {
    if (idx < 0 || idx >= slides.length) return;
    slides[idx].scrollIntoView({ behavior: 'smooth' });
  }

  function listenKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    });
  }

  function addKeyboardHint() {
    const hint = document.createElement('div');
    hint.className = 'keyboard-hint';
    hint.textContent = 'Use arrow keys or scroll to navigate';
    document.body.appendChild(hint);

    setTimeout(() => hint.classList.add('hidden'), 5000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
