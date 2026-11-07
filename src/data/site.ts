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
  name: '다앤유 재활 데이케어센터',
  shortName: '다앤유 재활 데이케어센터',
  description:
    '재활 전문성을 일상의 돌봄에 더하는 다앤유 재활 데이케어센터. 식사·삼킴 지원과 LSVT BIG 기반 움직임·균형 프로그램을 소개합니다.',
  logoUrl: 'https://cdn.imweb.me/thumbnail/20251118/380d41f33f811.png',
  websiteUrl: 'https://daandyou.com/',
  publicUrl: 'https://daandyou-daycare.3pig-webstudio.workers.dev/',
  // 강서 센터 전용 운영 정보가 확정되면 아래 세 값만 교체하세요.
  phone: '',
  provisionalPhone: '02-6953-5776',
  address: '',
  hours: '',
  mapEmbedEnabled: true,
} as const;

export const media = {
  hero: {
    src: '/images/hero.webp',
    alt: '밝은 공용 공간에서 어르신과 돌봄 인력이 함께하는 모습',
    status: 'concept',
  },
  mealSupport: {
    src: '/images/meal_support.webp',
    alt: '식사 시간에 어르신의 참여를 지원하는 모습',
    status: 'concept',
  },
  movement: {
    src: '/images/movement.webp',
    alt: '어르신과 재활 전문인력이 움직임 활동을 하는 모습',
    status: 'concept',
  },
  daycareLife: {
    src: '/images/daycare_life.webp',
    alt: '어르신들이 공용 공간에서 함께 이야기하는 모습',
    status: 'concept',
  },
} satisfies Record<string, MediaAsset>;

export const mediaStatusLabel: Record<MediaStatus, string> = {
  concept: '콘셉트 이미지 · 실제 센터 사진 아님',
  provided: '제공 이미지 · 실제 센터 사진으로 추후 교체 예정',
  final: '다앤유 재활 데이케어센터 실제 사진',
};

export const contact = {
  displayPhone: center.phone || center.provisionalPhone,
  dialPhone: (center.phone || center.provisionalPhone).replace(/[^0-9+]/g, ''),
  isProvisional: !center.phone,
} as const;

export const team: TeamMember[] = [
  { field: 'OPERATIONS', name: '윤선영', role: '운영 총괄', expertise: '장기요양 현장 경험' },
  { field: 'REHABILITATION', name: '권혜진', role: '재활 전문', expertise: '작업치료 및 신경계 재활' },
  { field: 'EDUCATION', name: '박수진', role: '교육 자문', expertise: '교육과 운영 분야의 경험' },
  { field: 'ACADEMIC', name: '윤여용', role: '학술 자문', expertise: '작업치료 및 치매 관련 전문성' },
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
    title: 'LSVT BIG 기반 움직임',
    description: '파킨슨병의 움직임 특성을 고려해 큰 동작·이동·균형 활동을 일상과 연결합니다.',
    topic: '움직임 · 균형 · 이동',
    image: media.movement,
  },
  {
    index: '03',
    overline: 'COGNITION & DAILY LIFE',
    title: '인지·일상 활동',
    description: '인지 기능뿐 아니라 의미 있는 활동과 일상생활의 참여를 함께 고려합니다.',
    topic: '인지 · 일상 · 참여',
  },
  {
    index: '04',
    overline: 'SOCIAL & EVERYDAY CARE',
    title: '함께하는 하루',
    description: '인사하고, 이야기하고, 쉬고, 함께하는 일상 속에서 편안한 관계와 활동을 이어갑니다.',
    topic: '교류 · 휴식 · 생활',
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
  { index: '01', title: '장기요양 경험', description: '현장을 이해하는 운영' },
  { index: '02', title: '재활 전문인력', description: '일상 속 기능과 참여를 고려' },
  { index: '03', title: '전문자문 네트워크', description: '교육·학술·임상 경험 연결' },
] as const;

export const faqs: FaqItem[] = [
  {
    question: '이용 대상은 어떻게 확인하나요?',
    answer: '장기요양등급과 이용 상황 등에 따라 안내가 달라질 수 있어 상담 과정에서 확인합니다.',
  },
  {
    question: '어떤 프로그램에 참여할 수 있나요?',
    answer: '식이·연하 지원, LSVT BIG 기반 움직임, 인지·일상 활동의 구성과 개인별 이용 적합성을 상담 과정에서 안내합니다.',
  },
  {
    question: '송영 가능 지역은 어디인가요?',
    answer: '송영 가능 지역은 실제 센터 운영 범위가 확정되는 대로 안내합니다. 현재는 전화 상담으로 확인해 주세요.',
  },
  {
    question: '운영시간과 이용 절차는 어떻게 되나요?',
    answer: '운영시간은 센터 전용 정보 확정 후 표시합니다. 이용 가능 여부와 준비 사항은 전화 상담에서 순서대로 안내합니다.',
  },
  {
    question: '상담 전에 무엇을 준비하면 되나요?',
    answer: '어르신의 장기요양등급, 현재 생활에서 불편한 점, 희망 이용 일정이 있다면 상담에 도움이 됩니다.',
  },
];
