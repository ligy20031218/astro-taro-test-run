import type { HoroscopeUnit } from './types';

// Deterministic random number generator for consistent results
function seededRandom(seed: string): () => number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  let state = Math.abs(hash);
  return () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
}

// Generate detailed horoscope with scores and insights
export function generateDetailedHoroscope(
  sign: string, 
  scope: 'daily'|'weekly'|'monthly'|'yearly',
  startDate: string
): Omit<HoroscopeUnit, 'text'> {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(start);
  
  if (scope === 'daily') {
    end.setDate(end.getDate() + 1);
  } else if (scope === 'weekly') {
    end.setDate(end.getDate() + 7);
  } else if (scope === 'monthly') {
    end.setMonth(end.getMonth() + 1);
  } else if (scope === 'yearly') {
    end.setFullYear(end.getFullYear() + 1);
  }

  // Create more dynamic seed including current time for uniqueness
  const currentTime = now.getTime();
  const seed = `${sign}-${scope}-${startDate}-${Math.floor(currentTime / (1000 * 60 * 60))}`; // Changes every hour
  const random = seededRandom(seed);

  // Generate consistent scores based on sign and date
  const baseScores = getSignBaseScores(sign);
  const scores = {
    love: Math.floor(baseScores.love + (random() * 20) - 10),      // ±10 from base
    career: Math.floor(baseScores.career + (random() * 20) - 10),  // ±10 from base
    wealth: Math.floor(baseScores.wealth + (random() * 20) - 10),  // ±10 from base
    health: Math.floor(baseScores.health + (random() * 20) - 10)   // ±10 from base
  };

  // Ensure scores are within reasonable bounds
  scores.love = Math.max(40, Math.min(100, scores.love));
  scores.career = Math.max(30, Math.min(100, scores.career));
  scores.wealth = Math.max(20, Math.min(100, scores.wealth));
  scores.health = Math.max(50, Math.min(100, scores.health));

  // Generate key dates
  const keyDates = generateKeyDates(start, end, 3, random);

  // Generate tips
  const tipsDo = generateTips('do', sign, scope);
  const tipsDont = generateTips('dont', sign, scope);

  // Lucky elements
  const lucky = {
    color: getLuckyColor(sign),
    number: Math.floor(random() * 9) + 1
  };

  // Generate comprehensive horoscope sections
  const sections = generateHoroscopeSections(sign, scope, start, end, random);

  // Generate overall summary and suggestions
  const summary = generateOverallSummary(sign, scope, scores, random);
  const suggestions = generateSuggestions(sign, scope, scores, random);

  return {
    scope,
    signBase: 'sun' as const,
    startISO: start.toISOString(),
    endISO: end.toISOString(),
    scores,
    keyDates,
    tipsDo,
    tipsDont,
    lucky,
    summary,
    suggestions,
    sections
  };
}

// Get base scores for each zodiac sign
function getSignBaseScores(sign: string) {
  const signScores: Record<string, {love: number, career: number, wealth: number, health: number}> = {
    'Aries': { love: 75, career: 80, wealth: 70, health: 85 },
    'Taurus': { love: 85, career: 75, wealth: 90, health: 80 },
    'Gemini': { love: 70, career: 85, wealth: 65, health: 75 },
    'Cancer': { love: 90, career: 70, wealth: 75, health: 80 },
    'Leo': { love: 80, career: 85, wealth: 80, health: 85 },
    'Virgo': { love: 70, career: 90, wealth: 85, health: 90 },
    'Libra': { love: 90, career: 75, wealth: 70, health: 75 },
    'Scorpio': { love: 85, career: 80, wealth: 80, health: 80 },
    'Sagittarius': { love: 75, career: 80, wealth: 75, health: 85 },
    'Capricorn': { love: 70, career: 95, wealth: 90, health: 80 },
    'Aquarius': { love: 65, career: 85, wealth: 70, health: 80 },
    'Pisces': { love: 90, career: 70, wealth: 65, health: 75 }
  };
  
  return signScores[sign] || { love: 75, career: 75, wealth: 75, health: 80 };
}

function generateKeyDates(start: Date, end: Date, count: number, random: () => number): string[] {
  const dates = [];
  const diffTime = end.getTime() - start.getTime();
  
  for (let i = 0; i < count; i++) {
    const randomTime = start.getTime() + random() * diffTime;
    dates.push(new Date(randomTime).toISOString().split('T')[0]);
  }
  
  return dates.sort();
}

