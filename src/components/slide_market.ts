import { marketMetrics, whyNowReasons } from "../modules/data";

export function renderMarket(): string {
  const metricsHtml = marketMetrics
    .map(
      (m, i) => `
      <div class="market-card reveal-scale delay-${i + 1}">
        <div class="market-number counter" data-target="${m.numericValue}" data-suffix="${m.suffix}">0</div>
        <h4 class="market-label">${m.label}</h4>
        <p class="market-desc">${m.description}</p>
      </div>`
    )
    .join("");

  const reasonsHtml = whyNowReasons
    .map(
      (r, i) => `
      <div class="whynow-card reveal delay-${i + 4}">
        <div class="whynow-icon">${r.icon}</div>
        <h4 class="whynow-title">${r.title}</h4>
        <p class="whynow-desc">${r.description}</p>
      </div>`
    )
    .join("");

  return `
  <section class="slide slide-market" data-slide="market">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-block reveal text-label text-center">Market Opportunity</span>
      <h2 class="section-title reveal delay-1 text-center">From Campus to Continent</h2>
      <p class="section-subtitle reveal delay-2 text-center">A scalable, multi-billion-naira opportunity</p>

      <div class="market-metrics">
        ${metricsHtml}
      </div>

      <div class="whynow-section">
        <h3 class="whynow-heading reveal delay-3 text-center">Why Now? The Perfect Storm of 2026</h3>
        <div class="whynow-grid">
          ${reasonsHtml}
        </div>
      </div>
    </div>
  </section>`;
}
