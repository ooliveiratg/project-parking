import { StyleProp, ViewStyle } from "react-native";

export interface InputTypes {
  placeholder: string;
  icon?: string;
  border?:string;
  iconPosition?: position;
  shadow?: StyleProp<ViewStyle>;
  iconName?: React.ReactNode;
  bg?: string;
  textColorPlaceholder?: string;
  onChange?: (text: string) => void;
  value?: string;
}

export enum position{
  RIGHT = "RIGHT",
  BOTH = "both",
}