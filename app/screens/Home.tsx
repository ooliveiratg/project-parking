import { ButtonStyle } from "app/components/button";
import { Card } from "app/components/card";
import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons";
import { Dimensions, FlatList, SafeAreaView, Text, View } from "react-native";



export default function Home() {

  return (
    <SafeAreaView className="flex-1 flex-col bg-black500">
      <View className="w-full flex-row mt-[59px] pl-[24px] pr-[24px] justify-between items-center">
        <Text className="text-white font-albertSansBold text-[24px]">
          Hello, Muhammad
        </Text>
        <ButtonStyle icon={true} title={
          <MaterialIcons name="more-horiz" color={"white"} size={33} />
        } />
      </View>

      <Text className="mt-[80px] flex-1 self-center font-albertSansLight text-[37px] mb-[80px] text-white">Parking Cars</Text>
      <Card />

    </SafeAreaView>
  )
}