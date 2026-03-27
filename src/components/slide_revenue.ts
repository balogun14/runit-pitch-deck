export function renderRevenue(): string {
  return `
  <section class="slide slide-revenue" data-slide="revenue">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-dark reveal text-label">Business Model</span>
      <h2 class="section-title reveal delay-1 text-white">Revenue &amp; Sustainability</h2>

      <div class="revenue-badge reveal delay-1">
        <span class="badge">Commission Model (25%)</span>
        <span class="revenue-sub text-white">Platform fee on every successful transaction. 75% goes directly to student-runners.</span>
      </div>

      <div class="min-fee-bar reveal delay-2">
        <span class="min-fee-label">Minimum Service Fee</span>
        <span class="min-fee-value">\u20a6300</span>
        <span class="min-fee-split">Our Revenue: <strong>\u20a675</strong> &middot; Runner Earns: <strong>\u20a6225</strong></span>
      </div>

      <div class="financials-grid reveal delay-3">
        <div class="financial-card">
          <div class="financial-card-header">
            <h4>Unit Economics</h4>
          </div>
          <div class="financial-card-body">
            <p>CAC: <strong>\u20a6200</strong></p>
            <p>Revenue/User: <strong>\u20a6660/mo</strong></p>
            <p>Payback: <strong>~9 days</strong></p>
            <p class="cac-note-inline">Hybrid CAC: flyers + ambassadors + referrals. Dense campus networks = no paid ads at launch.</p>
          </div>
        </div>

        <div class="financial-card">
          <div class="financial-card-header">
            <h4>Growth Projection</h4>
          </div>
          <div class="financial-card-body">
            <p>Y1: 3,000 users &rarr; <strong>\u20a624M+</strong></p>
            <p>Y3: 15,000 users &rarr; <strong>\u20a6120M+</strong></p>
            <p>Y5: 60,000 users &rarr; <strong>\u20a6475M+</strong></p>
          </div>
        </div>

        <div class="financial-card">
          <div class="financial-card-header">
            <h4>Break-even &amp; Cash Flow</h4>
          </div>
          <div class="financial-card-body">
            <p>Break-even: <strong>~7,300 tasks</strong></p>
            <p>~<strong>1,200 active users</strong></p>
            <p>Cash flow positive <strong>Year 1</strong></p>
          </div>
        </div>
      </div>

      <div class="future-row reveal delay-5">
        <div class="future-item">
          <span class="stream-tag">B2B</span>
          <span>Vendor Partnerships &mdash; delivery infrastructure for campus vendors</span>
        </div>
        <div class="future-item">
          <span class="stream-tag">SUB</span>
          <span>Student Subscriptions &mdash; \u20a62K\u2013\u20a65K/mo for priority service</span>
        </div>
      </div>
    </div>
  </section>`;
}
