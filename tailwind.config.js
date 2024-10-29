/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      textColor:"#3A3C3F",
    },
    extend: {
      spacing:{
        pageXL:"80px",
        
      }
    },
  },
  plugins: [],
}

