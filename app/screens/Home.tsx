import { Image, Text, View } from "react-native";
import { Car } from "../../assets/images"
import { Card } from "../components/card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "node_modules/expo-router/build";

export default function Home() {
  const router = useRouter()
  
  const handleValidateToken = async () => {
 try{
  const token = await AsyncStorage.getItem("token")
  const responseToken = token
  console.log("Token não encontrado:", token);
  if(!token){
    console.log("Token não encontrado:", token);
    router.replace("screens/SingIn")
  }
  return responseToken
 }catch(error){
  console.log(error)
 }
 }
 handleValidateToken()
 
  return (
    <View className="flex-1 flex-col bg-black700">
      <Text className="w-full flex mt-[59px] pl-[24px] pr-[24px] text-white font-albertSansBold text-[24px]">
        Hello, Muhammad
      </Text>

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
