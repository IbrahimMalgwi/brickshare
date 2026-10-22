'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav } from '@/lib/data';
export function Header() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const active = (h: string) => (h === '/' ? path === '/' : path.startsWith(h));
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bone/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link href="/" className="font-display text-2xl text-evergreen">Brickshare</Link>
        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={active(n.href) ? 'page' : undefined}
              className={`border-b py-1 text-sm ${active(n.href) ? 'border-brass text-evergreen' : 'border-transparent text-ink/70 hover:text-evergreen'}`}>{n.label}</Link>
          ))}
        </nav>
        <button className="px-2 py-2 text-sm md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-ink/10 bg-bone px-5 pb-6 md:hidden">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={active(n.href) ? 'page' : undefined}
              className={`block border-b border-ink/10 py-4 font-display text-2xl ${active(n.href) ? 'text-brass' : ''}`}>{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
