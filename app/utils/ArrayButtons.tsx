import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export const ArrayButtons = [
    {
        name: "car",
        content:
        <View className="bg-gray-800 w-[110px] h-[125px] flex justify-center items-center rounded-[20px]"> 
            <MaterialIcons className="flex-1 self-center justify-self-center" name="directions-car" color={"#D9D9D9"} size={50} />
        </View>,
        title: "Car"
    },
       {
        name: "moto",
        content: 
        <View className="bg-gray-800 w-[110px] h-[125px] flex justify-center items-center rounded-[20px]"> 
            <MaterialIcons className=" flex-1 self-center justify-self-center" name="two-wheeler" color={"#D9D9D9"} size={50} />
        </View>,
        title:"Bike"
    },
    {
        name: "bus",
        content:
        <View className="bg-gray-800 w-[110px] h-[125px] flex justify-center items-center rounded-[20px]"> 
            <MaterialIcons className="flex-1 self-center justify-self-center" name="directions-bus" color={"#D9D9D9"} size={50} />
        </View>,
        title:"Bus"
    }
]   