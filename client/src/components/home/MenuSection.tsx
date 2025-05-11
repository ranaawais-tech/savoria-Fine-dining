import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { menuItems } from "@/data/menu";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

type Category = "starters" | "main" | "desserts" | "drinks";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("starters");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="menu" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 right-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-accent/20 rounded-full text-secondary font-medium text-sm mb-4">
            Culinary Excellence
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our chef's selection of dishes prepared with the finest ingredients and culinary expertise.
          </p>
        </motion.div>
        
        {/* Menu Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="bg-gray-100 p-2 rounded-xl flex flex-wrap justify-center">
            {[
              { id: "starters", label: "Starters" },
              { id: "main", label: "Main Course" },
              { id: "desserts", label: "Desserts" },
              { id: "drinks", label: "Drinks" }
            ].map((category) => (
              <motion.button 
                key={category.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "px-6 py-3 font-medium rounded-lg m-1 transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-white text-secondary shadow-md" 
                    : "text-gray-500 hover:text-secondary hover:bg-white/50"
                )}
                onClick={() => handleCategoryChange(category.id as Category)}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="menu-content"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems[activeCategory].map((item) => (
                <motion.div 
                  key={item.id}
                  variants={cardItem}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="menu-item group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl bg-white border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Price tag */}
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                      <span className="font-bold text-secondary">${item.price}</span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-display font-bold text-xl text-primary group-hover:text-secondary transition-colors duration-300 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                    
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-md group">
                        <ShoppingCart className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Add to Cart
                      </Button>
                    </motion.div>
                  </div>
                  
                  {/* Hover effect */}
                  {hoveredId === item.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-2 left-2 bg-secondary/90 text-white text-xs px-2 py-1 rounded-md"
                    >
                      Popular
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Want to see our full menu?</p>
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
            View Complete Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
