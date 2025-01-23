import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        supreme: ["Supreme", "sans-serif"],
      },
      colors: {
        "c-gray": "rgba(0, 0, 0, 0.5)",
        "c-yellow": "#E5E548",
      },
      backgroundImage: {
        image1: "url('/Images/image1.jpg')",
        image3: "url('/Images/image3.jpg')",
        image5: "url('/Images/image5.jpg')",
      },
      video: {
        video: "url('/video/video.mp4')",
      },
    },
  },
  plugins: [],
} satisfies Config;
