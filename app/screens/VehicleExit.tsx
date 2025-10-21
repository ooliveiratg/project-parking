import { ImageBackground, View, Text } from "react-native";
import { BackgroundVehicle } from "../../assets/images";
import { Input } from "app/components/input";
import { ButtonStyle } from "app/components/button";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { VehicleExitApi } from "../../services/VehicleExitApi";
import { usernameState } from "app/store/username";
import React, { useState } from "react";
import Toast from "react-native-toast-message";

export default function VehicleExit() {
  const router = useRouter();
  const [placa, setPlaca] = useState("");
  const [loading, setLoading] = useState(false);
  const handleExitVehicle = async () => {
    try {
      setLoading(true);
      const token = await usernameState.getState().token;
      if (!token) {
        Toast.show({
          type: "error",
          text1: "Error com o token",
        });
        return 
      }

      const result = await VehicleExitApi({ placa }, token);

      if (result?.success === true) {
        setLoading(false);
        return router.replace("screens/Home");
      }
    } catch (error) {
      setLoading(false);
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
            Saída
          </Text>

          <Input
            bg="transparent"
            border="border border-solid border-white8 opacity-8 rounded-[12px] mb-[24px]"
            placeholder={"Digite a placa"}
            textColorPlaceholder="white"
            onChange={(text) => setPlaca(text)}
            value={placa}
            Textcolor="text-white"
          />

          <ButtonStyle
            onPress={() => handleExitVehicle()}
            title={
              <View className="bg-blue300 items-center justify-center rounded-[12px] h-[48px]">
                <Text className="font-interSemiBold text-4 text-white">
                  {loading ? "Carregando..." : "Sair"}
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
