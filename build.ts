import { renderPage } from "./src/components/layout";
import { mkdir, rm, cp } from "node:fs/promises";
import { write } from "bun";
import { existsSync } from "node:fs";

async function build() {
  console.log("Building static site...");
  
  // Clean dist
  if (existsSync("./dist")) {
    await rm("./dist", { recursive: true, force: true });
  }
  await mkdir("./dist");
  
  // Copy public assets
  if (existsSync("./public")) {
    await cp("./public", "./dist/public", { recursive: true });
  }
  
  // Copy vendor/htmx
  await mkdir("./dist/vendor", { recursive: true });
  await cp("./node_modules/htmx.org/dist/htmx.min.js", "./dist/vendor/htmx.min.js");
  
  // Generate HTML
  const html = renderPage();
  await write("./dist/index.html", html);
  
  console.log("Build complete! Output in ./dist");
}

build();
