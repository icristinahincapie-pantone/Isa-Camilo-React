/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#566448',
        accent: '#ba9bc4',
        warm: '#f9c5b1',
        sage: '#9dbea5',
      },
    },
  },
  plugins: [],
}
