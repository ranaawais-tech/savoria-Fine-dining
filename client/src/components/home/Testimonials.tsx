import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  // Variants for animations
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-accent font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            What Our Guests Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            The experiences of our valued guests speak for themselves.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <Quote className="absolute -top-6 -left-6 w-16 h-16 text-secondary/20 rotate-180" />
          
          <div className="testimonial-carousel overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div 
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }}
                className="testimonial-slide"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl">
                  <div className="mb-6 text-accent flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 ${i < testimonials[currentSlide].rating ? 'fill-current' : ''}`} 
                      />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl mb-8 italic text-white/90 text-center">
                    "{testimonials[currentSlide].comment}"
                  </p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-accent/50">
                      <img 
                        src={testimonials[currentSlide].image} 
                        alt={testimonials[currentSlide].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-white">{testimonials[currentSlide].name}</h4>
                      <p className="text-accent text-sm">{testimonials[currentSlide].date}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute -bottom-20 left-0 right-0 flex justify-center space-x-4 mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-secondary w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
