import "nativewind";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { backgroundLogin } from "../../assets/images";
import Logo from "../../assets/svg/Logo-white.svg";
import { Input } from "app/components/input";
import { useRouter } from 'expo-router'
import { ButtonStyle } from "app/components/button";
import { LinearGradient } from "expo-linear-gradient"


export default function SingIn() {
  const router = useRouter();

  return (
    <SafeAreaView
      className="flex-1">
      <ImageBackground
        source={backgroundLogin}
        resizeMode="cover"
        className="flex-1 w-full h-full"
      >
        <View
          className="flex-col justify-center items-center gap-[96px] flex-1 ">
          <Logo />
          <View
            className="flex-col mr-[9.4%] ml-[9.4%]">
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
            <View
              className="flex-row justify-between mt-[24px] mb-[24px]">
              <Text
                className="text-white  border-b border-b-white text-[12px]"> Esqueceu a senha?</Text>

              <ButtonStyle
                classNameButton=""
                activeOpacity={0.7}
                classNameText="text-white border-b border-b-white text-[12px]"
                onPress={() => router.navigate('/')} title={'Cadastre-se'}>
              </ButtonStyle>
            </View>

            <LinearGradient 
            colors={['rgba(255, 255, 255, 1)','rgba(255, 255, 255, 0.12)']}
            style={{borderRadius:10}}
            className=""
            >
              <ButtonStyle 
              title={"Entrar"} 
              classNameText="text-white font-inter text-[14px]"
              classNameButton="w-full h-[48px] items-center justify-center rounded-[6px] bg-blue rounded-[10px] shadow "
              >

              </ButtonStyle >
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
