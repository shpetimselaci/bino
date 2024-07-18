import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        h1: ["48px", { lineHeight: "48px", letterSpacing: "-0.012em" }],
        h2: ["30px", { lineHeight: "36px", letterSpacing: "-0.0075em" }],
        h3: ["24px", { lineHeight: "32px", letterSpacing: "-0.006em" }],
        h4: ["20px", { lineHeight: "28px", letterSpacing: "-0.005em" }],
        p: ["16px", { lineHeight: "28px" }],
      },
      colors: {
        primary: "#0F172A",
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#475569",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a",
      },
    },
  },
  plugins: [],
};
export default config;
