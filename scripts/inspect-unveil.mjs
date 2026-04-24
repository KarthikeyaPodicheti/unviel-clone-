import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";

async function inspectPage(page, label) {
  await page.waitForTimeout(3500);

  const analysis = await page.evaluate(() => {
    const q = (sel) => Array.from(document.querySelectorAll(sel));

    const navItems = q("header nav a, header nav button").map((el) => {
      const rect = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        text: (el.textContent || "").trim().replace(/\s+/g, " "),
        tag: el.tagName.toLowerCase(),
        href: el.tagName.toLowerCase() === "a" ? el.getAttribute("href") : null,
        className: el.className,
        rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height },
        bg: cs.backgroundColor,
        color: cs.color,
        radius: cs.borderRadius,
      };
    });

    const fixedPanels = q("section, div, nav, header")
      .filter((el) => getComputedStyle(el).position === "fixed")
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        return {
          tag: el.tagName.toLowerCase(),
          className: el.className,
          text: (el.textContent || "").trim().slice(0, 120),
          rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height },
          z: cs.zIndex,
          opacity: cs.opacity,
          pe: cs.pointerEvents,
        };
      });

    const media = q("img, video, canvas").map((el) => {
      const rect = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        tag: el.tagName.toLowerCase(),
        src:
          el.tagName.toLowerCase() === "img"
            ? el.getAttribute("src")
            : el.tagName.toLowerCase() === "video"
              ? el.getAttribute("src")
              : null,
        className: el.className,
        rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height },
        opacity: cs.opacity,
        transform: cs.transform,
        filter: cs.filter,
        z: cs.zIndex,
      };
    });

    const switcher = q("a, button, div, span")
      .filter((el) => /overview|index/i.test((el.textContent || "").trim()))
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        return {
          tag: el.tagName.toLowerCase(),
          text: (el.textContent || "").trim().replace(/\s+/g, " "),
          className: el.className,
          rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height },
          bg: cs.backgroundColor,
          border: cs.border,
          radius: cs.borderRadius,
        };
      });

    return {
      url: location.href,
      title: document.title,
      bodyClass: document.body.className,
      navItems,
      fixedPanels,
      mediaCount: media.length,
      media,
      switcher,
    };
  });

  await mkdir("docs/design-references/comparison", { recursive: true });
  await page.screenshot({
    path: `docs/design-references/comparison/${label}-1440.png`,
    fullPage: false,
  });

  return analysis;
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  const remote = await browser.newPage({ viewport: { width: 1919, height: 884 } });
  await remote.goto("https://unveil.fr", { waitUntil: "networkidle" });
  const remoteAnalysis = await inspectPage(remote, "remote-unveil");

  const local = await browser.newPage({ viewport: { width: 1919, height: 884 } });
  await local.goto("http://localhost:3000", { waitUntil: "networkidle" });
  const localAnalysis = await inspectPage(local, "local-clone");

  await mkdir("docs/research", { recursive: true });
  await writeFile(
    "docs/research/comparison-analysis.json",
    JSON.stringify({ remote: remoteAnalysis, local: localAnalysis }, null, 2),
  );

  await browser.close();
  console.log("Wrote docs/research/comparison-analysis.json and comparison screenshots");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
