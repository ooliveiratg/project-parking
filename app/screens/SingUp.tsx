import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { backgroundLogin } from "../../assets/images";
import { ButtonStyle } from "app/components/button";
import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons";
import { useRouter } from "expo-router";
export default function SingUp() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1">
            <ImageBackground
                source={backgroundLogin}
                resizeMode="cover"
                className="w-full h-[26.9%] flex-col items-start pl-[24px] flex"
            >
                <ButtonStyle classNameButton=" pt-[64px]" onPress={() => router.replace("screens/SingIn")}  title={
                    <MaterialIcons name="arrow-back" color={"white"} size={24} />
                } />
                <Text className="font-interBold text-white text-[32px] pt-[24px]">Cadastro</Text>

                <View className="flex-row pt-[8px] ">

                    <Text className="font-inter text-white text-[14px]  pb-[32px] ">Já tem uma conta? </Text> <ButtonStyle classNameText="text-blue  content-center" title={"Log in"} />
                </View>

            </ImageBackground>

            <View className="flex-1 flex-col ">

            </View>

        </SafeAreaView>
    )
}