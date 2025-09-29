import { Image, Text, View } from "react-native";
import { Car } from "../../assets/images"
import { Card } from "../components/card";

export default function Home() {

  return (
    <View className="flex-1 flex-col bg-black700">
      <Text className="w-full flex mt-[59px] pl-[24px] pr-[24px] text-white font-albertSansBold text-[24px]">
        Hello, Muhammad
      </Text>

      <Text className="mt-[80px] self-center font-albertSansLight text-[37px] text-white">
        Parking Cars
      </Text>
      
      <View className="mt-[80px]">
        <Card/>
        <Image source={Car} className="justify-center self-center mt-[53px] w-[214px] h-[338px]" />
      </View>
      

    </View>
  );
}
