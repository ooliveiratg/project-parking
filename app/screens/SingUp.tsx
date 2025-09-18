import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { backgroundLogin } from "../../assets/images";
import { ButtonStyle } from "app/components/button";
import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons";
import { useRouter } from "expo-router";
import { useAppFonts } from "app/utils/fonts";
export default function SingUp() {
    const router = useRouter();
    const [ fonts ] = useAppFonts()
    if(!fonts) return null
    return (
        <SafeAreaView className="flex-1">
            <ImageBackground
                source={backgroundLogin}
                resizeMode="cover"
                className="w-full h-[26.9%] flex-col items-start pl-[24px] flex"
            >
                <Text className="font-interBold text-white text-[32px] pt-[104px]">Cadastro</Text>

                <View className="flex-row pt-[8px] gap-[6px]">
                    <Text className="font-inter text-white text-[14px]">Já tem uma conta? </Text> 
                    <ButtonStyle onPress={() => router.replace("screens/SingIn")}  classNameText="text-blue border-b border-b-blue" title={"Log In"} />
                </View>

            </ImageBackground>

            <View className="flex-1 flex-col ">

            </View>

        </SafeAreaView>
    )
}