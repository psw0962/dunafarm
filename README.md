# 두나팜 DUNAFARM

경기도 화성 HACCP 인증 고춧가루 전문 제조기업 두나팜 공식 홈페이지.

- 운영 도메인: https://www.dunafarm.co.kr
- 스택: React 19 + Vite

## 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

빌드는 3단계로 동작합니다.

1. `vite build` — 클라이언트 번들 생성 (`dist/`)
2. `vite build --ssr src/entry-server.jsx` — SSR 번들 생성 (`dist-ssr/`)
3. `node scripts/prerender.js` — `renderToString`으로 만든 정적 HTML을
   `dist/index.html`의 `<div id="root">` 안에 삽입하고 `dist-ssr/`를 삭제

**왜 프리렌더가 필요한가:** 기본 Vite SPA는 크롤러에게 빈 `<div id="root">`만
전달합니다. 프리렌더를 거치면 본문 텍스트가 그대로 HTML에 담기므로 구글·네이버·
다음 색인과 카카오톡/슬랙 등의 링크 미리보기가 JS 실행 없이도 동작합니다.
`src/main.jsx`는 프리렌더된 마크업이 있으면 `hydrateRoot`, 없으면(dev)
`createRoot`로 렌더링합니다.

클라이언트 번들만 필요할 때는 `npm run build:client`를 사용하세요.

## SEO 관련 파일

| 파일 | 역할 |
| --- | --- |
| `index.html` | title/description/OG/트위터 카드, JSON-LD 구조화 데이터 |
| `public/robots.txt` | 크롤러 허용 정책 + 사이트맵 위치 |
| `public/sitemap.xml` | 사이트맵 (이미지 사이트맵 포함) |
| `public/assets/og-image.jpg` | SNS 공유 썸네일 (1200×630) |
| `src/components/Faq.jsx` | FAQPage 구조화 데이터와 짝을 이루는 실제 FAQ 본문 |

> 구조화 데이터의 FAQ 내용과 `Faq.jsx`의 내용은 항상 일치해야 합니다.
> 페이지에 보이지 않는 FAQ를 스키마에만 넣으면 구글 리치 결과에서 제외됩니다.

## 배포 후 해야 할 일

1. **Vercel 도메인 연결** — Vercel 프로젝트 Settings → Domains 에서
   `www.dunafarm.co.kr`를 Primary로 지정하고, `dunafarm.co.kr`(apex)는
   www로 리다이렉트하도록 설정합니다.
2. **Vercel Web Analytics 활성화** — Vercel 대시보드 → 프로젝트 → Analytics 탭에서
   Enable을 눌러야 데이터가 수집됩니다. (코드 연동은 완료되어 있습니다.)
3. **Google Search Console** 등록 후 `sitemap.xml` 제출
4. **네이버 서치어드바이저** 등록 후 사이트 소유확인 + 사이트맵/RSS 제출
5. **다음 검색등록** 신청
6. 소유확인 메타태그는 `index.html` 상단 주석 블록에 자리를 만들어 두었습니다.
   발급받은 값으로 교체 후 주석을 해제하세요.
