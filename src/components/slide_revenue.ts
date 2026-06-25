import { unitEconomics, fiveYearProjections } from "../modules/data";

export function renderRevenue(): string {
  const maxRev = Math.max(...fiveYearProjections.map((p) => p.revNum));
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

  let curvePath = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];
    const cpX = (curr.x + next.x) / 2;
    curvePath += ` C ${cpX} ${curr.y}, ${cpX} ${next.y}, ${next.x} ${next.y}`;
  }

  const areaPath = `${curvePath} L ${points[points.length - 1].x} ${chartH} L ${points[0].x} ${chartH} Z`;

  const tableRows = fiveYearProjections.map(p => `
    <tr>
      <td class="fp-year">${p.year}</td>
      <td>${p.users}</td>
      <td>${p.active}</td>
      <td>${p.orders}</td>
      <td>&#8358;${p.revenue}</td>
      <td class="fp-cac">&#8358;${p.cacCost}</td>
      <td class="fp-profit"><strong>&#8358;${p.contribution}</strong></td>
    </tr>
  `).join('');

  return `
  <section class="slide slide-revenue" data-slide="revenue">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-dark reveal text-label">Business Model</span>
      <h2 class="section-title reveal delay-1 text-white">Revenue &amp; Sustainability</h2>

      <div class="revenue-top-bar reveal delay-1">
        <div class="rtb-item">
          <span class="rtb-tag">CORE</span>
          <span class="rtb-label">Two-sided Commission</span>
          <span class="rtb-value">20% + 5%</span>
        </div>
        <div class="rtb-divider"></div>
        <div class="rtb-item">
          <span class="rtb-label">Base Unit</span>
          <span class="rtb-value">${unitEconomics.revenuePerOrder}/order</span>
          <span class="rtb-detail">Avg runner fee: <strong>${unitEconomics.avgRunnerFee}</strong> | Avg item cost: <strong>${unitEconomics.avgItemCost}</strong></span>
          <span class="rtb-detail">CAC: <strong>${unitEconomics.cacCost}</strong> | Payback: <strong>${unitEconomics.payback}</strong></span>
          <span class="rtb-detail">CAC tapers as referrals and campus density compound</span>
        </div>
      </div>

      <div class="revenue-main-grid reveal delay-2">
        <div class="revenue-pillar">
          <div class="pillar-header">
            <span class="stream-tag-new">RUNNER SIDE</span>
            <h3>20% Runner Commission</h3>
          </div>
          <p class="pillar-desc">Run-It earns a platform fee from the runner payout on every completed errand.</p>
          <ul class="pillar-list">
            <li>Example: &#8358;350 runner fee creates &#8358;70 platform revenue</li>
            <li>Runner keeps 80%, keeping the earning proposition attractive</li>
            <li>Revenue scales directly with successful task volume</li>
          </ul>
          <div class="pillar-footer">
            <span class="win-label">Why it works</span>
            <div class="win-stats">
              <span>Clear take-rate</span>
              <span>Escrow-backed</span>
              <span>Volume-led growth</span>
            </div>
          </div>
        </div>

        <div class="revenue-pillar">
          <div class="pillar-header">
            <span class="stream-tag-new">REQUESTER SIDE</span>
            <h3>5% Item-Cost Fee</h3>
          </div>
          <p class="pillar-desc">Requesters pay a small service fee tied to the cost of items purchased during the errand.</p>
          <ul class="pillar-list">
            <li>Example: &#8358;2,000 item cost adds &#8358;100 platform revenue</li>
            <li>Low enough for students, meaningful at repeated usage</li>
            <li>Works without external partnerships or subscription dependency</li>
          </ul>
          <div class="pillar-footer">
            <span class="win-label">Why it's realistic</span>
            <div class="win-stats">
              <span>Student-friendly</span>
              <span>Transparent pricing</span>
              <span>No B2B dependency</span>
            </div>
          </div>
        </div>
      </div>

      <div class="fp-section reveal delay-3">
        <div class="fp-header">
          <h3 class="fp-title">5-Year Conservative Projection</h3>
          <span class="fp-subtitle">Revenue and contribution after CAC + variable fulfilment costs</span>
        </div>

        <div class="fp-content-grid">
          <div class="fp-chart-container">
            <div class="fp-chart-label-v">Revenue (&#8358;m)</div>
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
              <line x1="8" y1="20" x2="92" y2="20" stroke="rgba(255,255,255,0.06)" stroke-width="0.3"/>
              <line x1="8" y1="40" x2="92" y2="40" stroke="rgba(255,255,255,0.06)" stroke-width="0.3"/>
              <line x1="8" y1="60" x2="92" y2="60" stroke="rgba(255,255,255,0.06)" stroke-width="0.3"/>
              <line x1="8" y1="80" x2="92" y2="80" stroke="rgba(255,255,255,0.06)" stroke-width="0.3"/>
              <path d="${areaPath}" fill="url(#fpGrad)" />
              <path d="${curvePath}" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" filter="url(#glow)" class="fp-curve-line" />
              ${points.map((p, i) => `
                <circle cx="${p.x}" cy="${p.y}" r="2.8" fill="white" stroke="white" stroke-width="1" class="fp-point fp-point-${i}" />
                <text x="${p.x}" y="${p.y - 5}" fill="white" font-size="4" text-anchor="middle" font-weight="bold" class="fp-point-label">&#8358;${fiveYearProjections[i].revenue}</text>
              `).join('')}
              ${points.map((p, i) => `
                <text x="${p.x}" y="98" fill="rgba(255,255,255,0.5)" font-size="3.5" text-anchor="middle">Y${fiveYearProjections[i].year}</text>
              `).join('')}
            </svg>
          </div>

          <div class="fp-table-wrap">
            <table class="fp-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Users</th>
                  <th>Active</th>
                  <th>Orders</th>
                  <th>Revenue</th>
                  <th>CAC</th>
                  <th>Contribution</th>
                </tr>
              </thead>
              <tbody>
                ${tableRows}
              </tbody>
            </table>
          </div>
        </div>

        <div class="rev-logic-footer">
          <div class="logic-unit">
             <span class="lu-tag">CALCULATION</span>
             <span class="lu-text">Revenue/order = 20% of runner fee + 5% of item cost</span>
          </div>
          <div class="logic-unit">
             <span class="lu-tag">ASSUMPTIONS</span>
             <div class="lu-list">
                <span>Year 1: 5,000 users</span>
                <span>50 orders/year</span>
                <span>&#8358;170 rev/order</span>
                <span>&#8358;30 variable cost/order</span>
                <span>CAC declines with campus density</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
