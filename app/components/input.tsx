import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ButtonStyle } from "./button";

interface InputTypes {
  placeholder: string;
  classNameView?: string;
  className?: string;
  Style?: StyleProp<ViewStyle>;
  name?: React.ReactNode;
  icon?: boolean;
  type?: "email" | "password" | "none";
}



export function Input({ placeholder, classNameView, name, className, icon, type, Style }: InputTypes) {
  const [visiblePassword, setVisiblePassword] = useState(false)


  return (
    <View className={`
      min-w-full 
      flex-row 
      items-center
     justify-between 
     ${type === "email" ? "rounded-tr-[10px] rounded-tl-[10px]" :
        type === "password" ? "rounded-br-[10px] rounded-bl-[10px]" :
          null} 
     ${classNameView}`}>

      <View className="
      flex-row 
      items-center ">
        {icon ? (
          type === "email" ? (
            <MaterialIcons name="mail-outline" className="pl-[14px]" color={"#0052B4"} size={16} />
          ) : type === "password" ? (
            <MaterialIcons name="lock-outline" className="pl-[14px]" color={"#0052B4"} size={16} />
          ) : type === "none" ? name : null
        ) : null}

        <TextInput
          placeholder={placeholder}
          style={Style}
          secureTextEntry={visiblePassword}
          className={`w-full h-[46px] font-inter ${className}`}
        />
      </View>

      {type === "password" && (
        <ButtonStyle
          gradient={false}
          classNameButton=" w-[30px] h-[30px]"
          onPress={() => setVisiblePassword(!visiblePassword)}
          title={
            <MaterialIcons name={visiblePassword ? "visibility-off" : "visibility"} color={"#ACB5BB"} size={16} />
          } />

      )
      }
    </View>
  );
}
