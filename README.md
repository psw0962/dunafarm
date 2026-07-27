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
| `public/favicon.*`, `apple-touch-icon.png` | 파비콘·앱 아이콘 세트 |
| `public/site.webmanifest` | Android 홈화면 추가용 매니페스트 |

> 구조화 데이터의 FAQ 내용과 `Faq.jsx`의 내용은 항상 일치해야 합니다.
> 페이지에 보이지 않는 FAQ를 스키마에만 넣으면 구글 리치 결과에서 제외됩니다.

### 지켜야 할 제약

- **제목 40자 / 설명 80자 이내** — 네이버 서치어드바이저 권장값입니다. 넘기면
  웹마스터도구에서 경고가 뜨고 검색 결과에서 잘립니다. OG 제목·설명도 동일합니다.
- **제품에 `Product` 타입을 쓰지 마세요.** Google은 `Product`에 `offers`(가격),
  `review`, `aggregateRating` 중 하나를 요구합니다. 공개 판매가와 리뷰가 없는
  B2B 제조 품목이라 충족할 수 없고, 값을 임의로 넣는 것은 Google 가이드라인
  위반입니다. 현재는 `ItemList` + `ListItem`으로 표기해 오류 없이 품목 정보만
  전달합니다. 향후 실제 판매가나 리뷰가 생기면 그때 `Product`로 전환하세요.

### 아이콘 재생성

`public/favicon.svg`를 수정했다면 나머지 아이콘도 다시 만들어야 합니다.
macOS 기본 도구(`qlmanage`, `sips`)로 SVG를 PNG로 렌더링한 뒤,
16/32/48px PNG를 묶어 `favicon.ico`를 생성했습니다.
`apple-touch-icon.png`는 투명 배경이면 iOS가 검은색으로 합성하므로
**모서리까지 꽉 찬 불투명 사각형**이어야 합니다.

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
