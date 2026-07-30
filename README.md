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

### 로고와 아이콘

원본은 `public/assets/logo.svg`(136×38)와 `public/favicon.svg`(37×38) 두 개입니다.
나머지는 전부 여기서 파생됩니다.

| 파생 파일 | 원본 | 용도 |
| --- | --- | --- |
| `assets/logo.png` (544×152) | `logo.svg` | JSON-LD Organization 로고 (래스터 필요) |
| `favicon.ico` (16/32/48) | `favicon.svg` | 브라우저 기본 요청 경로, 네이버·다음 크롤러 |
| `favicon-96x96.png` | `favicon.svg` | 브라우저 탭 |
| `apple-touch-icon.png` (180) | `favicon.svg` | iOS 홈화면 |
| `web-app-manifest-192/512.png` | `favicon.svg` | Android 홈화면 |
| `assets/logo-mark.svg` | `favicon.svg` | 모바일 Nav (심볼만 노출) |

Nav는 `<picture>`로 600px 이하에서 `logo-mark.svg`(심볼만), 그 위에서는
`logo.svg`(심볼+워드마크)를 씁니다. 두 소스의 가로세로비가 달라 `img`에
`width`/`height` 속성을 두면 충돌하므로 크기는 CSS로만 제어합니다.

원본 SVG를 바꿨다면 파생 파일도 다시 만드세요.

```bash
npm run icons
```

`scripts/generate-icons.js`가 위 표의 파일을 전부 재생성합니다.
직접 도구를 고를 때 주의할 점이 있습니다.

- **macOS 기본 도구인 `qlmanage`는 쓰지 마세요.** 알파 채널을 흰색으로
  합성해버려 아이콘 뒤에 흰 사각형이 남습니다. 게다가 SVG의 `width`/`height`
  속성 기준 배율로 렌더링한 뒤 좌상단 정렬로 정사각 패딩하기 때문에, 원본
  크기를 그대로 두면 큰 캔버스 구석에 조그맣게 박힙니다. 스크립트는
  투명도를 보존하는 `@resvg/resvg-js`를 씁니다.
- **`favicon.svg`는 37×38로 정사각이 아닙니다.** 그대로 정사각 PNG로
  리사이즈하면 가로로 찌그러지므로 정사각 캔버스 중앙에 배치해야 합니다.
- **홈화면 아이콘만 흰 배경입니다.** iOS는 투명 배경을 검은색으로 합성하기
  때문입니다. 브라우저 탭 아이콘(`favicon.ico`, `favicon-96x96.png`)과
  `logo.png`는 투명이어야 합니다. 매니페스트 아이콘은 `purpose: maskable`이라
  바깥이 잘릴 수 있어 마크를 캔버스의 60%로 둡니다.

생성 후에는 모서리 픽셀의 알파값으로 검증하세요. 브라우저 탭 아이콘의
네 모서리는 alpha=0, 홈화면 아이콘은 alpha=255여야 정상입니다.

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
