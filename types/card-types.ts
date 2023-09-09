import { ImageSourcePropType } from "react-native";

export type Fruit = {
    name: string;
    price: string;
    stars: number;
    desc: string;
    about: string;
    shadow: string;
    image: ImageSourcePropType;
    color: (opacity: number) => string;
  };
  
export type FruitCardProps {
    fruit: Fruit;
  }