function generateTips(type: 'do'|'dont', sign: string, scope: string): string[] {
  const tips = {
    do: [
      `Trust your ${sign} intuition in decision-making`,
      `Focus on ${scope === 'weekly' ? 'daily' : 'weekly'} goal-setting`,
      `Connect with supportive people in your network`,
      `Take time for creative expression`,
      `Practice mindfulness and meditation`
    ],
    dont: [
      `Avoid making major decisions under pressure`,
      `Don't ignore your physical health needs`,
      `Steer clear of unnecessary conflicts`,
      `Avoid overcommitting to social obligations`,
      `Don't rush important conversations`
    ]
  };

  return tips[type].slice(0, 3);
}

function getLuckyColor(sign: string): string {
  const colors: Record<string, string> = {
    'Aries': 'Red', 'Taurus': 'Green', 'Gemini': 'Yellow',
    'Cancer': 'Silver', 'Leo': 'Gold', 'Virgo': 'Brown',
    'Libra': 'Pink', 'Scorpio': 'Maroon', 'Sagittarius': 'Purple',
    'Capricorn': 'Black', 'Aquarius': 'Blue', 'Pisces': 'Sea Green'
  };
  return colors[sign] || 'Gold';
}


// Get sign-specific insights for more personalized text
function getSignInsights(sign: string) {
  const insights: Record<string, {general: string, energy: string, advice: string, encouragement: string}> = {
    'Aries': {
      general: 'dynamic and action-oriented',
      energy: 'strongly favors',
      advice: 'a time of bold leadership and taking initiative',
      encouragement: 'courage and decisive action'
    },
    'Taurus': {
      general: 'stable and growth-focused',
      energy: 'supports',
      advice: 'a period of steady progress and material security',
      encouragement: 'patience and consistent effort'
    },
    'Gemini': {
      general: 'communicative and intellectually stimulating',
      energy: 'enhances',
      advice: 'a time of learning, networking, and mental expansion',
      encouragement: 'curiosity and open communication'
    },
    'Cancer': {
      general: 'emotionally nurturing and intuitive',
      energy: 'amplifies',
      advice: 'a period of emotional healing and family connections',
      encouragement: 'emotional intelligence and caring for others'
    },
    'Leo': {
      general: 'creative and confidence-building',
      energy: 'magnifies',
      advice: 'a time of self-expression and recognition',
      encouragement: 'creativity and authentic self-expression'
    },
    'Virgo': {
      general: 'practical and detail-oriented',
      energy: 'supports',
      advice: 'a period of organization and service to others',
      encouragement: 'attention to detail and helpfulness'
    },
    'Libra': {
      general: 'harmonious and relationship-focused',
      energy: 'promotes',
      advice: 'a time of balance, partnerships, and aesthetic appreciation',
      encouragement: 'diplomacy and seeking harmony'
    },
    'Scorpio': {
      general: 'transformative and deeply insightful',
      energy: 'intensifies',
      advice: 'a period of deep transformation and uncovering hidden truths',
      encouragement: 'emotional depth and personal power'
    },
    'Sagittarius': {
      general: 'adventurous and philosophically expansive',
      energy: 'inspires',
      advice: 'a time of exploration, learning, and broadening horizons',
      encouragement: 'optimism and adventurous spirit'
    },
    'Capricorn': {
      general: 'ambitious and strategically focused',
      energy: 'strengthens',
      advice: 'a period of career advancement and long-term planning',
      encouragement: 'discipline and strategic thinking'
    },
    'Aquarius': {
      general: 'innovative and community-oriented',
      energy: 'stimulates',
      advice: 'a time of innovation, friendship, and humanitarian pursuits',
      encouragement: 'originality and social consciousness'
    },
    'Pisces': {
      general: 'spiritually enriching and compassionate',
      energy: 'enhances',
      advice: 'a period of spiritual growth and creative inspiration',
      encouragement: 'intuition and compassionate service'
    }
  };
  
  return insights[sign] || {
    general: 'meaningful and transformative',
    energy: 'supports',
    advice: 'a time of personal growth and self-discovery',
    encouragement: 'patience and self-reflection'
  };
}

