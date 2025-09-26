import { Dimensions, FlatList, ScrollView, View } from "react-native";
import { DataButtonsArray } from "../../utils/ArrayButtons";

export function Card() {
const { width } = Dimensions.get("window");
const buttonsArray = DataButtonsArray();
    return (

        <ScrollView horizontal  className="flex-1  ml-8">
            {buttonsArray.map((buttons) => (
                <View key={buttons.name}  style={{ width: width * 0.4, marginRight: 20 }} className="flex ">
                    {buttons.content}
                </View>
            ))
            }
        </ScrollView>
    )
}