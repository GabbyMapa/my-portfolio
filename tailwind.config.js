/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-soft': '#f5d5e0',
        'rose-medium': '#e8b4c8',
        'rose-dark': '#d4949f',
        'cream': '#faf7f5',
        'clay': '#b89b9b',
      },
    },
  },
  plugins: [],
}
