import { TextInput } from "react-native";

interface InputTypes {
  placeholder: string;
  className?:string
  type?: 'email' | 'password'
}


export function Input({
  placeholder,
  className,
  type
}: InputTypes) {
  return (
    <TextInput
      placeholder={placeholder}
      className={`min-w-full h-[46px] font-inter ${type === 'email'? "rounded-tr-[10px] rounded-tl-[10px]" : "rounded-br-[10px] rounded-bl-[10px]"} ${className}`}
    />
  );
}
