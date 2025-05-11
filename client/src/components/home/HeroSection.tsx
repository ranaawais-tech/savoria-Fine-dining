import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Star } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/70"></div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="relative mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -left-8 -top-8 text-secondary opacity-20 transform -rotate-12"
              >
                <Star className="w-16 h-16 fill-current" />
              </motion.div>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.6, duration: 1 }}
                className="h-0.5 bg-gradient-to-r from-secondary to-transparent mb-6 mt-2"
              />
              
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-secondary" />
                <p className="text-white/90 text-sm font-medium">Award-Winning Flavors</p>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <div className="mb-2">Culinary</div>
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">Excellence</div>
                <div>in Every Bite</div>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
                Experience the perfect blend of tradition and innovation in our carefully crafted dishes made with locally sourced ingredients.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#reservation">
                    <Button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white px-8 py-6 h-auto font-medium text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      Book a Table
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
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 h-auto font-medium text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Explore Menu
                    </Button>
                  </a>
                </motion.div>
              </div>
              
              <div className="flex mt-12 space-x-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`} 
                        alt="Happy customer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-white/90">
                  <div className="flex items-center text-secondary">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-sm">Trusted by 10,000+ happy customers</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -left-16 -top-16 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
                  alt="Delicious food" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Michelin</p>
                      <p className="text-sm text-white/80">Star Restaurant</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-8 bottom-16 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Premium</p>
                      <p className="text-sm text-white/80">Local Ingredients</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <a href="#menu" className="text-white animate-bounce p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
