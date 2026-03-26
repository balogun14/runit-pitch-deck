import { problemText, solutionText } from "../modules/data";

export function renderProblem(): string {
  return `
  <section class="slide slide-problem" data-slide="problem">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-block reveal text-label text-center">The Challenge</span>
      <h2 class="section-title reveal delay-1 text-center">The Variable Cost Dilemma</h2>

      <div class="problem-grid">
        <div class="problem-col reveal-left delay-2">
          <h3 class="problem-heading">The Problem</h3>
          <p class="problem-text">${problemText}</p>
          <div class="problem-tags">
            <span class="tag tag-red">Unreliable</span>
            <span class="tag tag-red">Fragmented</span>
            <span class="tag tag-red">Price-gouged</span>
          </div>
        </div>

        <div class="problem-divider draw-line" aria-hidden="true"></div>

        <div class="problem-col reveal-right delay-2">
          <h3 class="solution-heading">Our Solution</h3>
          <p class="problem-text">${solutionText}</p>
          <div class="problem-tags">
            <span class="tag tag-green">Reverse-bidding</span>
            <span class="tag tag-green">Digital Escrow</span>
            <span class="tag tag-green">Geofenced</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
