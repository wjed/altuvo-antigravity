/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#60A5FA', // Light blue (blue-400)
          darkBlue: '#2563EB', // Darker blue for hover
          black: '#0f172a', // Slate-900 for softer black
        }
      }
    },
  },
  plugins: [],
}
