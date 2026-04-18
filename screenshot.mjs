import { chromium } from "playwright";
import path from "path";
import { mkdir } from "fs/promises";

const pages = [
  { url: "http://localhost:3000", name: "home" },
  { url: "http://localhost:3000/about", name: "about" },
  { url: "http://localhost:3000/programs", name: "programs" },
  { url: "http://localhost:3000/membership", name: "membership" },
  { url: "http://localhost:3000/governance", name: "governance" },
  { url: "http://localhost:3000/news", name: "news" },
  { url: "http://localhost:3000/contact", name: "contact" },
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

await mkdir("screenshots", { recursive: true });

for (const p of pages) {
  console.log(`Capturing: ${p.name}`);
  await page.goto(p.url, { waitUntil: "networkidle" });
  await page.screenshot({ path: `screenshots/${p.name}.png`, fullPage: true });
  console.log(`  ✓ screenshots/${p.name}.png`);
}

await browser.close();
console.log("\nAll screenshots saved!");
