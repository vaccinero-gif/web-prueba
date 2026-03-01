'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

const supported = ['en','es','fr','de','it','pt'];

export default function RootRedirect(){
  const router = useRouter();
  useEffect(()=>{
    const stored = localStorage.getItem('preferred-locale');
    const browser = navigator.language.slice(0,2);
    const locale = supported.includes(stored||'') ? stored : (supported.includes(browser)?browser:'en');
    router.replace(`/${locale}`);
  },[router]);
  return <p className='container-main'>Redirecting...</p>;
}
