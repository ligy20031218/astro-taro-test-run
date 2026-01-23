import type { TarotCard, TarotSpread, TarotSession } from './types';
import type { SupportedLang } from './i18n';
import { advancedTarotTranslations } from './advanced-tarot-translations';
import { getTarotCardMeaning } from './content-translations';

// Complete 78-card tarot deck
export const TAROT_DECK: TarotCard[] = [
  // Major Arcana (0-21)
  { id: 0, name: "The Fool", arcana: "major", upright: true },
  { id: 1, name: "The Magician", arcana: "major", upright: true },
  { id: 2, name: "The High Priestess", arcana: "major", upright: true },
  { id: 3, name: "The Empress", arcana: "major", upright: true },
  { id: 4, name: "The Emperor", arcana: "major", upright: true },
  { id: 5, name: "The Hierophant", arcana: "major", upright: true },
  { id: 6, name: "The Lovers", arcana: "major", upright: true },
  { id: 7, name: "The Chariot", arcana: "major", upright: true },
  { id: 8, name: "Strength", arcana: "major", upright: true },
  { id: 9, name: "The Hermit", arcana: "major", upright: true },
  { id: 10, name: "Wheel of Fortune", arcana: "major", upright: true },
  { id: 11, name: "Justice", arcana: "major", upright: true },
  { id: 12, name: "The Hanged Man", arcana: "major", upright: true },
  { id: 13, name: "Death", arcana: "major", upright: true },
  { id: 14, name: "Temperance", arcana: "major", upright: true },
  { id: 15, name: "The Devil", arcana: "major", upright: true },
  { id: 16, name: "The Tower", arcana: "major", upright: true },
  { id: 17, name: "The Star", arcana: "major", upright: true },
  { id: 18, name: "The Moon", arcana: "major", upright: true },
  { id: 19, name: "The Sun", arcana: "major", upright: true },
  { id: 20, name: "Judgement", arcana: "major", upright: true },
  { id: 21, name: "The World", arcana: "major", upright: true },

  // Minor Arcana - Wands (22-35)
  { id: 22, name: "Ace of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 23, name: "Two of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 24, name: "Three of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 25, name: "Four of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 26, name: "Five of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 27, name: "Six of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 28, name: "Seven of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 29, name: "Eight of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 30, name: "Nine of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 31, name: "Ten of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 32, name: "Page of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 33, name: "Knight of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 34, name: "Queen of Wands", arcana: "minor", suit: "wands", upright: true },
  { id: 35, name: "King of Wands", arcana: "minor", suit: "wands", upright: true },

  // Minor Arcana - Cups (36-49)
  { id: 36, name: "Ace of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 37, name: "Two of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 38, name: "Three of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 39, name: "Four of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 40, name: "Five of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 41, name: "Six of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 42, name: "Seven of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 43, name: "Eight of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 44, name: "Nine of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 45, name: "Ten of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 46, name: "Page of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 47, name: "Knight of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 48, name: "Queen of Cups", arcana: "minor", suit: "cups", upright: true },
  { id: 49, name: "King of Cups", arcana: "minor", suit: "cups", upright: true },

  // Minor Arcana - Swords (50-63)
  { id: 50, name: "Ace of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 51, name: "Two of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 52, name: "Three of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 53, name: "Four of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 54, name: "Five of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 55, name: "Six of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 56, name: "Seven of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 57, name: "Eight of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 58, name: "Nine of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 59, name: "Ten of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 60, name: "Page of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 61, name: "Knight of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 62, name: "Queen of Swords", arcana: "minor", suit: "swords", upright: true },
  { id: 63, name: "King of Swords", arcana: "minor", suit: "swords", upright: true },

  // Minor Arcana - Pentacles (64-77)
  { id: 64, name: "Ace of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 65, name: "Two of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 66, name: "Three of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 67, name: "Four of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 68, name: "Five of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 69, name: "Six of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 70, name: "Seven of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 71, name: "Eight of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 72, name: "Nine of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 73, name: "Ten of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 74, name: "Page of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 75, name: "Knight of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 76, name: "Queen of Pentacles", arcana: "minor", suit: "pentacles", upright: true },
  { id: 77, name: "King of Pentacles", arcana: "minor", suit: "pentacles", upright: true }
];

