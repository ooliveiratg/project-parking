
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
interface ButtonProps {
  classNameButton?: string;
  classNameText?: string;
  title: React.ReactNode;
  onPress?: () => void;
  activeOpacity?: number;
  Style?: StyleProp<ViewStyle>;
  gradient?: boolean;
}

export function ButtonStyle({
  title,
  classNameText,
  onPress,
  classNameButton,
  activeOpacity,
  Style,
  gradient = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={classNameButton}
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={Style}
    >
      {gradient === true ? (
        <LinearGradient
          colors={["#4A90E2", "#1D61E7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="w-full h-full items-center justify-center "
          style={{borderRadius:10}}
        >
              {typeof title === "string" ? <Text className={classNameText}>{title}</Text> : title}
        </LinearGradient>
      ) : (
          typeof title === "string" ? <Text className={classNameText}>{title}</Text> : title
      )}
    </TouchableOpacity>
  );
}
