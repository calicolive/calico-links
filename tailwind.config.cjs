/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkBlue: " #16213E",
        medBlue: "#0F3460",
        lightPurple: "#533483",
        lightPink: " #E94560",
      },
    },
  },
  plugins: [],
};
