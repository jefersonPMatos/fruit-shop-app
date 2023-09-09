import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { HeartIcon } from "react-native-heroicons/solid";

import { FruitCardProps } from "../types/card-types";
import { useNavigation } from "@react-navigation/native";

export default function FruitCardSales({ fruit }: FruitCardProps) {
  const { navigate } = useNavigation();

  return (
    <View className="mr-6">
      <TouchableOpacity
        className="flex-row justify-center -mb-10 shadow-lg z-10"
        onPress={() => navigate("Product", { ...fruit, color: fruit.color(1) })}
      >
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
        className="w-[80px] h-[75px] rounded-3xl flex justify-end items-center"
      >
        <Text className="font-extrabold text-center text-base text-gray-800 pb-3 tracking-wide">
          ${fruit.price}
        </Text>
      </View>
    </View>
  );
}
