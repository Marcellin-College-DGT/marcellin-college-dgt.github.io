// Runs before every build. Stops the build (so nothing changes on the live site) if:
//  1. a file in public/ has a name that looks kaiako-only, or
//  2. a published page links to a file in /files/ that isn't in the repo.
// Anyone can open the site, so this is the last line of defence.

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const problems = [];

const KAIAKO_NAME = /(kaiako|teacher|schedule|model[-_ ]?answers?|marking|exemplar|answer[-_ ]?key|observation)/i;

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

// 1. Kaiako-looking file names anywhere in public/
for (const file of walk(join(root, 'public'))) {
  const rel = relative(root, file);
  if (KAIAKO_NAME.test(rel)) {
    problems.push(`${rel}: the name looks kaiako-only. Keep it in Google Classroom or your drive, not on the public site.`);
  }
}

// 2. Every /files/ link in a published page must exist
for (const file of walk(join(root, 'src/content'))) {
  if (!file.endsWith('.md')) continue;
  const text = readFileSync(file, 'utf8');
  const front = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  if (/^draft:\s*true\s*$/m.test(front)) continue;
  // File names may contain spaces (e.g. "/files/guides/Start a web page.pdf"), so match up to the extension.
  for (const [, path] of text.matchAll(/(\/files\/[^"'`\n\]),}]+?\.(?:pdf|png|jpe?g|gif|zip|docx|pptx|mp4))/gi)) {
    if (!existsSync(join(root, 'public', path))) {
      problems.push(`${relative(root, file)} links to ${path}, but that file isn't in public${path}.`);
    }
  }
}

// 3. Every /examples/ link in a published page must exist (a folder link needs its index.html)
for (const file of walk(join(root, 'src/content'))) {
  if (!file.endsWith('.md')) continue;
  const text = readFileSync(file, 'utf8');
  const front = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  if (/^draft:\s*true\s*$/m.test(front)) continue;
  for (const [, path] of text.matchAll(/\((\/examples\/[^)\s]+)\)/g)) {
    const target = join(root, 'public', path, path.endsWith('/') ? 'index.html' : '');
    if (!existsSync(target)) {
      problems.push(`${relative(root, file)} links to ${path}, but that isn't in public${path}.`);
    }
  }
}

if (problems.length) {
  console.error('\nThe site was not built:\n');
  for (const p of problems) console.error(`  - ${p}`);
  console.error('');
  process.exit(1);
}
console.log('Public files check passed.');
