import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1880px",
      },
    },
    extend: {
      zIndex: {
        header: "49",
        "blurred-background": "39",
        "selected-project": "40",
        "project-list": "19",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "uno-yellow": "#FDEF5C",
        "tlp-dark": "#1b2334",
        "tlp-light": "#E8D8B6",
        "ggco-green": "#36553f",
        "ggco-yellow": "#FBC53B",
        "dn-dark": "#0E0C20",
        "dn-light-blue": "#66CFFF",
        "phocus-dark": "#071214",
        "phocus-light": "#e4e7e7",
        "phocus-alt": "#9cc6c9",
        "peak-dark": "#20202C",
        "peak-accent": "#4F5888",
        "peak-yellow": "#FBC018",
        "peak-rose": "#BF2D4D",
        "ff-navy-blue": "#172c66", // text
        "ff-cream": "#f7f7f8", // bg
        "ff-light-pink": "#f3d2c1", // border
        "ff-pink": "#f582ae", // primary
        "ff-dark-pink": "#ff3d6a", // primary offset
        "ff-pale-cyan": "#8bd3dd", // secondary
        "ff-green": "#006e8a",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
