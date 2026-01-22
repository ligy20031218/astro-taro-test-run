export type SupportedLang = 'en' | 'es' | 'fr' | 'zh';

export const SUPPORTED_LANGUAGES: { code: SupportedLang; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'zh', name: '中文' },
];

export function translateText(text: string, lang: SupportedLang): string {
  if (!text) return text;
  if (lang === 'en') return text;
  return `[${lang}] ${text}`;
}

export function translateList(items: string[] = [], lang: SupportedLang): string[] {
  return items.map((t) => translateText(t, lang));
}

