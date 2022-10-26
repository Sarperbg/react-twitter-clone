module.exports = {
  future: {},
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#1cabf2",
          dark: "#0d98de",
          light:"#ecf8fe",
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          extraLight: "E1E8ED",
          lightest: "#F5F8FA",
        },
        black: "#14171A",
      }
    },
  },
  variants: {},
  plugins: [],
}