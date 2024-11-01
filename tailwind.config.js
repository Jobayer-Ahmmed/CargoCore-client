/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#3A3C3F", // Custom color for text
      },
      spacing: {
        pXL: "80px", // Custom spacing
      },
    },
  },
  plugins: [],
};

