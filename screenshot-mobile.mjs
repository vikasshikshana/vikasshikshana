import { chromium, devices } from "playwright";
import { mkdir } from "fs/promises";

const browser = await chromium.launch();

// Test on two common mobile sizes
const viewports = [
  { name: "iphone", width: 390, height: 844, ua: devices["iPhone 14"].userAgent },
  { name: "android", width: 412, height: 915, ua: devices["Pixel 7"].userAgent },
];

const pages = [
  { url: "http://localhost:3000", name: "home" },
  { url: "http://localhost:3000/about", name: "about" },
  { url: "http://localhost:3000/programs", name: "programs" },
  { url: "http://localhost:3000/membership", name: "membership" },
  { url: "http://localhost:3000/governance", name: "governance" },
  { url: "http://localhost:3000/news", name: "news" },
  { url: "http://localhost:3000/contact", name: "contact" },
];

await mkdir("screenshots/mobile", { recursive: true });

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    userAgent: vp.ua,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();

  for (const p of pages) {
    console.log(`[${vp.name}] Capturing: ${p.name}`);
    await page.goto(p.url, { waitUntil: "networkidle" });
    await page.screenshot({
      path: `screenshots/mobile/${vp.name}-${p.name}.png`,
      fullPage: true,
    });
    // Also capture just the above-the-fold view
    await page.screenshot({
      path: `screenshots/mobile/${vp.name}-${p.name}-fold.png`,
      fullPage: false,
    });
    console.log(`  ✓ ${vp.name}-${p.name}.png`);
  }

  await context.close();
}

await browser.close();
console.log("\nAll mobile screenshots done!");
