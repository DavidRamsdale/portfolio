/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'dark-blue': '#062c43',
        'medium-blue': '#054569',
        'light-blue': '#5591a9',
        'sky-blue': '#9ccddc',
        'gray-blue': '#ced7e0',
      },
    },
  },
  plugins: [],
}