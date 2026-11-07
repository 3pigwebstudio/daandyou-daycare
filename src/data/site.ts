export interface Program {
  index: string;
  overline: string;
  title: string;
  description: string;
  topic: string;
  image?: string;
  imageAlt?: string;
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
  name: '강서 다앤유 재활 데이케어센터',
  shortName: '강서 다앤유',
  description:
    '재활 전문성을 일상의 돌봄에 더하는 강서 다앤유 재활 데이케어센터. 식사·삼킴 지원과 LSVT BIG 기반 움직임·균형 프로그램을 소개합니다.',
  logoUrl: 'https://cdn.imweb.me/thumbnail/20251118/380d41f33f811.png',
  websiteUrl: 'https://daandyou.com/',
  // 강서 센터 전용 운영 정보가 확정되면 아래 세 값만 교체하세요.
  phone: '',
  provisionalPhone: '02-6953-5776',
  address: '',
  hours: '',
  mapEmbedEnabled: true,
} as const;

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
    image: '/images/meal_support.webp',
    imageAlt: '식사 시간에 어르신을 지원하는 콘셉트 이미지',
  },
  {
    index: '02',
    overline: 'MOVEMENT & BALANCE',
    title: 'LSVT BIG 기반 움직임',
    description: '파킨슨병의 움직임 특성을 고려해 큰 동작·이동·균형 활동을 일상과 연결합니다.',
    topic: '움직임 · 균형 · 이동',
    image: '/images/movement.webp',
    imageAlt: '어르신과 치료사가 운동하는 콘셉트 이미지',
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
    image: '/images/daycare_life.webp',
    imageAlt: '어르신들이 함께 어울리는 데이케어 콘셉트 이미지',
  },
];

export const dailyMoments: DailyMoment[] = [
  { index: '01', label: 'TOGETHER', title: '함께 시작하는\n아침', description: '편안하게 인사하며 하루를 시작합니다.' },
  { index: '02', label: 'MEAL', title: '즐겁고 편안한\n식사', description: '식사 참여와 안전을 함께 살핍니다.' },
  { index: '03', label: 'ACTIVITY', title: '나에게 맞는\n활동과 움직임', description: '일상 기능과 활동 참여를 돕습니다.' },
  { index: '04', label: 'REST', title: '나답게 보내는\n쉼의 시간', description: '개인의 속도와 편안함을 존중합니다.' },
];
