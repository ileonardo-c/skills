import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const binaryExtensions = new Set([
  ".gif",
  ".gz",
  ".ico",
  ".jpeg",
  ".jpg",
  ".pdf",
  ".png",
  ".tar",
  ".zip",
]);

const trackedFiles = execFileSync("git", ["ls-files"], { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);

const failures = [];

for (const file of trackedFiles) {
  if (!existsSync(file)) {
    continue;
  }

  const extension = file.includes(".")
    ? file.slice(file.lastIndexOf(".")).toLowerCase()
    : "";

  if (binaryExtensions.has(extension)) {
    continue;
  }

  const content = readFileSync(file);

  if (content.includes(Buffer.from("\r\n"))) {
    failures.push(`${file}: contém finais de linha CRLF`);
  }

  if (
    content.length >= 3 &&
    content[0] === 0xef &&
    content[1] === 0xbb &&
    content[2] === 0xbf
  ) {
    failures.push(`${file}: contém UTF-8 BOM`);
  }
}

if (failures.length > 0) {
  console.error("Falha na validação de formato de texto:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Formato de texto validado: finais LF e sem UTF-8 BOM.");
