import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
const display = Fraunces({ subsets: ['latin'], variable: '--font-display' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans' });
export const metadata: Metadata = { title: { default: 'Brickshare Homes', template: '%s | Brickshare Homes' }, description: 'Buy property outright or co-own it with others and share the income and growth.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${display.variable} ${sans.variable}`}><body><Header /><main>{children}</main><Footer /></body></html>);
}
