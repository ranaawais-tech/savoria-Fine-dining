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
    image: "https://images.unsplash.com/photo-1572695044428-85e4fcc92494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 2,
    name: "Truffle Arancini",
    description: "Wild mushroom risotto balls with mozzarella center and truffle oil",
    price: 14,
    image: "https://images.unsplash.com/photo-1633436374752-a5b50b597501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 3,
    name: "Grilled Calamari",
    description: "Tender calamari grilled to perfection with lemon herb sauce and micro greens",
    price: 16,
    image: "https://images.unsplash.com/photo-1625944525903-b7eb289a7d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  }
];

const mainCourse: MenuItem[] = [
  {
    id: 4,
    name: "Filet Mignon",
    description: "8oz premium cut with truffle mashed potatoes and seasonal vegetables",
    price: 34,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 5,
    name: "Seafood Risotto",
    description: "Creamy Arborio rice with prawns, mussels, and scallops in white wine sauce",
    price: 28,
    image: "https://images.unsplash.com/photo-1591628122588-ceff4d82f578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 6,
    name: "Garden Bowl",
    description: "Seasonal roasted vegetables, ancient grains, avocado, and tahini dressing",
    price: 24,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  }
];

const desserts: MenuItem[] = [
  {
    id: 7,
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone",
    price: 10,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 12,
    image: "https://images.unsplash.com/photo-1617026061250-62b474534c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 9,
    name: "Seasonal Fruit Crumble",
    description: "Fresh seasonal fruits topped with a crispy oat crumble and crème anglaise",
    price: 11,
    image: "https://images.unsplash.com/photo-1541781550486-81b7a2328578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  }
];

const drinks: MenuItem[] = [
  {
    id: 10,
    name: "Signature Cocktail",
    description: "House specialty with gin, elderflower, citrus, and fresh herbs",
    price: 14,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 11,
    name: "Artisanal Wine Selection",
    description: "Curated collection of wines from small producers around the world",
    price: 12,
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 12,
    name: "Craft Beer Flight",
    description: "Selection of four local craft beers with tasting notes",
    price: 16,
    image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  }
];

export const menuItems: Record<MenuCategory, MenuItem[]> = {
  starters,
  main: mainCourse,
  desserts,
  drinks
};
