/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1260px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary": "#FA7225",
        "primaryHover": "#49D7D8",
        "primaryG": "var(--primaryG)",
        "primaryLight": "var(--primaryLight)"
      }
    },
  },
  plugins: [],
}
