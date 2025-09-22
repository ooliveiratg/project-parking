  import { useFonts, Inter_500Medium, Inter_700Bold, Inter_600SemiBold } from "@expo-google-fonts/inter"
  import { PlusJakartaSans_500Medium } from "@expo-google-fonts/plus-jakarta-sans" 
  import {AlbertSans_300Light, AlbertSans_400Regular, AlbertSans_700Bold} from "@expo-google-fonts/albert-sans"
  export const useAppFonts = () => {
  return useFonts({
    Inter_500Medium,
    Inter_700Bold,
    Inter_600SemiBold,
    PlusJakartaSans_500Medium,
    AlbertSans_700Bold,
    AlbertSans_300Light,
    AlbertSans_400Regular
    
  })

}