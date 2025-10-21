import { ImageBackground, View, Text } from "react-native";
import { BackgroundVehicle } from "../../assets/images";
import { Input } from "app/components/input";
import { ButtonStyle } from "app/components/button";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { VehicleRegistrationApi } from "../../services/vehicleRegistration"
import React, { useState } from 'react';
import { usernameState } from "app/store/username";
 
export default function VehicleRegistration() {
  const router = useRouter();
 const [placa, setPlaca] = useState("")
 const [loading, setLoading] = useState(false);

  const handleRegisterVehicle = async () => {
    try {
      setLoading(true)
        const token = await usernameState.getState().token
        if (!token) return console.error("Error com o token");
      const result = await VehicleRegistrationApi({placa}, token);
      if(result?.success === true) {
        setLoading(false)
        return router.replace("screens/Home");
      }
    } catch (error) {
      setLoading(false)
      console.error("Erro ao fazer login:", error);
    }
  };
   return (
    <ImageBackground
      source={BackgroundVehicle}
      className="flex-1 bg-black400 justify-center items-start pl-[32px] pr-[32px]"
    >
      <View className=" flex gap-[20px]">
        <ButtonStyle
          icon
          onPress={() => router.replace("screens/Home")}
          title={<MaterialIcons name="arrow-back" size={24} color={"white"} />}
        />
        <View className="min-w-full">
          <Text className="font-interBold text-[28px]  text-white mb-[76px]">
            Entrada de Veiculo
          </Text>

          <Input
            bg="transparent"
            Textcolor="text-white"
            border="border border-solid border-white8 opacity-8 rounded-[12px] mb-[24px]"
            placeholder={"Digite a placa"}
            textColorPlaceholder="white"
            onChange={(text) => setPlaca(text)}
            value={placa}
          />

          <ButtonStyle
          onPress={() => handleRegisterVehicle()}
            title={
              <View className="bg-blue300 items-center justify-center rounded-[12px] h-[48px]">
                <Text className="font-interSemiBold text-4 text-white">
                  {loading ? "Carregando..." : "Entrar"}
                </Text>
              </View>
            }
            width="w-full"
            height="h-[48px]"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
