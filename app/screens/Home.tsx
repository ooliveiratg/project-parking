import { ButtonStyle } from "app/components/button";
import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons";
import { Dimensions, FlatList, SafeAreaView, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";


export default function Home(){
const { width } = Dimensions.get("window");

const Componente1 = () => (
  <View className="flex-1 justify-center items-center bg-blue-500 rounded-2xl">
    <Text className="text-white text-xl font-bold">Componente 1</Text>
  </View>
);

const Componente2 = () => (
  <View className="flex-1 justify-center items-center bg-green-500 rounded-2xl">
    <Text className="text-white text-xl font-bold">Componente 2</Text>
  </View>
);

const Componente3 = () => (
  <View className="flex-1 justify-center items-center bg-purple-500 rounded-2xl">
    <Text className="text-white text-xl font-bold">Componente 3</Text>
  </View>
);

const data = [
  { id: "1", element: <Componente1 /> },
  { id: "2", element: <Componente2 /> },
  { id: "3", element: <Componente3 /> },
];

    return(
        <SafeAreaView className="flex-1 flex-col bg-black500">
            <View className="w-full flex-row mt-[59px] pl-[24px] pr-[24px] justify-between items-center">
                <Text className="text-white font-albertSansBold text-[24px]">
                    Hello, Muhammad
                </Text>
                <ButtonStyle icon={true} title={
                    <MaterialIcons name="more-horiz" color={"white"} size={33}/>
                }/>
            </View>

                <Text className="mt-[80px] flex-1 self-center font-albertSansLight text-[37px] text-white">Parking Cars</Text>

   <View className="flex-1 justify-center items-center bg-gray-100">
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        snapToInterval={10}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: 30
        }}
        renderItem={({ item }) => (
          <View
            style={{
              width: 108,
              marginHorizontal: 20,
            }}
          >
            {item.element}
          </View>
        )}
      />
    </View>
               
        </SafeAreaView>
    )
}