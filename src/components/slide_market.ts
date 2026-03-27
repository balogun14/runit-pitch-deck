import { marketFunnel, whyNowReasons, fourPs } from "../modules/data";

export function renderMarket(): string {
  const funnelHtml = marketFunnel
    .map((step, i) => `
    <div class="funnel-step reveal delay-${i + 1}" style="max-width: ${100 - i * 8}%;">
      <div class="funnel-step-left">
        <span class="funnel-tier">${step.tier}</span>
        <div>
          <h4 class="funnel-headline">${step.headline}</h4>
          <p class="funnel-detail">${step.detail}</p>
        </div>
      </div>
      <div class="funnel-highlight">${step.highlight}</div>
    </div>
    ${i < marketFunnel.length - 1 ? '<div class="funnel-connector" aria-hidden="true"></div>' : ''}
  `)
    .join("");

  const reasonsHtml = whyNowReasons
    .map(
      (r, i) => `
      <div class="whynow-card reveal delay-${i + 4}">
        <div class="whynow-icon">${r.icon}</div>
        <div class="whynow-content">
          <h4 class="whynow-title">${r.title}</h4>
          <p class="whynow-desc">${r.description}</p>
        </div>
      </div>`
    )
    .join("");

  const fourPsHtml = fourPs
    .map(
      (p, i) => `
      <div class="whynow-card reveal delay-${i + 4}">
        <div class="whynow-icon">${p.icon}</div>
        <div class="whynow-content">
          <h4 class="whynow-title">${p.title}</h4>
          ${p.description ? `<p class="whynow-desc">${p.description}</p>` : ''}
          ${p.bullets ? `
            <ul class="feature-bullets">
              ${p.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      </div>`
    )
    .join("");

  return `
  <section class="slide slide-market" data-slide="market">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-block reveal text-label text-center">Market Opportunity</span>
      <h2 class="section-title reveal delay-1 text-center">From Campus to Continent</h2>
      <p class="section-subtitle reveal delay-2 text-center">A scalable, multi-billion-naira opportunity</p>

      <div class="market-funnel">
        ${funnelHtml}
      </div>
      <div class="whynow-section">
        <h3 class="whynow-heading reveal delay-3 text-center">Why Now? The Perfect Storm of 2026</h3>
        <div class="whynow-grid">
          ${reasonsHtml}
        </div>
      </div>

      <div class="four-ps-section" style="margin-top: var(--space-xl);">
        <h3 class="whynow-heading reveal delay-4 text-center">Go-To-Market (4Ps)</h3>
        <div class="four-ps-grid">
          ${fourPsHtml}
        </div>
      </div>
    </div>
  </section>`;
}
