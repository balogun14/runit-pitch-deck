import { tractionStats, surveyCharts } from "../modules/data";

function buildConicGradient(slices: { percentage: number; color: string }[]): string {
  let accumulated = 0;
  const stops = slices.map(s => {
    const start = accumulated;
    accumulated += s.percentage * 3.6;
    return `${s.color} ${start}deg ${accumulated}deg`;
  });
  return `conic-gradient(${stops.join(', ')})`;
}

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

  const chartsHtml = surveyCharts
    .map(
      (chart, ci) => `
    <div class="survey-chart reveal delay-${ci + 6}">
      <div class="pie-chart" style="background: ${buildConicGradient(chart.slices)};"></div>
      <h4 class="pie-title">${chart.title}</h4>
      <p class="pie-subtitle">${chart.subtitle}</p>
      <div class="pie-legend">
        ${chart.slices.filter((_, i) => chart.slices.length <= 5 || i < 5).map(s => `
          <div class="pie-legend-item">
            <span class="pie-legend-dot" style="background: ${s.color};"></span>
            <span class="pie-legend-label">${s.label}</span>
            <span class="pie-legend-pct">${s.percentage}%</span>
          </div>
        `).join("")}
      </div>
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

      <div class="traction-band traction-band-survey reveal delay-3">
        <div class="traction-band-label text-label">The Evidence: Survey Feedback (n=38)</div>
        <div class="survey-charts-grid">
          ${chartsHtml}
        </div>
      </div>
    </div>
  </section>`;
}
