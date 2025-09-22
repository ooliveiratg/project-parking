import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { backgroundLogin } from "../../assets/images";
import { ButtonStyle } from "app/components/button";
import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons";
import { useRouter } from "expo-router";
import { useAppFonts } from "app/utils/fonts";
import { Input } from "app/components/input";
export default function SingUp() {
    const router = useRouter();
 
    return (
        <SafeAreaView className="flex-1">
            <ImageBackground
                source={backgroundLogin}
                resizeMode="cover"
                className="w-full h-[26.9%] flex-col items-start pl-[24px] flex"
            >
                <Text className="font-interBold text-white text-[32px] pt-[62px]">Cadastro</Text>

                <View className="flex-row w-full pt-[8px] gap-[6px] ">

                    <Text className="font-inter text-white text-[14px]  pb-[32px] ">Já tem uma conta? </Text>

                    <ButtonStyle onPress={() => router.replace("screens/SingIn")} classNameText="text-blue400  content-center font-interSemiBold underline" title={"Log In"} />
                </View>

            </ImageBackground>

            <View className="flex-1 flex-col pl-[24px] mt-[24px] pr-[24px]">
                <View className="flex-row items-center gap-[16px] ">
                    <View className="flex-col gap-[3px] ">
                        <Text className="font-inter text-[14px]  p-[1px] text-[#7C7C8A]">Primeiro Nome</Text>
    
                        <Input Style={{
                            boxShadow: "0px 1px 2px 0px rgb(228,229,231,0.24)",
                            borderWidth: 1,
                            borderColor: "#000",
                        }}
                        classNameView=" h-[46px] border border-black px-1 " type="none" placeholder={"Nome"}  />

                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}
