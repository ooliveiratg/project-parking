import './NativeWind.css';
import { SafeAreaView, Text } from 'react-native';
import { Splashscreen } from "./screens/Splashscreen"

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black">
      <Splashscreen />
    </SafeAreaView>
  );
}


