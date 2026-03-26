import { processSteps } from "../modules/data";

export function renderHow(): string {
  const stepsHtml = processSteps
    .map(
      (step, i) => `
      <div class="step-card reveal delay-${i + 1}">
        <div class="step-number">${step.number}</div>
        <div class="step-icon">${step.icon}</div>
        <h4 class="step-title">${step.title}</h4>
        <p class="step-desc">${step.description}</p>
      </div>
      ${
        i < processSteps.length - 1
          ? `<div class="flow-arrow reveal delay-${i + 1}" aria-hidden="true">
              <svg width="32" height="24" viewBox="0 0 32 24">
                <line x1="0" y1="12" x2="26" y2="12" stroke="var(--purple-400)" stroke-width="2" />
                <polyline points="22,6 28,12 22,18" fill="none" stroke="var(--purple-400)" stroke-width="2" />
              </svg>
            </div>`
          : ""
      }`
    )
    .join("");

  return `
  <section class="slide slide-how" data-slide="how">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-block reveal text-label text-center">The Process</span>
      <h2 class="section-title reveal delay-1 text-center">How RunIt Works</h2>
      <p class="section-subtitle reveal delay-2 text-center">From request to delivery in minutes</p>

      <div class="steps-flow">
        ${stepsHtml}
      </div>
    </div>
  </section>`;
}
