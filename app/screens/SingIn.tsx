import 'nativewind';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { Image } from 'expo-image'
import { backgroundLogin } from "../../assets/images"

export default function SingIn() {
    return (
      <SafeAreaView className="flex-1">
        <ImageBackground source={backgroundLogin} resizeMode='cover' className='flex-1 w-full h-full'/>
        </SafeAreaView>

    );    
}