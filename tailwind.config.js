/** @type {import('tailwindcss').Config} */
export default {
  content: ["./example/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("./dist/index.mjs")],
}

