import { problemText, solutionText, visionText, missionText } from "../modules/data";

export function renderProblem(): string {
  return `
  <section class="slide slide-problem" data-slide="problem">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-block reveal text-label text-center">The Challenge</span>
      <h2 class="section-title reveal delay-1 text-center">Unreliable Logistics, Real Stakes</h2>

      <div class="problem-grid">
        <!-- THE PROBLEM -->
        <div class="problem-col reveal-left delay-2">
          <div class="problem-header-group">
            <span class="header-pre">The Struggle</span>
            <h3 class="problem-heading">
              WhatsApp Chaos
            </h3>
          </div>
          <div class="problem-text">${problemText}</div>
          <div class="problem-tags">
            <span class="tag tag-red">Unreliable</span>
            <span class="tag tag-red">Fragmented</span>
            <span class="tag tag-red">Price-gouging</span>
          </div>
        </div>

        <div class="problem-divider draw-line" aria-hidden="true"></div>

        <!-- THE SOLUTION -->
        <div class="problem-col reveal-right delay-2">
          <div class="problem-header-group">
            <span class="header-pre">Our Answer</span>
            <h3 class="solution-heading">
              RunIt 
            </h3>
          </div>
          <div class="problem-text">${solutionText}</div>
          <div class="problem-tags">
            <span class="tag tag-green">Reverse-bidding</span>
            <span class="tag tag-green">Digital Escrow</span>
            <span class="tag tag-green">Geofenced</span>
          </div>
        </div>
      </div>

      <div class="vm-bar reveal delay-3">
        <div class="vm-bar-item">
          <span class="vm-bar-label">Vision</span>
          <span class="vm-bar-text">${visionText}</span>
        </div>
        <div class="vm-bar-divider" aria-hidden="true"></div>
        <div class="vm-bar-item">
          <span class="vm-bar-label">Mission</span>
          <span class="vm-bar-text">${missionText}</span>
        </div>
      </div>
    </div>
  </section>`;
}
