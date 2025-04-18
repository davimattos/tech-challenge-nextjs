import { typography } from './src/styles/tokens'

export const theme = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-hover': 'rgb(var(--color-primary-hover) / <alpha-value>)',
        'primary-soft': 'rgb(var(--color-primary-soft) / <alpha-value>)',
        text: {
          base: 'rgb(var(--color-text-base) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        },
        background: 'rgb(var(--color-background) / <alpha-value>)',
        'background-alt': 'rgb(var(--color-background-alt) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
      },
      fontSize: {
        h1: typography.h1,
        h2: typography.h2,
        h3: typography.h3,
        body: typography.body,
      },
      fontFamily: {
        sans: typography.fontFamily,
      },
    },
  },
}
