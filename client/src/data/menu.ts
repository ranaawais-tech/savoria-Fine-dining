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
    image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    name: "Truffle Arancini",
    description: "Wild mushroom risotto balls with mozzarella center and truffle oil",
    price: 14,
    image: "https://images.unsplash.com/photo-1677196728306-eeafea692b2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    name: "Grilled Calamari",
    description: "Tender calamari grilled to perfection with lemon herb sauce and micro greens",
    price: 16,
    image: "https://cdn.pixabay.com/photo/2016/07/31/17/51/prawns-1559245_1280.jpg"
  }
];

const mainCourse: MenuItem[] = [
  {
    id: 4,
    name: "Filet Mignon",
    description: "8oz premium cut with truffle mashed potatoes and seasonal vegetables",
    price: 34,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 5,
    name: "Seafood Risotto",
    description: "Creamy Arborio rice with prawns, mussels, and scallops in white wine sauce",
    price: 28,
    image: "https://cdn.pixabay.com/photo/2020/02/25/12/44/risotto-4878814_1280.jpg"
  },
  {
    id: 6,
    name: "Garden Bowl",
    description: "Seasonal roasted vegetables, ancient grains, avocado, and tahini dressing",
    price: 24,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

const desserts: MenuItem[] = [
  {
    id: 7,
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone",
    price: 10,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 12,
    image: "https://images.unsplash.com/photo-1611329695518-1763fc1fac28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 9,
    name: "Seasonal Fruit Crumble",
    description: "Fresh seasonal fruits topped with a crispy oat crumble and crème anglaise",
    price: 11,
    image: "https://images.unsplash.com/photo-1621994153189-6223b41f7883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

const drinks: MenuItem[] = [
  {
    id: 10,
    name: "Signature Cocktail",
    description: "House specialty with gin, elderflower, citrus, and fresh herbs",
    price: 14,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 11,
    name: "Artisanal Wine Selection",
    description: "Curated collection of wines from small producers around the world",
    price: 12,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 12,
    name: "Craft Beer Flight",
    description: "Selection of four local craft beers with tasting notes",
    price: 16,
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export const menuItems: Record<MenuCategory, MenuItem[]> = {
  starters,
  main: mainCourse,
  desserts,
  drinks
};
