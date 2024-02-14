/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html'],
  darkMode: 'media',
  mode: 'jit', theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/hero.png')",
        'cta-background-image': `url('/assets/footer_image_overlay.png')`
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mona: ["mona", "sans-serif"],

      },
    }
  }
};
