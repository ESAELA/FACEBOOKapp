/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '350': '330px',
        '320': '320px',
      },
      width: {
        '400': '400px',
        '370': '370px',
        '340': '340px',
      },
    },
  },
  plugins: [],
}