// Tarot spreads configuration
export const TAROT_SPREADS: Record<string, TarotSpread> = {
  '3-card': {
    name: '3-card',
    positions: ['Past', 'Present', 'Future']
  },
  'celtic': {
    name: 'celtic',
    positions: [
      'Current Situation', 'Challenge/Opportunity', 'Distant Past', 'Recent Past',
      'Possible Outcome', 'Immediate Future', 'Your Approach', 'External Influences',
      'Hopes & Fears', 'Final Outcome'
    ]
  },
  'relationship': {
    name: 'relationship',
    positions: [
      'You', 'Them', 'Relationship Dynamic', 'Communication',
      'Emotional Connection', 'Challenges', 'Advice'
    ]
  },
  'zodiac': {
    name: 'zodiac',
    positions: [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
      'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ]
  }
};

// Complete card meanings library for all 78 cards
export const CARD_MEANINGS: Record<string, { upright: string; reversed: string }> = {
  // Major Arcana
  "The Fool": {
    upright: "New beginnings, innocence, free spirit, spontaneity, adventure, taking a leap of faith",
    reversed: "Recklessness, holding back, risk without plan, foolishness, fear of new beginnings"
  },
  "The Magician": {
    upright: "Manifestation, resourcefulness, power, skill, willpower, taking action",
    reversed: "Manipulation, scattered energy, lack of focus, trickery, untapped potential"
  },
  "The High Priestess": {
    upright: "Intuition, sacred knowledge, mystery, subconscious, wisdom, inner voice",
    reversed: "Secrets, disconnection from intuition, hidden agendas, ignoring inner wisdom"
  },
  "The Empress": {
    upright: "Fertility, abundance, nurturing, creativity, nature, maternal energy",
    reversed: "Creative block, dependence on others, neglect of self-care, smothering"
  },
  "The Emperor": {
    upright: "Authority, structure, leadership, stability, control, father figure",
    reversed: "Rigidity, domination, inflexibility, abuse of power, lack of structure"
  },
  "The Hierophant": {
    upright: "Tradition, spiritual wisdom, guidance, conformity, learning, mentorship",
    reversed: "Rebellion, personal belief, nonconformity, breaking tradition, questioning authority"
  },
  "The Lovers": {
    upright: "Union, choices, alignment of values, relationships, harmony, love",
    reversed: "Disharmony, imbalance, misalignment, difficult choices, relationship issues"
  },
  "The Chariot": {
    upright: "Willpower, determination, direction, control, victory, overcoming obstacles",
    reversed: "Aggression, lack of control, directionless, defeat, inner conflict"
  },
  "Strength": {
    upright: "Courage, compassion, inner strength, patience, control, taming the beast within",
    reversed: "Self-doubt, reactivity, lack of confidence, weakness, inner turmoil"
  },
  "The Hermit": {
    upright: "Introspection, solitude, wisdom, guidance, inner light, seeking truth",
    reversed: "Isolation, withdrawal, lost way, refusing guidance, loneliness"
  },
  "Wheel of Fortune": {
    upright: "Change, cycles, destiny, good luck, turning point, life's ups and downs",
    reversed: "Bad luck, resistance to change, lack of control, feeling stuck"
  },
  "Justice": {
    upright: "Fairness, truth, cause and effect, law, balance, karmic justice",
    reversed: "Unfairness, lack of accountability, dishonesty, imbalance"
  },
  "The Hanged Man": {
    upright: "Sacrifice, waiting, enlightenment, letting go, new perspective, surrender",
    reversed: "Stalling, needless sacrifice, resistance to change, martyrdom"
  },
  "Death": {
    upright: "Endings, transformation, rebirth, change, transition, letting go",
    reversed: "Resistance to change, stagnation, fear of transformation, holding on"
  },
  "Temperance": {
    upright: "Balance, moderation, patience, harmony, healing, finding middle ground",
    reversed: "Imbalance, excess, lack of long-term vision, extremes"
  },
  "The Devil": {
    upright: "Bondage, addiction, materialism, temptation, shadow self, unhealthy patterns",
    reversed: "Freedom, breaking free, reclaiming power, release, liberation"
  },
  "The Tower": {
    upright: "Sudden upheaval, revelation, liberation, breakdown, awakening",
    reversed: "Personal transformation, fear of change, avoiding disaster, internal change"
  },
  "The Star": {
    upright: "Hope, faith, purpose, renewal, inspiration, guidance from above",
    reversed: "Faithlessness, discouragement, insecurity, lack of faith, despair"
  },
  "The Moon": {
    upright: "Illusion, fear, anxiety, subconscious, intuition, hidden truths",
    reversed: "Release of fear, repressed emotion, inner confusion, clarity"
  },
  "The Sun": {
    upright: "Joy, success, celebration, positivity, vitality, childlike wonder",
    reversed: "Inner child, feeling down, overly optimistic, blocked joy, temporary setbacks"
  },
  "Judgement": {
    upright: "Absolution, rebirth, inner calling, forgiveness, awakening, second chances",
    reversed: "Lack of self awareness, doubt, self-criticism, ignoring the call"
  },
  "The World": {
    upright: "Fulfillment, harmony, completion, integration, success, wholeness",
    reversed: "Incomplete, seeking closure, lack of closure, unfinished business"
  },

  // Minor Arcana - Wands
  "Ace of Wands": {
    upright: "New opportunities, inspiration, potential, creative spark, new beginnings",
    reversed: "Lack of direction, creative blocks, missed opportunities, delay"
  },
  "Two of Wands": {
    upright: "Planning, personal power, making decisions, future planning, ambition",
    reversed: "Lack of planning, fear of unknown, bad planning, overthinking"
  },
  "Three of Wands": {
    upright: "Expansion, foresight, leadership, long-term success, progress",
    reversed: "Lack of foresight, delays, obstacles, lack of progress"
  },
  "Four of Wands": {
    upright: "Celebration, harmony, home, community, stability, milestones",
    reversed: "Lack of support, instability, home conflicts, celebration delays"
  },
  "Five of Wands": {
    upright: "Competition, conflict, disagreements, challenges, rivalry",
    reversed: "Avoiding conflict, inner conflict, competition, tension"
  },
  "Six of Wands": {
    upright: "Victory, success, recognition, leadership, public recognition",
    reversed: "Lack of recognition, failure, egotism, fall from grace"
  },
  "Seven of Wands": {
    upright: "Challenge, competition, standing up for beliefs, defending position",
    reversed: "Giving up, overwhelmed, lack of confidence, avoiding challenges"
  },
  "Eight of Wands": {
    upright: "Rapid action, movement, quick decisions, progress, swift change",
    reversed: "Delays, frustration, lack of direction, waiting"
  },
  "Nine of Wands": {
    upright: "Resilience, persistence, last stretch, inner strength, battle weariness",
    reversed: "Exhaustion, giving up, lack of resilience, over-defensiveness"
  },
  "Ten of Wands": {
    upright: "Burden, responsibility, hard work, completion, carrying too much",
    reversed: "Release of burden, delegation, over-commitment, simplification"
  },
  "Page of Wands": {
    upright: "Inspiration, new ideas, enthusiasm, exploration, creative potential",
    reversed: "Lack of direction, creative blocks, impatience, scattered energy"
  },
  "Knight of Wands": {
    upright: "Energy, passion, adventure, impulsiveness, taking action",
    reversed: "Lack of direction, haste, scattered energy, delays"
  },
  "Queen of Wands": {
    upright: "Confidence, independence, determination, creativity, leadership",
    reversed: "Insecurity, dependence, lack of confidence, domineering"
  },
  "King of Wands": {
    upright: "Natural leader, vision, big picture, taking charge, inspiration",
    reversed: "Impulsiveness, haste, ruthless, lack of planning, bad leader"

  },

  // Minor Arcana - Cups
  "Ace of Cups": {
    upright: "New feelings, emotional renewal, love, intuition, spiritual awakening",
    reversed: "Emotional loss, blocked creativity, emptiness, emotional manipulation"
  },
  "Two of Cups": {
    upright: "Unified love, partnership, mutual attraction, connection, harmony",
    reversed: "Imbalance, break-up, disharmony, miscommunication, self-love"
  },
  "Three of Cups": {
    upright: "Friendship, community, celebrations, group events, joy",
    reversed: "Isolation, third party, group conflict, celebration delays"
  },
  "Four of Cups": {
    upright: "Meditation, contemplation, apathy, missed opportunities, reevaluation",
    reversed: "Clarity, acceptance, moving on, new opportunities, depression"
  },
  "Five of Cups": {
    upright: "Loss, grief, disappointment, focusing on the negative, regret",
    reversed: "Moving on, acceptance, finding peace, personal setbacks"
  },
  "Six of Cups": {
    upright: "Revisiting the past, childhood memories, innocence, nostalgia",
    reversed: "Living in the past, moving forward, growing up, independence"
  },
  "Seven of Cups": {
    upright: "Choices, wishful thinking, illusion, options, fantasy",
    reversed: "Lack of purpose, disarray, clarity, making choices, illusion"
  },
  "Eight of Cups": {
    upright: "Disappointment, abandonment, walking away, leaving behind",
    reversed: "Avoiding change, fear of abandonment, returning, seeking help"
  },
  "Nine of Cups": {
    upright: "Satisfaction, emotional stability, luxury, self-satisfaction, wishes fulfilled",
    reversed: "Lack of inner joy, smugness, dissatisfaction, over-indulgence"
  },
  "Ten of Cups": {
    upright: "Divine love, blissful relationships, harmony, alignment, family",
    reversed: "Disconnection, misaligned values, broken home, disharmony"
  },
  "Page of Cups": {
    upright: "Happy surprise, dreamer, sensitivity, new feelings, creativity",
    reversed: "Emotional immaturity, creative blocks, insecurity, disappointment"
  },
  "Knight of Cups": {
    upright: "Following the heart, idealist, romantic, charming, emotional",
    reversed: "Moodiness, disappointment, unrealistic, emotional manipulation"
  },
  "Queen of Cups": {
    upright: "Compassionate, caring, emotional stability, intuitive, in touch with feelings",
    reversed: "Emotional manipulation, insecurity, co-dependency, blocked emotions"
  },
  "King of Cups": {
    upright: "Emotional balance, compassion, diplomacy, control of feelings",
    reversed: "Emotional manipulation, moodiness, lack of emotional control"

  },

  // Minor Arcana - Swords
  "Ace of Swords": {
    upright: "Breakthrough, clarity, sharp mind, concentration, truth",
    reversed: "Confusion, clouded judgment, lack of clarity, chaos"
  },
  "Two of Swords": {
    upright: "Difficult choices, indecision, stalemate, truce, blocked emotions",
    reversed: "Indecision, confusion, information overload, stalemate"
  },
  "Three of Swords": {
    upright: "Heartbreak, emotional pain, sorrow, grief, betrayal",
    reversed: "Recovery, forgiveness, emotional healing, moving on"
  },
  "Four of Swords": {
    upright: "Rest, restoration, contemplation, recuperation, peace",
    reversed: "Restlessness, burnout, lack of progress, stagnation"
  },
  "Five of Swords": {
    upright: "Unbridled ambition, win at all costs, sneakiness, lack of ethics",
    reversed: "Reconciliation, making amends, past resentment, forgiveness"
  },
  "Six of Swords": {
    upright: "Transition, change, rite of passage, releasing baggage, moving on",
    reversed: "Resistance to change, personal transition, emotional baggage"
  },
  "Seven of Swords": {
    upright: "Betrayal, deception, getting away with something, stealth",
    reversed: "Mental challenges, breaking free, deception, self-deceit"
  },
  "Eight of Swords": {
    upright: "Restriction, confusion, powerlessness, victimization, self-imposed restriction",
    reversed: "Self-acceptance, new perspective, freedom, releasing victim mentality"
  },
  "Nine of Swords": {
    upright: "Anxiety, hopelessness, trauma, fear, worry, nightmares",
    reversed: "Inner turmoil, deep fears, secrets, releasing worry"
  },
  "Ten of Swords": {
    upright: "Back-stabbed, defeat, crisis, betrayal, endings, rock bottom",
    reversed: "Recovery, regeneration, resisting an inevitable end, transformation"
  },
  "Page of Swords": {
    upright: "New ideas, curiosity, restlessness, mental energy, communication",
    reversed: "Deception, manipulation, all talk, gossip, immaturity"
  },
  "Knight of Swords": {
    upright: "Action, impulsiveness, defending beliefs, fighting for justice",
    reversed: "No direction, disregard for consequences, unpredictability"
  },
  "Queen of Swords": {
    upright: "Clear boundaries, direct communication, independence, unbiased judgment",
    reversed: "Cold hearted, cruel, bitterness, sharp tongue, manipulative"
  },
  "King of Swords": {
    upright: "Mental clarity, intellectual power, authority, truth, leadership",
    reversed: "Manipulative, cruel, weakness, abuse of power, tyranny"

  },

  // Minor Arcana - Pentacles
  "Ace of Pentacles": {
    upright: "New opportunity, resources, abundance, prosperity, new job",
    reversed: "Missed opportunity, bad investment, lack of planning, scarcity"
  },
  "Two of Pentacles": {
    upright: "Balance, priorities, time management, adaptability, juggling",
    reversed: "Imbalance, unorganized, overwhelmed, poor time management"
  },
  "Three of Pentacles": {
    upright: "Teamwork, collaboration, learning, implementation, planning",
    reversed: "Lack of teamwork, disorganized, poor planning, group conflict"
  },
  "Four of Pentacles": {
    upright: "Control, stability, security, possessiveness, saving money",
    reversed: "Greed, self-protection, insecurity, letting go, generosity"
  },
  "Five of Pentacles": {
    upright: "Need, poverty, insecurity, isolation, worry about basic needs",
    reversed: "Recovery, charity, poverty, isolation, spiritual poverty"
  },
  "Six of Pentacles": {
    upright: "Giving, receiving, sharing wealth, generosity, charity",
    reversed: "Strings attached, stinginess, power and domination, inequality"
  },
  "Seven of Pentacles": {
    upright: "Long-term view, sustainable results, perseverance, investment",
    reversed: "Lack of long-term vision, limited success, frustration, impatience"
  },
  "Eight of Pentacles": {
    upright: "Skill development, quality, mastery, commitment, craftsmanship",
    reversed: "Lack of quality, no motivation, skill development, perfectionism"
  },
  "Nine of Pentacles": {
    upright: "Fruits of labor, rewards, luxury, self-sufficiency, refinement",
    reversed: "Relying on others, financial independence, self-worth, over-investment"
  },
  "Ten of Pentacles": {
    upright: "Legacy, culmination, group effort, wealth, retirement",
    reversed: "Fleeting success, lack of stability, family conflict, failure"
  },
  "Page of Pentacles": {
    upright: "Ambition, desire, diligence, new financial opportunity",
    reversed: "Lack of commitment, greediness, laziness, short-term focus"
  },
  "Knight of Pentacles": {
    upright: "Efficiency, routine, conservatism, methodical, reliability",
    reversed: "Laziness, boredom, feeling 'stuck', perfectionist, 'no fun'"
  },
  "Queen of Pentacles": {
    upright: "Practical, homely, mothering, security-oriented, down-to-earth",
    reversed: "Insecurity, work/home conflict, money issues, lack of growth"
  },
  "King of Pentacles": {
    upright: "Abundance, prosperity, security, leadership, financial success",
    reversed: "Authoritarian, controlling, materialistic, rigid, stubborn"
  }
};

// Deterministic PRNG for reproducible draws
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

// Generate seed from user data
export function generateSeed(userId: string, date: string, question: string): string {
  return `${userId}-${date}-${question}`.replace(/\s+/g, '-').toLowerCase();
}

// Shuffle deck using seeded random
function shuffleDeck(deck: TarotCard[], random: () => number): TarotCard[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Draw cards for a specific spread
export function drawTarotCards(
  spreadName: string,
  seed: string,
  question: string = "",
  lang: SupportedLang = 'en'
): TarotSession {
  const spread = TAROT_SPREADS[spreadName];
  if (!spread) {
    throw new Error(`Unknown spread: ${spreadName}`);
  }

  const random = seededRandom(seed);
  const shuffledDeck = shuffleDeck(TAROT_DECK, random);
  
  const cards = spread.positions.map((position, index) => {
    const card = shuffledDeck[index];
    if (!card) {
      throw new Error(`Not enough cards in deck for spread ${spreadName}. Need ${spread.positions.length} cards but only have ${shuffledDeck.length}`);
    }
    const isUpright = random() > 0.3; // 70% chance of upright
    
    return {
      ...card,
      upright: isUpright,
      positionIndex: index
    };
  });

  let readingText: string;
  try {
    readingText = generateReadingText(cards, spread, question, lang);
  } catch (error) {
    console.error("Error generating reading text:", error);
    throw new Error(`Failed to generate reading text: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  return {
    seed,
    spread,
    cards,
    question,
    readingText
  };
}

// Generate AI-style reading text
function generateReadingText(
  cards: (TarotCard & { positionIndex: number; })[],
  spread: TarotSpread,
  question: string,
  lang: SupportedLang = 'en'
): string {
  const t = advancedTarotTranslations[lang] || advancedTarotTranslations['en'];
  let reading = t.spreadReveals(spread.name);

  // Individual card interpretations
  cards.forEach((card, index) => {
    const position = spread.positions[index];
    if (!position) {
      console.warn(`No position found for card at index ${index}`);
      return;
    }
    try {
      const cardMeaning = getTarotCardMeaning(card.name, !card.upright, lang);
      reading += `**${position}**: ${card.name} ${card.upright ? t.upright : t.reversed}\n`;
      reading += `${cardMeaning}\n\n`;
    } catch (error) {
      console.error(`Error processing card ${card.name}:`, error);
      reading += `**${position}**: ${card.name} ${card.upright ? t.upright : t.reversed}\n`;
      reading += `Error loading meaning\n\n`;
    }
  });

  // Direct, straightforward analysis
  reading += t.directAnalysis;
  
  const majorArcanaCount = cards.filter(c => c.arcana === 'major').length;
  const reversedCount = cards.filter(c => !c.upright).length;
  const suitCounts = {
    wands: cards.filter(c => c.suit === 'wands').length,
    cups: cards.filter(c => c.suit === 'cups').length,
    swords: cards.filter(c => c.suit === 'swords').length,
    pentacles: cards.filter(c => c.suit === 'pentacles').length
  };
  
  // Analyze the dominant energy (reserved for future use)
  // const dominantSuit = Object.entries(suitCounts).reduce((a, b) => suitCounts[a[0]] > suitCounts[b[0]] ? a : b);
  
  // Generate direct, specific insights
  if (spread.name === 'relationship') {
    if (cards.length < 7) {
      reading += t.basedOnCards + "Insufficient cards for relationship spread analysis. ";
    } else {
      const you = cards[0];
      const them = cards[1];
      const dynamic = cards[2];
      const communication = cards[3];
      // const emotional = cards[4];
      const challenges = cards[5];
      const advice = cards[6];
      
      // Direct relationship analysis
      if (you?.name === 'The Lovers' && them?.name === 'The Lovers') {
        reading += t.basedOnCards + t.relationshipCommitted;
      } else if (you?.suit === 'cups' && them?.suit === 'cups') {
        reading += t.basedOnCards + t.relationshipEmotional;
      } else if (challenges?.name === 'The Devil') {
        reading += t.basedOnCards + t.relationshipUnhealthy;
      } else if (advice?.name === 'The Magician') {
        reading += t.basedOnCards + t.relationshipPower;
      } else if (you && them && dynamic) {
        // General relationship analysis
        reading += t.basedOnCards + t.relationshipGeneral(you.name, them.name, dynamic.name);
      }
      
      // Direct compatibility assessment
      if (you && them) {
        if (you.suit === them.suit) {
          reading += t.energyMatch;
        } else if ((you.suit === 'cups' && them.suit === 'wands') || (you.suit === 'wands' && them.suit === 'cups')) {
          reading += t.energyComplementary;
        } else {
          reading += t.energyDifferent;
        }
      }
      
      // Direct communication analysis
      if (communication) {
        if (communication.name === 'Ace of Cups') {
          reading += t.communicationOpen;
        } else if (communication.name === 'Seven of Swords') {
          reading += t.communicationDishonest;
        } else {
          reading += t.communicationGeneral(communication.name, communication.upright);
        }
      }
    }
  } else if (spread.name === '3-card') {
    if (cards.length < 3) {
      reading += t.basedOnCards + "Insufficient cards for 3-card spread analysis. ";
    } else {
      const past = cards[0];
      const present = cards[1];
      const future = cards[2];
    
      // Direct timeline analysis
      if (past && present && future) {
        if (past.arcana === 'major' && present.arcana === 'major' && future.arcana === 'major') {
          reading += t.basedOnCards + t.majorTransformation;
        } else if (future.name === 'The Sun') {
          reading += t.basedOnCards + t.futureBright;
        } else if (future.name === 'The Tower') {
          reading += t.basedOnCards + t.futureChange;
        } else if (future.suit === 'pentacles') {
          reading += t.basedOnCards + t.materialSuccess;
        } else {
          // General timeline analysis
          reading += t.journeyProgression(past.name, present.name, future.name);
        }
      }
    }
  } else if (spread.name === 'celtic') {
    if (cards.length < 5) {
      reading += t.basedOnCards + "Insufficient cards for Celtic spread analysis. ";
    } else {
      const currentSituation = cards[0];
      const challenge = cards[1];
      const outcome = cards[4];
    
      // Direct situation analysis
      if (currentSituation && challenge && outcome) {
        if (currentSituation.name === 'The World' && outcome.name === 'The World') {
          reading += t.basedOnCards + t.celticCompletion;
        } else if (challenge.name === 'The Devil') {
          reading += t.basedOnCards + t.celticChallenge;
        } else if (outcome.name === 'The Star') {
          reading += t.basedOnCards + t.celticOutcome;
        } else {
          // General Celtic analysis
          reading += t.celticGeneral(currentSituation.name, challenge.name, outcome.name);
        }
      }
    }
  } else {
    // General analysis for other spreads
    reading += t.generalSpread(spread.name);
  }
  
  // Add general analysis based on card types
  if (majorArcanaCount >= 3) {
    reading += t.multipleMajorArcana;
  } else if (majorArcanaCount >= 2) {
    reading += t.someMajorArcana;
  }
  
  if (reversedCount > cards.length / 2) {
    reading += t.multipleReversed;
  } else if (reversedCount > 0) {
    reading += t.someReversed;
  } else {
    reading += t.allUpright;
  }
  
  // Direct question analysis
  if (question) {
    reading += t.directAnswer(question);
    
    // Analyze for specific question types
    const questionLower = question.toLowerCase();
    if (questionLower.includes('cheat') || questionLower.includes('faithful')) {
      const loyaltyCards = cards.filter(c => 
        c.name === 'The Lovers' || c.name === 'Two of Cups' || c.name === 'Ten of Cups' ||
        c.name === 'The Devil' || c.name === 'Seven of Swords' || c.name === 'Five of Swords'
      );
      
      if (loyaltyCards.some(c => c.name === 'The Lovers' || c.name === 'Two of Cups')) {
        reading += t.basedOnCards + t.loyaltyFaithful;
      } else if (loyaltyCards.some(c => c.name === 'The Devil' || c.name === 'Seven of Swords')) {
        reading += t.basedOnCards + t.loyaltyConcerns;
      } else {
        reading += t.basedOnCards + t.loyaltyCommunication;
      }
    } else if (questionLower.includes('love') || questionLower.includes('relationship')) {
      const loveCards = cards.filter(c => c.suit === 'cups' || c.name === 'The Lovers');
      if (loveCards.length >= 2) {
        reading += t.basedOnCards + t.loveStrong;
      } else {
        reading += t.basedOnCards + t.loveImportant;
      }
    } else if (questionLower.includes('career') || questionLower.includes('job')) {
      const careerCards = cards.filter(c => c.suit === 'pentacles' || c.name === 'The Magician' || c.name === 'The Emperor');
      if (careerCards.length >= 2) {
        reading += t.basedOnCards + t.careerSuccess;
      } else {
        reading += t.basedOnCards + t.careerGrowth;
      }
    } else if (questionLower.includes('future')) {
      const futureCards = cards.filter(c => c.name === 'The Sun' || c.name === 'The Star' || c.name === 'The World');
      if (futureCards.length > 0) {
        reading += t.basedOnCards + t.futurePromising;
      } else {
        reading += t.basedOnCards + t.futureDecisions;
      }
    } else {
      // General answer for any question
      // Check for common keywords in multiple languages
      const loveKeywords = ['love', 'amor', 'amour', '爱', 'cinta', '愛', '사랑'];
      const workKeywords = ['work', 'trabajo', 'travail', '工作', 'kerja', '仕事', '일'];
      const decisionKeywords = ['decision', 'decisión', 'décision', '决定', 'keputusan', '決定', '결정'];
      const actionKeywords = ['action', 'acción', 'action', '行动', 'tindakan', '行動', '행동'];
      
      const relevantCards = cards.filter(card => {
        const meaning = CARD_MEANINGS[card.name];
        if (!meaning) return false;
        const cardText = card.upright ? meaning.upright : meaning.reversed;
        const firstWord = questionLower.split(' ')[0];
        return (firstWord && cardText.toLowerCase().includes(firstWord)) ||
               (loveKeywords.some(kw => questionLower.includes(kw)) && card.suit === 'cups') ||
               (workKeywords.some(kw => questionLower.includes(kw)) && card.suit === 'pentacles') ||
               (decisionKeywords.some(kw => questionLower.includes(kw)) && card.suit === 'swords') ||
               (actionKeywords.some(kw => questionLower.includes(kw)) && card.suit === 'wands');
      });
      
      if (relevantCards.length > 0) {
        const cardNames = relevantCards.map(c => c.name).join(', ');
        if (relevantCards.some(c => c.upright)) {
          reading += t.basedOnCards + t.guidancePositive(cardNames);
        } else {
          reading += t.basedOnCards + t.guidanceReflection(cardNames);
        }
      } else {
        reading += t.basedOnCards + t.guidanceGeneral;
      }
    }
  }

  return reading;
}

// Get follow-up suggestions
export function getFollowUpSuggestions(session: TarotSession): string[] {
  const suggestions = [
    "What specific actions should I take based on this reading?",
    "How can I work with the energy of the reversed cards?",
    "What should I focus on in the coming weeks?",
    "Are there any warnings I should be aware of?",
    "How can I strengthen the positive aspects shown?",
    "What does this reading say about my relationships?",
    "How can I apply this guidance to my career?",
    "What spiritual lessons are being offered here?"
  ];

  // Return 3 random suggestions
  const random = seededRandom(session.seed + "suggestions");
  const shuffled = [...suggestions].sort(() => random() - 0.5);
  return shuffled.slice(0, 3);
}
