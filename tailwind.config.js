/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      colors: {
        pizza: "#ededed",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
