import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1919, height: 884 } });
await page.goto("https://unveil.fr", { waitUntil: "networkidle" });
await page.waitForTimeout(4000);

const pngData = await page.screenshot({ fullPage: false });

const points = [
  [960, 420],
  [840, 500],
  [700, 640],
  [1080, 360],
  [1260, 240],
  [1550, 110],
  [430, 700],
  [240, 840],
  [1730, 860],
  [50, 50],
];

const colors = await page.evaluate((pts) => {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return [];
  ctx.drawImage(document.querySelector("canvas"), 0, 0, canvas.width, canvas.height);
  return pts.map(([x, y]) => {
    const d = ctx.getImageData(x, y, 1, 1).data;
    return { x, y, rgba: [d[0], d[1], d[2], d[3]] };
  });
}, points);

console.log(JSON.stringify(colors, null, 2));
await browser.close();
