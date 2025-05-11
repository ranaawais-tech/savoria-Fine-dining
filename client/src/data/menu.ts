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
    description: "Fresh tomatoes, basil, garlic on crispy sourdough toast with balsamic glaze",
    price: 12,
    image: "https://source.unsplash.com/random/800x600/?bruschetta"
  },
  {
    id: 2,
    name: "Truffle Arancini",
    description: "Wild mushroom risotto balls with mozzarella center and truffle oil",
    price: 14,
    image: "https://source.unsplash.com/random/800x600/?risotto"
  },
  {
    id: 3,
    name: "Grilled Calamari",
    description: "Tender calamari grilled to perfection with lemon herb sauce and micro greens",
    price: 16,
    image: "https://source.unsplash.com/random/800x600/?seafood"
  }
];

const mainCourse: MenuItem[] = [
  {
    id: 4,
    name: "Filet Mignon",
    description: "8oz premium cut with truffle mashed potatoes and seasonal vegetables",
    price: 34,
    image: "https://source.unsplash.com/random/800x600/?steak"
  },
  {
    id: 5,
    name: "Seafood Risotto",
    description: "Creamy Arborio rice with prawns, mussels, and scallops in white wine sauce",
    price: 28,
    image: "https://source.unsplash.com/random/800x600/?risotto,seafood"
  },
  {
    id: 6,
    name: "Garden Bowl",
    description: "Seasonal roasted vegetables, ancient grains, avocado, and tahini dressing",
    price: 24,
    image: "https://source.unsplash.com/random/800x600/?salad"
  }
];

const desserts: MenuItem[] = [
  {
    id: 7,
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone",
    price: 10,
    image: "https://source.unsplash.com/random/800x600/?tiramisu"
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 12,
    image: "https://source.unsplash.com/random/800x600/?chocolate,cake"
  },
  {
    id: 9,
    name: "Seasonal Fruit Crumble",
    description: "Fresh seasonal fruits topped with a crispy oat crumble and crème anglaise",
    price: 11,
    image: "https://source.unsplash.com/random/800x600/?fruit,dessert"
  }
];

const drinks: MenuItem[] = [
  {
    id: 10,
    name: "Signature Cocktail",
    description: "House specialty with gin, elderflower, citrus, and fresh herbs",
    price: 14,
    image: "https://source.unsplash.com/random/800x600/?cocktail"
  },
  {
    id: 11,
    name: "Artisanal Wine Selection",
    description: "Curated collection of wines from small producers around the world",
    price: 12,
    image: "https://source.unsplash.com/random/800x600/?wine"
  },
  {
    id: 12,
    name: "Craft Beer Flight",
    description: "Selection of four local craft beers with tasting notes",
    price: 16,
    image: "https://source.unsplash.com/random/800x600/?beer"
  }
];

export const menuItems: Record<MenuCategory, MenuItem[]> = {
  starters,
  main: mainCourse,
  desserts,
  drinks
};
