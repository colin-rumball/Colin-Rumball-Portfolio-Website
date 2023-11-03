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
        "ff-navy-blue": "#172c66", // text
        "ff-cream": "#fef6e4", // bg
        "ff-light-pink": "#f3d2c1", // border
        "ff-pink": "#f582ae", // primary
        "ff-dark-pink": "#ff3d6a", // primary offset
        "ff-pale-cyan": "#8bd3dd", // secondary
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