// Generate comprehensive horoscope sections
function generateHoroscopeSections(sign: string, scope: string, start: Date, end: Date, random: () => number): Array<{ id: string; title: string; content: string }> {
  const sections = [
    {
      id: 'celestial',
      title: '🌌 Celestial Phenomena',
      content: generateCelestialPhenomena(sign, scope, start, end, random)
    },
    {
      id: 'natal',
      title: '🌟 Natal Chart',
      content: generateNatalChart(sign, random)
    },
    {
      id: 'transits',
      title: '🔄 Transits',
      content: generateTransits(sign, scope, start, end, random)
    },
    {
      id: 'life-phases',
      title: '📅 Major Life Phases',
      content: generateLifePhases(sign, random)
    },
    {
      id: 'sub-periods',
      title: '⏰ Sub-Periods',
      content: generateSubPeriods(sign, scope, random)
    },
    {
      id: 'lunar-return',
      title: '🌙 Lunar Return',
      content: generateLunarReturn(sign, scope, random)
    },
    {
      id: 'solar-return',
      title: '☀️ Solar Return',
      content: generateSolarReturn(sign, random)
    },
    {
      id: 'solar-arc',
      title: '🎯 Solar Arc',
      content: generateSolarArc(sign, random)
    },
    {
      id: 'firdaria',
      title: '🔮 Firdaria',
      content: generateFirdaria(sign, random)
    },
    {
      id: 'minor-limits',
      title: '⚡ Minor Limits',
      content: generateMinorLimits(sign, scope, random)
    }
  ];

  return sections;
}

// Generate Celestial Phenomena section
function generateCelestialPhenomena(sign: string, scope: string, start: Date, end: Date, random: () => number): string {
  const phenomena = [
    'Jupiter in Aries brings bold new beginnings and expansion',
    'Saturn in Aquarius emphasizes innovation and humanitarian goals',
    'Venus retrograde in Leo highlights relationship patterns',
    'Mars in Gemini accelerates communication and learning',
    'Mercury retrograde in Virgo calls for careful attention to details',
    'Uranus in Taurus brings unexpected changes to material security',
    'Neptune in Pisces enhances spiritual awareness and intuition',
    'Pluto in Capricorn transforms power structures and authority'
  ];
  
  const selectedPhenomena = phenomena[Math.floor(random() * phenomena.length)];
  const intensity = random() > 0.5 ? 'powerfully' : 'subtly';
  
  return `The cosmic environment during this ${scope} is marked by ${selectedPhenomena.toLowerCase()}. This celestial pattern ${intensity} influences the collective consciousness, creating a backdrop of ${random() > 0.5 ? 'dynamic change and opportunity' : 'stability and reflection'}. 

The planetary alignments suggest a time when ${random() > 0.5 ? 'individual initiative' : 'collaborative efforts'} will be particularly favored. The overall sky energy supports ${random() > 0.5 ? 'taking calculated risks' : 'building solid foundations'}, making this an ideal period for ${random() > 0.5 ? 'new ventures' : 'consolidating existing projects'}.

These cosmic patterns set the stage for personal experiences by creating opportunities for ${random() > 0.5 ? 'growth and expansion' : 'healing and integration'}. The celestial weather suggests that ${random() > 0.5 ? 'bold action' : 'patient planning'} will yield the best results during this period.`;
}

// Generate Natal Chart section
function generateNatalChart(sign: string, random: () => number): string {
  const signTraits = {
    'Aries': 'bold leadership, pioneering spirit, and dynamic energy',
    'Taurus': 'steady determination, sensual appreciation, and material security',
    'Gemini': 'intellectual curiosity, communication skills, and adaptability',
    'Cancer': 'emotional depth, nurturing instincts, and intuitive wisdom',
    'Leo': 'creative expression, natural leadership, and generous spirit',
    'Virgo': 'analytical precision, service orientation, and practical wisdom',
    'Libra': 'diplomatic balance, aesthetic appreciation, and relationship harmony',
    'Scorpio': 'transformative power, emotional intensity, and psychological insight',
    'Sagittarius': 'philosophical exploration, adventurous spirit, and optimistic outlook',
    'Capricorn': 'ambitious drive, practical wisdom, and long-term vision',
    'Aquarius': 'innovative thinking, humanitarian ideals, and independent spirit',
    'Pisces': 'spiritual sensitivity, creative imagination, and compassionate nature'
  };
  
  const traits = signTraits[sign as keyof typeof signTraits] || 'unique cosmic signature';
  const lifeThemes = [
    'personal growth and self-discovery',
    'creative expression and artistic pursuits',
    'professional development and career advancement',
    'relationship harmony and emotional fulfillment',
    'spiritual awakening and inner wisdom',
    'material success and financial stability'
  ];
  
  const selectedTheme = lifeThemes[Math.floor(random() * lifeThemes.length)];
  
  return `Your natal chart reveals a ${sign} with ${traits}. This cosmic blueprint defines your core personality and life approach, showing how you naturally interact with the world around you.

Your birth chart highlights ${selectedTheme} as a central theme throughout your life. This suggests that your soul's journey involves developing mastery in this area, with each life experience contributing to your understanding and growth.

Your natural talents include ${random() > 0.5 ? 'intuitive decision-making and emotional intelligence' : 'analytical thinking and practical problem-solving'}, which serve as your greatest assets in navigating life's challenges. The planetary positions at your birth suggest a person who ${random() > 0.5 ? 'thrives in dynamic, changing environments' : 'excels in stable, structured situations'}.

Your life foundation is built on ${random() > 0.5 ? 'authentic self-expression and personal freedom' : 'service to others and meaningful contribution'}, indicating that fulfillment comes through ${random() > 0.5 ? 'following your unique path' : 'making a positive impact on your community'}.`;
}

