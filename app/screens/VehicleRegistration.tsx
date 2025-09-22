import { ImageBackground, View, Text } from "react-native";
import { BackgroundVehicle } from "../../assets/images"
import { Input } from "app/components/input";
import { ButtonStyle } from "app/components/button";

export default function VehicleRegistration() {
    return(
    
            <ImageBackground source={BackgroundVehicle}  className="flex-1 bg-black400 justify-center items-start pl-[32px] pr-[32px]">
                <Text className="font-interBold text-[28px]  text-white mb-[76px]">Entrada de Veiculo</Text>
                <Input bg="transparent" border="border border-solid border-white8 opacity-8 rounded-[12px]" placeholder={"Digite a placa"} textColorPlaceholder="white" />
                <ButtonStyle title={"Entrar"} color="bg-blue400"  width="min-w-full" height="h-[48px]"/>
            </ImageBackground>

    )
}