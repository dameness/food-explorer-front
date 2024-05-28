/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      colors: {
        'Light/Light': {
          100: '#FFF',
          200: '#FFFAF1',
          300: '#E1E1E6',
          400: '#C4C4CC',
          500: '#7C7C8A',
          600: '#76797B',
          700: '#4D585E',
        },
        'Dark/Dark': {
          100: '#000405',
          200: '#00070A',
          300: '#000204',
          400: '#000A0F',
          500: '#000C12',
          600: '#00111A',
          700: '#001119',
          800: '#0D161B',
          900: '#0D1D25',
          1000: '#192227',
        },
        'Tints/Tomato': {
          100: '#750310',
          200: '#92000E',
          300: '#AB222E',
          400: '#AB4D55',
        },
        'Tints/Carrot': {
          100: '#FBA94C',
        },
        'Tints/Mint': {
          100: '#04D361',
        },
        'Tints/Cake': {
          100: '#065E7C',
          200: '#82F3FF',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
