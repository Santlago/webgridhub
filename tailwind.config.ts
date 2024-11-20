import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import themes from 'daisyui/src/theming/themes'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        light: {
          ...themes.light,
        }
      },
      {
        dark: {
          ...themes.halloween,
        }
      }
    ]
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [
    daisyui
  ],
} satisfies Config;
