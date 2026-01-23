import type { SupportedLang } from './i18n';

// Translation templates for detailed horoscope
export const detailedHoroscopeTranslations: Record<SupportedLang, {
  // Summary templates
  horoscopeReveals: (scope: string, energy: string, sign: string) => string;
  offersOpportunities: (scope: string, area: string, sign: string, support: string) => string;
  overallEnergy: (energy: string, emphasis: string, sign: string, nature: string) => string;
  whileEncounter: (challenge: string, area: string, trajectory: string) => string;
  periodSuited: (scope: string, action: string) => string;
  cosmicEnergy: (sign: string, encouragement: string, advice: string) => string;
  
  // Score areas
  relationships: string;
  professional: string;
  financial: string;
  physical: string;
  
  // Energy levels
  exceptionallyStrong: string;
  veryPositive: string;
  generallyFavorable: string;
  mixedButPromising: string;
  
  // Challenge levels
  someChallenges: string;
  moderateObstacles: string;
  minimalDifficulties: string;
  
  // Support levels
  powerfullySupported: string;
  gentlyGuided: string;
  
  // Time descriptions
  timeOfExpansion: string;
  periodOfConsolidation: string;
  takingInitiative: string;
  beingPatient: string;
  amplifiedAndCelebrated: string;
  challengedAndRefined: string;
  upwardAndOptimistic: string;
  steadyAndTransformative: string;
  exploringNew: string;
  focusingOnExisting: string;
  growthAndExpansion: string;
  wisdomAndMaturity: string;
  embraceOpportunities: string;
  focusOnAreas: string;
  
  // Scope descriptions
  todayBrings: string;
  thisWeekOffers: string;
  thisMonthPresents: string;
  thisYearHolds: string;
  thisPeriodBrings: string;
}> = {
  en: {
    horoscopeReveals: (scope, energy, sign) => `Your ${scope} horoscope reveals a ${energy} cosmic alignment for your ${sign} energy.`,
    offersOpportunities: (scope, area, sign, support) => `${scope} significant opportunities in ${area}, with your natural ${sign} tendencies being ${support} by current planetary influences.`,
    overallEnergy: (energy, emphasis, sign, nature) => `The overall energy suggests ${energy}, with particular emphasis on ${emphasis}. Your ${sign} nature is being ${nature} by the current cosmic weather.`,
    whileEncounter: (challenge, area, trajectory) => `While you may encounter ${challenge} in ${area}, the overall trajectory is ${trajectory}.`,
    periodSuited: (scope, action) => `This ${scope} period is particularly suited for ${action}.`,
    cosmicEnergy: (sign, encouragement, advice) => `The cosmic energy supports your natural ${sign} tendencies while encouraging ${encouragement}. Trust your intuition and ${advice}.`,
    relationships: 'relationships and emotional connections',
    professional: 'professional development and career advancement',
    financial: 'financial stability and material success',
    physical: 'physical well-being and vitality',
    exceptionallyStrong: 'exceptionally strong',
    veryPositive: 'very positive',
    generallyFavorable: 'generally favorable',
    mixedButPromising: 'mixed but promising',
    someChallenges: 'some challenges',
    moderateObstacles: 'moderate obstacles',
    minimalDifficulties: 'minimal difficulties',
    powerfullySupported: 'powerfully supported',
    gentlyGuided: 'gently guided',
    timeOfExpansion: 'a time of expansion and growth',
    periodOfConsolidation: 'a period of consolidation and refinement',
    takingInitiative: 'taking initiative and making bold moves',
    beingPatient: 'being patient and building solid foundations',
    amplifiedAndCelebrated: 'amplified and celebrated',
    challengedAndRefined: 'challenged and refined',
    upwardAndOptimistic: 'upward and optimistic',
    steadyAndTransformative: 'steady and transformative',
    exploringNew: 'exploring new possibilities and taking calculated risks',
    focusingOnExisting: 'focusing on existing goals and deepening commitments',
    growthAndExpansion: 'growth and expansion',
    wisdomAndMaturity: 'wisdom and maturity',
    embraceOpportunities: 'embrace the opportunities that come your way',
    focusOnAreas: 'focus on the areas that need your attention',
    todayBrings: 'today brings',
    thisWeekOffers: 'this week offers',
    thisMonthPresents: 'this month presents',
    thisYearHolds: 'this year holds',
    thisPeriodBrings: 'this period brings'
  },
  es: {
    horoscopeReveals: (scope, energy, sign) => `Tu horóscopo ${scope} revela una alineación cósmica ${energy} para tu energía ${sign}.`,
    offersOpportunities: (scope, area, sign, support) => `${scope} oportunidades significativas en ${area}, con tus tendencias naturales de ${sign} siendo ${support} por las influencias planetarias actuales.`,
    overallEnergy: (energy, emphasis, sign, nature) => `La energía general sugiere ${energy}, con énfasis particular en ${emphasis}. Tu naturaleza ${sign} está siendo ${nature} por el clima cósmico actual.`,
    whileEncounter: (challenge, area, trajectory) => `Aunque puedas encontrar ${challenge} en ${area}, la trayectoria general es ${trajectory}.`,
    periodSuited: (scope, action) => `Este período ${scope} es particularmente adecuado para ${action}.`,
    cosmicEnergy: (sign, encouragement, advice) => `La energía cósmica apoya tus tendencias naturales de ${sign} mientras fomenta ${encouragement}. Confía en tu intuición y ${advice}.`,
    relationships: 'relaciones y conexiones emocionales',
    professional: 'desarrollo profesional y avance en la carrera',
    financial: 'estabilidad financiera y éxito material',
    physical: 'bienestar físico y vitalidad',
    exceptionallyStrong: 'excepcionalmente fuerte',
    veryPositive: 'muy positiva',
    generallyFavorable: 'generalmente favorable',
    mixedButPromising: 'mixta pero prometedora',
    someChallenges: 'algunos desafíos',
    moderateObstacles: 'obstáculos moderados',
    minimalDifficulties: 'dificultades mínimas',
    powerfullySupported: 'poderosamente apoyadas',
    gentlyGuided: 'suavemente guiadas',
    timeOfExpansion: 'un tiempo de expansión y crecimiento',
    periodOfConsolidation: 'un período de consolidación y refinamiento',
    takingInitiative: 'tomar la iniciativa y hacer movimientos audaces',
    beingPatient: 'ser paciente y construir bases sólidas',
    amplifiedAndCelebrated: 'amplificada y celebrada',
    challengedAndRefined: 'desafiada y refinada',
    upwardAndOptimistic: 'ascendente y optimista',
    steadyAndTransformative: 'estable y transformadora',
    exploringNew: 'explorar nuevas posibilidades y tomar riesgos calculados',
    focusingOnExisting: 'enfocarse en objetivos existentes y profundizar compromisos',
    growthAndExpansion: 'crecimiento y expansión',
    wisdomAndMaturity: 'sabiduría y madurez',
    embraceOpportunities: 'abrazar las oportunidades que se presenten',
    focusOnAreas: 'enfocarse en las áreas que necesitan tu atención',
    todayBrings: 'hoy trae',
    thisWeekOffers: 'esta semana ofrece',
    thisMonthPresents: 'este mes presenta',
    thisYearHolds: 'este año tiene',
    thisPeriodBrings: 'este período trae'
  },
  fr: {
    horoscopeReveals: (scope, energy, sign) => `Votre horoscope ${scope} révèle un alignement cosmique ${energy} pour votre énergie ${sign}.`,
    offersOpportunities: (scope, area, sign, support) => `${scope} des opportunités significatives dans ${area}, avec vos tendances naturelles de ${sign} étant ${support} par les influences planétaires actuelles.`,
    overallEnergy: (energy, emphasis, sign, nature) => `L\'énergie globale suggère ${energy}, avec un accent particulier sur ${emphasis}. Votre nature ${sign} est ${nature} par le climat cosmique actuel.`,
    whileEncounter: (challenge, area, trajectory) => `Bien que vous puissiez rencontrer ${challenge} dans ${area}, la trajectoire globale est ${trajectory}.`,
    periodSuited: (scope, action) => `Cette période ${scope} est particulièrement adaptée pour ${action}.`,
    cosmicEnergy: (sign, encouragement, advice) => `L\'énergie cosmique soutient vos tendances naturelles de ${sign} tout en encourageant ${encouragement}. Faites confiance à votre intuition et ${advice}.`,
    relationships: 'relations et connexions émotionnelles',
    professional: 'développement professionnel et avancement de carrière',
    financial: 'stabilité financière et succès matériel',
    physical: 'bien-être physique et vitalité',
    exceptionallyStrong: 'exceptionnellement fort',
    veryPositive: 'très positif',
    generallyFavorable: 'généralement favorable',
    mixedButPromising: 'mixte mais prometteur',
    someChallenges: 'quelques défis',
    moderateObstacles: 'obstacles modérés',
    minimalDifficulties: 'difficultés minimales',
    powerfullySupported: 'puissamment soutenues',
    gentlyGuided: 'doucement guidées',
    timeOfExpansion: 'un temps d\'expansion et de croissance',
    periodOfConsolidation: 'une période de consolidation et de raffinement',
    takingInitiative: 'prendre l\'initiative et faire des mouvements audacieux',
    beingPatient: 'être patient et construire des bases solides',
    amplifiedAndCelebrated: 'amplifiée et célébrée',
    challengedAndRefined: 'défiée et raffinée',
    upwardAndOptimistic: 'ascendante et optimiste',
    steadyAndTransformative: 'stable et transformative',
    exploringNew: 'explorer de nouvelles possibilités et prendre des risques calculés',
    focusingOnExisting: 'se concentrer sur les objectifs existants et approfondir les engagements',
    growthAndExpansion: 'croissance et expansion',
    wisdomAndMaturity: 'sagesse et maturité',
    embraceOpportunities: 'embrasser les opportunités qui se présentent',
    focusOnAreas: 'se concentrer sur les domaines qui nécessitent votre attention',
    todayBrings: 'aujourd\'hui apporte',
    thisWeekOffers: 'cette semaine offre',
    thisMonthPresents: 'ce mois présente',
    thisYearHolds: 'cette année détient',
    thisPeriodBrings: 'cette période apporte'
  },
  zh: {
    horoscopeReveals: (scope, energy, sign) => `您的${scope}占星揭示了一个${energy}的宇宙对齐，适合您的${sign}能量。`,
    offersOpportunities: (scope, area, sign, support) => `${scope}在${area}方面有重要机会，您天生的${sign}倾向受到当前行星影响的${support}。`,
    overallEnergy: (energy, emphasis, sign, nature) => `整体能量表明${energy}，特别强调${emphasis}。您的${sign}天性正在被当前的宇宙天气${nature}。`,
    whileEncounter: (challenge, area, trajectory) => `虽然您可能在${area}方面遇到${challenge}，但整体轨迹是${trajectory}。`,
    periodSuited: (scope, action) => `这个${scope}时期特别适合${action}。`,
    cosmicEnergy: (sign, encouragement, advice) => `宇宙能量支持您天生的${sign}倾向，同时鼓励${encouragement}。相信您的直觉并${advice}。`,
    relationships: '关系和情感连接',
    professional: '职业发展和事业进步',
    financial: '财务稳定和物质成功',
    physical: '身体健康和活力',
    exceptionallyStrong: '异常强烈',
    veryPositive: '非常积极',
    generallyFavorable: '总体有利',
    mixedButPromising: '混合但充满希望',
    someChallenges: '一些挑战',
    moderateObstacles: '中等障碍',
    minimalDifficulties: '最小困难',
    powerfullySupported: '强力支持',
    gentlyGuided: '温和引导',
    timeOfExpansion: '扩张和成长的时期',
    periodOfConsolidation: '巩固和精炼的时期',
    takingInitiative: '采取主动并做出大胆行动',
    beingPatient: '保持耐心并建立坚实基础',
    amplifiedAndCelebrated: '放大和庆祝',
    challengedAndRefined: '挑战和精炼',
    upwardAndOptimistic: '上升和乐观',
    steadyAndTransformative: '稳定和变革',
    exploringNew: '探索新的可能性并采取计算风险',
    focusingOnExisting: '专注于现有目标并深化承诺',
    growthAndExpansion: '成长和扩张',
    wisdomAndMaturity: '智慧和成熟',
    embraceOpportunities: '拥抱到来的机会',
    focusOnAreas: '专注于需要您注意的领域',
    todayBrings: '今天带来',
    thisWeekOffers: '本周提供',
    thisMonthPresents: '本月呈现',
    thisYearHolds: '今年持有',
    thisPeriodBrings: '这个时期带来'
  },
  id: {
    horoscopeReveals: (scope, energy, sign) => `Horoskop ${scope} Anda mengungkapkan keselarasan kosmik ${energy} untuk energi ${sign} Anda.`,
    offersOpportunities: (scope, area, sign, support) => `${scope} peluang signifikan dalam ${area}, dengan kecenderungan alami ${sign} Anda yang ${support} oleh pengaruh planet saat ini.`,
    overallEnergy: (energy, emphasis, sign, nature) => `Energi keseluruhan menunjukkan ${energy}, dengan penekanan khusus pada ${emphasis}. Sifat ${sign} Anda sedang ${nature} oleh cuaca kosmik saat ini.`,
    whileEncounter: (challenge, area, trajectory) => `Meskipun Anda mungkin menghadapi ${challenge} dalam ${area}, lintasan keseluruhan adalah ${trajectory}.`,
    periodSuited: (scope, action) => `Periode ${scope} ini sangat cocok untuk ${action}.`,
    cosmicEnergy: (sign, encouragement, advice) => `Energi kosmik mendukung kecenderungan alami ${sign} Anda sambil mendorong ${encouragement}. Percayai intuisi Anda dan ${advice}.`,
    relationships: 'hubungan dan koneksi emosional',
    professional: 'pengembangan profesional dan kemajuan karier',
    financial: 'stabilitas keuangan dan kesuksesan material',
    physical: 'kesejahteraan fisik dan vitalitas',
    exceptionallyStrong: 'sangat kuat',
    veryPositive: 'sangat positif',
    generallyFavorable: 'umumnya menguntungkan',
    mixedButPromising: 'campuran tetapi menjanjikan',
    someChallenges: 'beberapa tantangan',
    moderateObstacles: 'rintangan sedang',
    minimalDifficulties: 'kesulitan minimal',
    powerfullySupported: 'sangat didukung',
    gentlyGuided: 'dibimbing dengan lembut',
    timeOfExpansion: 'waktu ekspansi dan pertumbuhan',
    periodOfConsolidation: 'periode konsolidasi dan penyempurnaan',
    takingInitiative: 'mengambil inisiatif dan membuat langkah berani',
    beingPatient: 'bersabar dan membangun fondasi yang solid',
    amplifiedAndCelebrated: 'diperkuat dan dirayakan',
    challengedAndRefined: 'ditantang dan disempurnakan',
    upwardAndOptimistic: 'naik dan optimis',
    steadyAndTransformative: 'stabil dan transformatif',
    exploringNew: 'menjelajahi kemungkinan baru dan mengambil risiko yang dihitung',
    focusingOnExisting: 'fokus pada tujuan yang ada dan memperdalam komitmen',
    growthAndExpansion: 'pertumbuhan dan ekspansi',
    wisdomAndMaturity: 'kebijaksanaan dan kematangan',
    embraceOpportunities: 'menerima peluang yang datang',
    focusOnAreas: 'fokus pada area yang membutuhkan perhatian Anda',
    todayBrings: 'hari ini membawa',
    thisWeekOffers: 'minggu ini menawarkan',
    thisMonthPresents: 'bulan ini menyajikan',
    thisYearHolds: 'tahun ini memiliki',
    thisPeriodBrings: 'periode ini membawa'
  },
  ja: {
    horoscopeReveals: (scope, energy, sign) => `あなたの${scope}占星術は、${sign}のエネルギーに対して${energy}の宇宙の配置を明らかにします。`,
    offersOpportunities: (scope, area, sign, support) => `${scope}は${area}において重要な機会を提供し、あなたの自然な${sign}の傾向が現在の惑星の影響によって${support}されています。`,
    overallEnergy: (energy, emphasis, sign, nature) => `全体的なエネルギーは${energy}を示唆し、特に${emphasis}に重点を置いています。あなたの${sign}の性質は現在の宇宙の天候によって${nature}されています。`,
    whileEncounter: (challenge, area, trajectory) => `あなたは${area}で${challenge}に遭遇するかもしれませんが、全体的な軌道は${trajectory}です。`,
    periodSuited: (scope, action) => `この${scope}期間は特に${action}に適しています。`,
    cosmicEnergy: (sign, encouragement, advice) => `宇宙のエネルギーはあなたの自然な${sign}の傾向をサポートしながら、${encouragement}を奨励しています。あなたの直感を信頼し、${advice}。`,
    relationships: '関係と感情的なつながり',
    professional: '専門的な発展とキャリアの進歩',
    financial: '財政的な安定と物質的な成功',
    physical: '身体的な健康と活力',
    exceptionallyStrong: '非常に強い',
    veryPositive: '非常に前向き',
    generallyFavorable: '一般的に有利',
    mixedButPromising: '混合だが有望',
    someChallenges: 'いくつかの挑戦',
    moderateObstacles: '中程度の障害',
    minimalDifficulties: '最小限の困難',
    powerfullySupported: '強力にサポート',
    gentlyGuided: '優しく導かれる',
    timeOfExpansion: '拡大と成長の時期',
    periodOfConsolidation: '統合と洗練の期間',
    takingInitiative: '主導権を握り、大胆な動きをする',
    beingPatient: '忍耐強く、堅実な基盤を築く',
    amplifiedAndCelebrated: '増幅され、祝われる',
    challengedAndRefined: '挑戦され、洗練される',
    upwardAndOptimistic: '上向きで楽観的',
    steadyAndTransformative: '安定して変革的',
    exploringNew: '新しい可能性を探求し、計算されたリスクを取る',
    focusingOnExisting: '既存の目標に焦点を当て、コミットメントを深める',
    growthAndExpansion: '成長と拡大',
    wisdomAndMaturity: '知恵と成熟',
    embraceOpportunities: '来る機会を受け入れる',
    focusOnAreas: 'あなたの注意が必要な領域に焦点を当てる',
    todayBrings: '今日はもたらす',
    thisWeekOffers: '今週は提供する',
    thisMonthPresents: '今月は提示する',
    thisYearHolds: '今年は保持する',
    thisPeriodBrings: 'この期間はもたらす'
  },
  ko: {
    horoscopeReveals: (scope, energy, sign) => `당신의 ${scope} 점성술은 ${sign} 에너지에 대한 ${energy} 우주 정렬을 드러냅니다.`,
    offersOpportunities: (scope, area, sign, support) => `${scope}는 ${area}에서 중요한 기회를 제공하며, 당신의 자연스러운 ${sign} 경향이 현재 행성의 영향에 의해 ${support}되고 있습니다.`,
    overallEnergy: (energy, emphasis, sign, nature) => `전체 에너지는 ${energy}를 시사하며, 특히 ${emphasis}에 중점을 둡니다. 당신의 ${sign} 성격은 현재 우주 날씨에 의해 ${nature}되고 있습니다.`,
    whileEncounter: (challenge, area, trajectory) => `당신은 ${area}에서 ${challenge}를 만날 수 있지만, 전체 궤적은 ${trajectory}입니다.`,
    periodSuited: (scope, action) => `이 ${scope} 기간은 특히 ${action}에 적합합니다.`,
    cosmicEnergy: (sign, encouragement, advice) => `우주 에너지는 당신의 자연스러운 ${sign} 경향을 지원하면서 ${encouragement}를 장려합니다. 당신의 직감을 신뢰하고 ${advice}.`,
    relationships: '관계와 감정적 연결',
    professional: '전문적 발전과 경력 향상',
    financial: '재정적 안정과 물질적 성공',
    physical: '신체적 웰빙과 활력',
    exceptionallyStrong: '예외적으로 강함',
    veryPositive: '매우 긍정적',
    generallyFavorable: '일반적으로 유리함',
    mixedButPromising: '혼합이지만 유망함',
    someChallenges: '일부 도전',
    moderateObstacles: '중간 장애물',
    minimalDifficulties: '최소한의 어려움',
    powerfullySupported: '강력하게 지원됨',
    gentlyGuided: '부드럽게 안내됨',
    timeOfExpansion: '확장과 성장의 시기',
    periodOfConsolidation: '통합과 정제의 기간',
    takingInitiative: '주도권을 잡고 대담한 움직임을 취함',
    beingPatient: '인내심을 갖고 견고한 기반을 구축함',
    amplifiedAndCelebrated: '증폭되고 축하됨',
    challengedAndRefined: '도전받고 정제됨',
    upwardAndOptimistic: '상승하고 낙관적',
    steadyAndTransformative: '안정적이고 변혁적',
    exploringNew: '새로운 가능성을 탐색하고 계산된 위험을 감수함',
    focusingOnExisting: '기존 목표에 집중하고 약속을 깊게 함',
    growthAndExpansion: '성장과 확장',
    wisdomAndMaturity: '지혜와 성숙',
    embraceOpportunities: '다가오는 기회를 받아들임',
    focusOnAreas: '당신의 주의가 필요한 영역에 집중',
    todayBrings: '오늘은 가져옴',
    thisWeekOffers: '이번 주는 제공함',
    thisMonthPresents: '이번 달은 제시함',
    thisYearHolds: '올해는 보유함',
    thisPeriodBrings: '이 기간은 가져옴'
  }
};

