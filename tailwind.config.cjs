/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans : ["'Open Sans', sans-serif"]
      },
      colors: {
        bgSoft: "#222222",
        bgDark: "#1B1B1B",
        bgCoffee: "#282828",
        primary: "FFFFFFF",
        secondary: "#ADADAD",
        starColor: "#E4A853",
      },
    },
  },
  plugins: [],
};
