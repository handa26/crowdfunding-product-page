/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "image-hero-desktop": "url('image-hero-desktop.jpg')",
        "image-hero-mobile": "url('image-hero-mobile.jpg')",
      }),
    },
    colors: {
      primary: {
        moderateCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
      },
      neutral: {
        black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 48%)",
      },
    },
    fontFamily: {
      commissioner: ["Commissioner", "sans-serif"],
    },
  },
  plugins: [],
};
