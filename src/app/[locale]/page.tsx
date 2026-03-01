import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {readContent, site} from '@/lib/site';

export default async function Home({params}:{params:{locale:string}}) {
  const data = await readContent<any>(params.locale, 'site.json');
  const t = await getTranslations('ui');
  const orgSchema={"@context":"https://schema.org","@type":["Organization","ProfessionalService"],name:site.name,areaServed:"Spain",address:{"@type":"PostalAddress",addressLocality:"Madrid",addressCountry:"ES"}};
  return <div className="container-main space-y-8">
    <script type='application/ld+json' dangerouslySetInnerHTML={{__html:JSON.stringify(orgSchema)}} />
    {data.translationNeeded && <p className="card border-amber-300 bg-amber-50">{t('translation')}</p>}
    <section className="card">
      <h1 className="text-3xl font-semibold">{data.home.headline}</h1>
      <p className="mt-3 text-lg text-slate-700">{data.home.sub}</p>
      <div className="mt-6 flex gap-3"><a className="rounded bg-brand-600 px-4 py-2 text-white" href={site.bookUrl}>{data.home.cta}</a><Link className="rounded border px-4 py-2" href={`/${params.locale}/contact`}>{t('contact')}</Link></div>
    </section>
    <section className="grid gap-4 md:grid-cols-3">{data.services.slice(0,3).map((s:any)=><article className="card" key={s.slug}><h2 className="font-semibold">{s.title}</h2><p className="mt-2 text-sm">{s.summary}</p></article>)}</section>
  </div>;
}
