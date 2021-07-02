module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        home: "2fr 1fr",
        secGif: "repeat(auto-fit,minmax(150px, 1fr))",
      },
      gridTemplateRows: {
        home: "50px minmax(0, 1fr)",
      },
      height: {
        max: "max-content",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
