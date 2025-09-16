import { ReactNode } from "node_modules/@types/react";
import { Button, TouchableOpacity, Text } from "react-native";
interface ButtonProps {
    classNameButton?: string;
    classNameText?: string;
    title: ReactNode;
    onPress?: () => void;
    activeOpacity?: number;
}

export function ButtonStyle({ title, classNameText,
    onPress, classNameButton,activeOpacity }: ButtonProps) {
    return (
        <TouchableOpacity 
        className={classNameButton}
        onPress={onPress}
        activeOpacity={activeOpacity}
        >
            <Text className={classNameText}>
                {title}
            </Text>
        </TouchableOpacity>

    )
}