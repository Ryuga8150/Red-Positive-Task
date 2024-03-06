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
      colors: {
        "border-color": "#a3b1cd",
        "row-color": "#20232a",
        // backgroundColor: "#18191c",
        "background-dark": "#171717",
        "background-light": "#1F1F1F",
        "form-dark": "#141419",
        "form-light": "#202024",
        "form-text": "#575758",
        "border-light": "#272727",
      },
    },
  },
  plugins: [],
};
export default config;
