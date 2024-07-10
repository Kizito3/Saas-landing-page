import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgb(254, 236, 255, .7), rgb(254, 202, 255, .7), rgb(254, 181, 255, .7), rgb(255, 219, 231, .7), rgb(255, 244, 214, .7), rgb(243, 252, 215, .7), rgb(210, 245, 238, .7), rgb(195, 239, 255, .7), rgb(251, 239, 255, .7))",
        "menu-bg":
          "linear-gradient(to right, #f8fbff, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE)",
        "hero-bg":
          "linear-gradient(to bottom, #000, #200D42 34%, #4f21a1 65%, #a46edb 82%)",
        "span-gradient":
          "linear-gradient(to right, #f87aff,#fb93d0, #ffdd99, #c3f0b2)",
        "radial-hero": "radial-gradient(closest-side, #000 82%, #9560eb)",
        "team-gradient": "linear-gradient(to right, #000, rgb(0,0,0,0))",
        "team-gradient2": "linear-gradient(to left, #000, rgb(0,0,0,0))",
      },
    },
  },
  plugins: [],
};
export default config;
