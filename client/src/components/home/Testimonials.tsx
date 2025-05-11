import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-accent max-w-2xl mx-auto">
            The experiences of our valued guests speak for themselves.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-slide ${index === currentSlide ? 'block animate-fade-in' : 'hidden'}`}
              >
                <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
                  <div className="mb-6 text-accent flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : ''}`} 
                      />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-accent text-sm">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
