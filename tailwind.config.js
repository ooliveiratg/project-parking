/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./app/screens/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        inter: "Inter_500Medium",
        interBold: "Inter_700Bold",
        interSemiBold: "Inter_600SemiBold"
      },
      colors: {
        blue: "#0052B4",
        blue400: "#4D81E7"
      },
    },
  },
  plugins: [],
}