export type Property = {
  slug: string; title: string; city: string; area: string; type: 'Apartment' | 'Terrace' | 'Duplex' | 'Commercial';
  status: 'open' | 'funded'; images: string[]; pricePerShare: number; totalShares: number; sharesSold: number;
  roi: number; yieldPct: number; holdYears: number; summary: string; propertyValue: number;
};
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`;
export const properties: Property[] = [
  { slug: 'ikoyi-courtyard-residences', title: 'Courtyard Residences', city: 'Lagos', area: 'Ikoyi', type: 'Apartment', status: 'open',
    images: [u('photo-1600596542815-ffad4c1539a9'), u('photo-1600585154340-be6161a56a0c'), u('photo-1600607687939-ce8a6c25118c')],
    pricePerShare: 2500000, totalShares: 120, sharesSold: 78, roi: 18, yieldPct: 7.5, holdYears: 5, propertyValue: 300000000,
    summary: 'Twelve serviced apartments around a planted courtyard, five minutes from the Ikoyi waterfront. Let to corporate tenants on annual leases.' },
  { slug: 'lekki-terrace-row', title: 'Terrace Row', city: 'Lagos', area: 'Lekki Phase 1', type: 'Terrace', status: 'open',
    images: [u('photo-1564013799919-ab600027ffc6'), u('photo-1512917774080-9991f1c4c750'), u('photo-1613490493576-7fde63acd811')],
    pricePerShare: 1500000, totalShares: 200, sharesSold: 52, roi: 22, yieldPct: 6, holdYears: 4, propertyValue: 300000000,
    summary: 'Six four-bedroom terraces in a gated estate. Returns come mainly from resale once the estate roads and drainage are complete.' },
  { slug: 'victoria-island-offices', title: 'Marina Offices', city: 'Lagos', area: 'Victoria Island', type: 'Commercial', status: 'funded',
    images: [u('photo-1486406146926-c627a92ad1ab'), u('photo-1497366216548-37526070297c'), u('photo-1497366811353-6870744d04b2')],
    pricePerShare: 5000000, totalShares: 100, sharesSold: 100, roi: 16, yieldPct: 9, holdYears: 6, propertyValue: 500000000,
    summary: 'A fully let five-floor office building. Fully funded; rental income is distributed quarterly to co-owners.' },
  { slug: 'abuja-maitama-duplexes', title: 'Maitama Duplexes', city: 'Abuja', area: 'Maitama', type: 'Duplex', status: 'open',
    images: [u('photo-1502672260266-1c1ef2d93688'), u('photo-1493809842364-78817add7ffb'), u('photo-1600566753190-17f0baa2a6c3')],
    pricePerShare: 3000000, totalShares: 150, sharesSold: 31, roi: 20, yieldPct: 6.5, holdYears: 5, propertyValue: 450000000,
    summary: 'Four detached duplexes on quiet streets near the embassies, built for long-let diplomatic and executive tenants.' },
];
export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
export const nav = [{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/properties', label: 'Properties' }, { href: '/gallery', label: 'Gallery' }, { href: '/contact', label: 'Contact' }];
export const faqs = [
  { q: 'What do I actually own when I buy a share?', a: 'Each property is held by its own special-purpose company. Your shares in that company entitle you to a proportion of its rent and sale proceeds.' },
  { q: 'How do I get paid?', a: 'Net rent is distributed quarterly to your bank account. Resale profit is paid when the property is sold, after costs.' },
  { q: 'Can I sell my shares before the property is sold?', a: 'Yes. You can offer shares to other co-owners first, then to approved buyers. Exits are not guaranteed, so treat the hold period as your planning horizon.' },
  { q: 'What are the risks?', a: 'Property values and rents can fall, and returns shown are projections, not promises. Read each property’s financial summary before you commit.' },
];
