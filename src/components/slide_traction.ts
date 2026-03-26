import { tractionStats, tractionInsights } from "../modules/data";

export function renderTraction(): string {
  const statsHtml = tractionStats
    .map(
      (s, i) => {
        const isRatio = s.value === "1:3";
        const counterAttr = isRatio
          ? ""
          : `class="traction-stat-value counter" data-target="${s.numericValue}" data-suffix="${s.suffix}" data-prefix="${(s as any).prefix || ''}"`;
        const display = isRatio
          ? `class="traction-stat-value">${s.value}`
          : `${counterAttr}>0`;
        return `
      <div class="traction-stat reveal delay-${i + 1}">
        <div ${display}</div>
        <h4 class="traction-stat-label">${s.label}</h4>
        <p class="traction-stat-desc">${s.description}</p>
      </div>`;
      }
    )
    .join("");

  const insightsHtml = tractionInsights
    .map(
      (ins, i) => `
      <div class="traction-insight reveal delay-${i + 4}">
        <h4 class="insight-title">${ins.title}</h4>
        <p class="insight-desc">${ins.description}</p>
      </div>`
    )
    .join("");

  return `
  <section class="slide slide-traction" data-slide="traction">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-block reveal text-label text-center">Validation</span>
      <h2 class="section-title reveal delay-1 text-center">Real Signals. Real Demand.</h2>

      <div class="traction-band traction-band-data reveal delay-1">
        <div class="traction-band-label text-label">The Data: Survey Results</div>
        <div class="traction-stats">
          ${statsHtml}
        </div>
      </div>

      <div class="traction-band traction-band-insights reveal delay-3">
        <div class="traction-band-label text-label">The Insights: Key Learnings</div>
        <div class="traction-insights">
          ${insightsHtml}
        </div>
      </div>
    </div>
  </section>`;
}
