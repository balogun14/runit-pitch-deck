import { unitEconomics } from "../modules/data";

export function renderRevenue(): string {
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
        <!-- B2B PILLAR -->
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

        <!-- SUBSCRIPTION PILLAR -->
        <div class="revenue-pillar">
          <div class="pillar-header">
            <span class="stream-tag-new">RECURRING</span>
            <h3>Subscription Model</h3>
          </div>
          <p class="pillar-desc">Stable, predictable income through student membership tiers.</p>
          <ul class="pillar-list">
            <li>₦2,000 \u2013 ₦5,000 / month</li>
            <li class="li-highlight">Save <strong>${unitEconomics.subscriptionSavings}</strong> on deliveries</li>
            <li>Priority runners &amp; faster response</li>
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

      <!-- BOTTOM BAR: FINANCIAL STATS -->
      <div class="revenue-bottom-stats reveal delay-3">
        <div class="stats-group">
          <span class="stats-label">Unit Economics</span>
          <div class="stats-row">
            <span>CAC: <strong>${unitEconomics.cac}</strong></span>
            <span>Rev/Order: <strong>${unitEconomics.blendedRev}</strong></span>
            <span>Payback: <strong>${unitEconomics.payback}</strong></span>
          </div>
        </div>
        <div class="stats-group">
          <span class="stats-label">Growth (Users)</span>
          <div class="stats-row">
            <span>Y1: <strong>3K</strong></span>
            <span>Y3: <strong>15K</strong></span>
            <span>Y5: <strong>60K</strong></span>
          </div>
        </div>
        <div class="stats-group">
          <span class="stats-label">Monetization Layers</span>
          <div class="stats-row">
            <span class="text-xs text-ink-dim">Demand Control + Multi-Layer Monetization Layering (B2B, Ads, Subscriptions)</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
