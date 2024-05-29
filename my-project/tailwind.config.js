/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#253662',
      white: '#EAEFF4',
      green: '#39B69A',
      whiteb: '#D0DBE1'
    },
    width: {
      '2/5': '20%',  
    },
    extend: {},
  },
  plugins: [],
}

