/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.68rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tighter: '-0.04em',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(31, 52, 64, 0.08), 0 1px 2px rgba(31, 52, 64, 0.06)',
        'soft-lg': '0 6px 18px rgba(31, 52, 64, 0.12), 0 2px 4px rgba(31, 52, 64, 0.08)',
        glow: '0 0 20px rgba(201, 169, 97, 0.08)',
        'glow-lg': '0 0 30px rgba(201, 169, 97, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
