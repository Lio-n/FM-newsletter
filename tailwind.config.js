/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      tomato: "hsl(4, 100%, 67%)",
      ...colors,
    },
  },
  plugins: [],
};
