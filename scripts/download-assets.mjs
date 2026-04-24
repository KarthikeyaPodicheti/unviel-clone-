import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const assets = [
  {
    url: "https://pub-8c02bb0f8aa04c19b7b7ee44644801fd.r2.dev/videos/1280/28bc38d8-d36a-426a-a48b-2cf94c5ded8b.mp4",
    out: "public/videos/unveil-primary.mp4",
  },
  {
    url: "https://godly.website/favicon.png",
    out: "public/seo/favicon.png",
  },
  {
    url: "https://godly.website/og.png",
    out: "public/seo/og.png",
  },
];

async function downloadOne({ url, out }) {
  const dir = path.dirname(out);
  await mkdir(dir, { recursive: true });
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed ${url}: ${res.status}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(out, buf);
  return out;
}

async function run() {
  const batchSize = 4;
  let index = 0;

  while (index < assets.length) {
    const batch = assets.slice(index, index + batchSize);
    const results = await Promise.allSettled(batch.map(downloadOne));

    results.forEach((result, i) => {
      const item = batch[i];
      if (result.status === "fulfilled") {
        console.log(`downloaded: ${item.out}`);
      } else {
        console.error(`failed: ${item.url} -> ${String(result.reason)}`);
      }
    });

    index += batchSize;
  }
}

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
