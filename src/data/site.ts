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
    '부모님의 편안한 하루를 재활 전문인력이 함께 살피는 서울 강서구의 강서다앤유재활 데이케어센터입니다. 재활운동과 인지·신체 활동, 식사, 건강, 정서, 등원·귀가 차량 지원까지 세심하게 함께합니다.',
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
    src: '/images/activity-group-exercise.jpg',
    alt: '강서다앤유재활 데이케어센터에서 어르신들이 직원과 함께 신체활동에 참여하는 모습',
    status: 'final',
  },
  signage: {
    src: '/images/center-signage.jpg',
    alt: '강서다앤유재활 데이케어센터의 실내 브랜드 간판',
    status: 'final',
  },
  mealSupport: {
    src: '/images/activity-meal-support.jpg',
    alt: '강서다앤유재활 데이케어센터에서 직원이 어르신의 편안한 식사 참여를 돕는 모습',
    status: 'final',
  },
  movement: {
    src: '/images/activity-rehab-walking.jpg',
    alt: '강서다앤유재활 데이케어센터에서 어르신이 지원 인력과 함께 보행·균형 활동에 참여하는 모습',
    status: 'final',
  },
  cognition: {
    src: '/images/activity-cognitive-tablet.jpg',
    alt: '강서다앤유재활 데이케어센터에서 직원과 어르신이 태블릿을 활용한 인지활동에 참여하는 모습',
    status: 'final',
  },
  daycareLife: {
    src: '/images/activity-social-movement.jpg',
    alt: '강서다앤유재활 데이케어센터에서 어르신들이 함께 웃으며 소그룹 신체활동에 참여하는 모습',
    status: 'final',
  },
} satisfies Record<string, MediaAsset>;

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
    description: '식사 자세와 삼킴의 어려움을 세심하게 살펴, 매일의 식사 시간이 더 편안하고 안전하도록 돕습니다.',
    topic: '식사 · 삼킴 · 일상',
    image: media.mealSupport,
  },
  {
    index: '02',
    overline: 'MOVEMENT & BALANCE',
    title: '파킨슨병 재활운동',
    description: '파킨슨병 등 노인성 질병의 움직임 특성을 고려해, 걷기와 움직임을 어르신의 일상에 맞게 돕습니다.',
    topic: '재활운동 · 신체활동 · 이동',
    image: media.movement,
  },
  {
    index: '03',
    overline: 'COGNITION & DAILY LIFE',
    title: '인지·신체 활동',
    description: '즐겁게 참여하는 인지·신체 활동으로 익숙한 일상과 자신감을 이어가실 수 있도록 돕습니다.',
    topic: '인지 · 신체 · 참여',
    image: media.cognition,
  },
  {
    index: '04',
    overline: 'SOCIAL & EVERYDAY CARE',
    title: '생활·건강·정서 지원',
    description: '건강과 마음을 살피고 식사와 등원·귀가 차량 지원까지 챙기며, 센터에서 보내는 하루를 따뜻하게 함께합니다.',
    topic: '일상생활 · 건강 · 정서',
    image: media.daycareLife,
  },
];

export const dailyMoments: DailyMoment[] = [
  { index: '01', label: 'TOGETHER', title: '반갑게 맞이하는\n아침', description: '익숙한 얼굴과 따뜻한 인사로 하루를 시작합니다.' },
  { index: '02', label: 'MEAL', title: '맛있고 편안한\n식사', description: '식사 모습과 안전을 곁에서 세심하게 살핍니다.' },
  { index: '03', label: 'ACTIVITY', title: '나에게 맞는\n활동과 움직임', description: '몸 상태와 속도에 맞춰 즐겁게 참여하도록 돕습니다.' },
  { index: '04', label: 'REST', title: '마음 놓고 보내는\n쉼의 시간', description: '서두르지 않고 편안하게 쉬실 수 있도록 함께합니다.' },
];

export const trustFacts = [
  { index: '01', title: '15년 이상 현장경력', description: '어르신과 가족의 마음을 이해하는 운영' },
  { index: '02', title: '작업치료 전문인력', description: '몸 상태와 일상생활을 함께 살피는 돌봄' },
  { index: '03', title: '간호·복지 협력', description: '건강부터 생활까지 이어지는 세심한 지원' },
] as const;

export const faqs: FaqItem[] = [
  {
    question: '이용 대상은 어떻게 확인하나요?',
    answer: '만 65세 이상으로 노인성 질환 때문에 장기요양이 필요한 분, 또는 만 65세 미만으로 치매·뇌혈관질환·파킨슨병 등 법정 노인성 질병이 있는 분이 이용할 수 있습니다. 잘 모르셔도 괜찮습니다. 전화로 상황을 말씀해 주시면 차근차근 안내해 드립니다.',
  },
  {
    question: '어떤 프로그램에 참여할 수 있나요?',
    answer: '재활운동, 인지·신체 활동, 일상생활과 건강·정서 지원, 급식과 등원·귀가 차량 지원을 함께 제공합니다. 식사와 삼킴을 포함해 부모님께 어떤 도움이 맞을지는 상담하면서 세심하게 살펴드립니다.',
  },
  {
    question: '차량 지원은 어느 지역까지 가능한가요?',
    answer: '센터 차량으로 어르신의 등원과 귀가를 도와드립니다. 강서구 전역과 인접 양천구가 대상이며, 거주지와 이용 일정에 따라 달라질 수 있으니 주소를 말씀해 주시면 가능한 방법을 확인해 드립니다.',
  },
  {
    question: '운영시간과 이용 절차는 어떻게 되나요?',
    answer: '월요일부터 금요일은 오전 8시부터 오후 7시까지, 토요일은 오전 8시부터 오후 5시까지 운영합니다. 처음 문의하셔도 필요한 절차와 준비 사항을 순서대로 안내해 드립니다.',
  },
  {
    question: '상담 전에 무엇을 준비하면 되나요?',
    answer: '장기요양등급, 현재 생활에서 불편한 점, 희망 이용 일정을 알고 계시면 상담에 도움이 됩니다. 정확히 모르셔도 괜찮으니 편하게 연락해 주세요.',
  },
];
