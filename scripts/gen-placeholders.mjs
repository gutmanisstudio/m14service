// Generates simple branded SVG placeholders for project marquee + case studies.
// Run with: node scripts/gen-placeholders.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const brand = "#2E3191";
const ink = "#0A0F1E";

function svg({ w, h, label, sub }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${brand}"/>
      <stop offset="100%" stop-color="${ink}"/>
    </linearGradient>
    <pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M0 40 L40 0" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#p)"/>
  <text x="50%" y="${sub ? "46%" : "52%"}" font-family="Inter,system-ui,sans-serif" font-size="${Math.round(w/14)}" font-weight="800" fill="white" text-anchor="middle">${label}</text>
  ${sub ? `<text x="50%" y="58%" font-family="Inter,system-ui,sans-serif" font-size="${Math.round(w/28)}" font-weight="500" fill="rgba(255,255,255,0.6)" text-anchor="middle" letter-spacing="3">${sub}</text>` : ""}
</svg>`;
}

function write(p, content) {
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, content);
  console.log("wrote", p);
}

// NOTE: the hero marquee no longer uses generated placeholders — it reuses
// the real equipment photos from public/images/products/. Only case-study
// SVG placeholders are generated here.

const cases = [
  { file: "public/images/cases/case-1.svg", label: "Privātmāja", sub: "JELGAVA · SILTUMSŪKNIS" },
  { file: "public/images/cases/case-2.svg", label: "Biroju centrs", sub: "RĪGA · VENTILĀCIJA" },
  { file: "public/images/cases/case-3.svg", label: "Ražošanas komplekss", sub: "LIEPĀJA · KATLU MĀJA" },
];
for (const c of cases) {
  write(c.file, svg({ w: 900, h: 760, label: c.label, sub: c.sub }));
}
