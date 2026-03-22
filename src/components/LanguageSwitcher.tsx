'use client';

import {usePathname, useRouter} from 'next/navigation';
import {routing, type AppLocale} from '@/i18n/routing';
import {localeLabels} from '@/lib/site-config';

export default function LanguageSwitcher({locale}: {locale: string}) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (nextLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = nextLocale;
    const nextPath = '/' + segments.join('/');
    localStorage.setItem('preferred-locale', nextLocale);
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000`;
    router.push(nextPath);
  };

  return (
    <label className="text-sm">
      <span className="sr-only">Language</span>
      <select
        aria-label="Language selector"
        className="rounded border border-slate-300 px-2 py-1"
        value={locale}
        onChange={(e) => changeLocale(e.target.value)}
      >
         {routing.locales.map((loc: AppLocale) => (
          <option key={loc} value={loc}>{localeLabels[loc]}</option>
        ))}
      </select>
    </label>
  );
}
