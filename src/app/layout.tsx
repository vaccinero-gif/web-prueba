import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Iberia Atlantic Advisors',
  description: 'Cross-border advisory for foreigners in Spain.'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
