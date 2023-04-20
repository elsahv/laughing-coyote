/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      onyx: "#35373d",
      teal: "#008080",
      munsell: "#0792a5",
      parchment: "#f0ead2",
      orange: "#ffa500",
      coral: "#ff7f50",
      test: "red",
    },
    //todo LEARN
    // backgroundSize: {
    //   auto: "auto",
    //   cover: "cover",
    //   contain: "contain",
    //   "50%": "50%",
    //   16: "4rem",
    // },
  },
  plugins: [],
};
