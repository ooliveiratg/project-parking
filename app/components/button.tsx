import { ReactNode } from "node_modules/@types/react";
import { Button, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
interface ButtonProps {
    classNameButton?: string;
    classNameText?: string;
    title: ReactNode;
    onPress?: () => void;
    activeOpacity?: number;
    Style?: StyleProp<ViewStyle>;
}

export function ButtonStyle({ title, classNameText,
    onPress, classNameButton,activeOpacity,Style }: ButtonProps) {
    return (

        
        <TouchableOpacity 
        className={classNameButton}
        onPress={onPress}
        activeOpacity={activeOpacity}
        style={ Style }
        >
            <Text className={classNameText}>
                {title}
            </Text>
        </TouchableOpacity>

    )
}