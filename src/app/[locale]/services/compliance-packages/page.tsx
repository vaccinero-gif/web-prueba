import {readContent} from '@/lib/site';

export default async function Page({params}:{params:{locale:string}}){
 const data=await readContent<any>(params.locale,'site.json');
 const item=data.services.find((s:any)=>s.slug==='compliance-packages');
 return <div className='container-main'><article className='card'><h1 className='text-3xl font-semibold'>{item.title}</h1><p className='mt-3'>{item.summary}</p><h2 className='mt-6 font-semibold'>Deliverables</h2><ul className='list-disc pl-5'><li>Scope briefing and document checklist</li><li>Coordination memo and action plan</li><li>Compliance timeline and referrals where needed</li></ul><p className='mt-4 text-sm text-slate-600'>Informational service descriptions only; no guaranteed outcomes and no legal/tax advice without signed engagement.</p></article></div>
}
