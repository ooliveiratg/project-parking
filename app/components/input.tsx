import { TextInput } from "react-native";

interface InputTypes {
  placeholder: string;
  className?:string
}


export function Input({
  placeholder,
  className
}: InputTypes) {
  return (
    <TextInput
      placeholder={placeholder}
      className={`min-w-full h-[46px] ${className}`}
    />
  );
}
