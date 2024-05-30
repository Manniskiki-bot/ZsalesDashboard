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
      whiteb: '#D0DBE1',
      grey: '#8596AD',
      bgred: '#FCECF3',
      txred: '#D20554',
      bggrey: '#F1F5F9',
      bgwhite: '#fff',
      lightblue: '#ECF2FF',
      linkgrey: '#9299A0',
      tablegrey: '#E7ECF0',
      eye: '#3C88DB',
      category: '#E5F3FB'
    },
    width: {
      '2/5': '20%',  
    },
    boxShadow: {
      'custom': '0 4px 6px rgba(42, 52, 71, 0.1)' // Custom shadow color
    },
    extend: {},
  },
  plugins: [],
}

