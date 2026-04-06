/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        c3: {
          navy: '#00215E',
          yellow: '#FFAA28',
          yellowLight: '#FFE028',
          gray: '#858585',
        }
      }
    },
  },
  plugins: [],
}
