import { revenueTable, unitEconomics } from "../modules/data";

export function renderRevenue(): string {
  const tableRows = revenueTable
    .map(
      (r) => `
      <tr>
        <td>${r.type}</td>
        <td>${r.fee}</td>
        <td class="text-purple">${r.revenue}</td>
        <td>${r.runner}</td>
      </tr>`
    )
    .join("");

  const metricsHtml = unitEconomics
    .map(
      (m, i) => `
      <div class="unit-metric reveal delay-${i + 3}">
        <div class="unit-metric-value">${m.value}</div>
        <div class="unit-metric-label">${m.label}</div>
        <div class="unit-metric-desc">${m.description}</div>
      </div>`
    )
    .join("");

  return `
  <section class="slide slide-revenue" data-slide="revenue">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-dark reveal text-label">Business Model</span>
      <h2 class="section-title reveal delay-1 text-white">Revenue &amp; Sustainability</h2>

      <div class="revenue-badge reveal delay-1">
        <span class="badge">Commission Model (25%)</span>
        <span class="revenue-sub text-white">Platform fee on every successful transaction. 75% goes directly to student-runners.</span>
      </div>

      <div class="revenue-table-wrap reveal wipe-in delay-2">
        <table class="revenue-table">
          <thead>
            <tr>
              <th>Run Type</th>
              <th>Service Fee</th>
              <th>Our Revenue (25%)</th>
              <th>Runner Earns (75%)</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>

      <div class="unit-economics">
        ${metricsHtml}
      </div>

      <div class="future-streams reveal delay-5">
        <h4 class="text-white">Future Revenue Streams</h4>
        <div class="streams-grid">
          <div class="stream-item">
            <span class="stream-tag">PRO</span>
            <span><strong>RunIt Pro:</strong> \u20A61,500/month subscription for zero delivery fees</span>
          </div>
          <div class="stream-item">
            <span class="stream-tag">ADS</span>
            <span><strong>Vendor Advertising:</strong> \u20A65,000/month for featured placement</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
