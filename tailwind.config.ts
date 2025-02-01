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
        image2: "url('/Images/image2.jpg')",
        image3: "url('/Images/image3.jpg')",
        image4: "url('/Images/image4.jpg')",
        image5: "url('/Images/image5.jpg')",
        image6: "url('/Images/image6.jpg')",
        image7: "url('/Images/image7.jpg')",
        image8: "url('/Images/image8.jpg')",
      },
      video: {
        video: "url('/video/video.mp4')",
      },
      screens: {
        xsm: { min: "400px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
