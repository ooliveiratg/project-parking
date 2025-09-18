import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  title: ReactNode;
  icon?:boolean;
  width?:string;
  color?: string;
  border?: string;
  height?: string;
  onPress?: () => void;
  Style?: StyleProp<ViewStyle>;
  gradient?: boolean;
}