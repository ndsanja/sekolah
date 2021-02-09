module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        },
      },
      colors: {
        dark: "#262626",
        blueDark: "#283251",
        bluePrimary: "#008DD8",
        blueSecondary: "#73BEE9",
        brown: "#535152",
        brownDark: "",
      },
      fontFamily: {
        body: ["Merriweather"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
