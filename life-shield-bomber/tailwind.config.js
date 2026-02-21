/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        insurance: {
          primary: "#1a365d",
          secondary: "#2b6cb0",
          accent: "#4299e1",
          danger: "#e53e3e",
          success: "#38a169",
        },
      },
    },
  },
  plugins: [],
};
