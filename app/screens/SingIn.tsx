import "nativewind";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { backgroundLogin } from "../../assets/images";
import Logo from "../../assets/svg/Logo-white.svg";
import { Input } from "app/components/input";
import { useRouter } from "expo-router";
import { ButtonStyle } from "app/components/button";
import { LinearGradient } from "expo-linear-gradient";
import { useAppFonts } from "app/utils/fonts";
import { position } from "app/interfaces/components/input";

export default function SingIn() {
  const router = useRouter();
  const [fonts] = useAppFonts();
  if (!fonts) return null;

  return (
    <View className="flex-1">
      <ImageBackground
        source={backgroundLogin}
        resizeMode="cover"
        className="flex-1 w-full h-full"
      >
        <View className="flex-col justify-center items-center gap-[96px] flex-1 ">
          <Logo />
          <View className="flex-col mr-[9.4%] ml-[9.4%]">
            <Input bg="white" placeholder={"Digite seu email"} icon="email" />

            <Input
              iconPosition={position.BOTH}
              bg="white"
              placeholder={"Digite sua senha"}
              icon="password"
            />

            <View className="flex-row justify-between mt-[24px] mb-[24px]">
              <ButtonStyle
                onPress={() => router.replace("screens/SingUp")}
                title={"Cadastre-se"}
                color="text-white"
                border="border-b border-white"
              ></ButtonStyle>
            </View>
            <ButtonStyle
              title={"Entrar"}
              gradient={true}
              width="min-w-full"
              onPress={() => router.replace("screens/Home")}
              height="h-[48px]"
              Style={[
                {
                  boxShadow: "0px 1px 2px 0px rgb(37,62,167,0.48)",
                  shadowRadius: 10,
                },
                {
                  boxShadow: "0px 0px 0px 1px #253EA7",
                  shadowRadius: 10,
                },
              ]}
            ></ButtonStyle>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
