// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // use kebab-case keys to avoid any naming/case issues:
      boxShadow: {
        "green-combo":
          "0px 0.72px 2.16px rgba(56, 225, 172, 0.20), inset 0px 0.72px 0px rgba(56, 225, 172, 0.07), 0px 0px 0.72px rgba(56, 225, 172, 1), 0px 2.88px 15.78px rgba(56, 225, 172, 0.44)",
        "dark-combo":
          "0px 0.72px 2.16px rgba(19, 19, 22, 0.20), inset 0px 0.72px 0px rgba(19, 19, 22, 0.07), 0px 0px 0.72px rgba(19, 19, 22, 1), 0px 2.88px 15.78px rgba(19, 19, 22, 0.44)",
      },
    },
  },
  plugins: [],
};
