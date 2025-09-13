import "nativewind";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { backgroundLogin } from "../../assets/images";
import Logo from "../../assets/svg/Logo-white.svg";
import { Input } from "app/components/input";


export default function SingIn() {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={backgroundLogin}
        resizeMode="cover"
        className="flex-1 w-full h-full"
      >
        <View className="flex-col justify-center items-center gap-[96px] flex-1 ">
            <Logo />
            <View className="flex-col mr-[24px] ml-[24px]">
              <Input placeholder={"Digite seu email"} className="bg-white rounded-tr-[10px] rounded-tl-[10px] "/>
            </View>
          
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
