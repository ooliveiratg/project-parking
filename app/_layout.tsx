import { Stack } from "expo-router";
import Toast from 'react-native-toast-message';
import { SafeAreaView } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <Toast /> 
    </SafeAreaView>
  );
}
