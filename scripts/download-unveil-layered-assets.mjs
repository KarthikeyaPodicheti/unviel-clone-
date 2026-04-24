import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const urls = [
  "https://www.datocms-assets.com/127841/1776256169-unveil_balenciaga_s26_0.png",
  "https://www.datocms-assets.com/127841/1776255883-unveil_balenciaga_s26_1t.png",
  "https://www.datocms-assets.com/127841/1776255910-unveil_balenciaga_s26_2t.png",
  "https://www.datocms-assets.com/127841/1776255935-unveil_balenciaga_s26_3t.png",
  "https://www.datocms-assets.com/127841/1776704797-unveil_nodaleto_1.png",
  "https://www.datocms-assets.com/127841/1776879940-unveil_meeting_table_1.png",
  "https://www.datocms-assets.com/127841/1776879954-unveil_meeting_table_2.png",
  "https://www.datocms-assets.com/127841/1776879968-unveil_meeting_table_3.png",
  "https://www.datocms-assets.com/127841/1776879981-unveil_meeting_table_4.png",
  "https://www.datocms-assets.com/127841/1776879993-unveil_meeting_table_5.png",
  "https://www.datocms-assets.com/127841/1776880006-unveil_meeting_table_6.png",
  "https://www.datocms-assets.com/127841/1776880018-unveil_meeting_table_7.png",
  "https://www.datocms-assets.com/127841/1776880039-unveil_meeting_table_8.png",
  "https://www.datocms-assets.com/127841/1776880050-unveil_meeting_table_9.png",
];

async function download(url) {
  const filename = url.split("/").pop();
  if (!filename) return;
  const output = path.join("public", "images", "unveil", filename);

  await mkdir(path.dirname(output), { recursive: true });
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed ${url}: ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(output, bytes);
  console.log(`downloaded ${output}`);
}

async function main() {
  const pool = 4;
  let i = 0;
  while (i < urls.length) {
    const chunk = urls.slice(i, i + pool);
    await Promise.all(chunk.map((u) => download(u)));
    i += pool;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
