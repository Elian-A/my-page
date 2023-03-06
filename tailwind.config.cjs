/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        header: "var(--header-h)",
        main: "var(--main-h)",
      },
      backgroundImage: {
        grid: "url(/grid.svg)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
