import { chromium } from "playwright";

async function getData(url) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1919, height: 884 } });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(3500);

  const data = await page.evaluate(() => {
    const pick = (el) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        text: (el.textContent || "").trim().replace(/\s+/g, " "),
        className: el.className,
        rect: { x: r.x, y: r.y, w: r.width, h: r.height },
        fontSize: cs.fontSize,
        lineHeight: cs.lineHeight,
        fontWeight: cs.fontWeight,
        letterSpacing: cs.letterSpacing,
        color: cs.color,
        bg: cs.backgroundColor,
        border: cs.border,
        borderRadius: cs.borderRadius,
        padding: `${cs.paddingTop} ${cs.paddingRight} ${cs.paddingBottom} ${cs.paddingLeft}`,
      };
    };

    const nav = Array.from(document.querySelectorAll("header nav a, header nav button")).map(pick);
    const switchWrap = Array.from(document.querySelectorAll("div,nav"))
      .find((el) => {
        const t = (el.textContent || "").toLowerCase();
        return t.includes("overview") && t.includes("index") && getComputedStyle(el).position === "fixed";
      }) || null;
    const switchLinks = Array.from(document.querySelectorAll("a,button")).filter((el) => {
      const t = (el.textContent || "").trim().toLowerCase();
      return t === "overview" || t === "index";
    }).map(pick);

    const bars = Array.from(document.querySelectorAll("*"))
      .map((el) => {
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return { className: el.className, rect: { x: r.x, y: r.y, w: r.width, h: r.height }, bg: cs.backgroundColor, opacity: cs.opacity, pos: cs.position, border: cs.border };
      })
      .filter((x) => x.rect.y > 820 && x.rect.h <= 8 && x.rect.w > 400 && x.opacity !== "0");

    return {
      nav,
      switchWrap: switchWrap ? pick(switchWrap) : null,
      switchLinks,
      bars,
    };
  });

  await browser.close();
  return data;
}

const remote = await getData("https://unveil.fr");
const local = await getData("http://localhost:3000");
console.log(JSON.stringify({ remote, local }, null, 2));
