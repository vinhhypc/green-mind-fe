/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      accent: '#f0f0f0',
      'accent-foreground': '#333333',
    },
    animation: {
      marquee: 'marquee var(--duration) linear infinite',
      'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
    },
    keyframes: {
      marquee: {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(calc(-100% - var(--gap)))' },
      },
      'marquee-vertical': {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(calc(-100% - var(--gap)))' },
      },
    },
  },
};
export const plugins = [];
