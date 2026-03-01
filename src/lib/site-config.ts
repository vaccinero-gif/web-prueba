import {routing, type AppLocale} from '@/i18n/routing';

export const site = {
  name: 'Iberia Atlantic Advisors',
  url: 'https://www.iberiaatlanticadvisors.com',
  bookUrl: 'https://cal.com/placeholder/intro-call',
  madridLocation: 'Madrid, Spain (remote across Spain)'
};

export const localeLabels: Record<AppLocale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português'
};

export function localeAlternates(pathname: string) {
  return Object.fromEntriesrouting.locales.map((loc: AppLocale) => [loc, ...]) => [loc, `${site.url}/${loc}${pathname}`]));
}
