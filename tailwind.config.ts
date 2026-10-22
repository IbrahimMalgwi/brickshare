import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { evergreen: { DEFAULT: '#1E3A2F', deep: '#14271F' }, bone: '#F2EDE2', sand: '#E3D9C4', ink: '#1F211E', brass: '#9A6F2E' },
    fontFamily: { display: ['var(--font-display)', 'serif'], sans: ['var(--font-sans)', 'sans-serif'] },
  } },
  plugins: [],
} satisfies Config;
