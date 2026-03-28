import { team } from "../modules/data";

export function renderTeam(): string {
  const membersHtml = team
    .map(
      (m, i) => `
      <div class="team-member reveal-scale delay-${i + 1}">
        <div class="team-card-inner">
          <div class="team-photo-wrapper">
            <div class="team-photo">
              ${m.photo
                ? `<img src="${m.photo}" alt="${m.name}" loading="lazy" />`
                : `<div class="team-initials">${m.initials}</div>`
              }
            </div>
            <div class="photo-glow"></div>
          </div>
          <h4 class="team-name">${m.name}</h4>
          <div class="team-role">${m.role}</div>
          <div class="team-skills">
            ${m.skills?.map(s => `<span class="team-skill-tag">${s}</span>`).join("") || ""}
          </div>
        </div>
      </div>`
    )
    .join("");

  return `
  <section class="slide slide-team" data-slide="team">
    <div class="slide-inner text-center">
      <span class="section-eyebrow section-eyebrow-dark reveal text-label">The People</span>
      <h2 class="section-title reveal delay-1 text-white">Built by Students,<br>for Students</h2>
      <p class="section-subtitle text-white reveal delay-2">
        A 9-person technical & operational founding team who live the problem every day.
      </p>

      <div class="team-grid">
        ${membersHtml}
      </div>
    </div>
  </section>`;
}
