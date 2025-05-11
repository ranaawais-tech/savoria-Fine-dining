import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center bg-fixed overflow-hidden" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" 
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white">
            <span className="block mb-2">Culinary</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
              Excellence
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#reservation" className="w-full sm:w-auto">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white px-8 py-6 h-auto font-medium text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Reserve Now
                </Button>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#menu">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-black bg-white text-black hover:bg-black hover:text-white px-8 py-6 h-auto font-medium text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Menu
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <a href="#menu" className="text-white animate-bounce p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
