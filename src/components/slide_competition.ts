import { comparisonData, unfairAdvantages, swotAnalysis } from "../modules/data";

function statusIcon(status: "good" | "bad" | "warn"): string {
  if (status === "good")
    return `<span class="status-icon status-good"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>`;
  if (status === "bad")
    return `<span class="status-icon status-bad"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>`;
  return `<span class="status-icon status-warn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="0.5" fill="white"/></svg></span>`;
}

export function renderCompetition(): string {
  const rows = comparisonData
    .map(
      (row) => `
      <tr>
        <td class="comp-feature">${row.feature}</td>
        <td class="comp-cell">${statusIcon(row.whatsapp.status)} ${row.whatsapp.text}</td>
        <td class="comp-cell">${statusIcon(row.glovo.status)} ${row.glovo.text}</td>
        <td class="comp-cell comp-runit">${statusIcon(row.runit.status)} ${row.runit.text}</td>
      </tr>`
    )
    .join("");

  const advantagesHtml = unfairAdvantages
    .map(
      (a, i) => `
      <div class="advantage-card reveal delay-${i + 3}">
        <span class="advantage-number">${i + 1}</span>
        <h4 class="advantage-title">${a.title}</h4>
        <p class="advantage-desc">${a.description}</p>
      </div>`
    )
    .join("");

  const swotHtml = swotAnalysis
    .map(
      (s, i) => `
      <div class="swot-compact reveal delay-${i + 7}" style="border-left-color: ${s.color};">
        <strong class="swot-compact-title">${s.category}</strong>
        <span class="swot-compact-points">${s.points.join(" ")}</span>
      </div>`
    )
    .join("");

  return `
  <section class="slide slide-competition" data-slide="competition">
    <div class="slide-inner">
      <span class="section-eyebrow section-eyebrow-block reveal text-label text-center">Competitive Edge</span>
      <h2 class="section-title reveal delay-1 text-center">Trust &amp; Culture Win</h2>

      <div class="comp-table-wrap reveal wipe-in delay-2">
        <table class="comp-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>WhatsApp Vendors</th>
              <th>Glovo / Bolt Food</th>
              <th class="comp-th-runit">RunIt</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>

      <h3 class="advantages-heading reveal delay-2 text-center">Our Unfair Advantages</h3>
      <div class="advantages-grid">
        ${advantagesHtml}
      </div>

      <div class="swot-compact-grid">
        ${swotHtml}
      </div>
    </div>
  </section>`;
}
