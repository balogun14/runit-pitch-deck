export function renderRevenue(): string {
  return `
  <section class="slide slide-revenue" data-slide="revenue">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-dark reveal text-label">Business Model</span>
      <h2 class="section-title reveal delay-1 text-white">Revenue Strategy</h2>

      <div class="revenue-main-grid reveal delay-2">
        <!-- B2B Pillar -->
        <div class="revenue-pillar b2b-pillar">
          <div class="pillar-header">
            <span class="stream-tag-new">B2B Fulfillment</span>
            <h3>Vendor Partnerships</h3>
          </div>
          <div class="pillar-body">
            <p class="pillar-desc">Partner with local eateries, pharmacies, and supermarkets to become their <strong>delivery infrastructure</strong>.</p>
            <ul class="pillar-list">
              <li><strong>Commission:</strong> 10&ndash;30% per order</li>
              <li><strong>Volume:</strong> Hundreds of orders/day vs individual requests</li>
              <li><strong>Listing Fees:</strong> Priority positioning for local vendors</li>
            </ul>
            <div class="pillar-footer">
              <span class="win-label">Why it wins:</span>
              <p>Scalable volume &amp; high predictability.</p>
            </div>
          </div>
        </div>

        <!-- Student Pillar -->
        <div class="revenue-pillar sub-pillar">
          <div class="pillar-header">
            <span class="stream-tag-new">Stable Growth</span>
            <h3>Subscription Model</h3>
          </div>
          <div class="pillar-body">
            <p class="pillar-desc">Stable student plans (&#8358;2k&ndash;&#8358;5k/mo) for those requiring frequent, high-priority assistance.</p>
            <ul class="pillar-list">
              <li><strong>Free Deliveries:</strong> Zero-cost delivery for subscribers</li>
              <li><strong>Priority Runners:</strong> Faster matching &amp; handling</li>
              <li><strong>Retention:</strong> Locked-in usage &amp; predictable cash flow</li>
            </ul>
            <div class="pillar-footer">
              <span class="win-label">Why it's powerful:</span>
              <p>Reduces CAC pressure &amp; increases retention.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Transactional footnote -->
      <div class="revenue-footer reveal delay-4">
        <div class="footnote-item">
          <strong>Transactional Commision:</strong> 15&ndash;20% platform fee on peer-to-peer student tasks.
        </div>
        <div class="footnote-item">
          <strong>Unit Economics:</strong> Payback: <strong>~9 days</strong> &middot; Cash flow positive: <strong>Year 1</strong>
        </div>
      </div>
    </div>
  </section>`;
}
