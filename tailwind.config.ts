import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        fullxl: '2256px',
      },
      colors: {
        foreground: {
          DEFAULT: 'hsl(var(--hzcv-foreground) / <alpha-value>)',
          50: 'hsl(var(--hzcv-foreground-50) / <alpha-value>)',
          100: 'hsl(var(--hzcv-foreground-100) / <alpha-value>)',
          200: 'hsl(var(--hzcv-foreground-200) / <alpha-value>)',
          300: 'hsl(var(--hzcv-foreground-300) / <alpha-value>)',
          400: 'hsl(var(--hzcv-foreground-400) / <alpha-value>)',
          500: 'hsl(var(--hzcv-foreground-500) / <alpha-value>)',
          600: 'hsl(var(--hzcv-foreground-600) / <alpha-value>)',
          700: 'hsl(var(--hzcv-foreground-700) / <alpha-value>)',
          800: 'hsl(var(--hzcv-foreground-800) / <alpha-value>)',
          900: 'hsl(var(--hzcv-foreground-900) / <alpha-value>)',
          950: 'hsl(var(--hzcv-foreground-950) / <alpha-value>)',
        },
        background: {
          DEFAULT: 'hsl(var(--hzcv-background) / <alpha-value>)',
          50: 'hsl(var(--hzcv-background-50) / <alpha-value>)',
          100: 'hsl(var(--hzcv-background-100) / <alpha-value>)',
          200: 'hsl(var(--hzcv-background-200) / <alpha-value>)',
          300: 'hsl(var(--hzcv-background-300) / <alpha-value>)',
          400: 'hsl(var(--hzcv-background-400) / <alpha-value>)',
          500: 'hsl(var(--hzcv-background-500) / <alpha-value>)',
          600: 'hsl(var(--hzcv-background-600) / <alpha-value>)',
          700: 'hsl(var(--hzcv-background-700) / <alpha-value>)',
          800: 'hsl(var(--hzcv-background-800) / <alpha-value>)',
          900: 'hsl(var(--hzcv-background-900) / <alpha-value>)',
          950: 'hsl(var(--hzcv-background-950) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--hzcv-primary) / <alpha-value>)',
          foreground: 'hsl(var(--hzcv-primary-foreground) / <alpha-value>)',
          50: 'hsl(var(--hzcv-primary-50) / <alpha-value>)',
          100: 'hsl(var(--hzcv-primary-100) / <alpha-value>)',
          200: 'hsl(var(--hzcv-primary-200) / <alpha-value>)',
          300: 'hsl(var(--hzcv-primary-300) / <alpha-value>)',
          400: 'hsl(var(--hzcv-primary-400) / <alpha-value>)',
          500: 'hsl(var(--hzcv-primary-500) / <alpha-value>)',
          600: 'hsl(var(--hzcv-primary-600) / <alpha-value>)',
          700: 'hsl(var(--hzcv-primary-700) / <alpha-value>)',
          800: 'hsl(var(--hzcv-primary-800) / <alpha-value>)',
          900: 'hsl(var(--hzcv-primary-900) / <alpha-value>)',
          950: 'hsl(var(--hzcv-primary-950) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--hzcv-secondary) / <alpha-value>)',
          foreground: 'hsl(var(--hzcv-secondary-foreground) / <alpha-value>)',
          50: 'hsl(var(--hzcv-secondary-50) / <alpha-value>)',
          100: 'hsl(var(--hzcv-secondary-100) / <alpha-value>)',
          200: 'hsl(var(--hzcv-secondary-200) / <alpha-value>)',
          300: 'hsl(var(--hzcv-secondary-300) / <alpha-value>)',
          400: 'hsl(var(--hzcv-secondary-400) / <alpha-value>)',
          500: 'hsl(var(--hzcv-secondary-500) / <alpha-value>)',
          600: 'hsl(var(--hzcv-secondary-600) / <alpha-value>)',
          700: 'hsl(var(--hzcv-secondary-700) / <alpha-value>)',
          800: 'hsl(var(--hzcv-secondary-800) / <alpha-value>)',
          900: 'hsl(var(--hzcv-secondary-900) / <alpha-value>)',
          950: 'hsl(var(--hzcv-secondary-950) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--hzcv-accent) / <alpha-value>)',
          foreground: 'hsl(var(--hzcv-accent-foreground) / <alpha-value>)',
          50: 'hsl(var(--hzcv-accent-50) / <alpha-value>)',
          100: 'hsl(var(--hzcv-accent-100) / <alpha-value>)',
          200: 'hsl(var(--hzcv-accent-200) / <alpha-value>)',
          300: 'hsl(var(--hzcv-accent-300) / <alpha-value>)',
          400: 'hsl(var(--hzcv-accent-400) / <alpha-value>)',
          500: 'hsl(var(--hzcv-accent-500) / <alpha-value>)',
          600: 'hsl(var(--hzcv-accent-600) / <alpha-value>)',
          700: 'hsl(var(--hzcv-accent-700) / <alpha-value>)',
          800: 'hsl(var(--hzcv-accent-800) / <alpha-value>)',
          900: 'hsl(var(--hzcv-accent-900) / <alpha-value>)',
          950: 'hsl(var(--hzcv-accent-950) / <alpha-value>)',
        },
      },
      maxWidth: {
        '8xl': '88rem',
        fullxl: '144rem',
      },
      keyframes: {
        rubberBand: {
          from: { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
          to: { transform: 'scale3d(1, 1, 1)' },
        },

        'text-glow': {
          '0%': {
            filter: 'drop-shadow(0px 1px 6px var(--hzc-primary))',
          },
          '100%': {
            filter: 'drop-shadow(0px 0px 4px var(--hzc-primary-900))',
          },
        },
      },
      animation: {
        'rubber-band': 'rubberBand 300ms ease-in-out',
        'text-glow': 'text-glow 1.5s alternate infinite ease-in-out',
      },
      willChange: {
        color: 'color',
      },
      typography: ({ theme: _ }: any) => ({
        xs: {
          css: {
            fontSize: '0.75rem',
            lineHeight: '1.66',
          },
        },
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                color: 'var(--hzc-primary)',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './app.config.{js,ts}',
    './content/**/*.md',
  ],
}
