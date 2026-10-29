// Export shared TypeScript records for the CV generator without maintaining a second CV dataset.
import ts from 'typescript';
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
const temp = mkdtempSync(join(tmpdir(), 'portfolio-cv-'));
try {
  for (const [source, target] of [['src/consts.ts', 'consts'], ['src/data/research.ts', 'research'], ['src/data/experience.ts', 'experience']]) {
    const { outputText } = ts.transpileModule(readFileSync(source, 'utf8'), { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } });
    writeFileSync(join(temp, `${target}.mjs`), outputText.replaceAll('"@consts"', '"./consts.mjs"'));
  }
  const identity = await import(pathToFileURL(join(temp, 'consts.mjs')));
  const research = await import(pathToFileURL(join(temp, 'research.mjs')));
  const experience = await import(pathToFileURL(join(temp, 'experience.mjs')));
  process.stdout.write(JSON.stringify({ profile: identity.PROFILE, publications: research.publications, projects: research.featuredResearch, ...experience }));
} finally { rmSync(temp, { recursive: true, force: true }); }
