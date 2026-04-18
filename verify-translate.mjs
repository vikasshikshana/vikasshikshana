import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

// Screenshot 1: before translation — navbar close-up
await page.screenshot({ path: "screenshots/navbar-before.png", clip: { x: 0, y: 0, width: 1440, height: 100 } });
console.log("✓ navbar-before.png");

// Wait for Google Translate widget to load (it loads async from Google CDN)
// then click the translate button
try {
  await page.waitForSelector("button:has-text('ಕನ್ನಡ')", { timeout: 10000 });
  const btn = page.locator("button", { hasText: "ಕನ್ನಡ" }).first();
  const btnText = await btn.textContent();
  console.log(`✓ Translate button found: "${btnText?.trim()}"`);

  await btn.click();
  console.log("✓ Clicked translate button");

  // Give Google Translate time to work
  await page.waitForTimeout(4000);

  // Screenshot 2: after clicking (may or may not be translated depending on network)
  await page.screenshot({ path: "screenshots/navbar-after-click.png", clip: { x: 0, y: 0, width: 1440, height: 100 } });
  console.log("✓ navbar-after-click.png");

  await page.screenshot({ path: "screenshots/home-after-translate.png", fullPage: true });
  console.log("✓ home-after-translate.png");

  // Check if button label changed to "English"
  const allButtons = await page.locator("nav button").allTextContents();
  console.log("Nav buttons after click:", allButtons);

} catch (e) {
  console.log("Note:", e.message);
}

await browser.close();
console.log("\nDone.");
