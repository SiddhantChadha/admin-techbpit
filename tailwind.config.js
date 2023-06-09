/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2E3094",
        grayEF: "#EFEFEF",
        gray1D2226: "#1D2226",
        primaryRed: "#F14440",
      },
      fontSize: {
        xss: ".65rem",
      },
      height: {
        100: "36rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
