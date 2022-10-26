/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: ["Rubik", sans - serif],
      colors: {
        darkBlue: " #16213E",
        medBlue: "#0F3460",
        lightPurple: "#7f5af0",
        lightPink: " #E94560",
        darkBg: "#16161a",
        lightGray: "#94a1b2",
      },
    },
  },
  plugins: [],
};
