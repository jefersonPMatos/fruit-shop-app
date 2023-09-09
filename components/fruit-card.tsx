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

export default function FruitCard({ fruit }: FruitCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View
      className="w-[270px] rounded-3xl mx-5"
      style={{ backgroundColor: fruit.color(1) }}
    >
      <View className="flex-row justify-end">
        <TouchableOpacity
          className="p-3 rounded-full mr-4 mt-4 bg-bg-white-rgba"
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <HeartIcon size={25} color={isFavorite ? fruit.shadow : "white"} />
        </TouchableOpacity>
      </View>

      <View
        className="flex-row justify-center"
        style={{
          shadowColor: fruit.shadow,
          shadowRadius: 40,
          shadowOffset: {
            width: 0,
            height: 50,
          },
          shadowOpacity: 0.6,
        }}
      >
        <Image source={fruit.image} className={`w-52 h-52`} />
      </View>
      <View className="ml-4 my-4">
        <Text className="text-xl font-bold text-white shadow">
          {fruit.name}
        </Text>

        <Text className="font-bold text-white shadow tracking-wide">
          {fruit.price}
        </Text>
      </View>
    </View>
  );
}
