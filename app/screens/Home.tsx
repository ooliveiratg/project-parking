import { DataButtonsArray } from "app/utils/ArrayButtons";
import { Image, ScrollView, Text, View } from "react-native";
import { Car } from "../../assets/images"

export default function Home() {
  const buttons = DataButtonsArray();
  return (
    <View className="flex-1 flex-col bg-black500">
      <Text className="w-full flex mt-[59px] pl-[24px] pr-[24px] text-white font-albertSansBold text-[24px]">
        Hello, Muhammad
      </Text>

      <Text className="mt-[80px] self-center font-albertSansLight text-[37px] text-white">
        Parking Cars
      </Text>
      <View className=" mt-[80px]">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 64,
            paddingRight: 55,
          }}
          className="pl-[33px]"
        >
          {buttons.map((button, index) => (
            <View
              key={button.name}
              className={index !== DataButtonsArray.length - 1 ? "mr-4" : ""}
            >
              {button.content}
            </View>
          ))}
        </ScrollView>
          <Image source={Car} className="justify-center self-center flex-1 mt-[53px] w-[214px] h-[338px]" />
      </View>
    </View>
  );
}
