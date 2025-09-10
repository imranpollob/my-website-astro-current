#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function getCurrentDate() {
  const now = new Date();
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  // Format: Sep 8 2025
  return now.toLocaleDateString('en-US', options).replace(/,/g, '');
}

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: npm run blog <relative-directory>');
  console.error('Example: npm run blog src\\content\\blog\\test');
  process.exit(1);
}

const relDir = args[0];
const absDir = path.resolve(process.cwd(), relDir);
const filePath = path.join(absDir, 'index.md');

if (!fs.existsSync(absDir)) {
  fs.mkdirSync(absDir, { recursive: true });
}

const content = `---\ntitle: ""\nsummary: ""\ndate: "${getCurrentDate()}"\ndraft: false\npinned: false\ntags: [""]\n---\n\n`;

if (fs.existsSync(filePath)) {
  console.error(`File already exists: ${filePath}`);
  process.exit(1);
}

fs.writeFileSync(filePath, content);
console.log(`Created blog post: ${filePath}`);
