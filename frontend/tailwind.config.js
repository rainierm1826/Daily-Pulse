import { Button } from "react-scroll";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        main: "#fffffe",
        button: "#3da9fc",
        buttonText: "#fffffe",
        paragraph: "#5f6c7b",
        headline: "#094067",
        stroke: "#094067",
        higlight: "#3da9fc",
        secondary: "#90b4ce",
        tertiary: "#ef4565",
      },
    },
  },
  plugins: [],
};
