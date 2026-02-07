/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#018790",
        secondary: "#f97316",
        black: "#000000",
        white: "#ffffff",
        nav:"#edf4ff"
      },
    },
  },
  plugins: [],
};
