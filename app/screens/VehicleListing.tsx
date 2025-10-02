import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons";
import { router, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { VehicleListingApi } from "services/VehicleListingApi";
import { ButtonStyle } from "app/components/button";

export default function VehicleListing() {
  const router = useRouter()

  const handleListingVehicle = async () => { try {
    const result = await VehicleListingApi();
    console.log(result)
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};

handleListingVehicle()

return (
  <View className="flex-1">
    <View className="pl-[24px] w-full h-[223px] gap-[16px] bg-black500 justify-center items-start">
      <ButtonStyle icon onPress={() => router.replace("screens/Home")} title={
        <MaterialIcons name="arrow-back" size={24} color={"white"} />
      } />
      <Text className="font-interBold text-[48px] text-white">Veiculos</Text>
    </View>
    <View className="flex-1 bg-black700 justify-start ">
      <ButtonStyle
        icon
        title={
          <View className="w-[79px] h-[80px] rounded-[24px] bg-blue500 items-center justify-center flex mt-[69px] self-center">
            <MaterialIcons name="directions-car" color={"white"} size={35} />
          </View>
        }
      />
      <View className="mt-[36px] ml-[8px] pl-[12px] pr-[12px] flex-1 flex-col items-start justify-start ">
        <Text className="text-white font-interSemiBold text-[20px]">
          Carros no estacionamento:
        </Text>
        <View className="mt-[23.77px] w-full h-[94px] bg-white rounded-[20px] flex-row items-center ">
          <View
            className=" ml-[14px] items-center border-solid justify-center border border-gray400 rounded-[20px] min-w-[62px] min-h-[63px]"
            style={{ boxShadow: "0px 8px 14.6px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <MaterialIcons
              name="directions-car"
              color={"#404040"}
              size={27}
            />
          </View>
          <View className="flex-col ml-[16px] gap-[8px]">
            <Text className="font-inter text-[13px] text-gray100">
              Entrada: 14:37
            </Text>
            <View className=" w-[85%] items-center justify-between flex-row ">
              <Text className="font-inter text-[13px] text-black500">
                BRA3E23
              </Text>
              <Text className="font-interSemiBold text-[10px] text-black500">02/09/2025</Text>
            </View>
            <Text className="font-inter text-[13px] text-gray100">
              Saída: 17:20
            </Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);
}
