import { ButtonStyle } from "app/components/button"
import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons"
import { View, Text } from "react-native"
import { useRouter } from "expo-router"



export const DataButtonsArray = () => {
    const router = useRouter()

    return[
    {
        name: "cadastro",
        content:
            <ButtonStyle width="w-[110px]" height="h-[124px]" onPress={() => router.replace("screens/VehicleRegistration")} title={
                <View className="flex-1 flex-col justify-center items-center gap-[20px] bg-black600 rounded-[20px]">
                    <MaterialIcons name="add" color={"#D9D9D9"} size={50} />
                    <Text className="text-5 font-alberSansRegular text-white ">
                        Cadastro
                    </Text>
                </View>
            } />
    },

    {
        name: "saida",
        content:

            <ButtonStyle width="w-[110px]" height="h-[124px]" title={
                <View className="flex-1 flex-col justify-center items-center gap-[20px] bg-black600 rounded-[20px]">
                    <MaterialIcons name="exit-to-app" color={"#D9D9D9"} size={50} />
                    <Text className="text-5 font-alberSansRegular text-white ">
                        Saida
                    </Text>

                </View>
            } />
    },

    {
        name: "listagem",
        content:

            <ButtonStyle width="w-[110px]" height="h-[124px]" title={
                <View className="flex-1 flex-col justify-center items-center gap-[20px] bg-black600 rounded-[20px]">
                    <MaterialIcons name="directions-car" color={"#D9D9D9"} size={50} />
                    <Text className="text-5 font-alberSansRegular text-white">
                        Listagem
                    </Text>
                </View>
            } />
    },
]
}