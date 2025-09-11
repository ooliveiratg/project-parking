import { SafeAreaView, StatusBar, View } from "react-native";

import BackgroundSplashScreen from "../assets/svg/background-gradient.svg";
import Logo from "../assets/svg/Logo.svg";
import "../NativeWind.css";
import React, { useEffect } from "react";

import { useRouter } from "expo-router";



export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("SplashScreen escondida");
       router.replace("/home")
    }, 3000);
    return () => clearTimeout(timer);
  },[]);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black ">
      <StatusBar hidden />
      <View className="items-center justify-center relative ">
        <BackgroundSplashScreen className="flex-row relative z-[1px]" />
        <View className="w-[301px] h-[301px] rounded-full bg-white absolute z-[3px] opacity-[0.14]"></View>
        <View className="w-[219px] h-[219px] rounded-full bg-white absolute z-[4px]  justify-center items-center">
          <Logo />
        </View>
      </View>
    </SafeAreaView>
  );
}
