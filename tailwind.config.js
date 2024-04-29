/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  darkMode: 'media',

  theme: {
    extend: {
      backgroundImage: {
        'mobile-hero-pattern': "url('/assets/mobile_hero_background_image_0-apr.png')",
        'hero-pattern': "url('/assets/hero_background_image_0-min-apr.png')",
        'contact-hero-pattern': "url('/assets/giving_background_image_0.png')",
        'mobile-contact-hero-pattern': "url('/assets/mobile_giving_background_image_0.png')",
        'about-hero-pattern': "url('/assets/hero_background_image_2_apr.png')",
        'mobile-about-hero-pattern': "url('/assets/mobile_hero_background_image_2_apr.png')",
        'sermons-hero-pattern': "url('/assets/hero_background_image_3.png')",
        'cta-background-image': `url('/assets/footer_image_overlay_0.png')`,
        'mobile-cta-background-image': `url('/assets/mobile_footer_image_overlay_0.png')`
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mona: ["mona", "sans-serif"],
      },
    },
  },
  plugins: [],
};
