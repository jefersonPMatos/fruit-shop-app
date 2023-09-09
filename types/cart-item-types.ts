import { ImageSourcePropType } from "react-native";

type CartItem = {
  name: string;
  price: string;
  qty: number;
  desc: string;
  about: string;
  shadow: string;
  image: ImageSourcePropType;
  color: (opacity: any) => string;
};

export type FruitCartItemProps = {
  fruit: CartItem;
};
