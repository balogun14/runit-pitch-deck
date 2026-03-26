import { renderHero } from "./slide_hero";
import { renderProblem } from "./slide_problem";
import { renderHow } from "./slide_how";
import { renderProduct } from "./slide_product";
import { renderMarket } from "./slide_market";
import { renderTraction } from "./slide_traction";
import { renderRevenue } from "./slide_revenue";
import { renderCompetition } from "./slide_competition";
import { renderTeam } from "./slide_team";
import { renderAsk } from "./slide_ask";

export function renderAllSlides(): string {
  return [
    renderHero(),
    renderProblem(),
    renderHow(),
    renderProduct(),
    renderMarket(),
    renderTraction(),
    renderRevenue(),
    renderCompetition(),
    renderTeam(),
    renderAsk(),
  ].join("\n");
}

export function renderPage(): string {
  const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="RunIt - Campus Life Meets Convenience. An interactive pitch deck for Africa's campus logistics platform." />
  <title>RunIt | Campus Life Meets Convenience</title>
  <link rel="stylesheet" href="/public/css/main.css" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏃</text></svg>" />
</head>
<body>
  <div class="progress-bar" id="progressBar"></div>

  <div class="noise-overlay" aria-hidden="true">
    <svg><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#noiseFilter)" /></svg>
  </div>

  <div class="blob blob-1" aria-hidden="true"></div>
  <div class="blob blob-2" aria-hidden="true"></div>
  <div class="blob blob-3" aria-hidden="true"></div>

  <nav class="dot-nav" id="dotNav" aria-label="Slide navigation"></nav>

  <div class="slide-counter" id="slideCounter">
    <span class="slide-counter-current">1</span>
    <span class="slide-counter-sep">/</span>
    <span class="slide-counter-total">10</span>
  </div>

  <main class="deck" id="deck">
    ${renderAllSlides()}
  </main>

  <script src="/vendor/htmx.min.js" defer></script>
  <script src="/public/js/navigation.js" defer></script>
  <script src="/public/js/animations.js" defer></script>
  <script src="/public/js/charts.js" defer></script>
  <script src="/public/js/tilt.js" defer></script>
</body>
</html>`;

  return template;
}
