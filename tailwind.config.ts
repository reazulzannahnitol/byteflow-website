import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#050B20",
        electric: "#087BFF",
        cyan: "#00D9F5",
        violet: "#702EFF",
        slatepanel: "#111B35",
        softwhite: "#F5F7FF",
        muted: "#A6B2CC"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(0, 217, 245, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
