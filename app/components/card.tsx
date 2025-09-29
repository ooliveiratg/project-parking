import { ScrollView, View } from "react-native";
import { DataButtonsArray } from "../../utils/ArrayButtons";
import { useRouter } from "expo-router";

export function Card() {
  const router = useRouter();
  const buttons = DataButtonsArray(router);
  console.log('Card renderizado!');
  console.log('Número de botões:', buttons.length);
  console.log('Buttons:', buttons);

  return (
    
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 64,
          paddingRight: 55,
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
