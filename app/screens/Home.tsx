import { DataButtonsArray } from "app/utils/ArrayButtons";
import {  SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Home() {

    return (
        <SafeAreaView className="flex-1 flex-col bg-black500">

            <Text className="w-full flex mt-[59px] pl-[24px] pr-[24px] text-white font-albertSansBold text-[24px]">
                Hello, Muhammad
            </Text>


            <Text className="mt-[80px] self-center font-albertSansLight text-[37px] text-white">Parking Cars</Text>
            <View className=" mt-[80px]">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                    paddingLeft: 64,
                    paddingRight: 55,
                }} className="pl-[33px]" >
                    {DataButtonsArray.map((button, index) => (
                        <View key={button.name} className={index !== DataButtonsArray.length - 1 ? "mr-4" : ""}>
                            {button.content}
                        </View>
                    ))

                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}