export const routing = {
  locales: ['en', 'es', 'fr', 'de', 'it', 'pt'] as const,
  defaultLocale: 'en' as const
};

export type AppLocale = (typeof routing.locales)[number];
export const activeLocales: AppLocale[] = ['en', 'es'];
