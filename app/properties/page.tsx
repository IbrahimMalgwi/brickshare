import type { Metadata } from 'next';
import { PropertyBrowser } from '@/components/PropertyBrowser';
import { properties } from '@/lib/data';
export const metadata: Metadata = { title: 'Properties' };
export default function Properties() {
  return (<div className="mx-auto max-w-7xl px-5 py-16 md:px-10"><h1 className="mb-10 max-w-3xl text-5xl text-evergreen md:text-7xl">Properties you can own a share of</h1><PropertyBrowser items={properties} /></div>);
}
