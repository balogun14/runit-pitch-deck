import { fundAllocations, milestones } from "../modules/data";

export function renderAsk(): string {
  const donutsHtml = fundAllocations
    .map(
      (f, i) => `
      <div class="donut-card reveal-scale delay-${i + 1}">
        <div class="donut" data-percentage="${f.percentage}" style="--donut-color: ${f.color}">
          <div class="donut-inner">
            <span class="donut-value counter" data-target="${f.percentage}" data-suffix="%">0%</span>
          </div>
        </div>
        <h4 class="donut-label">${f.category}</h4>
        <div class="donut-amount">${f.amount}</div>
        <p class="donut-desc">${f.description}</p>
      </div>`
    )
    .join("");

  const milestonesHtml = milestones
    .map(
      (m, i) => `
      <div class="milestone reveal delay-${i + 5}">
        <span class="milestone-check">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <span class="milestone-text">${m}</span>
      </div>`
    )
    .join("");

  return `
  <section class="slide slide-ask" data-slide="ask">
    <div class="slide-inner text-center">
      <span class="section-eyebrow section-eyebrow-dark reveal text-label">The Ask</span>
      <h2 class="section-title reveal delay-1 text-white">\u20A650,000,000 Grant Allocation</h2>
      <p class="section-subtitle section-subtitle-dark reveal delay-2">
        Non-equity grant to build a scalable student support &amp; employment platform
      </p>

      <div class="donuts-grid">
        ${donutsHtml}
      </div>

      <div class="milestones-section reveal delay-4">
        <h3 class="milestones-heading text-white">12-Month Milestones</h3>
        <div class="milestones-grid">
          ${milestonesHtml}
        </div>
      </div>

      <div class="qr-section reveal delay-7">
        <img src="/public/images/qr-code.jpeg" alt="Scan to try the RunIt MVP" class="qr-image" loading="lazy" />
        <p class="qr-caption text-label">Scan to Try the MVP</p>
      </div>
    </div>
  </section>`;
}
