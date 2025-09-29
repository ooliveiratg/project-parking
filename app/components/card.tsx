import { ScrollView, Text, View } from "react-native";
import { DataButtonsArray } from "../utils/ArrayButtons";


export function Card() {
  const buttons = DataButtonsArray()


  return (
    
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 64,
          paddingRight: 55,
          height: 140,
        }}
        className="pl-[33px] h-[140px]"
      >
        {buttons.map((button, index) => (
          <View
            key={button.name}
            className={index !== buttons.length - 1 ? "mr-4" : ""}
          >
            {button.content}
          </View>
        ))}
      </ScrollView>
  );
}
