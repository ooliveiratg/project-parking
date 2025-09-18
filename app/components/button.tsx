
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
} from "react-native";

import {ButtonProps} from "../interfaces/components/button"
export function ButtonStyle({
  title,
  onPress,
  icon = false,
  width,
  color,
  height,
  Style,
  border,
  gradient = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={icon? `${width} ${height}` :   `rounded-[10px] ${width}  ${height}`}
      onPress={onPress}
      activeOpacity={0.8}
      style={Style}
    >
      {gradient === true ? (
        <LinearGradient
          colors={["#4A90E2", "#1D61E7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="w-full h-full items-center justify-center"
          style={{borderRadius:10}}
        >
              {typeof title === "string" ? <Text className={`font-inter text-white`}>{title}</Text> : title}
        </LinearGradient>
      ) : (
          typeof title === "string" ? <Text className={`font-inter text-${color} ${border}`}>{title}</Text> : title
      )}
    </TouchableOpacity>
  );
}
