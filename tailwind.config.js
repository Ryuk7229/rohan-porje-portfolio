/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#70E2F6",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },

      screens: {
        xs: "450px",
      },
    },
  },

  plugins: [],
};
