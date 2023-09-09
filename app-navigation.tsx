import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./views/home";
import Product from "./views/product";
import Cart from "./views/cart";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={Product}
        />

        <Stack.Screen
          name="Cart"
          options={{ headerShown: false }}
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
