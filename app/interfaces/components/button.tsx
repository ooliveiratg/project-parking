import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  classNameButton?: string;
  classNameText?: string;
  title: ReactNode;
  onPress?: () => void;
  activeOpacity?: number;
  Style?: StyleProp<ViewStyle>;
  gradient?: boolean;
}