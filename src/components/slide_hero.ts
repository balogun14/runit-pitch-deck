import { tagline, subtitle, svcgRef } from "../modules/data";

export function renderHero(): string {
  return `
  <section class="slide slide-hero slide-active" data-slide="hero">
    <div class="checkerboard" aria-hidden="true"></div>
    <div class="slide-inner hero-layout">
      <div class="hero-content">
        <div class="hero-badge reveal">
          <span class="text-label">Pitch Deck 2026</span>
        </div>
        <h1 class="hero-title reveal delay-1">
          <span class="title-slam" aria-label="RUN-IT"><span class="slam-letter" style="--i:0">R</span><span class="slam-letter" style="--i:1">U</span><span class="slam-letter" style="--i:2">N</span><span class="slam-letter slam-hyphen" style="--i:3">-</span><span class="slam-letter" style="--i:4">I</span><span class="slam-letter" style="--i:5">T</span></span>
        </h1>
        <p class="hero-tagline reveal delay-2">${tagline}</p>
        <p class="hero-subtitle reveal delay-3">${subtitle}</p>
        <div class="hero-ref reveal delay-4">
          <span class="text-mono text-xs">${svcgRef}</span>
        </div>
      </div>

      <div class="hero-phone-wrap reveal-right delay-3" id="heroPhone">
        <div class="phone-frame">
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
            <div class="app-header">
              <span class="app-logo">RunIt</span>
              <div class="app-header-icons">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              </div>
            </div>
            <div class="app-greeting">Welcome back, Muhammed.</div>
            <div class="app-service-card">
              <div class="app-service-card-content">
                <div class="app-service-card-title">Pharmacy</div>
                <div class="app-service-card-sub">Health essentials.</div>
                <div class="app-service-card-text">MEDICATION<br>DELIVERED<br>SECURELY.</div>
              </div>
              <button class="app-service-btn">ACCESS</button>
            </div>
            <div class="app-services-section">
              <div class="app-services-label">Services</div>
              <div class="app-services-grid">
                <div class="app-service-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                  <span>Food</span>
                </div>
                <div class="app-service-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                  <span>Groceries</span>
                </div>
                <div class="app-service-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  <span>Pharmacy</span>
                </div>
                <div class="app-service-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                  <span>Printing</span>
                </div>
                <div class="app-service-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="6" width="22" height="12" rx="2"/><path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/></svg>
                  <span>Laundry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
