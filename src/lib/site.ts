import {AppLocale, routing} from '@/i18n/routing';
import fs from 'fs/promises';
import path from 'path';

export const site = {
  name: 'Iberia Atlantic Advisors',
  url: 'https://www.iberiaatlanticadvisors.com',
  bookUrl: 'https://cal.com/placeholder/intro-call',
  madridLocation: 'Madrid, Spain (remote across Spain)'
};

export const localeLabels: Record<AppLocale, string> = {
  en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch', it: 'Italiano', pt: 'Português'
};

export function localeAlternates(pathname: string) {
  return Object.fromEntries(routing.locales.map((loc) => [loc, `${site.url}/${loc}${pathname}`]));
}

export async function readContent<T>(locale: string, file: string): Promise<T> {
  const full = path.join(process.cwd(), 'content', locale, file);
  const json = await fs.readFile(full, 'utf8');
  return JSON.parse(json) as T;
}
