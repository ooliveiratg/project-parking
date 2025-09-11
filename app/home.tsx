import 'nativewind';
import { SafeAreaView, Text, View } from 'react-native';



export default function Home() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-black">🏠 Bem-vindo à Home!</Text>
    </SafeAreaView>
    );
}