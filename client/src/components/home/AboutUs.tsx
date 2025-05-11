import { motion } from "framer-motion";
import { Award, Clock, MapPin, ChefHat, Leaf, Users } from "lucide-react";

export default function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 bg-accent/20 rounded-full text-primary font-medium text-sm mb-4">
            Our Heritage
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Story
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From humble beginnings to culinary excellence, discover the passion behind Savoria.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24">
          {/* Content - takes 3/5 on desktop */}
          <motion.div 
            className="lg:col-span-3 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <ChefHat className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">A Culinary Journey</h3>
              </div>
              
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Founded in 2010 by acclaimed Chef Marco Rossi, Savoria began as a small family restaurant with a big vision - to create extraordinary dining experiences that celebrate the finest seasonal ingredients.
                </p>
                <p className="leading-relaxed">
                  Our philosophy is simple: source locally, prepare thoughtfully, and serve passionately. Every dish tells a story of tradition and innovation, crafted with precision and plated with artistic flair.
                </p>
                <p className="leading-relaxed">
                  Today, we continue this tradition of excellence, welcoming guests to experience our unique blend of flavors in an atmosphere of warm sophistication.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-bold text-primary">Since 2010</span>
                  <span className="text-sm text-gray-500">Established</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                    <Award className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-bold text-primary">3 Michelin</span>
                  <span className="text-sm text-gray-500">Recognitions</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                    <Leaf className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-bold text-primary">100% Organic</span>
                  <span className="text-sm text-gray-500">Ingredients</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Image - takes 2/5 on desktop */}
          <motion.div 
            className="lg:col-span-2 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
                alt="Restaurant interior with elegant table settings" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-secondary mr-2" />
                    <span className="font-medium text-primary">123 Cuisine Street, Foodville</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Image - takes 2/5 on desktop */}
          <motion.div 
            className="lg:col-span-2 order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
                alt="Chef preparing food in kitchen" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="font-display text-2xl font-bold mb-1">Chef Marco Rossi</h4>
                <p className="text-white/80 text-sm">Executive Chef & Founder</p>
              </div>
            </div>
          </motion.div>
          
          {/* Content - takes 3/5 on desktop */}
          <motion.div 
            className="lg:col-span-3 order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">Meet Our Chef</h3>
              </div>
              
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Chef Marco Rossi brings over 20 years of culinary expertise to Savoria's kitchen. Trained in Florence and refined in Paris, his approach combines classical techniques with contemporary creativity.
                </p>
                <p className="leading-relaxed">
                  His passion for seasonal ingredients and sustainable practices has earned Savoria numerous accolades, including three consecutive years of Michelin recognition.
                </p>
                
                <div className="relative mt-8 pl-8 border-l-4 border-accent/40 italic">
                  <div className="absolute -left-5 -top-5 text-5xl text-secondary opacity-20">"</div>
                  <p className="text-lg text-primary">
                    My cooking is a celebration of ingredients in their purest form, enhanced rather than masked. Each plate is a canvas for flavor, texture, and memory.
                  </p>
                  <div className="mt-4 text-secondary font-medium">- Chef Marco</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