// Generate Transits section
function generateTransits(sign: string, scope: string, start: Date, end: Date, random: () => number): string {
  const transitEffects = [
    'Jupiter transiting your Sun sign brings expansion and opportunity',
    'Saturn aspects your Moon, calling for emotional maturity and responsibility',
    'Venus conjunct your Ascendant enhances your personal magnetism',
    'Mars squares your Mercury, increasing mental energy and assertiveness',
    'Uranus trines your Venus, bringing unexpected romantic opportunities',
    'Neptune sextiles your Jupiter, expanding spiritual awareness',
    'Pluto opposes your Mars, transforming your approach to action and conflict'
  ];
  
  const selectedTransit = transitEffects[Math.floor(random() * transitEffects.length)];
  const impact = random() > 0.5 ? 'significantly' : 'subtly';
  
  return `Current planetary transits are ${impact} influencing your daily life and emotional patterns. ${selectedTransit}, creating a period of ${random() > 0.5 ? 'dynamic change and new possibilities' : 'reflection and inner growth'}.

This ${scope} brings particular focus to ${random() > 0.5 ? 'your career and professional development' : 'your relationships and emotional connections'}. The planetary movements suggest that ${random() > 0.5 ? 'taking initiative' : 'being patient and observant'} will yield the best results.

The transit patterns indicate that your natural ${sign} tendencies are being ${random() > 0.5 ? 'amplified and supported' : 'challenged and refined'} by current cosmic energies. This creates opportunities for ${random() > 0.5 ? 'breakthrough moments' : 'steady, consistent progress'} in areas that matter most to you.

Pay attention to ${random() > 0.5 ? 'new opportunities that appear unexpectedly' : 'patterns that repeat from the past'}, as these are likely connected to the current planetary influences affecting your life path.`;
}

// Generate Life Phases section
function generateLifePhases(sign: string, random: () => number): string {
  const phases = [
    { name: 'Early Years (0-30)', focus: 'learning, exploration, and identity formation' },
    { name: 'Middle Life (30-60)', focus: 'achievement, relationships, and contribution' },
    { name: 'Later Life (60+)', focus: 'wisdom, legacy, and spiritual fulfillment' }
  ];
  
  const currentPhase = phases[Math.floor(random() * phases.length)];
  const phaseThemes = {
    'Early Years': 'discovery, growth, and establishing your unique identity',
    'Middle Life': 'building, creating, and making your mark on the world',
    'Later Life': 'sharing wisdom, mentoring others, and finding deeper meaning'
  };
  
  const themes = phaseThemes[currentPhase.name as keyof typeof phaseThemes];
  
  return `You are currently in your ${currentPhase.name} phase, a time focused on ${currentPhase.focus}. This life stage brings particular emphasis to ${themes}, shaping how you approach opportunities and challenges.

The ${currentPhase.name} phase for a ${sign} typically involves ${random() > 0.5 ? 'bold exploration and taking risks' : 'careful planning and building foundations'}. Your natural ${sign} tendencies are being expressed through the lens of this life stage, creating a unique blend of ${random() > 0.5 ? 'youthful enthusiasm and mature wisdom' : 'practical experience and fresh perspective'}.

This phase influences your outlook by emphasizing ${random() > 0.5 ? 'personal growth and self-discovery' : 'contribution to others and meaningful impact'}. Your choices during this time are guided by ${random() > 0.5 ? 'a desire to explore new possibilities' : 'a need to create lasting value'}, reflecting the natural progression of your soul's journey.

The themes of this life phase will continue to influence your decisions and priorities for the next several years, providing a framework for understanding your current experiences and future direction.`;
}

