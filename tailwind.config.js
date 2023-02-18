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
      colors: {
        "primary": "var(--primary)",
        "primaryHover": "var(--primaryHover)",
        "primaryG": "var(--primaryG)",
        "primaryLight": "var(--primaryLight)",
        "primaryDark": "var(--primaryDark)",
        "darkBlue": "var(--darkBlue)",
        "pure": "var(--pure)",
        "light": "var(--light)",
        "dark": "var(--dark)",
        "darkLight": "var(--darkLight)",
        "yellow": "var(--yellow)"
      }
    },
  },
  plugins: [],
}
