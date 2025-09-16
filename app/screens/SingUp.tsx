import { ImageBackground, SafeAreaView, Text, View } from "react-native";
 import { backgroundLogin } from "../../assets/images";
import { ButtonStyle } from "app/components/button";
import {MaterialIcons} from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function SingUp(){
    const router = useRouter()


    return(
        <SafeAreaView className="flex-1">
            <ImageBackground
            source={backgroundLogin}
            resizeMode="cover"
            className=" w-full h-[26.9%] justify-start items-center pt-[24px] pl-[24px]"
            >
                <ButtonStyle 
                classNameButton="w-full h-[24px]"
                onPress={() => router.replace('/screens/SingIn')}
                title={
                    <MaterialIcons name="arrow-left" size={24} color={"white"}/>
                }/>
                <Text></Text>
            </ImageBackground>
            <View className="z-[1px] whid absolute">

            </View>

        </SafeAreaView>
    )
}