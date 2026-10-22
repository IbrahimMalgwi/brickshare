import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { PropertyCard } from '@/components/PropertyCard';
import { faqs, properties } from '@/lib/data';
const steps = [
  ['Choose a property', 'Each one is vetted for title, location and rental demand. You see the full financials before you commit.'],
  ['Buy your share', 'Pick how many shares you want. Your name goes on the register of the company that owns the property.'],
  ['Earn rent', 'Net rent is paid out every quarter, in proportion to your shares.'],
  ['Exit at sale', 'When the property is sold, profit is split by shareholding. Or sell your shares to another co-owner sooner.'],
];
const btn = 'inline-block px-6 py-3 text-sm transition-colors';
export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-12 md:grid-cols-12 md:px-10 md:pt-20">
        <div className="md:col-span-7 md:pt-10">
          <h1 className="text-5xl leading-[1.02] text-evergreen sm:text-6xl lg:text-8xl">A house is easier to afford when it has more than one owner.</h1>
          <p className="mt-8 max-w-lg text-lg text-ink/75">Brickshare lets you buy a whole property, or a share of one, and take your portion of the rent and the resale gain.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/properties" className={`${btn} bg-evergreen text-bone hover:bg-evergreen-deep`}>Browse properties</Link>
            <Link href="/about" className={`${btn} border border-ink/30 hover:border-evergreen`}>How it works</Link>
          </div>
        </div>
        <div className="relative md:col-span-5 md:mt-24">
          <div className="relative aspect-[3/4]"><Image src={properties[0].images[0]} alt="Courtyard apartments at dusk" fill priority sizes="40vw" className="object-cover" /></div>
          <p className="mt-2 text-xs text-ink/60">Courtyard Residences, Ikoyi. 65% funded.</p>
        </div>
      </section>

      <section className="bg-sand/60"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:px-10">
        <h2 className="text-4xl text-evergreen md:col-span-4 md:text-5xl">How co-ownership works</h2>
        <ol className="md:col-span-8">{steps.map(([t, d], i) => (
          <li key={t}><Reveal className="grid grid-cols-[3rem_1fr] gap-4 border-t border-ink/20 py-6 md:grid-cols-[4rem_1fr_2fr]">
            <span className="font-display text-2xl text-brass">{i + 1}</span><h3 className="text-2xl">{t}</h3><p className="col-start-2 text-ink/75 md:col-start-3">{d}</p></Reveal></li>))}</ol>
      </div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="mb-12 flex items-end justify-between"><h2 className="text-4xl text-evergreen md:text-5xl">Open for shares now</h2><Link href="/properties" className="text-sm underline underline-offset-4">See all properties</Link></div>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">{properties.filter((p) => p.status === 'open').slice(0, 3).map((p) => <PropertyCard key={p.slug} p={p} />)}</div>
      </section>

      <section className="bg-evergreen text-bone"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-10">
        <dl className="grid grid-cols-3 gap-6 md:col-span-6">{[['₦1.5bn', 'property under management'], ['420', 'co-owners'], ['₦86m', 'rent paid out']].map(([n, l]) => (
          <div key={l}><dd className="font-display text-4xl md:text-5xl">{n}</dd><dt className="mt-2 text-sm text-bone/70">{l}</dt></div>))}</dl>
        <blockquote className="md:col-span-6"><p className="font-display text-2xl leading-snug md:text-3xl">I wanted Ikoyi exposure without tying up a whole purchase price. The quarterly statements are clear, and I could see every cost.</p><footer className="mt-4 text-sm text-bone/70">Adaeze O., co-owner since 2023</footer></blockquote>
      </div></section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-12 md:px-10">
        <h2 className="text-4xl text-evergreen md:col-span-4 md:text-5xl">Questions people ask first</h2>
        <div className="md:col-span-8">{faqs.slice(0, 3).map((f) => (
          <details key={f.q} className="group border-t border-ink/20 py-5 last:border-b"><summary className="cursor-pointer list-none font-display text-xl">{f.q}</summary><p className="mt-3 max-w-xl text-ink/75">{f.a}</p></details>))}</div>
      </section>

      <section className="border-t border-ink/15"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-10">
        <h2 className="max-w-2xl text-4xl text-evergreen md:text-6xl">Talk to us before you invest a naira.</h2>
        <Link href="/contact" className={`${btn} self-start bg-brass text-bone hover:bg-brass/90`}>Book a call</Link></div></section>
    </>
  );
}
