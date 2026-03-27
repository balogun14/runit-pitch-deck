export function renderCanvas(): string {
  return `
  <section class="slide slide-canvas" data-slide="canvas">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-dark reveal text-label text-center section-eyebrow-block">Business Model</span>
      <h2 class="section-title reveal delay-1 text-white text-center">The Run-It Canvas</h2>

      <div class="canvas-grid reveal delay-2">
        <div class="canvas-cell canvas-partners">
          <div class="canvas-header">
            <h4 class="canvas-title">Key Partners</h4>
            <span class="canvas-num">7</span>
          </div>
          <ul class="canvas-list">
            <li><strong>Authorities:</strong> Student Affairs, Campus Security, Student Union</li>
            <li><strong>Vendors:</strong> Campus eateries, print shops, hostel porters</li>
            <li><strong>Tech/Fin:</strong> Paystack, AWS/Railway, Agora</li>
          </ul>
        </div>

        <div class="canvas-cell canvas-activities">
          <div class="canvas-header">
            <h4 class="canvas-title">Key Activities</h4>
            <span class="canvas-num">8</span>
          </div>
          <ul class="canvas-list">
            <li>Managing marketplace liquidity</li>
            <li>Runner onboarding &amp; verification</li>
            <li>Dispute resolution &amp; reconciliation</li>
            <li>System monitoring &amp; bug triage</li>
            <li>Ambassador coordination</li>
          </ul>
        </div>

        <div class="canvas-cell canvas-value">
          <div class="canvas-header">
            <h4 class="canvas-title">Value Propositions</h4>
            <span class="canvas-num">1</span>
          </div>
          <div class="canvas-body">
            <p><strong>For Clients:</strong> Giving back time and eliminating the stress of unreliable logistics by structuring an inefficient system</p>
            <p><strong>For Runners:</strong> Opening an accessible window of opportunity to monetize free time effortlessly</p>
          </div>
        </div>

        <div class="canvas-cell canvas-relationships">
          <div class="canvas-header">
            <h4 class="canvas-title">Customer Relationships</h4>
            <span class="canvas-num">4</span>
          </div>
          <div class="canvas-body">
            <p>Highly personalized customer support dedicated to resolving disputes and maintaining clear communication</p>
          </div>
        </div>

        <div class="canvas-cell canvas-segments">
          <div class="canvas-header">
            <h4 class="canvas-title">Customer Segments</h4>
            <span class="canvas-num">2</span>
          </div>
          <div class="canvas-body">
            <p><strong>Clients:</strong> Students facing time scarcity and burnout who are willing to delegate tasks</p>
            <p><strong>Runners:</strong> Students with a strong hustle culture looking for a flexible way to earn money</p>
          </div>
        </div>

        <div class="canvas-cell canvas-resources">
          <div class="canvas-header">
            <h4 class="canvas-title">Key Resources</h4>
            <span class="canvas-num">6</span>
          </div>
          <ul class="canvas-list">
            <li><strong>Human:</strong> Founding team, campus ops leads, ambassadors</li>
            <li><strong>Digital:</strong> Golang, React PWA, PostgreSQL, Paystack, LiveKit</li>
            <li><strong>Financial:</strong> Seed capital, grants, payout float</li>
            <li><strong>Brand:</strong> &ldquo;Run-It Standard&rdquo; &amp; proprietary SOPs</li>
          </ul>
        </div>

        <div class="canvas-cell canvas-channels">
          <div class="canvas-header">
            <h4 class="canvas-title">Channels</h4>
            <span class="canvas-num">3</span>
          </div>
          <ul class="canvas-list">
            <li>Word of mouth (peer-to-peer)</li>
            <li>Video and graphic content</li>
            <li>Campus influencers &amp; ambassadors</li>
          </ul>
        </div>

        <div class="canvas-cell canvas-costs">
          <div class="canvas-header">
            <h4 class="canvas-title">Cost Structure</h4>
            <span class="canvas-num">9</span>
          </div>
          <ul class="canvas-list">
            <li><strong>Variable:</strong> App optimization, runner incentives, ambassador stipends, marketing</li>
            <li><strong>Fixed:</strong> Cloud hosting, API fees (maps, SMS), payment gateway reserves</li>
          </ul>
        </div>

        <div class="canvas-cell canvas-revenue-streams">
          <div class="canvas-header">
            <h4 class="canvas-title">Revenue Streams</h4>
            <span class="canvas-num">5</span>
          </div>
          <ul class="canvas-list">
            <li>15&ndash;20% commission on completed tasks</li>
            <li><strong>Future:</strong> Monthly subscription for free deliveries</li>
            <li><strong>Future:</strong> Vendor advertising</li>
          </ul>
        </div>
      </div>
    </div>
  </section>`;
}
