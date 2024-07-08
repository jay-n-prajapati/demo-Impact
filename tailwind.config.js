/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Roboto", "Segoe UI", "sans-serif"],
        montserrat: ["Montserrat", "Segoe UI", "sans-serif"],
        "montserrat-bold": ["Montserrat-bold", "Segoe UI", "sans-serif"],
        "montserrat-extrabold": [
          "Montserrat-extra-bold",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        backgroundColor:
          "#ffffff" /* Background color for the entire website, including individual sections */,
        accentColor:
          "#008374" /* Accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out */,

        navColor: "#ffffff" /* The default color of the main navmenu links */,
        navHoverColor:
          "#f85a40" /* Applied to main navmenu links when they are hovered over or active */,
      },
    },
  },
  plugins: [],
};
