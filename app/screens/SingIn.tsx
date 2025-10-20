import "nativewind";
import { ImageBackground, View, Text } from "react-native";
import { backgroundLogin } from "../../assets/images";
import Logo from "../../assets/svg/Logo-white.svg";
import { Input } from "app/components/input";
import { useRouter } from "expo-router";
import { ButtonStyle } from "app/components/button";
import { useAppFonts } from "../utils/fonts";
import { position } from "app/interfaces/components/input";
import { Login } from "services/Login";
import React, { useState } from 'react';

export default function SingIn() {
  const router = useRouter();
  const [fonts] = useAppFonts();
   const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  if (!fonts) return null;

  const handleLogin = async () => {
    setLoading(true);
    try {
           const result = await Login({email, senha:password})
       if(result?.success === true){
        setLoading(false);
        return router.replace("screens/Home")

       } 
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }


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
            <Input bg="white" placeholder={"Digite seu email"} icon="email"
              onChange={(text) => setEmail(text)}
              value={email}
            />

            <Input
              iconPosition={position.BOTH}
              bg="white"
              placeholder={"Digite sua senha"}
              icon="password"
              onChange={(text) => setPassword(text)}
              value={password}
            />

            <View className="flex-row justify-between mt-[24px] mb-[24px]">
              <View>
                <ButtonStyle
                  onPress={() => router.replace("screens/SingUp")}
                  title={
                    <Text className="text-white font-inter border-b border-white">Cadastre-se</Text>
                  }

                ></ButtonStyle>
              </View>
            </View>
            <ButtonStyle
              title={loading ? "Carregando..." : "Login"}
              gradient={true}
              width="min-w-full"
              onPress={() => handleLogin()}
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
