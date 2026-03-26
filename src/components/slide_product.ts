export function renderProduct(): string {
  return `
  <section class="slide slide-product" data-slide="product">
    <div class="slide-inner product-layout">
      <div class="product-phone-wrap reveal-left delay-1">
        <div class="phone-frame phone-frame-alt float">
          <div class="phone-notch"></div>
          <div class="phone-screen">
            <div class="phone-status-bar">
              <span class="phone-status-time">9:41</span>
              <div class="phone-status-icons">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="6" width="3" height="12" rx="1"/><rect x="7" y="4" width="3" height="14" rx="1"/><rect x="12" y="2" width="3" height="16" rx="1"/><rect x="17" y="0" width="3" height="18" rx="1"/></svg>
                <svg width="20" height="12" viewBox="0 0 28 14" fill="currentColor"><rect x="0" y="1" width="23" height="12" rx="3" stroke="currentColor" stroke-width="1" fill="none" opacity="0.4"/><rect x="24" y="4.5" width="2" height="5" rx="1" opacity="0.3"/><rect x="2" y="3" width="14" height="8" rx="1.5" fill="currentColor"/></svg>
              </div>
            </div>
            <div class="app-nav-bar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
              <span class="app-nav-title">Review Details</span>
              <div class="app-progress-bar">
                <div class="app-progress-fill"></div>
              </div>
            </div>
            <div class="app-step-label">Step 2 of 2: Confirm Order</div>

            <div class="app-detail-card">
              <div class="app-detail-title">Delivery Route</div>
              <div class="app-route">
                <div class="app-route-point">
                  <span class="route-dot route-dot-blue"></span>
                  <div>
                    <span class="route-label">Pickup</span>
                    <span class="route-value">Cooperative Hostel</span>
                  </div>
                </div>
                <div class="app-route-line"></div>
                <div class="app-route-point">
                  <span class="route-dot route-dot-green"></span>
                  <div>
                    <span class="route-label">Dropoff</span>
                    <span class="route-value">Block Hostel 3</span>
                  </div>
                </div>
              </div>
              <div class="app-items-row">
                <span class="app-items-label">Items:</span>
                <span class="app-items-value">Bag Of Water</span>
              </div>
            </div>

            <div class="app-offer-section">
              <div class="app-offer-title">Set Your Offer</div>
              <div class="app-offer-row">
                <span class="app-offer-label">Recommended Runner Fee:</span>
                <span class="app-offer-value">\u20A6650</span>
              </div>
              <div class="app-offer-input-label">Your Offer (Runner Fee \u20A6):</div>
              <div class="app-offer-input-wrap">
                <button class="app-offer-btn-minus">-</button>
                <div class="app-offer-input">
                  <span class="app-offer-currency">\u20A6</span>
                  <span class="app-offer-amount">650</span>
                </div>
                <button class="app-offer-btn-plus">+</button>
              </div>
              <p class="app-offer-hint">Offering a higher fee attracts runners much faster. Minimum is \u20A6200.</p>
            </div>

            <button class="app-cta-btn">Create Request &middot; \u20A6650</button>

            <div class="app-bottom-nav">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="product-content">
        <span class="section-eyebrow section-eyebrow-light reveal text-label">The Product</span>
        <h2 class="section-title reveal delay-1 text-white">See It In Action</h2>
        <p class="product-desc reveal delay-2">
          A Progressive Web App built for campus life. Set your budget,
          find a runner, track your delivery in real-time, and pay securely
          &mdash; all from your phone.
        </p>
        <div class="product-features reveal delay-2">
          <div class="product-feature">
            <span class="product-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span>Reverse-bidding marketplace</span>
          </div>
          <div class="product-feature">
            <span class="product-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span>Escrow payment protection</span>
          </div>
          <div class="product-feature">
            <span class="product-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span>Geofenced campus delivery</span>
          </div>
          <div class="product-feature">
            <span class="product-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span>Real-time order tracking</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
