import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'de', 'it', 'pt'],
  defaultLocale: 'en'
});

export type AppLocale = (typeof routing.locales)[number];
export const activeLocales: AppLocale[] = ['en', 'es'];
