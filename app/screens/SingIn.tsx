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
          <View className="flex-col mr-[6.4%] ml-[6.4%]">
            <Input
              placeholder={"Digite seu email"}
              type="email"
              className="bg-white"
            />
            <Input
              placeholder={"Digite sua senha"}
              type="password"
              className="bg-white"
            />
            <View className="flex-row justify-between mt-[24px]">
              <Text className="text-white"> Esqueceu a senha?</Text>
               <Text className="text-white"> Cadastre-se </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
