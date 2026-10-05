import en from './locales/en';
import nb from './locales/nb';
import type { Locale, TranslationKey } from './index';

const translations = { en, nb };
const DEFAULT_LOCALE = 'en';
type Variables = Record<string, string | number>;

export function translate(locale: Locale, key: TranslationKey, variables?: Variables) {
  let value: string = translations[locale][key] ?? translations[DEFAULT_LOCALE][key];

  if (variables) {
    for (const [name, replacement] of Object.entries(variables)) {
      value = value.replaceAll(`{{${name}}}`, String(replacement));
    }
  }

  return value;
}
