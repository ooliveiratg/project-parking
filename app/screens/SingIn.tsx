import 'nativewind';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { images } from "../../assets/images"
import { Image } from 'expo-image'

export default function SingIn() {
    return (
      <SafeAreaView className="flex-1 bg-red-600">
        {/* <ImageBackground source={images.backgroundLogin} resizeMode='cover' className='flex-1'/> */}
        {/* <Image source={images.backgroundLogin} className='w-full h-full' contentFit='cover'/> */}
        </SafeAreaView>

    );    
}