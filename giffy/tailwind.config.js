module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        home: "2fr 1fr",
      },
      gridTemplateRows: {
        home: "50px minmax(0, 1fr)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
