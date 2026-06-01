import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        milk: "#F5EBE0",
        apricot: "#F3A782",
        cocoa: "#4E443F",
        sage: "#A8B8A3",
        cream: "#FFFDF9",
        blush: "#FBE2D5",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(78, 68, 63, 0.10)",
        float: "0 16px 34px rgba(78, 68, 63, 0.13)",
      },
    },
  },
  plugins: [],
};

export default config;
