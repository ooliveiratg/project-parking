import "nativewind";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { backgroundLogin } from "../../assets/images";
import Logo from "../../assets/svg/Logo-white.svg";
import { Input } from "app/components/input";
import { useRouter } from "expo-router";
import { ButtonStyle } from "app/components/button";
import { LinearGradient } from "expo-linear-gradient";

export default function SingIn() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={backgroundLogin}
        resizeMode="cover"
        className="flex-1 w-full h-full"
      >
        <View className="flex-col justify-center items-center gap-[96px] flex-1 ">
          <Logo />
          <View className="flex-col mr-[9.4%] ml-[9.4%]">
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
            <View className="flex-row justify-between mt-[24px] mb-[24px]">
              <Text className="text-white  border-b border-b-white text-[12px]">
                {" "}
                Esqueceu a senha?
              </Text>

              <ButtonStyle
                classNameButton=""
                activeOpacity={0.7}
                classNameText="text-white border-b border-b-white text-[12px]"
                onPress={() => router.replace("/screens/SingUp")}
                title={"Cadastre-se"}
              ></ButtonStyle>
            </View>
              <ButtonStyle
                title={"Entrar"}
                gradient={true}
                classNameText="text-white font-inter text-[14px]"
                classNameButton="min-w-full h-[48px] items-center justify-center rounded-[10px]"
                Style={[
                  {
                    boxShadow:"0px 1px 2px 0px rgb(37,62,167,0.48)",
                    shadowRadius: 10,
                    
                  },
                  {
                    boxShadow:"0px 0px 0px 1px #253EA7",
                     shadowRadius: 10,
                  },
                ]}
              ></ButtonStyle>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
