# 강서다앤유재활 데이케어센터 · Astro Website

3PIG에서 제작하는 강서다앤유재활 데이케어센터 홍보형 홈페이지의 v2.5 Astro 소스입니다.

## 현재 기준

- **구현:** v2.5 (Astro 정적 사이트, 모바일·데스크톱 반응형)
- **브랜드:** 기존 다앤유(DA&YOU) 브랜드 확장
- **화면 구조:** 모바일 16:9 풀폭 메뉴 3개, 데스크톱 4열 편집형 Hero(설명 / 비대칭 사진 갤러리 / 대형 퀵 메뉴)
- **모바일 인터랙션:** 글래스·비대칭·`보기` 배지를 제거한 안정형 카드와 상세 화면 전환
- **콘텐츠 품질:** 모바일·데스크톱 핵심 콘텐츠 동등성, 프로그램 Bento, FAQ 5개, 실제 센터 공간·활동 사진 적용
- **서비스 특성:** 재활운동, 인지·신체 활동, 일상생활·건강·정서 지원, 급식·송영 및 식이·연하 지원
- **전환 UX:** 모든 주요 화면에서 3클릭 이내 전화 접근, 전화·길찾기 전환 이벤트 훅 구현
- **검색·공유:** canonical, Open Graph, Twitter Card, sitemap, robots, LocalBusiness 구조화 데이터
- **최종 도메인:** `https://dnucare.co.kr/` 등록·Cloudflare 연결·HTTPS 적용 완료
- **디자인:** Calm Editorial Healthcare; 통합 색상 #206E88 / #193249 / #D8EAF3 / #27343B

## 로컬 실행

Node.js 22.23.4 이상이 필요합니다. `.nvmrc`가 있으므로 nvm 사용 시 `nvm use`로 버전을 맞출 수 있습니다.

```bash
npm install
npm run dev
```

정적 빌드와 검증은 다음 명령으로 실행합니다.

```bash
npm run check
npm run build
npm run preview
```

운영 빌드 결과는 `dist/`에 생성됩니다. 기존 단일 HTML 시안은 `prototype-v1.6.html`에 보관했습니다.

## 콘텐츠 수정 위치

- 센터 전화번호·주소·운영시간: `src/data/site.ts`의 `center`
- 직원·프로그램·하루 구성: `src/data/site.ts`
- 페이지 구성: `src/components/`
- 전체 스타일: `src/styles/global.css`
- 이미지: `public/images/`

## 운영 배포 전 확인 사항

1. **공식 정보:** 2026-11-26 고객 확인 기준 명칭·전화·주소·운영시간·송영지역·서비스·직원 정보를 반영했습니다.
2. **전환 측정:** `phone_click`, `directions_click` 이벤트 훅은 구현했습니다. 실제 보고서 수집을 위해 GA4 등 측정 도구 연결이 필요합니다.
3. **공식 마스터 로고:** 현재 CDN 주소를 사용합니다. 고객 제공 Drive 링크는 연결 계정에서 열리지 않아 원본 파일을 프로젝트에 포함하지 못했습니다.
4. **이미지:** 센터 간판·공용 공간과 고객 제공 실제 프로그램 활동 사진을 적용했으며, 고객이 웹 게시 동의와 사용 제한 없음을 확인했습니다. 공개본은 EXIF·GPS 메타데이터를 제거한 웹 최적화 복사본만 사용합니다.
5. **접근성:** 320~1440px 반응형과 브라우저 키보드·콘솔 검수는 완료했습니다. 확대 200%, 실기기 iOS/Android 통화 연결, 50대 이상 보호자 사용성 테스트는 미완료입니다.
6. **실사용 검증:** iOS/Android 통화·길찾기 연결과 200% 글자 확대를 확인하세요.

## 문서

- [프로젝트 현황·완료율·인수인계 자산](docs/project-status-and-handoff.md)
- [설계 기준 v1.6](docs/design-spec-v1.6.md)
- [95점 완성도 목표 설계 v1.8](docs/design-spec-v1.8.md)
- [1980×1080 데스크톱 Hero 재설계 v2.1](docs/design-spec-v2.1.md)
- [안정형 풀폭 모바일 홈 재설계 v2.2](docs/design-spec-v2.2-mobile.md)
- [v1.6 정렬 점검 이미지](docs/alignment-audit-v1.6.png)
- [남은 작업](docs/next-steps.md)

## 배포

Cloudflare Workers Static Assets를 기본 배포 방식으로 사용합니다. `wrangler.jsonc`가 빌드 결과물인 `dist/`를 배포하도록 설정되어 있습니다.

```bash
npm run deploy
```

Cloudflare 로그인이 끝난 환경에서 위 명령을 실행하면 `npm run build` 후 Workers에 배포됩니다. 최종 운영 도메인은 `https://dnucare.co.kr/`이며 canonical·sitemap·robots도 동일한 주소를 사용합니다.

## 권장 GitHub 설정

- Owner: `3pigwebstudio`
- Repository: `daandyou-daycare`
- Visibility: **Public**
- Default branch: `main`

> v1.6 HTML·이미지·설계 문서가 `3pigwebstudio/daandyou-daycare` 저장소에 함께 관리됩니다.
