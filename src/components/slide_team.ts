import { team } from "../modules/data";

export function renderTeam(): string {
  const membersHtml = team
    .map(
      (m, i) => `
      <div class="team-member reveal-scale delay-${i + 1}">
        <div class="team-photo">
          ${m.photo
            ? `<img src="${m.photo}" alt="${m.name}" loading="lazy" />`
            : `<div class="team-initials">${m.initials}</div>`
          }
        </div>
        <h4 class="team-name">${m.name}</h4>
        <span class="team-role">${m.role}</span>
      </div>`
    )
    .join("");

  return `
  <section class="slide slide-team" data-slide="team">
    <div class="slide-inner text-center">
      <span class="section-eyebrow section-eyebrow-dark reveal text-label">The People</span>
      <h2 class="section-title reveal delay-1 text-white">Built by Students,<br>for Students</h2>
      <p class="section-subtitle section-subtitle-dark reveal delay-2">
        A 5-person technical & operational founding team who live the problem every day.
      </p>

      <div class="team-grid">
        ${membersHtml}
      </div>
    </div>
  </section>`;
}
