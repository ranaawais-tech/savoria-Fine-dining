import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { specialOffers } from "@/data/specialOffers";

export default function SpecialOffers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const slideWidth = containerRef.current.scrollWidth / specialOffers.length;
      containerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Limited-time creations from our chef that you won't want to miss.
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={containerRef}
            className="special-offers-container flex overflow-x-auto py-4 gap-8 snap-x scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {specialOffers.map((offer, index) => (
              <div 
                key={offer.id}
                className="flex-shrink-0 w-full md:w-2/3 lg:w-1/2 snap-start rounded-lg overflow-hidden shadow-lg bg-white"
              >
                <div className="md:flex">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                  />
                  <div className="p-6 md:w-1/2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-xl font-bold mb-2">{offer.title}</h3>
                      <span className="bg-secondary text-white py-1 px-3 rounded-full text-sm font-bold">
                        ${offer.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    <div className="bg-accent bg-opacity-30 p-4 rounded mb-4">
                      <p className="text-sm font-medium">{offer.availability}</p>
                    </div>
                    <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                      {offer.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {specialOffers.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-secondary' : 'bg-gray-300'}`}
                  onClick={() => handleIndicatorClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
