import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const templatePath = resolve(root, 'dist/index.html');
const serverEntry = resolve(root, 'dist-ssr/entry-server.js');

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

const template = readFileSync(templatePath, 'utf-8');
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error(`prerender: "${marker}" 를 dist/index.html 에서 찾지 못했습니다.`);
}

writeFileSync(templatePath, template.replace(marker, `<div id="root">${appHtml}</div>`));
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });

console.log(`prerender: dist/index.html 에 ${appHtml.length.toLocaleString()}자의 정적 마크업을 삽입했습니다.`);
