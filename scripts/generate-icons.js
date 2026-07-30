// 원본 SVG(public/favicon.svg, public/assets/logo.svg)에서 파비콘·앱 아이콘을 생성한다.
//
// 실행:  npm run icons
//
// macOS 기본 도구인 qlmanage 는 쓰지 말 것 — 알파 채널을 흰색으로 합성해버려
// 배경이 흰 사각형으로 남는다. resvg 는 투명도를 보존한다.
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = (p) => resolve(root, 'public', p);

const innerOf = (file) =>
  readFileSync(file, 'utf-8')
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim();

const render = (svg, width) =>
  new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();

// --- 심볼: 원본이 37x38 비정사각이라 정사각 캔버스 중앙에 배치해야 안 찌그러진다 ---
const mark = innerOf(pub('favicon.svg'));
const MW = 37;
const MH = 38;
const side = Math.max(MW, MH);

const transparentMark = `<svg xmlns="http://www.w3.org/2000/svg" width="${side}" height="${side}" viewBox="0 0 ${side} ${side}" fill="none">
<g transform="translate(${(side - MW) / 2}, ${(side - MH) / 2})">${mark}</g>
</svg>`;

// iOS 는 투명 배경을 검은색으로 합성하므로 홈화면 아이콘은 흰 배경이 필수.
// purpose:maskable 이라 바깥이 잘릴 수 있어 마크를 캔버스의 60%로 둔다.
const C = 100;
const k = (C * 0.6) / side;
const opaqueMark = `<svg xmlns="http://www.w3.org/2000/svg" width="${C}" height="${C}" viewBox="0 0 ${C} ${C}" fill="none">
<rect width="${C}" height="${C}" fill="#ffffff"/>
<g transform="translate(${(C - MW * k) / 2}, ${(C - MH * k) / 2}) scale(${k})">${mark}</g>
</svg>`;

// 브라우저 탭 — 배경 투명
const ico = {};
for (const s of [16, 32, 48]) ico[s] = render(transparentMark, s);
writeFileSync(pub('favicon-96x96.png'), render(transparentMark, 96));

// 홈화면 — 흰 배경
writeFileSync(pub('apple-touch-icon.png'), render(opaqueMark, 180));
writeFileSync(pub('web-app-manifest-192x192.png'), render(opaqueMark, 192));
writeFileSync(pub('web-app-manifest-512x512.png'), render(opaqueMark, 512));

// 구조화 데이터용 로고 래스터 — 원본 비율(136x38) 유지
writeFileSync(
  pub('assets/logo.png'),
  render(readFileSync(pub('assets/logo.svg'), 'utf-8'), 544)
);

// 네비게이션 모바일용 심볼 (favicon 과 동일한 마크)
writeFileSync(pub('assets/logo-mark.svg'), readFileSync(pub('favicon.svg')));

// --- favicon.ico: PNG 를 그대로 품는 Vista+ 포맷 ---
const sizes = Object.keys(ico).map(Number);
const header = Buffer.alloc(6);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);

const entries = [];
let offset = 6 + sizes.length * 16;
for (const s of sizes) {
  const e = Buffer.alloc(16);
  e.writeUInt8(s, 0);
  e.writeUInt8(s, 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(ico[s].length, 8);
  e.writeUInt32LE(offset, 12);
  entries.push(e);
  offset += ico[s].length;
}
writeFileSync(pub('favicon.ico'), Buffer.concat([header, ...entries, ...sizes.map((s) => ico[s])]));

console.log(`아이콘 생성 완료 — favicon.ico(${sizes.join('/')}px), favicon-96x96, apple-touch-icon(180), manifest(192/512), logo.png(544x152), logo-mark.svg`);
