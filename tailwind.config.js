/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

     

      fontFamily: {
        airstrip: ['Airstrip Four', 'sans-serif'], // Fallback to sans-serif
      },
   
    },
  },
  plugins: [],
}