// Generate Sub-Periods section
function generateSubPeriods(sign: string, scope: string, random: () => number): string {
  const subPeriods = [
    { name: 'Foundation Building', theme: 'establishing solid groundwork for future growth' },
    { name: 'Creative Expression', theme: 'exploring artistic and innovative approaches' },
    { name: 'Relationship Focus', theme: 'deepening connections with others' },
    { name: 'Career Advancement', theme: 'professional development and achievement' },
    { name: 'Spiritual Awakening', theme: 'inner growth and higher consciousness' },
    { name: 'Material Success', theme: 'financial stability and material comfort' }
  ];
  
  const currentPeriod = subPeriods[Math.floor(random() * subPeriods.length)];
  const nextPeriod = subPeriods[Math.floor(random() * subPeriods.length)];
  
  return `Within your current major life phase, you are experiencing the ${currentPeriod.name} sub-period, which focuses on ${currentPeriod.theme}. This ${scope} period brings particular emphasis to ${random() > 0.5 ? 'personal development and inner growth' : 'external achievement and recognition'}.

The ${currentPeriod.name} sub-period shapes your specific years by ${random() > 0.5 ? 'creating opportunities for deep learning and skill development' : 'presenting challenges that build character and resilience'}. This influences your daily choices and priorities, guiding you toward ${random() > 0.5 ? 'new experiences and growth' : 'consolidation and mastery'}.

Looking ahead, the next sub-period will focus on ${nextPeriod.theme}, suggesting a natural progression from ${currentPeriod.name.toLowerCase()} to ${nextPeriod.name.toLowerCase()}. This transition will bring ${random() > 0.5 ? 'new opportunities and fresh perspectives' : 'deeper understanding and refined skills'}.

These sub-periods work together to create a comprehensive life journey, with each phase building upon the previous one to create a rich tapestry of experience and growth.`;
}

// Generate Lunar Return section
function generateLunarReturn(sign: string, scope: string, random: () => number): string {
  const lunarThemes = [
    'emotional healing and inner peace',
    'creative inspiration and artistic expression',
    'relationship harmony and connection',
    'intuitive development and psychic awareness',
    'nurturing others and being nurtured',
    'letting go of old patterns and embracing change'
  ];
  
  const selectedTheme = lunarThemes[Math.floor(random() * lunarThemes.length)];
  const emotionalMood = random() > 0.5 ? 'reflective and introspective' : 'active and expressive';
  
  return `Your lunar return this ${scope} brings focus to ${selectedTheme}. The Moon's return to its natal position creates a powerful emotional cycle that influences your moods, habits, and short-term opportunities.

This lunar cycle emphasizes ${emotionalMood} energy, suggesting that you'll feel most comfortable when ${random() > 0.5 ? 'taking time for self-care and reflection' : 'engaging with others and expressing your feelings'}. Your emotional needs during this period center around ${random() > 0.5 ? 'security and stability' : 'growth and change'}.

The lunar return creates opportunities for ${random() > 0.5 ? 'healing past emotional wounds' : 'developing new emotional skills'}, particularly in areas related to ${random() > 0.5 ? 'self-worth and personal boundaries' : 'compassion and understanding'}. This is an ideal time to ${random() > 0.5 ? 'trust your intuition' : 'seek emotional support from others'}.

Your habits and routines during this period will be influenced by ${random() > 0.5 ? 'a need for structure and predictability' : 'a desire for spontaneity and variety'}, reflecting the Moon's natural cycle of change and renewal.`;
}

// Generate Solar Return section
function generateSolarReturn(sign: string, random: () => number): string {
  const yearlyThemes = [
    'personal growth and self-discovery',
    'career advancement and professional recognition',
    'relationship development and emotional fulfillment',
    'creative expression and artistic achievement',
    'spiritual awakening and higher consciousness',
    'material success and financial stability'
  ];
  
  const selectedTheme = yearlyThemes[Math.floor(random() * yearlyThemes.length)];
  const focusAreas = random() > 0.5 ? 'career and professional development' : 'relationships and emotional connections';
  
  return `Your solar return this year brings focus to ${selectedTheme}. The Sun's return to its natal position marks the beginning of a new annual cycle, highlighting the main themes and focus areas for your year from birthday to birthday.

This year's solar return emphasizes ${focusAreas}, suggesting that your greatest opportunities for growth and fulfillment will come through ${random() > 0.5 ? 'taking initiative and leadership' : 'collaboration and partnership'}. Your natural ${sign} tendencies will be expressed through this yearly theme.

The solar return indicates that this year will be particularly significant for ${random() > 0.5 ? 'personal transformation and inner growth' : 'external achievement and recognition'}. This creates opportunities for ${random() > 0.5 ? 'breaking through limitations' : 'building lasting foundations'}.

Your yearly focus areas include ${random() > 0.5 ? 'developing new skills and capabilities' : 'strengthening existing relationships and commitments'}, with particular emphasis on ${random() > 0.5 ? 'innovation and creativity' : 'stability and security'}. This solar return cycle will influence your decisions and priorities throughout the year.`;
}

