import { Image, Text, View } from "react-native";
import { Car } from "../../assets/images"
import { Card } from "../components/card";
import React,{ useEffect } from "react";
import { usernameState } from "../store/username";
import { ButtonStyle } from "app/components/button";
import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
const  { token,fetchUser,username,setToken } = usernameState()
  useEffect(() => {
    if(!token){ 
      router.replace("/screens/SingIn")
    }else{
      fetchUser()
    }
  },[token])

  if (!token) return null

  const handleLogut = () => {
    setToken(null)
    router.replace("/screens/SingIn");
  }
  return (
    <View className="flex-1 flex-col bg-black700 ite">
      <View className="w-full flex-row justify-between items-center mt-[59px] pl-[14px] pr-[14px]">
      <Text className=" text-white font-albertSansBold text-[24px]">
        Hello, {username ?? "Visitante"}
      </Text>
      <ButtonStyle icon={true} title={
        <MaterialIcons name="exit-to-app" size={25} color={"#D9D9D9"} />
      }     onPress={handleLogut} />
</View>
      <Text className="mt-[80px] self-center font-albertSansLight text-[37px] text-white">
        Parking Cars
      </Text>
      
      <View className="mt-[80px]">
        <Card/>
        <Image source={Car} className="justify-center self-center mt-[53px] w-[214px] h-[338px]" />
      </View>
    </View>
  );
}
