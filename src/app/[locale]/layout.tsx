import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing, type AppLocale} from '@/i18n/routing';
import Shell from '@/components/Shell';
import {localeAlternates, site} from '@/lib/site-config';
import type {Metadata} from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const locale = params.locale;
  if (!routing.locales.includes(locale as never)) return {};
  const title = locale === 'es' ? 'Asesoría fiscal internacional en España' : 'Cross-border tax advisory in Spain';
  const description = locale === 'es' ? 'Asesoría para extranjeros y clientes EE. UU.–España.' : 'Advisory for foreigners in Spain and US–Spain clients.';
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {canonical: `/${locale}`, languages: localeAlternates('')},
    openGraph: {title, description, url: `/${locale}`, locale}
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale: AppLocale) => ({locale}));
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: {locale: string}}) {
  if (!routing.locales.includes(params.locale as never)) notFound();
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <Shell locale={params.locale}>{children}</Shell>
    </NextIntlClientProvider>
  );
}
