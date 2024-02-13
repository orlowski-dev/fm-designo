/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      peach: "#e7816b",
      "light-peach": "#ffad9b",
      black: "#1d1c1e",
      "dark-grey": "#333136",
      white: "#fff",
      "light-grey": "#f1f3f5",
    },
    extend: {
      fontSize: {
        h1: [
          "3rem",
          {
            lineHeight: "4.25rem",
            fontWeight: 500,
          },
        ],
        h2: [
          "2.5rem",
          {
            lineHeight: "3rem",
            fontWeight: 500,
            letterSpacing: "0.125rem",
          },
        ],
        h3: [
          "1.25rem",
          {
            lineHeight: "1.625rem",
            fontWeight: 500,
            letterSpacing: "0.3125rem",
          },
        ],
        body: [
          "1rem",
          {
            lineHeight: "1.625rem",
          },
        ],
      },
      maxWidth: {
        1112: "1112px",
      },
      height: {
        "mobile-menu": "calc(100vh - 4.6875rem)",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
