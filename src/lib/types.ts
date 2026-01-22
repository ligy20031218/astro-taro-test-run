export type HoroscopeUnit = {
  scope: 'daily'|'weekly'|'monthly'|'yearly';
  signBase: 'sun'|'rising';
  startISO: string; 
  endISO: string;
  scores: { 
    love: number; 
    career: number; 
    wealth: number; 
    health: number; 
  };
  keyDates: string[]; 
  tipsDo: string[]; 
  tipsDont: string[]; 
  lucky: { 
    color?: string; 
    number?: number; 
  };
  summary?: string;
  suggestions?: string[];
  sections?: {
    id: string;
    title: string;
    content: string;
  }[];
};

export type TarotCard = { 
  id: number; 
  name: string; 
  arcana: 'major'|'minor'; 
  suit?: 'wands'|'cups'|'swords'|'pentacles'; 
  upright: boolean; 
};

export type TarotSpread = { 
  name: '3-card'|'celtic'|'relationship'|'zodiac'; 
  positions: string[]; 
};

export type TarotSession = { 
  seed: string; 
  spread: TarotSpread; 
  cards: (TarotCard & { positionIndex: number; })[]; 
  question: string; 
  readingText: string; 
};

