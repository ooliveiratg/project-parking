import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../interfaces/components/button";

export function ButtonStyle({
  icon = false,
  gradient = false,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={
        icon
          ? ` ${props.width} ${props.height}`
          : ` rounded-[10px]  ${props.width}  ${props.height}`
      }
      onPress={props.onPress}
      activeOpacity={0.8}
      style={props.Style}
    >
      {gradient ? (
        <LinearGradient
          colors={["#4A90E2", "#1D61E7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="w-full h-full items-center justify-center"
          style={{ borderRadius: 10 }}
        >
          {typeof props.title === "string" ? (
            <Text className="font-inter text-white">{props.title}</Text>
          ) : (
            props.title
          )}
        </LinearGradient>
      ) : (
        typeof props.title === "string" ? (
          <Text className="font-inter text-white">{props.title}</Text>
        ) : (
          props.title
        )
      )}
    </TouchableOpacity>
  );
}