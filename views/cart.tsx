import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { cartItems } from "../fake-api";
import FruitCardCart from "../components/fruit-card-cart";

export default function Cart() {
  const { goBack } = useNavigation();

  return (
    <SafeAreaView className="flex-1 flex justify-between bg-orange-50">
      <View className="flex-row justify-start mx-5">
        <TouchableOpacity
          onPress={() => goBack()}
          className="border border-gray-300 rounded-xl bg-white/20"
        >
          <ChevronLeftIcon size={30} color="gray" />
        </TouchableOpacity>
      </View>

      <View className="mx-5 flex-1">
        <Text className="text-2xl py-10">
          Your <Text className="font-bold">Cart</Text>
        </Text>

        <View>
          {cartItems.map((fruit) => {
            return <FruitCardCart key={fruit.name} fruit={fruit} />;
          })}
        </View>

        <View className="flex-row justify-end py-6 pb-10">
          <Text className="text-lg">
            Total price:{" "}
            <Text className="font-bold text-yellow-500">420.80</Text>{" "}
          </Text>
        </View>

        <View className="flex-row justify-between mx-7">
          <TouchableOpacity className="bg-orange-500/80 p-3 flex-1 rounded-xl shadow-md">
            <Text className=" text-xl text-center text-white font-bold">
              Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
