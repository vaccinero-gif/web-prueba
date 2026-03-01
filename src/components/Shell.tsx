import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import {site} from '@/lib/site-config';

export default function Shell({locale, children}: {locale: string; children: React.ReactNode}) {
  const nav = [
    ['/', 'Home'], ['/services', 'Services'], ['/team', 'Team'], ['/resources', 'Resources'], ['/tools', 'Tools'], ['/about', 'About'], ['/contact', 'Contact']
  ];
  return (
    <>
      <header className="border-b bg-white">
        <div className="container-main flex items-center justify-between py-4">
          <Link href={`/${locale}`} className="font-semibold text-slate-900">{site.name}</Link>
          <nav className="hidden gap-4 md:flex" aria-label="Main navigation">
            {nav.map(([href, label]) => <Link key={href} href={`/${locale}${href}`}>{label}</Link>)}
          </nav>
          <LanguageSwitcher locale={locale} />
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t bg-white">
        <div className="container-main py-8 text-sm text-slate-600">
          <div className="mb-4 flex items-center justify-between"><p>{site.madridLocation}</p><LanguageSwitcher locale={locale} /></div>
          <p>Informational content only. No legal or tax advice. Engagement required for professional advice.</p>
          <div className="mt-3 flex gap-4"><Link href={`/${locale}/privacy`}>Privacy</Link><Link href={`/${locale}/legal`}>Legal</Link><Link href={`/${locale}/cookies`}>Cookies</Link></div>
        </div>
      </footer>
    </>
  );
}
