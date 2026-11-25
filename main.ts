// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// Writes the entry line to entry.txt (MAKEFUN_OUTPUT_DIR, else ./out).
// Gate (from the kit): UTF-8 text, 1-200 characters, single line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I bought a coffin on layaway. The salesman said 'take your time' — so I did.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });

const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`line is ${text.length} chars, must be 1-200`);
}
if (text.includes("\n")) {
  throw new Error("line must be a single line");
}
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
console.log(`wrote entry.txt (${text.length} chars): ${text}`);
