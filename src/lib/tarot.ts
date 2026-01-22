export type TarotCard = {
  id: string;
  name: string;
  meaningUpright: string;
  meaningReversed: string;
};

const deck: TarotCard[] = [
  { id: "0", name: "The Fool", meaningUpright: "New beginnings, innocence, free spirit.", meaningReversed: "Recklessness, holding back." },
  { id: "1", name: "The Magician", meaningUpright: "Manifestation, resourcefulness, power.", meaningReversed: "Manipulation, scattered energy." },
  { id: "2", name: "The High Priestess", meaningUpright: "Intuition, sacred knowledge, mystery.", meaningReversed: "Secrets, disconnection." },
  { id: "3", name: "The Empress", meaningUpright: "Fertility, abundance, nurturing.", meaningReversed: "Creative block, dependence." },
  { id: "4", name: "The Emperor", meaningUpright: "Authority, structure, leadership.", meaningReversed: "Rigidity, domination." },
  { id: "5", name: "The Hierophant", meaningUpright: "Tradition, spiritual wisdom.", meaningReversed: "Rebellion, nonconformity." },
  { id: "6", name: "The Lovers", meaningUpright: "Union, choices, alignment.", meaningReversed: "Disharmony, imbalance." },
  { id: "7", name: "The Chariot", meaningUpright: "Willpower, determination.", meaningReversed: "Aggression, lack of control." },
  { id: "8", name: "Strength", meaningUpright: "Courage, compassion.", meaningReversed: "Self-doubt, reactivity." },
  { id: "9", name: "The Hermit", meaningUpright: "Introspection, wisdom.", meaningReversed: "Isolation, withdrawal." },
  { id: "10", name: "Wheel of Fortune", meaningUpright: "Change, cycles, destiny.", meaningReversed: "Bad luck, resistance." },
  { id: "11", name: "Justice", meaningUpright: "Fairness, truth, balance.", meaningReversed: "Unfairness, lack of accountability." },
  { id: "12", name: "The Hanged Man", meaningUpright: "Sacrifice, waiting, enlightenment.", meaningReversed: "Stalling, needless sacrifice." },
  { id: "13", name: "Death", meaningUpright: "Endings, transformation, rebirth.", meaningReversed: "Resistance to change." },
  { id: "14", name: "Temperance", meaningUpright: "Balance, moderation, patience.", meaningReversed: "Imbalance, excess." },
  { id: "15", name: "The Devil", meaningUpright: "Bondage, addiction.", meaningReversed: "Freedom, breaking free." },
  { id: "16", name: "The Tower", meaningUpright: "Sudden upheaval, revelation.", meaningReversed: "Fear of change." },
  { id: "17", name: "The Star", meaningUpright: "Hope, faith, purpose.", meaningReversed: "Faithlessness, discouragement." },
  { id: "18", name: "The Moon", meaningUpright: "Illusion, fear, anxiety.", meaningReversed: "Release of fear." },
  { id: "19", name: "The Sun", meaningUpright: "Joy, success, celebration.", meaningReversed: "Inner child, feeling down." },
  { id: "20", name: "Judgement", meaningUpright: "Absolution, rebirth.", meaningReversed: "Lack of self awareness." },
  { id: "21", name: "The World", meaningUpright: "Fulfillment, harmony, completion.", meaningReversed: "Incomplete, seeking closure." }
];

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function drawTarot() {
  const picks = shuffle(deck).slice(0, 3).map((c) => {
    const reversed = Math.random() < 0.5;
    return {
      id: c.id,
      name: c.name,
      reversed,
      meaning: reversed ? c.meaningReversed : c.meaningUpright
    };
  });
  return { cards: picks, summary: "Three-card spread: past, present, future." };
}

