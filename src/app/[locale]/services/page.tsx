import Link from 'next/link';
import {readContent} from '@/lib/site.server';

export default async function Services({params}:{params:{locale:string}}){
  const data = await readContent<any>(params.locale,'site.json');
  return <div className='container-main'><h1 className='text-3xl font-semibold mb-6'>Services</h1><div className='grid gap-4 md:grid-cols-2'>{data.services.map((s:any)=><article key={s.slug} className='card'><h2 className='font-semibold'>{s.title}</h2><p className='my-2 text-sm'>{s.summary}</p><Link href={`/${params.locale}/services/${s.slug}`}>View scope</Link></article>)}</div></div>;
}
