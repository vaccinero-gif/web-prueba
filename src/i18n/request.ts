import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  const selected = locale && routing.locales.includes(locale as never) ? locale : routing.defaultLocale;
  return {
    locale: selected,
    messages: (await import(`../../messages/${selected}.json`)).default
  };
});
