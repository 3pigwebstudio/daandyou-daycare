# 강서 다앤유 재활 데이케어센터 · Astro Website

3PIG에서 제작하는 강서 다앤유(DA&YOU) 재활 데이케어센터 홍보형 홈페이지의 v1.8 Astro 소스입니다.

## 현재 기준

- **구현:** v1.8 (Astro 정적 사이트, 모바일·데스크톱 반응형)
- **브랜드:** 기존 다앤유(DA&YOU) 브랜드 확장
- **화면 구조:** 모바일 3개 메뉴(다앤유 소개 / 전문 프로그램 / 이용 안내), 데스크톱 편집형 랜딩
- **콘텐츠 품질:** 모바일·데스크톱 핵심 콘텐츠 동등성, 프로그램 Bento, FAQ 5개, 사진 상태 표기
- **서비스 특성:** 식이·연하 관련 지원, LSVT BIG 기반 움직임 프로그램
- **전환 UX:** 모든 주요 화면에서 3클릭 이내 전화 접근 (실제 통화 연결은 별도 검증 필요)
- **검색·공유:** canonical, Open Graph, Twitter Card, sitemap, robots, Organization 구조화 데이터
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

1. **강서 센터 전용 전화번호:** 현재 `src/data/site.ts`의 `center.phone`이 비어 있어 기존 다앤유 대표번호를 시안용으로 사용합니다.
2. **주소·운영시간:** `center.address`, `center.hours`를 채운 뒤 지도·길찾기를 확인하세요.
3. **공식 마스터 로고:** 2025년 11월 업로드 원본의 CDN 주소를 사용합니다. 호스트 접근 오류가 발생하면 텍스트 대체 표시가 나옵니다. 고객 승인 원본 이미지를 프로젝트에 포함하는 방식으로 개선해야 합니다.
4. **이미지:** 현 단계에서 일부 이미지는 콘셉트/시안 이미지입니다. 실제 기관 이미지로 대체할지 고객과 합의하세요.
5. **접근성:** 320~1440px 반응형과 브라우저 키보드·콘솔 검수는 완료했습니다. 확대 200%, 실기기 iOS/Android 통화 연결, 50대 이상 보호자 사용성 테스트는 미완료입니다.
6. **실사용 검증:** 실제 전화번호 반영 후 iOS/Android 통화 연결과 200% 글자 확대를 확인하세요.

## 문서

- [설계 기준 v1.6](docs/design-spec-v1.6.md)
- [95점 완성도 목표 설계 v1.8](docs/design-spec-v1.8.md)
- [v1.6 정렬 점검 이미지](docs/alignment-audit-v1.6.png)
- [남은 작업](docs/next-steps.md)

## 배포

Cloudflare Workers Static Assets를 기본 배포 방식으로 사용합니다. `wrangler.jsonc`가 빌드 결과물인 `dist/`를 배포하도록 설정되어 있습니다.

```bash
npm run deploy
```

Cloudflare 로그인이 끝난 환경에서 위 명령을 실행하면 `npm run build` 후 Workers에 배포됩니다. 실제 운영 도메인 연결은 센터 운영정보와 도메인이 확정된 뒤 진행합니다.

## 권장 GitHub 설정

- Owner: `3pigwebstudio`
- Repository: `daandyou-daycare`
- Visibility: **Public**
- Default branch: `main`

> v1.6 HTML·이미지·설계 문서가 `3pigwebstudio/daandyou-daycare` 저장소에 함께 관리됩니다.
