(() => {
  // Skip on touch devices
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (isTouch) return;

  function initTilt() {
    const heroPhone = document.getElementById('heroPhone');
    if (heroPhone) applyTilt(heroPhone);

    const productPhone = document.querySelector('.product-phone-wrap');
    if (productPhone) applyTilt(productPhone);
  }

  function applyTilt(container) {
    const frame = container.querySelector('.phone-frame');
    if (!frame) return;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      const rotateY = (x / rect.width) * 20;
      const rotateX = -(y / rect.height) * 15;

      frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      frame.style.transition = 'transform 0.1s ease-out';
    });

    container.addEventListener('mouseleave', () => {
      frame.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      frame.style.transition = 'transform 0.5s var(--ease-out-quart)';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTilt);
  } else {
    initTilt();
  }
})();
