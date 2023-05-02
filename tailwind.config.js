/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2E3094",
        grayEF: "#EFEFEF",
        gray1D2226: "#1D2226",
      },
      fontSize: {
        xss: ".65rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
