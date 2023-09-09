import { View, Text, TouchableOpacity, Image } from "react-native";

import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";
import { FruitCartItemProps } from "../types/cart-item-types";

export default function FruitCardCart({ fruit }: FruitCartItemProps) {
  return (
    <View className="flex-row justify-between items-center space-x-5 mb-5">
      <View className="ml-8">
        <TouchableOpacity className="flex-row -mb-10 -ml-8 shadow-lg z-10">
          <Image
            source={fruit.image}
            style={{
              width: 65,
              height: 65,
              shadowColor: fruit.shadow,
              overflow: "visible",
              shadowRadius: 15,
              shadowOffset: {
                width: 0,
                height: 20,
              },
              shadowOpacity: 0.4,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ backgroundColor: fruit.color(0.4) }}
          className="w-[50px] h-[50px] rounded-3xl flex justify-end items-center"
        />
      </View>

      <View className="flex-1 space-y-1">
        <Text className="text-base text-slate-800 font-bold">{fruit.name}</Text>
        <Text className="text-yellow-500 font-extrabold">{fruit.price}</Text>
      </View>

      <View className="flex-row items-center space-x-2">
        <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
          <PlusIcon size={15} color="white" />
        </TouchableOpacity>
        <Text>{fruit.qty}</Text>
        <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
          <MinusIcon size={15} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
