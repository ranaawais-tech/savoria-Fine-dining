import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { menuItems } from "@/data/menu";

type Category = "starters" | "main" | "desserts" | "drinks";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("starters");

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our chef's selection of dishes prepared with the finest ingredients and culinary expertise.
          </p>
        </div>
        
        {/* Menu Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          <button 
            className={cn(
              "px-6 py-3 font-medium",
              activeCategory === "starters" 
                ? "text-secondary border-b-2 border-secondary" 
                : "text-gray-500 hover:text-secondary"
            )}
            onClick={() => handleCategoryChange("starters")}
          >
            Starters
          </button>
          <button 
            className={cn(
              "px-6 py-3 font-medium",
              activeCategory === "main" 
                ? "text-secondary border-b-2 border-secondary" 
                : "text-gray-500 hover:text-secondary"
            )}
            onClick={() => handleCategoryChange("main")}
          >
            Main Course
          </button>
          <button 
            className={cn(
              "px-6 py-3 font-medium",
              activeCategory === "desserts" 
                ? "text-secondary border-b-2 border-secondary" 
                : "text-gray-500 hover:text-secondary"
            )}
            onClick={() => handleCategoryChange("desserts")}
          >
            Desserts
          </button>
          <button 
            className={cn(
              "px-6 py-3 font-medium",
              activeCategory === "drinks" 
                ? "text-secondary border-b-2 border-secondary" 
                : "text-gray-500 hover:text-secondary"
            )}
            onClick={() => handleCategoryChange("drinks")}
          >
            Drinks
          </button>
        </div>
        
        {/* Menu Content */}
        <div className="menu-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory].map((item) => (
              <div 
                key={item.id} 
                className="menu-item group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-bold text-xl">{item.name}</h3>
                    <span className="text-secondary font-medium">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
