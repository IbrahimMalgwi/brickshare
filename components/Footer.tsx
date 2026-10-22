import Link from 'next/link';
import { nav } from '@/lib/data';
export function Footer() {
  return (
    <footer className="bg-evergreen-deep text-bone">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-display text-3xl">Brickshare Homes Limited</p>
          <p className="mt-4 max-w-sm text-sm text-bone/70">Buy a property outright, or share one with others and share in what it earns.</p>
        </div>
        <nav aria-label="Sitemap" className="md:col-span-3"><p className="mb-4 text-sm text-bone/50">Sitemap</p>
          <ul className="space-y-2 text-sm">{nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-brass">{n.label}</Link></li>)}</ul></nav>
        <div className="md:col-span-4"><p className="mb-4 text-sm text-bone/50">Legal</p>
          <ul className="space-y-2 text-sm"><li><Link href="/legal/terms" className="hover:text-brass">Terms of use</Link></li><li><Link href="/legal/privacy" className="hover:text-brass">Privacy policy</Link></li><li><Link href="/legal/risk" className="hover:text-brass">Risk disclosure</Link></li></ul></div>
      </div>
      <div className="border-t border-bone/15 px-5 py-6 text-xs text-bone/60 md:px-10">
        <p className="mx-auto max-w-7xl">© {new Date().getFullYear()} Brickshare Homes Limited. RC number: [TODO]. Property investment carries risk; projected returns are not guaranteed.</p>
      </div>
    </footer>
  );
}
