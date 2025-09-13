  import { useFonts } from "expo-font"

  export const useAppFonts = () => {
  return useFonts({
    inter_regular: require("../../assets/fonts/Inter_18pt-Regular.ttf")
  })

}