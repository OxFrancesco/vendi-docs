// Fails when a page has no title or a link points at a file that isn't here. Vendi reads these files as they are.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";

const files = ["README.md", ...readdirSync("docs").filter((name) => name.endsWith(".md")).map((name) => join("docs", name))];
const problems = [];
for (const file of files) {
  const text = readFileSync(file, "utf8");
  if (!text.startsWith("# ")) problems.push(`${file}: doesn't start with a "# " title`);
  for (const [, target] of text.matchAll(/\]\(([^)#\s]+\.md)(?:#[^)]*)?\)/g)) {
    if (/^[a-z]+:/.test(target)) continue;
    if (!existsSync(join(dirname(file), target))) problems.push(`${file}: links to ${target}, which isn't here`);
  }
}
for (const name of readdirSync("docs")) if (!readFileSync("README.md", "utf8").includes(`(docs/${name})`)) problems.push(`docs/${name}: not listed in README.md`);
if (problems.length > 0) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`${files.length} files, every link resolves`);
