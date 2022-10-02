/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cus': '0 4px 10px -1px rgba(0, 0, 0, 1), 0 2px 7px -2px rgba(255, 255, 255, 0.6)'
      }
    },
  },
  plugins: [],
}
