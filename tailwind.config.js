const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  prefix: "",
  theme: {
    extend: {
      gridTemplateAreas: {
        app: ["header", "list"],
        appMd: ["header header", "list content"],
        appLg: ["sidebar header header", "sidebar list content"],
      },
      gridTemplateColumns: {
        app: "1fr",
        appMd: "320px 1fr",
        appLg: "240px 320px 1fr",
      },
      gridTemplateRows: {
        app: "48px 1fr",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas"), flowbite.plugin()],
};
