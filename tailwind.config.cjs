/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bodyDark: "#959595",
        bodyLight: "#535353",
        reactLightBlue: "#82d7f7",
        reactDark1: "#292c33",
        reactDark2: "#212329",
        reactDark3: "#17181d",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
