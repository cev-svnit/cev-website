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
        'green': "#06620E",
        'beige': "#E0DDCF",
        'off-white': "#F1F0EA",
        'navy': "#060233",
        'blue': "#647AA3",
      },
      fontFamily: {
        vindey: ['vindey', 'Times New Roman'],
        foundrey: ['foundrey', 'Times New Roman']
      }
    },
  },
  plugins: [],
} satisfies Config;
