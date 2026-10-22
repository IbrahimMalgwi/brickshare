'use client';
import { useMemo, useState } from 'react';
import { Property } from '@/lib/data';
import { PropertyCard } from './PropertyCard';
const sel = 'border border-ink/25 bg-transparent px-3 py-2 text-sm';
export function PropertyBrowser({ items }: { items: Property[] }) {
  const [status, setStatus] = useState('all'); const [city, setCity] = useState('all'); const [type, setType] = useState('all'); const [price, setPrice] = useState('all');
  const cities = [...new Set(items.map((i) => i.city))]; const types = [...new Set(items.map((i) => i.type))];
  const shown = useMemo(() => items.filter((p) => (status === 'all' || p.status === status) && (city === 'all' || p.city === city) && (type === 'all' || p.type === type) &&
    (price === 'all' || (price === 'low' ? p.pricePerShare <= 2000000 : price === 'mid' ? p.pricePerShare > 2000000 && p.pricePerShare <= 3500000 : p.pricePerShare > 3500000))), [items, status, city, type, price]);
  const L = ({ t, children }: { t: string; children: React.ReactNode }) => <label className="flex flex-col gap-1 text-xs text-ink/60">{t}{children}</label>;
  return (
    <>
      <div className="flex flex-wrap gap-4 border-y border-ink/15 py-5">
        <L t="Status"><select className={sel} value={status} onChange={(e) => setStatus(e.target.value)}><option value="all">All</option><option value="open">Open</option><option value="funded">Funded</option></select></L>
        <L t="Location"><select className={sel} value={city} onChange={(e) => setCity(e.target.value)}><option value="all">All</option>{cities.map((c) => <option key={c}>{c}</option>)}</select></L>
        <L t="Property type"><select className={sel} value={type} onChange={(e) => setType(e.target.value)}><option value="all">All</option>{types.map((c) => <option key={c}>{c}</option>)}</select></L>
        <L t="Price per share"><select className={sel} value={price} onChange={(e) => setPrice(e.target.value)}><option value="all">Any</option><option value="low">Up to ₦2m</option><option value="mid">₦2m to ₦3.5m</option><option value="high">Above ₦3.5m</option></select></L>
      </div>
      {shown.length === 0 ? <p className="py-20 text-ink/70">No properties match these filters. Clear one or two to see more.</p> :
        <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{shown.map((p) => <PropertyCard key={p.slug} p={p} />)}</div>}
    </>
  );
}
