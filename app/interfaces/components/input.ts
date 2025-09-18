import { StyleProp, ViewStyle } from "react-native";

export interface InputTypes {
  placeholder: string;
  icon?: string;
  border?:string;
  shadow?: StyleProp<ViewStyle>;
  iconName?: React.ReactNode;
  bg?: string;

  
}