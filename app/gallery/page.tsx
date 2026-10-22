'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { properties } from '@/lib/data';
const shots = properties.flatMap((p) => p.images.map((src, i) => ({ src, alt: `${p.title}, view ${i + 1}`, cat: p.type })));
export default function Gallery() {
  const [cat, setCat] = useState('All'); const [open, setOpen] = useState<number | null>(null);
  const cats = ['All', ...new Set(shots.map((s) => s.cat))]; const list = shots.filter((s) => cat === 'All' || s.cat === cat);
  useEffect(() => { const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); }; window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, []);
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
      <h1 className="text-5xl text-evergreen md:text-7xl">Spaces we have built and bought</h1>
      <div className="mt-8 flex flex-wrap gap-2">{cats.map((c) => <button key={c} onClick={() => setCat(c)} aria-pressed={c === cat} className={`border px-4 py-1.5 text-sm ${c === cat ? 'border-evergreen bg-evergreen text-bone' : 'border-ink/25'}`}>{c}</button>)}</div>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">{list.map((s, i) => (
        <button key={s.src} onClick={() => setOpen(i)} className="mb-4 block w-full break-inside-avoid overflow-hidden"><Image src={s.src} alt={s.alt} width={800} height={i % 3 === 0 ? 1000 : 600} className="h-auto w-full object-cover transition-opacity hover:opacity-90" /></button>))}</div>
      {open !== null && list[open] && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-evergreen-deep/95 p-4" onClick={() => setOpen(null)}>
          <button className="absolute right-5 top-5 text-bone" onClick={() => setOpen(null)} autoFocus>Close</button>
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}><Image src={list[open].src} alt={list[open].alt} fill sizes="90vw" className="object-contain" /></div>
          <button className="absolute left-4 top-1/2 text-bone" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + list.length) % list.length); }} aria-label="Previous image">Prev</button>
          <button className="absolute right-4 top-1/2 text-bone" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % list.length); }} aria-label="Next image">Next</button>
        </div>)}
    </div>
  );
}
