export interface Program {
  index: string;
  overline: string;
  title: string;
  description: string;
  topic: string;
  image?: MediaAsset;
}

export type MediaStatus = 'concept' | 'provided' | 'final';

export interface MediaAsset {
  src: string;
  alt: string;
  status: MediaStatus;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  field: string;
  name: string;
  role: string;
  expertise: string;
}

export interface DailyMoment {
  index: string;
  label: string;
  title: string;
  description: string;
}

export const center = {
  name: '강서다앤유재활 데이케어센터',
  shortName: '강서다앤유재활 데이케어센터',
  description:
    '서울 강서구의 강서다앤유재활 데이케어센터입니다. 파킨슨병 등 노인성 질병을 고려한 재활운동, 인지·신체 활동, 일상생활·건강·정서 지원, 급식과 송영 서비스를 제공합니다.',
  logoUrl: 'https://cdn.imweb.me/thumbnail/20251118/380d41f33f811.png',
  websiteUrl: 'https://daandyou.com/',
  publicUrl: 'https://dnucare.co.kr/',
  phone: '02-3665-6660',
  secondaryPhone: '010-6614-3660',
  address: '서울특별시 강서구 공항대로 329, 7층',
  postalCode: '07591',
  hours: '월–금 08:00–19:00 · 토 08:00–17:00',
  transportArea: '강서구 전역 및 인접 양천구',
  mapEmbedEnabled: true,
} as const;

export const media = {
  hero: {
    src: '/images/center-hero.jpg',
    alt: '강서다앤유재활 데이케어센터의 넓고 밝은 공용 생활 공간',
    status: 'final',
  },
  signage: {
    src: '/images/center-signage.jpg',
    alt: '강서다앤유재활 데이케어센터의 실내 브랜드 간판',
    status: 'final',
  },
  mealSupport: {
    src: '/images/center-dining.jpg',
    alt: '강서다앤유재활 데이케어센터의 식사와 생활을 위한 테이블 공간',
    status: 'final',
  },
  movement: {
    src: '/images/center-exercise.jpg',
    alt: '강서다앤유재활 데이케어센터의 재활 운동기구 공간',
    status: 'final',
  },
  daycareLife: {
    src: '/images/center-living.jpg',
    alt: '강서다앤유재활 데이케어센터의 좌석과 테이블이 마련된 생활 공간',
    status: 'final',
  },
} satisfies Record<string, MediaAsset>;

export const mediaStatusLabel: Record<MediaStatus, string> = {
  concept: '콘셉트 이미지 · 실제 센터 사진 아님',
  provided: '제공 이미지 · 실제 센터 사진으로 추후 교체 예정',
  final: '강서다앤유재활 데이케어센터 실제 사진',
};

export const contact = {
  displayPhone: center.phone,
  dialPhone: center.phone.replace(/[^0-9+]/g, ''),
  secondaryDisplayPhone: center.secondaryPhone,
  secondaryDialPhone: center.secondaryPhone.replace(/[^0-9+]/g, ''),
  isProvisional: false,
} as const;

export const team: TeamMember[] = [
  {
    field: 'REPRESENTATIVE',
    name: '윤선영',
    role: '대표자',
    expertise: '요양보호사·장애인활동지원사 등 장기요양 실무 15년 이상 현장경력',
  },
  {
    field: 'DIRECTOR',
    name: '권혜진',
    role: '시설장',
    expertise: '대학병원·장기요양기관 작업치료 14년 경력, ㈜다앤유 재활전문기업 운영이사 경력',
  },
  {
    field: 'ADMINISTRATION',
    name: '이종수',
    role: '사무국장 · 사회복지사',
    expertise: '서강대학교 경영학 전공, HR자산운용 경영관리 총괄 경력',
  },
  {
    field: 'REHABILITATION',
    name: '원예은',
    role: '재활간호팀장 · 작업치료사',
    expertise: '재활병원·지역사회 방문재활 작업치료 10년 경력',
  },
  {
    field: 'NURSING',
    name: '정경희',
    role: '간호사',
    expertise: '고려대학교 구로병원 암병동 간호사 경력',
  },
];