// Generate Solar Arc section
function generateSolarArc(sign: string, random: () => number): string {
  const arcDevelopments = [
    'career advancement and professional recognition',
    'relationship transformation and emotional growth',
    'creative breakthrough and artistic achievement',
    'spiritual awakening and higher consciousness',
    'material success and financial stability',
    'personal healing and inner transformation'
  ];
  
  const selectedDevelopment = arcDevelopments[Math.floor(random() * arcDevelopments.length)];
  const turningPoint = random() > 0.5 ? 'a major life transition' : 'a gradual but significant shift';
  
  return `Solar arc directions show ${selectedDevelopment} as a key life development influencing your current period. This predictive method reveals how your natal planets have progressed forward, creating new aspects and influences that shape your life path.

The solar arc indicates ${turningPoint} in your life, particularly in areas related to ${random() > 0.5 ? 'personal growth and self-discovery' : 'external achievement and recognition'}. This development has been building gradually and is now reaching a point of ${random() > 0.5 ? 'crisis and breakthrough' : 'integration and mastery'}.

These arc directions suggest that your natural ${sign} tendencies are being ${random() > 0.5 ? 'amplified and supported' : 'challenged and refined'} by current life circumstances. This creates opportunities for ${random() > 0.5 ? 'dramatic change and transformation' : 'steady progress and consolidation'}.

The solar arc influences your current period by ${random() > 0.5 ? 'presenting new challenges that require growth' : 'providing support for existing goals and aspirations'}, guiding you toward ${random() > 0.5 ? 'new possibilities and opportunities' : 'deeper understanding and wisdom'}.`;
}

// Generate Firdaria section
function generateFirdaria(sign: string, random: () => number): string {
  const planetaryRulers = [
    { planet: 'Sun', influence: 'leadership, creativity, and personal expression' },
    { planet: 'Moon', influence: 'emotions, intuition, and nurturing' },
    { planet: 'Mercury', influence: 'communication, learning, and mental activity' },
    { planet: 'Venus', influence: 'love, beauty, and harmonious relationships' },
    { planet: 'Mars', influence: 'action, courage, and assertive energy' },
    { planet: 'Jupiter', influence: 'expansion, wisdom, and higher learning' },
    { planet: 'Saturn', influence: 'discipline, responsibility, and long-term goals' }
  ];
  
  const currentRuler = planetaryRulers[Math.floor(random() * planetaryRulers.length)];
  const focus = random() > 0.5 ? 'personal development and inner growth' : 'external achievement and recognition';
  
  return `Your current Firdaria period is ruled by ${currentRuler.planet}, which influences your focus through ${currentRuler.influence}. This planetary ruler governs your current life chapter, shaping your priorities and approach to challenges.

The ${currentRuler.planet} period emphasizes ${focus}, suggesting that your greatest opportunities for growth and fulfillment will come through ${random() > 0.5 ? 'developing your unique talents and abilities' : 'serving others and making a meaningful contribution'}. This planetary influence aligns with your natural ${sign} tendencies.

This Firdaria period creates opportunities for ${random() > 0.5 ? 'breakthrough moments and dramatic change' : 'steady progress and gradual improvement'}, particularly in areas related to ${random() > 0.5 ? 'personal expression and creativity' : 'practical achievement and material success'}.

The ${currentRuler.planet} influence will continue to guide your life direction for the next several years, providing a framework for understanding your current experiences and future possibilities. This planetary period supports ${random() > 0.5 ? 'bold action and new beginnings' : 'patient planning and careful development'}.`;
}

