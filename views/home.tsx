import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";

import FruitCard from "../components/fruit-card";
import FruitCardSales from "../components/fruit-card-sales";

import { categories, featuredFruits } from "../fake-api";

export default function Home() {
  const { navigate } = useNavigation();
  const [activeCategory, setActiveCategory] = useState("Oranges");

  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      {/* topbar */}
      <View className=" mx-5 mt-4 flex-row justify-between items-centerl">
        <Bars3CenterLeftIcon size={30} color="black" />

        <TouchableOpacity
          className="p-2 rounded-xl bg-orange-100"
          onPress={() => navigate("Cart")}
        >
          <ShoppingCartIcon size={25} color="orange" />
        </TouchableOpacity>
      </View>

      {/* categories */}

      <View className="mt-4">
        <Text className="text-slate-800 text-2xl tracking-widest ml-5 font-medium">
          Seasonal
        </Text>

        <Text className="text-slate-800 text-3xl font-semibold ml-5">
          Fruits and Vegetables
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-8 px-5 "
        >
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <TouchableOpacity
                key={category}
                onPress={() => setActiveCategory(category)}
                className="mr-5"
              >
                <Text className={`text-xl ${isActive ? "font-bold" : ""}`}>
                  {category}
                </Text>
                {isActive && (
                  <Text className="font-extrabold text-orange-400 -mt-3 ml-2">
                    __ _
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Fruits Carousel */}
      <View className="mt-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit) => (
            <FruitCard key={fruit.name} fruit={fruit} />
          ))}
        </ScrollView>
      </View>

      {/* hot sales */}

      <View className="mt-8 pl-5 space-y-1">
        <Text className="text-xl font-bold">Hot Sales</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...featuredFruits].reverse().map((fruit) => (
            <FruitCardSales key={fruit.name} fruit={fruit} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
