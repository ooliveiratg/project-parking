import { TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { JSX, useState } from "react";
import { ButtonStyle } from "./button";
import { InputTypes } from "app/interfaces/components/input";
import { iconsMap } from "app/utils/iconsMap";

export function Input({bg = "white" ,...props }: InputTypes) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <View
      className={` flex-row items-cente flex-1r  bg-${bg}
     justify-between ${props.border}   ${props.icon === "email" ? "rounded-tr-[10px] rounded-tl-[10px]" : props.icon === "password" ? "rounded-br-[10px] rounded-bl-[10px]" : "rounded-[10px]"} `}
     style={props.shadow}
    >
      <View className="flex-row items-center ">
        {iconsMap[props.icon as keyof typeof iconsMap]?? props.iconName }
        <TextInput
          placeholder={props.placeholder}
          secureTextEntry={visiblePassword}
          className={`h-[46px]  font-inter pl-[12px] `}
        />
      </View>

      {props.icon === "password" && (
        <ButtonStyle
          gradient={false}
          icon={true}
          width="w-[30px]"
          height="h-[30px]"
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
