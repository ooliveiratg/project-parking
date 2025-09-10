import { StatusBar } from 'expo-status-bar';
import { View, Text  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className='text-cyan-600'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