// Generate Minor Limits section
function generateMinorLimits(sign: string, scope: string, random: () => number): string {
  const opportunities = [
    'new creative projects and artistic expression',
    'professional advancement and career opportunities',
    'relationship development and emotional connections',
    'spiritual growth and inner wisdom',
    'financial improvement and material stability',
    'health and wellness improvements'
  ];
  
  const challenges = [
    'communication difficulties and misunderstandings',
    'financial constraints and material limitations',
    'relationship conflicts and emotional tensions',
    'health issues and physical limitations',
    'career setbacks and professional obstacles',
    'spiritual confusion and inner doubt'
  ];
  
  const selectedOpportunity = opportunities[Math.floor(random() * opportunities.length)];
  const selectedChallenge = challenges[Math.floor(random() * challenges.length)];
  
  return `Your short-term opportunities during this ${scope} period include ${selectedOpportunity}. These minor limits create favorable conditions for ${random() > 0.5 ? 'taking initiative and making progress' : 'being patient and allowing natural development'}.

However, you may also face challenges related to ${selectedChallenge}. These obstacles are temporary and can be overcome through ${random() > 0.5 ? 'patience and persistence' : 'flexibility and adaptation'}. The key is to ${random() > 0.5 ? 'stay focused on your goals' : 'remain open to new possibilities'}.

To handle luck and obstacles in the near future, focus on ${random() > 0.5 ? 'developing your strengths and talents' : 'addressing your weaknesses and limitations'}. This will help you ${random() > 0.5 ? 'capitalize on opportunities' : 'navigate challenges'} more effectively.

The minor limits suggest that this period will be particularly significant for ${random() > 0.5 ? 'personal growth and self-improvement' : 'external achievement and recognition'}. Your natural ${sign} tendencies will be both supported and challenged by these short-term cycles.`;
}

// Generate overall summary of the horoscope reading
function generateOverallSummary(sign: string, scope: string, scores: { love: number; career: number; wealth: number; health: number }, random: () => number): string {
  const highestScore = Math.max(scores.love, scores.career, scores.wealth, scores.health);
  const lowestScore = Math.min(scores.love, scores.career, scores.wealth, scores.health);
  
  const scoreAreas = {
    love: 'relationships and emotional connections',
    career: 'professional development and career advancement',
    wealth: 'financial stability and material success',
    health: 'physical well-being and vitality'
  };
  
  const highestArea = Object.entries(scores).find(([, score]) => score === highestScore)?.[0] || 'love';
  const lowestArea = Object.entries(scores).find(([, score]) => score === lowestScore)?.[0] || 'health';
  
  const scopeDescriptions = {
    daily: 'today brings',
    weekly: 'this week offers',
    monthly: 'this month presents',
    yearly: 'this year holds'
  };
  
  const scopeDescription = scopeDescriptions[scope as keyof typeof scopeDescriptions] || 'this period brings';
  
  const energyLevel = highestScore > 80 ? 'exceptionally strong' : highestScore > 70 ? 'very positive' : highestScore > 60 ? 'generally favorable' : 'mixed but promising';
  const challengeLevel = lowestScore < 50 ? 'some challenges' : lowestScore < 60 ? 'moderate obstacles' : 'minimal difficulties';
  
  return `Your ${scope} horoscope reveals a ${energyLevel} cosmic alignment for your ${sign} energy. ${scopeDescription} significant opportunities in ${scoreAreas[highestArea as keyof typeof scoreAreas]}, with your natural ${sign} tendencies being ${random() > 0.5 ? 'powerfully supported' : 'gently guided'} by current planetary influences.

The overall energy suggests ${random() > 0.5 ? 'a time of expansion and growth' : 'a period of consolidation and refinement'}, with particular emphasis on ${random() > 0.5 ? 'taking initiative and making bold moves' : 'being patient and building solid foundations'}. Your ${sign} nature is being ${random() > 0.5 ? 'amplified and celebrated' : 'challenged and refined'} by the current cosmic weather.

While you may encounter ${challengeLevel} in ${scoreAreas[lowestArea as keyof typeof scoreAreas]}, the overall trajectory is ${random() > 0.5 ? 'upward and optimistic' : 'steady and transformative'}. This ${scope} period is particularly suited for ${random() > 0.5 ? 'exploring new possibilities and taking calculated risks' : 'focusing on existing goals and deepening commitments'}.

The cosmic energy supports your natural ${sign} tendencies while encouraging ${random() > 0.5 ? 'growth and expansion' : 'wisdom and maturity'}. Trust your intuition and ${random() > 0.5 ? 'embrace the opportunities that come your way' : 'focus on the areas that need your attention'}.`;
}

