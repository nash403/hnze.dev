/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      maxWidth: {
        fullxl: '144rem',
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
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
