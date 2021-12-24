module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /[h, p]-\d/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins"],
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [],
};
