/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // modo dark por clase, controlado por ThemeContext
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
