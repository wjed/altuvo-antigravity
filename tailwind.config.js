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
        },
        // Dedicated palette for the /roadmap VSL deck. Near-black instead of
        // slate, and a warm gold accent instead of the site's light-mode
        // blue, since gold-on-black reads as premium/high-ticket on video
        // and holds contrast well when screen-recorded or compressed.
        roadmap: {
          bg: '#060607',
          bgSoft: '#0E0E11',
          ink: '#F7F4EE',
          inkMuted: '#A8A29B',
          gold: '#D9B26C',
          goldSoft: '#8C7038',
          line: '#232227',
        },
      }
    },
  },
  plugins: [],
}
