/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      colors: {
        'main': '#1c9fd3',
        'main-light': '#ecfaff',
        'light': '#fcfeff',
        'dark': '#111',
        'grey-dark': '#333',
        'grey-light': '#eee',
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

