import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { backgroundLogin } from "../../assets/images";
import { ButtonStyle } from "app/components/button";
import { useRouter } from "expo-router";
import { useAppFonts } from "../utils/fonts";
import { Input } from "app/components/input";
import { Register } from "../../services/Register";
import { userFormData } from "../utils/form";
import { position } from "app/interfaces/components/input";
import React, { useState } from "react";
import { Login } from "services/Login";
import Toast from "react-native-toast-message";

export default function SingUp() {
  const router = useRouter();
  const [fonts] = useAppFonts();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!fonts) return null;

  const handleRegister = async () => {
    const nome = `${firstName.trim()} ${lastName.trim()}`;
    setLoading(true);

    try {
      const response = await Register({ name: nome, email, senha: password });
      if (!response.success) {
        const message =
          typeof response.message === "object"
            ? Object.values(response.message).flat().join("\n")
            : response.message || "Email já cadastrado";
        Toast.show({
          type: "error",
          text1: message,
        });

        return;
      }
      if (response?.success === true) {
        const result = await Login({ email, senha: password });

        if (!result.success) {
          const message =
            typeof result.message === "object"
              ? Object.values(result.message).flat().join("\n")
              : result.message || "Email/senha inválido";
          Toast.show({
            type: "error",
            text1: message,
          });

          return;
        }

        if (result?.success === true) {
          return router.replace("screens/Home");
        }
      }
      return;
    } catch (error) {
      console.log(error);
    } finally{
       setLoading(false)
    }
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={backgroundLogin}
        resizeMode="cover"
        className="w-full h-[26.9%] flex-col items-start pl-[24px] flex"
      >
        <Text className="font-interBold text-white text-[32px] pt-[104px]">
          Cadastro
        </Text>

        <View className="flex-row pt-[8px] gap-[6px] items-center ">
          <Text className="font-inter text-white text-[12px]">
            Já tem uma conta?
          </Text>
          <ButtonStyle
            onPress={() => router.replace("screens/SingIn")}
            title={
              <Text className="text-blue400 border-b border-blue400 font-interSemiBold">
                Log In
              </Text>
            }
          />
        </View>
      </ImageBackground>

      <View className="flex-1 bg-white flex-col pl-[24px] pr-[24px] pt-[24px]">
        <View className="flex-row justify-between">
          <View className="flex-col gap-[2px] w-[155.5px]">
            <Text className="font-jakarSans text-gray200 text-[12px]">
              Primeiro Nome
            </Text>
            <Input
              placeholder={"Nome"}
              textColorPlaceholder="black"
              Textcolor="text-black"
              border="border border-gray300"
              shadow={{ boxShadow: "0px 1px 2px 0px rgb(228,229,231,0.24)" }}
              onChange={(text) => setFirstName(text)}
              value={firstName}
            />
          </View>

          <View className="flex-col gap-[2px] w-[155.5px]">
            <Text className="font-jakarSans text-gray200 text-[12px]">
              Sobrenome
            </Text>
            <Input
              placeholder={"Sobrenome"}
              textColorPlaceholder="black"
              Textcolor="text-black"
              border="border border-gray300"
              shadow={{ boxShadow: "0px 1px 2px 0px rgb(228,229,231,0.24)" }}
              onChange={(text) => setLastName(text)}
              value={lastName}
            />
          </View>
        </View>
        <View className=" flex-col pt-[22px] mb-[65px]  gap-[22px]">
          {userFormData.map((form) => (
            <View key={form.label} className="flex-col gap-[2px]">
              <Text className="font-jakarSans text-gray200 text-[12px]">
                {form.label}
              </Text>
              <Input
                textColorPlaceholder="black"
                Textcolor="text-black"
                placeholder={form.label}
                icon={form.type}
                iconPosition={position.RIGHT}
                border="border border-gray300"
                shadow={{ boxShadow: "0px 1px 2px 0px rgb(228,229,231,0.24)" }}
                {...(form.type === "Email"
                  ? { onChange: (text) => setEmail(text) }
                  : form.type === "password"
                    ? { onChange: (text) => setPassword(text) }
                    : {})}
                {...(form.type === "Email"
                  ? { value: email }
                  : form.type === "password"
                    ? { value: password }
                    : {})}
              />
            </View>
          ))}
        </View>
        <View className="flex ">
          <ButtonStyle
            title={loading ? "Carregando..." : "Cadastrar"}
            gradient={true}
            width="min-w-full"
            height="h-[48px]"
            onPress={() => handleRegister()}
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
    </View>
  );
}
