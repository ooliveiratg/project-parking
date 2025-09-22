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
        interSemiBold: "Inter_600SemiBold",
        jakarSans: "PlusJakartaSans_500Medium",
        albertSansBold: "AlbertSans_700Bold",
        albertSansLight: "AlbertSans_300Light",
        alberSansRegular: "AlbertSans_400Regular"
      },
      colors: {
        blue: "#0052B4",
        blue400: "#4D81E7",
        gray300: "#EDF1F3",
        gray200: "#6C7278",
        black500: "#0D0D0D",
        gray600: "#D9D9D9",
        black600: "#252525",
        black400: "#18191D",
        white8: "rgba(255,255,255,0.08)",
        blue300: "#23C2ED"

        
      },
    },
  },
  plugins: [],
}