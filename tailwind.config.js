/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        green: {
          100: '#EAFBCE',
          200: '#ABD368',
          400: '#81BE1C'
        },
        lime: '#D3E321',
        orange: {
          300: '#F8BE0B',
          500: '#ED7F1E'
        },
        brown: {
          300: '#846954',
          500: '#84502B'
        },
        grey: {
          100: '#FAFAFA',
          200: '#D9D9D9',
          300: '#9E9E9E'
        }
      },
      fontFamily: {
        sans: ['Cabin', 'sans-serif'],
        heading: ['Lexend', 'sans-serif'],
        logo: ['Jua', 'sans-serif'],
      }
    }
  },
  plugins: []
}