// Generate practical suggestions for the horoscope reading
function generateSuggestions(sign: string, scope: string, scores: { love: number; career: number; wealth: number; health: number }, random: () => number): string[] {
  const suggestions: string[] = [];
  
  // General suggestions based on sign
  const signSuggestions = {
    'Aries': [
      'Take the lead in new initiatives and don\'t be afraid to be the first to act',
      'Channel your natural energy into physical activities and competitive pursuits',
      'Be mindful of impatience and practice listening before reacting'
    ],
    'Taurus': [
      'Focus on building long-term stability and financial security',
      'Indulge in sensory pleasures and appreciate the beauty around you',
      'Avoid becoming too rigid in your thinking and stay open to change'
    ],
    'Gemini': [
      'Engage in learning new skills and expanding your knowledge base',
      'Use your communication talents to build meaningful connections',
      'Be careful not to spread yourself too thin across too many projects'
    ],
    'Cancer': [
      'Nurture your emotional well-being and spend time with loved ones',
      'Trust your intuition and pay attention to your dreams and feelings',
      'Don\'t let fear hold you back from taking necessary risks'
    ],
    'Leo': [
      'Express your creativity and share your talents with the world',
      'Take center stage when appropriate and don\'t shy away from recognition',
      'Remember to be generous and consider others\' needs as well'
    ],
    'Virgo': [
      'Focus on improving your skills and helping others through service',
      'Pay attention to details but don\'t get lost in perfectionism',
      'Take care of your health and maintain a balanced routine'
    ],
    'Libra': [
      'Seek harmony in relationships and work on diplomatic solutions',
      'Appreciate art, beauty, and aesthetic experiences',
      'Make decisions based on what feels right, not just what others want'
    ],
    'Scorpio': [
      'Embrace transformation and let go of what no longer serves you',
      'Use your depth and intensity to create meaningful change',
      'Be honest about your motivations and avoid manipulation'
    ],
    'Sagittarius': [
      'Expand your horizons through travel, education, or new experiences',
      'Share your wisdom and philosophical insights with others',
      'Be mindful of making promises you can\'t keep'
    ],
    'Capricorn': [
      'Focus on long-term goals and build solid foundations for the future',
      'Take on leadership roles and demonstrate your reliability',
      'Remember to have fun and not take life too seriously'
    ],
    'Aquarius': [
      'Connect with like-minded people and work toward humanitarian goals',
      'Embrace your uniqueness and don\'t conform to others\' expectations',
      'Balance your need for independence with meaningful relationships'
    ],
    'Pisces': [
      'Trust your intuition and pay attention to your spiritual side',
      'Use your compassion to help others and make a positive impact',
      'Set healthy boundaries and don\'t lose yourself in others\' problems'
    ]
  };
  
  // Add sign-specific suggestions
  const signSpecific = signSuggestions[sign as keyof typeof signSuggestions] || signSuggestions['Aries'];
  suggestions.push(...signSpecific.slice(0, 2));
  
  // Add scope-specific suggestions
  const scopeSuggestions = {
    daily: [
      'Start your day with intention and set clear goals for what you want to accomplish',
      'Take breaks throughout the day to check in with your energy and emotions',
      'End your day with gratitude and reflection on what went well'
    ],
    weekly: [
      'Plan your week ahead but remain flexible to unexpected opportunities',
      'Focus on one major goal while maintaining progress on smaller tasks',
      'Schedule time for both work and personal activities to maintain balance'
    ],
    monthly: [
      'Review your monthly goals and adjust your approach based on what you\'ve learned',
      'Take time to evaluate your relationships and make necessary improvements',
      'Invest in your personal development through learning or new experiences'
    ],
    yearly: [
      'Set long-term vision and break it down into achievable quarterly milestones',
      'Invest in relationships and opportunities that align with your life purpose',
      'Take calculated risks that could lead to significant personal or professional growth'
    ]
  };
  
  const scopeSpecific = scopeSuggestions[scope as keyof typeof scopeSuggestions] || scopeSuggestions['weekly'];
  suggestions.push(...scopeSpecific.slice(0, 2));
  
  // Add score-based suggestions
  if (scores.love < 60) {
    suggestions.push('Focus on improving communication and emotional connection in your relationships');
  }
  if (scores.career < 60) {
    suggestions.push('Consider new learning opportunities or networking to advance your professional goals');
  }
  if (scores.wealth < 60) {
    suggestions.push('Review your financial habits and create a practical budget for better money management');
  }
  if (scores.health < 60) {
    suggestions.push('Prioritize self-care and establish a consistent wellness routine');
  }
  
  // Add general suggestions
  suggestions.push(
    'Trust your intuition and inner wisdom when making important decisions',
    'Stay open to unexpected opportunities that may come your way',
    'Practice gratitude daily to attract more positive energy into your life'
  );
  
  // Remove duplicates and limit to 6 suggestions
  const uniqueSuggestions = [...new Set(suggestions)];
  return uniqueSuggestions.slice(0, 6);
}
