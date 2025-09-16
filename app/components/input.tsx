import { TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ButtonStyle } from "./button";

interface InputTypes {
  placeholder: string;
  className?: string;
  type?: "email" | "password";
}



export function Input({ placeholder, className, type }: InputTypes) {
  const [visiblePassword,setVisiblePassword] = useState(false) 
  
   
  return (
    <View className={`min-w-full flex-row items-center  ${type === "email" ? "rounded-tr-[10px] rounded-tl-[10px]" : "rounded-br-[10px] rounded-bl-[10px]"} ${className}`}>

    <View className="flex-row items-center">
      {type === "email"? (
        <MaterialIcons name="mail-outline" className="pl-[14px]" color={"#0052B4"}  size={16}  />
      ):(
        <MaterialIcons name="lock-outline" className="pl-[14px]" color={"#0052B4"}  size={16}  />
      )

    }
     
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type === "password"}
        className={'w-full h-[46px]  font-inter pl-[12px]'}
      />
</View>

{type === "password" &&(
  <ButtonStyle classNameButton=" w-[30px] h-[30px]" onPress={() => setVisiblePassword(!visiblePassword)} title={
    <MaterialIcons name={"visibility"}  color={"black"} size={16}/>
  } />

)
}
    </View>  
  );
}
