export const naira = (n: number) => '₦' + new Intl.NumberFormat('en-NG').format(n);
export const pct = (sold: number, total: number) => Math.round((sold / total) * 100);
