
import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  title: React.ReactNode;
  icon?:boolean;
  width?:string;
  height?: string;
  onPress?: () => void;
  Style?: StyleProp<ViewStyle>;
  gradient?: boolean;
}