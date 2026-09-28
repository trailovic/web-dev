# Internationalization

The site uses a small typed i18n layer in `src/i18n`.

## Add a language

1. Copy `src/i18n/locales/en.ts` to a new locale file, for example `nb.ts`.
2. Translate the values without changing the keys.
3. Import the locale in `src/i18n/index.tsx`.
4. Add it to both `localeConfig` and `translations`.

Example:

```ts
import en from './locales/en';
import nb from './locales/nb';

export const localeConfig = {
  en: { label: 'English', dir: 'ltr' },
  nb: { label: 'Norsk', dir: 'ltr' },
} as const;

export const translations = {
  en,
  nb,
} satisfies Record<Locale, Record<TranslationKey, string>>;
```

TypeScript will flag a locale that is missing a translation key. The language picker appears automatically when more than one locale is registered.

## Behavior

- English is the source and fallback locale.
- A saved language preference is restored from local storage.
- Otherwise, the browser language is used when supported.
- `<html lang>` and `dir` are synchronized with the active locale.
- The page title and meta description are translated at runtime.
- Interpolation uses `{{name}}` placeholders, for example `projects.screenshotAlt`.
