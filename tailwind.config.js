/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/daisyui/dist/**/*.js",
    "./node_modules/react-daisyui/dist/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "fade-in-down": "fade-in-down 0.8s ease-out", 
      },
      color:{
        nav_text_color:"#676767"
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "base-100": "#F7F9FC",
        },
        dark: {
          "base-100": "#000000",
        },
      },
    ],
  },
};
