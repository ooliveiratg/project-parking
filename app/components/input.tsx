import { TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { JSX, useState } from "react";
import { ButtonStyle } from "./button";
import { InputTypes } from "app/interfaces/components/input";
import { iconsMap } from "app/utils/iconsMap";

export function Input({ placeholder, icon, bg }: InputTypes) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <View
      className={` flex-row items-center bg-${bg}
     justify-between ${icon === "email" ? "rounded-tr-[10px] rounded-tl-[10px]" : icon === "password" ? "rounded-br-[10px] rounded-bl-[10px]" : "rounded-[10px]"} `}
    >
      <View className="flex-row items-center ">
        {iconsMap[icon]}
        <TextInput
          placeholder={placeholder}
          secureTextEntry={visiblePassword}
          className={" h-[46px]  font-inter pl-[12px]"}
        />
      </View>

      {icon === "password" && (
        <ButtonStyle
          gradient={false}
          icon={true}
          width="w-[30px]"
          heightIcon="h-[30px]"
          onPress={() => setVisiblePassword(!visiblePassword)}
          title={
            <MaterialIcons
              name={visiblePassword ? "visibility-off" : "visibility"}
              color={"#ACB5BB"}
              size={16}
            />
          }
        />
      )}
    </View>
  );
}
