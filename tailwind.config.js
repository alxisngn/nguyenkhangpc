module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0a2558", dark: "#061738", light: "#153e85" },
        accent: { DEFAULT: "#ff4d00", hover: "#e04300" }
      },
      fontFamily: { sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"] }
    }
  }
};