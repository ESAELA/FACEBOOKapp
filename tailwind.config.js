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
      },
      width: {
        '370': '370px',
        '340': '340px',
      },
    },
  },
  plugins: [],
}