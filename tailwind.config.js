/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Very-Light-Grayish-Blue": "hsl(240, 78%, 98%)",
        "Light-Grayish-Blue": "hsl(234, 14%, 74%)",
        "Grayish-Blue": "hsl(233, 13%, 49%)",
        "Dark-Grayish-Blue": "hsl(232, 13%, 33%)",
      },
      backgroundImage: {
        "top-background": "url('/bg-top.svg')",
        "bottom-background": "url('/bg-bottom.svg')",
      }
    },
  },
  plugins: [],
}

