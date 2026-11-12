import { cp, mkdir, readFile, writeFile } from "node:fs/promises";

const baseHrefIndex = process.argv.indexOf("--base-href");
const baseHref = process.argv[baseHrefIndex + 1];

if (
  baseHrefIndex === -1 ||
  !baseHref?.startsWith("/") ||
  !baseHref.endsWith("/")
) {
  throw new Error("Provide --base-href with a leading and trailing slash.");
}

await mkdir("dist", { recursive: true });
await cp("showcase", "dist", { recursive: true });

const indexPath = "dist/index.html";
const index = await readFile(indexPath, "utf8");

if (!index.includes("%%BASE_HREF%%")) {
  throw new Error("The showcase index is missing its base-href placeholder.");
}

await writeFile(indexPath, index.replace("%%BASE_HREF%%", baseHref));
