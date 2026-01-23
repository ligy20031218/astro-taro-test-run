import type { ZodiacSign } from "./zodiac";
import type { SupportedLang } from "./i18n";
import { getHoroscopeTranslation } from "./content-translations";

type Horizon = "daily" | "monthly" | "yearly";

export async function getHoroscope(sign: ZodiacSign, horizon: Horizon, lang: SupportedLang = 'en'): Promise<string> {
  return getHoroscopeTranslation(sign, horizon, lang);
}

