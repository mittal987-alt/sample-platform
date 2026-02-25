/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'cce-dark': '#0f172a', 
        'cce-blue': '#2563eb',
      }
    },
  },
  plugins: [],
}