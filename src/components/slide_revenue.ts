import { unitEconomics, fiveYearProjections } from "../modules/data";

export function renderRevenue(): string {
  // Build SVG growth curve points
  const maxRev = 1614; // max revNum in millions
  const points: { x: number; y: number }[] = [];
  const chartW = 100;
  const chartH = 100;
  const padX = 8;
  const usableW = chartW - padX * 2;

  fiveYearProjections.forEach((p, i) => {
    const x = padX + (i / (fiveYearProjections.length - 1)) * usableW;
    const y = chartH - (p.revNum / maxRev) * (chartH * 0.85) - 5;
    points.push({ x, y });
  });

  // Smooth curve path
  let curvePath = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];
    const cpX = (curr.x + next.x) / 2;
    curvePath += ` C ${cpX} ${curr.y}, ${cpX} ${next.y}, ${next.x} ${next.y}`;
  }

  // Area fill path
  const areaPath = `${curvePath} L ${points[points.length - 1].x} ${chartH} L ${points[0].x} ${chartH} Z`;

  // Projection table rows
  const tableRows = fiveYearProjections.map(p => `
    <tr>
      <td class="fp-year">${p.year}</td>
      <td>${p.users}</td>
      <td>₦${p.revenue}</td>
      <td class="fp-cac">₦${p.cacCost}</td>
      <td class="fp-profit"><strong>₦${p.netProfit}</strong></td>
    </tr>
  `).join('');

  return `
  <section class="slide slide-revenue" data-slide="revenue">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-dark reveal text-label">Business Model</span>
      <h2 class="section-title reveal delay-1 text-white">Revenue &amp; Sustainability</h2>

      <!-- TOP BAR: CORE PLATFORM MODEL -->
      <div class="revenue-top-bar reveal delay-1">
        <div class="rtb-item">
          <span class="rtb-tag">CORE</span>
          <span class="rtb-label">Commission Model</span>
          <span class="rtb-value">15%</span>
        </div>
        <div class="rtb-divider"></div>
        <div class="rtb-item">
          <span class="rtb-label">Minimum Fee</span>
          <span class="rtb-value">\u20a6300</span>
          <span class="rtb-detail">Platform (Core): <strong>${unitEconomics.coreRev}</strong> | Total (Blended): <strong>${unitEconomics.blendedRev}</strong></span>
        </div>
      </div>

      <!-- MAIN GRID: REVENUE PILLARS -->
      <div class="revenue-main-grid reveal delay-2">
        <div class="revenue-pillar">
          <div class="pillar-header">
            <span class="stream-tag-new">B2B FULFILLMENT</span>
            <h3>Vendor Partnerships</h3>
          </div>
          <p class="pillar-desc">Become the core delivery + task infrastructure for campus vendors.</p>
          <ul class="pillar-list">
            <li>Partner with food spots, pharmacies, &amp; supermarkets</li>
            <li>Higher volume (100s of orders/day)</li>
            <li>Predictable demand &amp; scheduled tasks</li>
          </ul>
          <div class="pillar-footer">
            <span class="win-label">Why it wins</span>
            <div class="win-stats">
              <span>Commission (10\u201315%)</span>
              <span>Delivery fees</span>
              <span>Priority listings</span>
            </div>
          </div>
        </div>

        <div class="revenue-pillar">
          <div class="pillar-header">
            <span class="stream-tag-new">RECURRING</span>
            <h3>Subscription Model</h3>
          </div>
          <p class="pillar-desc">Stable, predictable income through student membership tiers.</p>
          <ul class="pillar-list">
            <li>₦1,000 \u2013 ₦2,000 / month</li>
            <li class="li-highlight">Save <strong>${unitEconomics.subscriptionSavings}</strong> on deliveries</li>
            <li>Priority runners &amp; faster response</li>
            <li>Access to exclusive discounts</li>
            <li>Schedule deliveries in advance</li>
          </ul>
          <div class="pillar-footer">
            <span class="win-label">Why it's powerful</span>
            <div class="win-stats">
              <span>Predictable cash flow</span>
              <span>Increased retention</span>
              <span>Lower CAC pressure</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 5-YEAR FINANCIAL PROJECTION -->
      <div class="fp-section reveal delay-3">
        <div class="fp-header">
          <h3 class="fp-title">5-Year Financial Projection</h3>
          <span class="fp-subtitle">Revenue Growth &amp; Profitability Trajectory</span>
        </div>

        <div class="fp-content-grid">
          <!-- LEFT: Growth Curve -->
          <div class="fp-chart-container">
            <div class="fp-chart-label-v">Revenue (₦m)</div>
            <svg class="fp-growth-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="fpGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:0.35" />
                  <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:0.02" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <!-- Grid lines -->
              <line x1="8" y1="20" x2="92" y2="20" stroke="rgba(255,255,255,0.06)" stroke-width="0.3"/>
              <line x1="8" y1="40" x2="92" y2="40" stroke="rgba(255,255,255,0.06)" stroke-width="0.3"/>
              <line x1="8" y1="60" x2="92" y2="60" stroke="rgba(255,255,255,0.06)" stroke-width="0.3"/>
              <line x1="8" y1="80" x2="92" y2="80" stroke="rgba(255,255,255,0.06)" stroke-width="0.3"/>
              <!-- Area fill -->
              <path d="${areaPath}" fill="url(#fpGrad)" />
              <!-- Curve line -->
              <path d="${curvePath}" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" filter="url(#glow)" class="fp-curve-line" />
              <!-- Data points -->
              ${points.map((p, i) => `
                <circle cx="${p.x}" cy="${p.y}" r="2.8" fill="white" stroke="white" stroke-width="1" class="fp-point fp-point-${i}" />
                <text x="${p.x}" y="${p.y - 5}" fill="white" font-size="4" text-anchor="middle" font-weight="bold" class="fp-point-label">₦${fiveYearProjections[i].revenue}</text>
              `).join('')}
              <!-- Year labels along bottom -->
              ${points.map((p, i) => `
                <text x="${p.x}" y="98" fill="rgba(255,255,255,0.5)" font-size="3.5" text-anchor="middle">Y${fiveYearProjections[i].year}</text>
              `).join('')}
            </svg>
          </div>

          <!-- RIGHT: Projection Table -->
          <div class="fp-table-wrap">
            <table class="fp-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Users</th>
                  <th>Revenue (₦)</th>
                  <th>CAC Cost (₦)</th>
                  <th>Net Profit (₦)</th>
                </tr>
              </thead>
              <tbody>
                ${tableRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
