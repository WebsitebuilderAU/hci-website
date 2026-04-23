/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f5fb',
          100: '#dbe5f1',
          200: '#b4c6df',
          300: '#869fc6',
          400: '#5e7ba8',
          500: '#3f5d8a',
          600: '#2c466b',
          700: '#1c3254',
          800: '#11213b',
          900: '#0B2A4A',
          950: '#061830',
        },
        teal: {
          400: '#2BC4B0',
          500: '#14A89A',
          600: '#0E8C81',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '8px',
      },
    },
  },
  plugins: [],
}
