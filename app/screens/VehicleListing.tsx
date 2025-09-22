import { ButtonStyle } from "app/components/button";
import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons";
import { View, Text } from "react-native";

export default function VehicleListing() {
    return (
        <View className="flex-1">
            <View className="pl-[24px] w-full h-[223px] bg-black500 justify-center items-start">
                <Text className="font-interBold text-[48px] text-white">Veiculos</Text>
            </View>
            <View className="flex-1 bg-black700 justify-start ">
                <ButtonStyle icon title={
                    <View className="w-[79px] h-[80px] rounded-[24px] bg-blue500 items-center justify-center flex mt-[69px] self-center"> 
                        <MaterialIcons name="directions-car" color={"white"} size={35} />
                    </View>
                } />
                <View className="mt-[36px] ml-[8px] flex-1 flex-col items-start justify-start ">
                    <Text className="text-white font-interSemiBold text-[20px]">Carros no estacionamento:</Text>
                    <View
                </View>
            </View>
        </View>
    )
}