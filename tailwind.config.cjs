/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html'],
  darkMode: 'media',
  mode: 'jit', theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('src/assets/hero_background_image.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mona: ["mona", "sans-serif"],

      },
    }
  }
};
