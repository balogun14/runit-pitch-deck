import { renderPage } from "./components/layout";

const PORT = 3002;

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

function getMime(path: string): string {
  const ext = path.slice(path.lastIndexOf("."));
  return MIME_TYPES[ext] || "application/octet-stream";
}

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    // Static files
    if (url.pathname.startsWith("/public/")) {
      const filePath = `.${url.pathname}`;
      const file = Bun.file(filePath);
      if (await file.exists()) {
        return new Response(file, {
          headers: {
            "Content-Type": getMime(filePath),
            "Cache-Control": "public, max-age=3600",
          },
        });
      }
      return new Response("Not Found", { status: 404 });
    }

    // htmx from node_modules
    if (url.pathname === "/vendor/htmx.min.js") {
      const file = Bun.file("node_modules/htmx.org/dist/htmx.min.js");
      return new Response(file, {
        headers: { "Content-Type": "application/javascript" },
      });
    }

    // Main page
    if (url.pathname === "/" || url.pathname === "/index.html") {
      const html = renderPage();
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`RunIt Pitch Deck running at http://localhost:${PORT}`);
