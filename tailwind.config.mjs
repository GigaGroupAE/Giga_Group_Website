/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        heroImage: "url('/HeroImage.png')",
        excellenceCover: "url('/cover.webp')",
        bgmap: "url('/map.svg')",
        aboutCover: "url('/coverAbout.svg')",
        grpupCover: "url('/group.webp')",
      },
      colors: {
        TextandIcons: "#454C54",
        primaryBlue: "#022952",
        secondary: "#C9BB00",
        black: "#000000",
        white: "#FFFFFF",
        greyBG: "#FAFAFA",
        placeholderText: "#A3A3A3",
      },
    },
  },
  plugins: [],
};
