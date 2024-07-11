/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "cursive"],
        Lato: ["Lato", "sans-serif"]
      }

    },
  },
plugins: [require("daisyui")],
}
