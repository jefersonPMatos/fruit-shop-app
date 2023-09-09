export const categories = [
  "Oranges",
  "Bananas",
  "Pineapple",
  "Apple",
  "Cherry",
];
export const featuredFruits = [
  {
    name: "Australian Orange",
    price: "12.30",
    stars: 4,
    desc: "Sweet and juicy",
    about:
      "Australian Oranges are known for their vibrant orange color and sweet, juicy flavor. They are a great source of vitamin C and make for a refreshing snack or addition to salads and desserts. ",
    shadow: "orange",
    image: require("./assets/images/orange.png"),
    color: (opacity: any) => `rgba(251, 216, 146, ${opacity})`,
  },
  {
    name: "Flesh Nectari",
    shadow: "red",
    price: "12",
    stars: 3,
    desc: "Sweet and juicy",
    about:
      "Flesh Nectarines, with their red hue and sweet taste, are a delightful treat. These stone fruits are low in calories and packed with essential nutrients like vitamins A and C, making them a healthy choice for snacking.",
    image: require("./assets/images/peach.png"),
    color: (opacity: any) => `rgba(255, 170, 157, ${opacity})`,
  },

  {
    name: "Black Grapes",
    price: "40",
    stars: 4,
    desc: "Sweet and juicy",
    about:
      "Black Grapes are renowned for their rich, dark color and intense sweetness. They are a great choice for a natural energy boost, thanks to their high sugar content. These grapes are often enjoyed fresh or turned into juice and wine.",
    shadow: "purple",
    image: require("./assets/images/grapes.png"),
    color: (opacity: any) => `rgba(214, 195, 246, ${opacity})`,
  },

  {
    name: "Red Grapefruit",
    price: "30",
    stars: 4,
    desc: "Sweet and juicy",
    about:
      "Red Grapefruits are a tangy and vibrant citrus fruit. They are famous for their refreshing taste and are an excellent source of vitamin C and antioxidants. Red Grapefruits are commonly eaten for breakfast or used in salads.",
    shadow: "red",
    image: require("./assets/images/redOrange.png"),
    color: (opacity: any) => `rgba(255, 163, 120, ${opacity})`,
  },
  {
    name: "Green Apple",
    price: "10.5",
    stars: 4,
    desc: "Sweet and juicy",
    about:
      "Green Apples are crisp and slightly tart with a hint of sweetness. They are a nutritious choice, providing dietary fiber and vitamin C. These apples are often used for snacking, baking, and making fresh apple juice.",
    shadow: "green",
    image: require("./assets/images/greenApple.png"),
    color: (opacity: any) => `rgba(139, 243, 139, ${opacity})`,
  },
];

export const cartItems = [
  {
    name: "Australian Orange",
    price: "12.30",
    qty: 4,
    desc: "Sweet and juicy",
    about:
      "Australian Oranges are known for their vibrant orange color and sweet, juicy flavor. They are a great source of vitamin C and make for a refreshing snack or addition to salads and desserts. ",
    shadow: "orange",
    image: require("./assets/images/orange.png"),
    color: (opacity: any) => `rgba(251, 216, 146, ${opacity})`,
  },
  {
    name: "Flesh Nectari",
    shadow: "red",
    price: "12",
    qty: 3,
    desc: "Sweet and juicy",
    about:
      "Flesh Nectarines, with their red hue and sweet taste, are a delightful treat. These stone fruits are low in calories and packed with essential nutrients like vitamins A and C, making them a healthy choice for snacking.",
    image: require("./assets/images/peach.png"),
    color: (opacity: any) => `rgba(255, 170, 157, ${opacity})`,
  },

  {
    name: "Black Grapes",
    price: "40",
    qty: 2,
    desc: "Sweet and juicy",
    about:
      "Black Grapes are renowned for their rich, dark color and intense sweetness. They are a great choice for a natural energy boost, thanks to their high sugar content. These grapes are often enjoyed fresh or turned into juice and wine.",
    shadow: "purple",
    image: require("./assets/images/grapes.png"),
    color: (opacity: any) => `rgba(214, 195, 246, ${opacity})`,
  },
  {
    name: "Green Apple",
    price: "10.5",
    qty: 2,
    desc: "Sweet and juicy",
    about:
      "Green Apples are crisp and slightly tart with a hint of sweetness. They are a nutritious choice, providing dietary fiber and vitamin C. These apples are often used for snacking, baking, and making fresh apple juice.",
    shadow: "green",
    image: require("./assets/images/greenApple.png"),
    color: (opacity: any) => `rgba(139, 243, 139, ${opacity})`,
  },
];
