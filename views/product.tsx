import { Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StarRating from "react-native-star-rating";

import { ProductProps } from "../types/product-types";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function Product(props: ProductProps) {
  const { goBack } = useNavigation();
  const fruit = props.route.params;

  return (
    <View className="flex-1" style={{ backgroundColor: fruit.color }}>
      <SafeAreaView>
        <View className="flex-row justify-start mx-5">
          <TouchableOpacity
            onPress={() => goBack()}
            className="border border-gray-50 rounded-xl bg-white/20"
          >
            <ChevronLeftIcon size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View
          className="flex-row justify-center mt-5 pb-10"
          style={{
            shadowColor: fruit.shadow,
            shadowRadius: 50,
            shadowOffset: {
              width: 0,
              height: 50,
            },
            shadowOpacity: 0.7,
          }}
        >
          <Image source={fruit.image} className="w-72 h-72" />
        </View>
      </SafeAreaView>

      <View className="bg-orange-50 flex-1 px-6 space-y-2 rounded-t-3xl">
        <Text className="mt-8 text-2xl font-bold">{fruit.name}</Text>
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-500 font-semibold">{fruit.desc}</Text>

          <Text className="text-gray-500 font-semibold">
            Sold <Text className="text-gray-800 font-extrabold"> 239</Text>
          </Text>
        </View>
        <StarRating
          disabled={true}
          starSize={25}
          containerStyle={{ width: 120 }}
          maxStars={5}
          rating={fruit.stars}
          emptyStarColor="lightgray"
          fullStar={require("../assets/images/fullStar.png")}
        />
        <View className="h-40">
          <Text className=" tracking-wider py-3">{fruit.about} </Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-3xl">${fruit.price}</Text>
          <TouchableOpacity
            className="text-3xl p-3 ml-6 flex-1 rounded-xl"
            style={{
              backgroundColor: fruit.shadow,
              opacity: 0.6,
              shadowColor: fruit.shadow,
              shadowRadius: 25,
              shadowOffset: {
                width: 0,
                height: 15,
              },
              shadowOpacity: 0.5,
            }}
          >
            <Text className="text-xl text-center text-white font-bold">
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
