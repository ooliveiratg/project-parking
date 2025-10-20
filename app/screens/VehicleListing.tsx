import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons";
import { useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { VehicleListingApi } from "services/VehicleListingApi";
import { ButtonStyle } from "app/components/button";
import React, { useEffect, useState } from "react";
import { Input } from "app/components/input";
import { VehicleListingPlateApi } from "../../services/VehicleListingPlateApi";
interface VehicleData {
  placa: string;
  dataEntrada: string;
  horarioEntrada: string;
  valorPago?: string;
  horarioSaida?: string;
}

export default function VehicleListing() {
  const router = useRouter();
  const [vehicle, setVehicle] = useState<VehicleData[] | undefined>([]);
  const [isClick, setIsClick] = useState(true);
  const [plate, setPlate] = useState("");

  const handleListingVehicle = async () => {
    try {
      const result = await VehicleListingApi();
      setVehicle(result.response);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const handleListingPlateVehicle = async () => {
    try {
      const result = await VehicleListingPlateApi(plate);
      setVehicle(result.response);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  useEffect(() => {
    if (isClick) {
      handleListingVehicle();
    } else {
      setVehicle([]);
      setPlate("")
    }
  }, [isClick]);

  useEffect(() => {
    if (plate) {
      handleListingPlateVehicle();
    }
  }, [plate]);

  return (
    <View className="flex-1">
      <View className="pl-[24px] w-full h-[223px] gap-[16px] bg-black500 justify-center items-start">
        <ButtonStyle
          icon
          onPress={() => router.replace("screens/Home")}
          title={<MaterialIcons name="arrow-back" size={24} color={"white"} />}
        />
        <Text className="font-interBold text-[48px] text-white">Veiculos</Text>
      </View>
      <View className="flex-1 bg-black700 justify-start  ">
        <View className="flex-row justify-center items-center gap-10 ">
          <ButtonStyle
            icon
            onPress={() => setIsClick(true)}
            title={
              <View
                className={`w-[79px] h-[80px] rounded-[24px] ${isClick ? "bg-blue500" : "bg-black500"} items-center justify-center flex mt-[69px] self-center`}
              >
                <MaterialIcons
                  name="directions-car"
                  color={"white"}
                  size={35}
                />
              </View>
            }
          />
          <ButtonStyle
            icon
            onPress={() => setIsClick(false)}
            title={
              <View
                className={`w-[79px] h-[80px] rounded-[24px] ${isClick ? "bg-black500" : "bg-blue500"} items-center justify-center flex mt-[69px] self-center`}
              >
                <MaterialIcons name="list" color={"white"} size={35} />
              </View>
            }
          />
        </View>
        {isClick && (
          <View className="flex-col w-[196px] mt-[30px] ml-[9px] gap-[9px]">
            <Text className="text-white font-interSemiBold text-[11px]">
              Deseja buscar pelo seu veiculo?
            </Text>
            <View className="flex w-[196px]">
              <Input
                placeholder={"Digite sua placa"}
                bg="bg-transparent"
                border="border-b border-white"
                textColorPlaceholder="white"
                Textcolor="text-white text-[11px]"
                onChange={(text) => setPlate(text)}
                value={plate}
              />
            </View>
          </View>
        )}

        <View className="mt-[36px] ml-[8px] pl-[12px] pr-[12px] flex-1 flex-col items-start justify-start ">
          <Text className="text-white f ont-interSemiBold text-[20px]">
            {isClick === true ? "Carros no estacionamento:" : "Histórico:"}
          </Text>
          {isClick === true ? (
            <ScrollView
              className="mt-[16px] w-full"
              showsVerticalScrollIndicator={false} 
              contentContainerStyle={{ paddingBottom: 20 }}
            >
              {vehicle ? (
                vehicle.map((vehicles) => (
                  <View
                    className="mt-[23.77px] w-full h-[94px] bg-white rounded-[20px] flex-row items-center"
                    key={vehicles.placa}
                  >
                    <View
                      className=" ml-[14px] items-center border-solid justify-center border border-gray400 rounded-[20px] min-w-[62px] min-h-[63px]"
                      style={{
                        boxShadow: "0px 8px 14.6px 0px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <MaterialIcons
                        name="directions-car"
                        color={"#404040"}
                        size={27}
                      />
                    </View>
                    <View className="flex-col ml-[16px] gap-[8px]">
                      <Text className="font-inter text-[13px] text-gray100">
                        Entrada: {vehicles.horarioEntrada}
                      </Text>
                      <View className=" w-[85%] items-center justify-between flex-row ">
                        <Text className="font-inter text-[13px] text-black500">
                          {vehicles.placa}
                        </Text>
                        <Text className="font-interSemiBold text-[10px] text-black500">
                          {vehicles.dataEntrada}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))
              ) : (
                <Text className="text-white">Não encontrado</Text>
              )}
            </ScrollView>
          ) : vehicle ? (
            vehicle.map((vehicles) => (
              <View
                className="mt-[23.77px] w-full h-[94px] bg-white rounded-[20px] flex-row items-center"
                key={vehicles.placa}
              >
                <View
                  className=" ml-[14px] items-center border-solid justify-center border border-gray400 rounded-[20px] min-w-[62px] min-h-[63px]"
                  style={{
                    boxShadow: "0px 8px 14.6px 0px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <MaterialIcons
                    name="directions-car"
                    color={"#404040"}
                    size={27}
                  />
                </View>
                <View className="flex-col ml-[16px] gap-[8px]">
                  <Text className="font-inter text-[13px] text-gray100">
                    Entrada: {vehicles.horarioEntrada}
                  </Text>
                  <View className=" w-[85%] items-center justify-between flex-row ">
                    <Text className="font-inter text-[13px] text-black500">
                      {vehicles.placa}
                    </Text>
                    <View className="flex-col gap-[35px]">
                      <Text className="font-interSemiBold text-[10px] text-black500">
                        {vehicles.dataEntrada}
                      </Text>
                      <Text className="font-interSemiBold text-[10px] text-black500">
                        {vehicles.valorPago}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text>Nenhum veiculo</Text>
          )}
        </View>
      </View>
    </View>
  );
}
