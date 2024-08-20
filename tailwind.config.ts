import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "neue-reman-sans": ['"Neue Reman Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
