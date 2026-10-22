import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProperty, properties } from '@/lib/data';
import { naira, pct } from '@/lib/format';
type Props = { params: { slug: string } };
export const generateStaticParams = () => properties.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: Props): Metadata { const p = getProperty(params.slug); return { title: p?.title ?? 'Property' }; }
export default function PropertyPage({ params }: Props) {
  const p = getProperty(params.slug); if (!p) notFound();
  const filled = pct(p.sharesSold, p.totalShares);
  const rows: [string, string][] = [['Property value', naira(p.propertyValue)], ['Price per share', naira(p.pricePerShare)], ['Total shares', String(p.totalShares)], ['Projected rental yield', `${p.yieldPct}% a year`], ['Projected total return', `${p.roi}% over ${p.holdYears} years`]];
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-10">
      <Link href="/properties" className="text-sm underline underline-offset-4">All properties</Link>
      <h1 className="mt-4 text-5xl text-evergreen md:text-7xl">{p.title}</h1>
      <p className="mt-2 text-ink/70">{p.area}, {p.city} · {p.type}</p>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="relative aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[480px]"><Image src={p.images[0]} alt={p.title} fill priority sizes="66vw" className="object-cover" /></div>
        {p.images.slice(1).map((src, i) => <div key={src} className="relative aspect-[4/3]"><Image src={src} alt={`${p.title} view ${i + 2}`} fill sizes="33vw" className="object-cover" /></div>)}
      </div>
      <div className="mt-14 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7"><h2 className="text-3xl">About this property</h2><p className="mt-3 max-w-xl text-lg text-ink/80">{p.summary}</p>
          <h2 className="mt-12 text-3xl">Ownership</h2>
          <div className="mt-4 flex h-3 bg-sand" role="img" aria-label={`${filled}% of shares sold`}><div className="bg-evergreen" style={{ width: `${filled}%` }} /></div>
          <p className="mt-2 text-sm text-ink/70">{p.sharesSold} of {p.totalShares} shares sold. {p.totalShares - p.sharesSold} remaining.</p></div>
        <aside className="md:col-span-5"><h2 className="text-3xl">Financials</h2>
          <dl className="mt-4 divide-y divide-ink/15 border-y border-ink/15">{rows.map(([k, v]) => <div key={k} className="flex justify-between py-3 text-sm"><dt className="text-ink/60">{k}</dt><dd>{v}</dd></div>)}</dl>
          <p className="mt-3 text-xs text-ink/60">Returns are projections, not guarantees.</p>
          {p.status === 'open' ? <Link href={`/contact?property=${p.slug}`} className="mt-6 inline-block bg-evergreen px-6 py-3 text-sm text-bone hover:bg-evergreen-deep">Express interest</Link> : <p className="mt-6 text-sm">This property is fully funded. <Link href="/properties" className="underline">See open properties</Link>.</p>}
        </aside>
      </div>
    </div>
  );
}
