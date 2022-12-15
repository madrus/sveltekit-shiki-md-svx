/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('./src/lib/styles/colors.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./app.html', './src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        inherit: colors.inherit,
        current: colors.current,
        light: {
          background: colors.slate.lightest,
          foreground: colors.slate.darkest,
          link: colors.accent.primary,
          linkHover: colors.accent.secondary,
        },
        dark: {
          background: colors.slate.darkest,
          foreground: colors.slate.lightest,
          link: colors.accent.secondary,
          linkHover: colors.accent.primary,
        },
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        link: 'var(--color-link)',
        linkHover: 'var(--color-link-hover)',
        backdrop: '#0b1728',
        smoke: colors.slate.light,
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
        '8xl': '6rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
