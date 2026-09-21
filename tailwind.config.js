/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        fg: "#FFFFFF",
        paper: "#050505",
        accent: {
          DEFAULT: "#FFFFFF",
          deep: "#D4D4D4",
          soft: "rgba(255,255,255,0.10)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card:
          "0 1px 0 rgba(255,255,255,.14) inset, 0 -1px 0 rgba(255,255,255,.03) inset, 0 50px 90px -40px rgba(0,0,0,.9), 0 12px 40px -16px rgba(255,255,255,.08)",
        lift: "0 18px 40px -20px rgba(0,0,0,.8)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        indeterminate: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(350%)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        scan: "scan 2.2s ease-in-out infinite",
        indeterminate: "indeterminate 1.4s ease-in-out infinite",
        rise: "rise .5s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};
