import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1514516345957-556ca7d90a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" 
      }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Culinary Excellence in Every Bite
          </h1>
          <p className="text-lg md:text-xl mb-8 text-accent">
            Experience the perfect blend of tradition and innovation in our carefully crafted dishes.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#reservation">
              <Button className="w-full sm:w-auto bg-secondary text-white hover:bg-secondary/90 px-8 py-6 h-auto font-medium">
                Book a Table
              </Button>
            </a>
            <a href="#menu">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 h-auto font-medium"
              >
                View Menu
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a href="#menu" className="text-white animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
