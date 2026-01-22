import type { ZodiacSign } from "./zodiac";
import { translateText, type SupportedLang } from "./i18n";

type Horizon = "daily" | "monthly" | "yearly";

const horoscopes: Record<ZodiacSign, Record<Horizon, string>> = {
  Aries: {
    daily: "Your energy ignites new beginnings today. Channel it with intention and take bold action on something you've been putting off.",
    monthly: "This month brings opportunities for leadership. Your natural confidence will shine, but remember to listen as much as you lead.",
    yearly: "This year marks a significant period of growth. Embrace new challenges and trust your instincts."
  },
  Taurus: {
    daily: "Steadiness brings results today. Focus on your routines and take time to appreciate the simple pleasures around you.",
    monthly: "This month emphasizes stability and building. Invest in long-term projects and nurture your relationships.",
    yearly: "A year of steady progress awaits. Your patience and determination will pay off in meaningful ways."
  },
  Gemini: {
    daily: "Curiosity opens doors today. Listen as much as you speak, and you'll discover valuable insights.",
    monthly: "This month is perfect for learning and communication. New ideas and connections will enrich your life.",
    yearly: "A year of expansion through knowledge and relationships. Stay open to new perspectives."
  },
  Cancer: {
    daily: "Gentle boundaries protect your soft power today. Tend to your home and loved ones.",
    monthly: "This month focuses on emotional well-being and family connections. Trust your intuition.",
    yearly: "A year of emotional growth and deeper connections. Nurture yourself as you nurture others."
  },
  Leo: {
    daily: "Lead with heart today. Express your gifts generously, and let your natural charisma shine.",
    monthly: "This month brings recognition and creative opportunities. Share your talents with confidence.",
    yearly: "A year of self-expression and achievement. Your natural leadership will be recognized."
  },
  Virgo: {
    daily: "Refinement is sacred today. Clear the small details to reveal the bigger picture.",
    monthly: "This month emphasizes organization and service. Your attention to detail will be appreciated.",
    yearly: "A year of improvement and mastery. Focus on perfecting your skills and helping others."
  },
  Libra: {
    daily: "Seek harmony without losing your center today. Beauty and balance support truth.",
    monthly: "This month highlights relationships and partnerships. Find balance between giving and receiving.",
    yearly: "A year of partnership and harmony. Focus on creating beauty and balance in all areas of life."
  },
  Scorpio: {
    daily: "Depth transforms today. Release control to gain presence and trust the process.",
    monthly: "This month brings transformation and renewal. Let go of what no longer serves you.",
    yearly: "A year of profound change and growth. Embrace transformation and trust your inner strength."
  },
  Sagittarius: {
    daily: "Adventure teaches today. Aim far, then walk steadily toward your goals.",
    monthly: "This month is perfect for exploration and learning. Expand your horizons through new experiences.",
    yearly: "A year of adventure and expansion. Travel, learning, and new experiences await."
  },
  Capricorn: {
    daily: "Build with patience today. Your foundations will carry your vision forward.",
    monthly: "This month emphasizes career and long-term goals. Your discipline will bring results.",
    yearly: "A year of achievement and building. Your hard work will pay off in significant ways."
  },
  Aquarius: {
    daily: "Innovate with community today. Your ideas want collaborators and supporters.",
    monthly: "This month highlights friendships and innovation. Connect with like-minded people.",
    yearly: "A year of innovation and community. Your unique ideas will find their audience."
  },
  Pisces: {
    daily: "Dreams inform reality today. Trust symbols and subtle signals from your intuition.",
    monthly: "This month emphasizes creativity and spirituality. Listen to your inner voice.",
    yearly: "A year of spiritual growth and creative expression. Trust your intuition and artistic vision."
  }
};

export async function getHoroscope(sign: ZodiacSign, horizon: Horizon, lang: SupportedLang = 'en'): Promise<string> {
  const text = horoscopes[sign][horizon];
  return translateText(text, lang);
}

