import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1919, height: 884 } });
await page.goto("https://unveil.fr", { waitUntil: "networkidle" });
await page.waitForTimeout(3500);

const data = await page.evaluate(() => {
  const els = Array.from(document.querySelectorAll("*"));
  return els
    .map((el) => {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        tag: el.tagName.toLowerCase(),
        className: el.className,
        text: (el.textContent || "").trim().slice(0, 80),
        x: r.x,
        y: r.y,
        w: r.width,
        h: r.height,
        pos: cs.position,
        z: cs.zIndex,
        bg: cs.backgroundColor,
        border: cs.border,
        opacity: cs.opacity,
        display: cs.display,
      };
    })
    .filter((d) => d.display !== "none" && d.opacity !== "0" && d.w > 20 && d.h > 2 && d.y > 820)
    .slice(0, 200);
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
