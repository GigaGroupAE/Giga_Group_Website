/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        heroImage: "url('/companies_banner.webp')",
        excellenceCover: "url('/excelance.webp')",
        bgmap: "url('/gcv-location-updated.png')",
        aboutCover: "url('/about-hero.png')",
        grpupCover: "url('/Giga-Group-received-the-Water-Conservation-Award.webp')",
        contactCover: "url('/contact-bg.webp')",
        oceanCrest: "url('/ocean-crestCover.webp')",
        projectsHero: "url('/projectHero.webp')",
        managementHero: "url('/management.webp')",
        textile: "url('/textile-industry.webp')",
        gold: "url('/gold-jewellery-trading.webp')",
        construction: "url('/construction.webp')",
        realEstate: "url('/construction.webp')",
        general: "url('/general-trading.webp')",
        investments: "url('/investments.webp')",
        gcv: "url('/companies_banner.webp')",
        gcc: "url('/investments.webp')",
      },
      colors: {
        TextandIcons: '#454C54',
        primaryBlue: '#022952',
        secondary: '#C9BB00',
        black: '#000000',
        white: '#FFFFFF',
        greyBG: '#FAFAFA',
        placeholderText: '#A3A3A3',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/typography')],
};
