import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'About' };
const values = [['Show the numbers', 'Every property has a published cost, fee and return breakdown.'], ['Own it properly', 'Title is held in a company, and your shareholding is registered.'], ['Be honest about risk', 'Projections are labelled as projections.']];
const team = [['Tolu Bamgbose', 'Chief executive'], ['Ngozi Eze', 'Head of acquisitions'], ['Ibrahim Sani', 'Legal and compliance'], ['Femi Adeyemi', 'Asset management']];
export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
      <h1 className="max-w-4xl text-5xl text-evergreen md:text-7xl">We started Brickshare because good property kept going to whoever had the most cash.</h1>
      <div className="mt-16 grid gap-10 md:grid-cols-12">
        <h2 className="text-3xl md:col-span-4">Our mission</h2>
        <p className="max-w-xl text-lg text-ink/80 md:col-span-8">To make well-located property ownable by people who could not buy a whole building, and to give them clear reporting on what it earns.</p>
        <h2 className="text-3xl md:col-span-4">Where we began</h2>
        <p className="max-w-xl text-lg text-ink/80 md:col-span-8">Our founders spent years in Lagos real estate and kept watching friends pool money informally, then lose track of who owned what. Brickshare puts that arrangement on a proper legal footing.</p>
        <h2 className="text-3xl md:col-span-4">The model in detail</h2>
        <div className="max-w-xl space-y-4 text-ink/80 md:col-span-8"><p>We acquire a property and place it in its own company. Shares in that company are offered to investors. Once enough are sold, the property is managed and let.</p><p>Rent, less management costs and tax, is distributed quarterly. When the property is sold, proceeds go to shareholders by holding. Co-owners vote on major decisions such as sale timing.</p></div>
      </div>
      <h2 className="mb-6 mt-24 text-3xl">Values</h2>
      <ul className="grid gap-0 border-t border-ink/20 md:grid-cols-3">{values.map(([t, d]) => <li key={t} className="border-b border-ink/20 py-6 md:pr-8"><h3 className="text-xl">{t}</h3><p className="mt-2 text-ink/75">{d}</p></li>)}</ul>
      <h2 className="mb-6 mt-24 text-3xl">The team</h2>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{team.map(([n, r]) => <li key={n} className="border-t border-evergreen pt-3"><p className="font-display text-xl">{n}</p><p className="text-sm text-ink/60">{r}</p></li>)}</ul>
      <section className="mt-24 bg-sand/60 p-8 md:p-12"><h2 className="text-3xl">Compliance and trust</h2>
        <p className="mt-3 max-w-2xl text-ink/80">Brickshare Homes Limited is registered with the Corporate Affairs Commission (RC number to be added). Investor funds are held in segregated accounts until a raise closes. [TODO: confirm SEC position and audit details with legal before launch.]</p></section>
    </div>
  );
}
