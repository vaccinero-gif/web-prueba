import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const required = ['name','email','nationality','city','topic','message'];
  const missing = required.some((f) => !body[f]);
  if (missing) return NextResponse.json({error:'Missing fields'}, {status:400});
  console.log('Contact submission:', body);
  return NextResponse.json({ok:true});
}
