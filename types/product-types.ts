import { RouteProp } from "@react-navigation/native";
import { ImageSourcePropType } from "react-native";

// Suponha que você tenha uma pilha de navegação chamada 'RootStackParamList'
type RootStackParamList = {
  Product: {
    // Nome da rota
    color: string;
    name: string;
    price: string;
    stars: number;
    desc: string;
    about: string;
    shadow: string;
    image: ImageSourcePropType;
  };
  // Adicione outras rotas conforme necessário
};

// Atualize a interface ProductProps para incluir RouteProp
export interface ProductProps {
  route: RouteProp<RootStackParamList, "Product">;
  // Outras props específicas do componente Product
}
