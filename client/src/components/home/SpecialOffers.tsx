import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { specialOffers } from "@/data/specialOffers";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Clock } from "lucide-react";

export default function SpecialOffers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) =>
      prev === specialOffers.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) =>
      prev === 0 ? specialOffers.length - 1 : prev - 1
    );
  };

  const handleIndicatorClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Variants for slide animations
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-gradient-to-br from-accent/30 to-accent/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white opacity-5"></div>
      <div className="absolute -top-36 -right-36 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/5 rounded-full text-primary font-medium text-sm mb-4">
            Limited Time Only
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Special Offers
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Exclusive, limited-time creations from our chef that you won't want
            to miss.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto" ref={containerRef}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="w-full"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-60 sm:h-80 lg:h-full min-h-[300px]">
                    <img
                      src={specialOffers[activeIndex].image}
                      alt={specialOffers[activeIndex].title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-secondary text-white py-2 px-4 rounded-lg shadow-lg">
                      <div className="flex items-center">
                        <span className="font-bold text-lg">
                          ${specialOffers[activeIndex].price}
                        </span>
                        <span className="text-xs ml-1 opacity-80">
                          per person
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-display text-2xl md:text-3xl font-bold mb-4 text-primary"
                      >
                        {specialOffers[activeIndex].title}
                      </motion.h3>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                          {specialOffers[activeIndex].description}
                        </p>

                        <div className="bg-accent/20 p-4 rounded-xl mb-8">
                          <div className="flex items-start">
                            <Clock className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-primary">
                                Availability
                              </h4>
                              <p className="text-gray-600">
                                {specialOffers[activeIndex].availability}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col sm:flex-row items-center"
                    >
                      <a
                        href="#reservation"
                        className="flex items-center text-secondary font-medium hover:underline"
                      >
                        Contact for details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white/90 backdrop-blur-sm text-primary p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Previous offer"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex space-x-3">
              {specialOffers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-secondary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to offer ${index + 1}`}
                ></button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white/90 backdrop-blur-sm text-primary p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Next offer"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
