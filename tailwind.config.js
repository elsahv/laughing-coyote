/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#35373d",
        teal: "#008080",
        munsell: "#0792a5",
        parchment: "#f0ead2",
        orange: "#ffa500",
        coral: "#ff7f50",
        test: "red",
      },
    },
    plugins: [],
  },
};
