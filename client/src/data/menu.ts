export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type MenuCategory = "starters" | "main" | "desserts" | "drinks";

// Menu items data
const starters: MenuItem[] = [
  {
    id: 1,
    name: "Tomato Bruschetta",
    description:
      "Fresh tomatoes, basil, garlic on crispy sourdough toast with balsamic glaze",
    price: 12,
    image:
      "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
  {
    id: 2,
    name: "Truffle Arancini",
    description:
      "Wild mushroom risotto balls with mozzarella center and truffle oil",
    price: 14,
    image:
      "https://media.istockphoto.com/id/1617314315/photo/the-western-food-in-display-for-the-photo-shoot.jpg?s=1024x1024&w=is&k=20&c=xbdla-ECnT7_Dn9ta3u1LDYHA2G_pyQ24uuZNwzQDOc=",
  },
  {
    id: 3,
    name: "Grilled Calamari",
    description:
      "Tender calamari grilled to perfection with lemon herb sauce and micro greens",
    price: 16,
    image:
      "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
];

const mainCourse: MenuItem[] = [
  {
    id: 4,
    name: "Filet Mignon",
    description:
      "8oz premium cut with truffle mashed potatoes and seasonal vegetables",
    price: 34,
    image:
      "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
  {
    id: 5,
    name: "Seafood Risotto",
    description:
      "Creamy Arborio rice with prawns, mussels, and scallops in white wine sauce",
    price: 28,
    image:
      "https://images.pexels.com/photos/11774429/pexels-photo-11774429.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
  {
    id: 6,
    name: "Garden Bowl",
    description:
      "Seasonal roasted vegetables, ancient grains, avocado, and tahini dressing",
    price: 24,
    image:
      "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
];

const desserts: MenuItem[] = [
  {
    id: 7,
    name: "Tiramisu",
    description:
      "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone",
    price: 10,
    image:
      "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 12,
    image:
      "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
  {
    id: 9,
    name: "Seasonal Fruit Crumble",
    description:
      "Fresh seasonal fruits topped with a crispy oat crumble and crème anglaise",
    price: 11,
    image:
      "https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
];

const drinks: MenuItem[] = [
  {
    id: 10,
    name: "Signature Cocktail",
    description:
      "House specialty with gin, elderflower, citrus, and fresh herbs",
    price: 14,
    image:
      "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
  {
    id: 11,
    name: "Artisanal Wine Selection",
    description:
      "Curated collection of wines from small producers around the world",
    price: 12,
    image:
      "https://images.pexels.com/photos/1479710/pexels-photo-1479710.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
  {
    id: 12,
    name: "Craft Beer Flight",
    description: "Selection of four local craft beers with tasting notes",
    price: 16,
    image:
      "https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
  },
];

export const menuItems: Record<MenuCategory, MenuItem[]> = {
  starters,
  main: mainCourse,
  desserts,
  drinks,
};
