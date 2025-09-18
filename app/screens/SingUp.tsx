import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { backgroundLogin } from "../../assets/images";
import { ButtonStyle } from "app/components/button";
import { MaterialIcons } from "node_modules/@expo/vector-icons/build/Icons";
import { useRouter } from "expo-router";
import { useAppFonts } from "app/utils/fonts";
import { Input } from "app/components/input";
import { userFormData } from "app/utils/form";
export default function SingUp() {
  const router = useRouter();
  const [fonts] = useAppFonts();
  if (!fonts) return null;
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={backgroundLogin}
        resizeMode="cover"
        className="w-full h-[26.9%] flex-col items-start pl-[24px] flex"
      >
        <Text className="font-interBold text-white text-[32px] pt-[104px]">
          Cadastro
        </Text>

        <View className="flex-row pt-[8px] gap-[6px]">
          <Text className="font-inter text-white text-[12px]">
            Já tem uma conta?
          </Text>
          <ButtonStyle
            onPress={() => router.replace("screens/SingIn")}
            color="text-blue400"
            border="border-b border-blue400"
            title={"Log In"}
          />
        </View>
      </ImageBackground>

      <View className="flex-1 flex-col pl-[24px] pr-[24px] mt-[24px]">
        <View className="flex-row justify-between">
          <View className="flex-col gap-[2px] w-[155.5px]">
            <Text className="font-jakarSans text-gray200 text-[12px]">
              Primeiro Nome
            </Text>
            <Input
              placeholder={"Nome"}
              border="border border-gray300"
              shadow={{ boxShadow: "0px 1px 2px 0px rgb(228,229,231,0.24)" }}
            />
          </View>

          <View className="flex-col gap-[2px] w-[155.5px]">
            <Text className="font-jakarSans text-gray200 text-[12px]">
              Sobrenome
            </Text>
            <Input
              placeholder={"Sobrenome"}
              border="border border-gray300"
              shadow={{ boxShadow: "0px 1px 2px 0px rgb(228,229,231,0.24)" }}
            />
          </View>
        </View>
        <View className=" flex-1 pt-[22px]  gap-[22px]">
          {userFormData.map((form) => (
            <>
              <Text className="font-jakarSans text-gray200 text-[12px]">
                {form.label}
              </Text>
              <Input placeholder={form.label} />
            </>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
