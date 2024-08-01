/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
