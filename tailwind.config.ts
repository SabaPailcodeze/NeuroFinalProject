import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-gray": "rgba(0, 0, 0, 0.5)",
        "c-yellow": "#E5E548",
      },
    },
  },
  plugins: [],
} satisfies Config;
