import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        muted: "#a3a3a3",
        accent: {
          DEFAULT: "#4d8be6",
          blue: "#2b4dd4",
          cyan: "#2abfbf",
          green: "#4dbd5e",
          orange: "#d4822b",
          indigo: "#5b3dd4",
        },
        surface: "#111111",
        border: "#1e1e1e",
      },
    },
  },
  plugins: [],
};

export default config;