export const programs: Program[] = [
  {
    index: '01',
    overline: 'EATING & SWALLOWING',
    title: '식이·연하 지원',
    description: '식사 자세와 삼킴 관련 어려움을 세심하게 살피며, 편안하고 안전한 식사 참여를 돕습니다.',
    topic: '식사 · 삼킴 · 일상',
    image: media.mealSupport,
  },
  {
    index: '02',
    overline: 'MOVEMENT & BALANCE',
    title: '파킨슨병 재활운동',
    description: '파킨슨병 등 노인성 질병의 움직임 특성을 고려해 재활운동과 신체활동을 일상과 연결합니다.',
    topic: '재활운동 · 신체활동 · 이동',
    image: media.movement,
  },
  {
    index: '03',
    overline: 'COGNITION & DAILY LIFE',
    title: '인지·신체 활동',
    description: '인지활동과 신체활동을 통해 의미 있는 일상 참여를 이어갈 수 있도록 돕습니다.',
    topic: '인지 · 신체 · 참여',
  },
  {
    index: '04',
    overline: 'SOCIAL & EVERYDAY CARE',
    title: '생활·건강·정서 지원',
    description: '일상생활지원과 건강관리, 정서지원, 급식과 송영으로 센터에서의 하루를 함께합니다.',
    topic: '일상생활 · 건강 · 정서',
    image: media.daycareLife,
  },
];

export const dailyMoments: DailyMoment[] = [
  { index: '01', label: 'TOGETHER', title: '함께 시작하는\n아침', description: '편안하게 인사하며 하루를 시작합니다.' },
  { index: '02', label: 'MEAL', title: '즐겁고 편안한\n식사', description: '식사 참여와 안전을 함께 살핍니다.' },
  { index: '03', label: 'ACTIVITY', title: '나에게 맞는\n활동과 움직임', description: '일상 기능과 활동 참여를 돕습니다.' },
  { index: '04', label: 'REST', title: '나답게 보내는\n쉼의 시간', description: '개인의 속도와 편안함을 존중합니다.' },
];

export const trustFacts = [
  { index: '01', title: '15년 이상 현장경력', description: '장기요양 실무를 이해하는 운영' },
  { index: '02', title: '작업치료 전문인력', description: '일상 속 기능과 참여를 고려' },
  { index: '03', title: '간호·복지 협력', description: '재활·간호·사회복지 경험 연결' },
] as const;

export const faqs: FaqItem[] = [
  {
    question: '이용 대상은 어떻게 확인하나요?',
    answer: '만 65세 이상은 노인성 질환으로 장기요양이 필요한 분, 만 65세 미만은 치매·뇌혈관질환·파킨슨병 등 법정 노인성 질병이 있는 분을 대상으로 합니다. 개별 이용 가능 여부는 전화 상담에서 확인해 주세요.',
  },
  {
    question: '어떤 프로그램에 참여할 수 있나요?',
    answer: '재활운동, 인지활동, 신체활동, 일상생활지원, 건강관리, 정서지원, 급식 및 송영 서비스를 제공합니다. 식이·연하 관련 지원을 포함한 개인별 이용 적합성은 상담 과정에서 안내합니다.',
  },
  {
    question: '송영 가능 지역은 어디인가요?',
    answer: '강서구 전역과 인접 양천구를 대상으로 합니다. 정확한 송영 가능 여부와 이용 조건은 거주지와 일정에 따라 전화로 확인해 주세요.',
  },
  {
    question: '운영시간과 이용 절차는 어떻게 되나요?',
    answer: '월요일부터 금요일은 오전 8시부터 오후 7시까지, 토요일은 오전 8시부터 오후 5시까지 운영합니다. 상담 및 이용 절차와 준비 사항은 전화로 안내합니다.',
  },
  {
    question: '상담 전에 무엇을 준비하면 되나요?',
    answer: '어르신의 장기요양등급, 현재 생활에서 불편한 점, 희망 이용 일정이 있다면 상담에 도움이 됩니다.',
  },
];
