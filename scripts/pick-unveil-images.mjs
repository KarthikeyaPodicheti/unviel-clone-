import { readFileSync } from "node:fs";

const filePath = "C:/Users/uday/.local/share/opencode/tool-output/tool_dba6649c2001XUuHJ10ilczylU";
const html = readFileSync(filePath, "utf8");

const matches = html.match(/https:\/\/www\.datocms-assets\.com\/127841\/[^"\s)]+/g) ?? [];
const unique = [...new Set(matches)];

const imageCandidates = unique.filter((url) => /\.(jpg|jpeg|png|webp)(\?|$)/i.test(url));

const cleaned = imageCandidates
  .map((url) => {
    const i = url.indexOf("?");
    return i > -1 ? url.slice(0, i) : url;
  })
  .filter((url, idx, arr) => arr.indexOf(url) === idx)
  .slice(0, 16);

console.log(JSON.stringify(cleaned, null, 2));
