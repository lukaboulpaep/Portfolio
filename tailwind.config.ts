import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        hostGrotesk: ["Host Grotesk", "sans-serif"]
      },
      colors: {
        lightBeige: "#fffbf5",
        lightBlack: "#1b1c1d",
        lightBlackHover: "#393b3e"
      }
    }
  },

  plugins: []
} satisfies Config;
