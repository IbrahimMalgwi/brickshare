import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/lib/data';
import { naira, pct } from '@/lib/format';
export function PropertyCard({ p }: { p: Property }) {
  const filled = pct(p.sharesSold, p.totalShares);
  return (
    <Link href={`/properties/${p.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <Image src={p.images[0]} alt={`${p.title}, ${p.area}`} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <span className="absolute left-3 top-3 bg-bone px-2.5 py-1 text-xs">{p.status === 'open' ? 'Open for shares' : 'Fully funded'}</span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-ink/15 pb-3">
        <h3 className="font-display text-2xl">{p.title}</h3><span className="text-sm text-ink/60">{p.area}, {p.city}</span>
      </div>
      <dl className="mt-3 grid grid-cols-2 gap-y-1 text-sm">
        <dt className="text-ink/60">Per share</dt><dd className="text-right">{naira(p.pricePerShare)}</dd>
        <dt className="text-ink/60">Projected return</dt><dd className="text-right">{p.roi}% over {p.holdYears} yrs</dd>
      </dl>
      <div className="mt-3 h-1 bg-sand" role="progressbar" aria-valuenow={filled} aria-valuemin={0} aria-valuemax={100} aria-label="Funding progress"><div className="h-full bg-evergreen" style={{ width: `${filled}%` }} /></div>
      <p className="mt-1 text-xs text-ink/60">{filled}% funded</p>
    </Link>
  );
}
