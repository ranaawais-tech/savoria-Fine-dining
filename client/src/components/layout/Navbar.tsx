import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed w-full bg-white bg-opacity-95 shadow-md z-50 transition-all duration-300",
      scrolled ? "py-2 shadow-lg" : "py-3 shadow-md"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-display text-2xl md:text-3xl font-bold text-primary">Savoria</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="font-medium text-primary hover:text-secondary transition-colors duration-300">
            Home
          </a>
          <a href="#menu" className="font-medium text-primary hover:text-secondary transition-colors duration-300">
            Menu
          </a>
          <a href="#about" className="font-medium text-primary hover:text-secondary transition-colors duration-300">
            About Us
          </a>
          <a href="#contact" className="font-medium text-primary hover:text-secondary transition-colors duration-300">
            Contact
          </a>
        </nav>
        
        <Button variant="default" className="hidden md:block bg-secondary text-white hover:bg-secondary/90">
          Book a Table
        </Button>
        
        <button 
          className="md:hidden text-primary" 
          onClick={toggleMenu} 
          aria-label="Open mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("md:hidden bg-white shadow-md", isMenuOpen ? "block" : "hidden")}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="font-medium text-primary hover:text-secondary transition-colors duration-300 py-2"
            onClick={closeMenu}
          >
            Home
          </a>
          <a 
            href="#menu" 
            className="font-medium text-primary hover:text-secondary transition-colors duration-300 py-2"
            onClick={closeMenu}
          >
            Menu
          </a>
          <a 
            href="#about" 
            className="font-medium text-primary hover:text-secondary transition-colors duration-300 py-2"
            onClick={closeMenu}
          >
            About Us
          </a>
          <a 
            href="#contact" 
            className="font-medium text-primary hover:text-secondary transition-colors duration-300 py-2"
            onClick={closeMenu}
          >
            Contact
          </a>
          <Button 
            variant="default" 
            className="w-full bg-secondary text-white hover:bg-secondary/90"
            onClick={closeMenu}
          >
            Book a Table
          </Button>
        </div>
      </div>
    </header>
  );
}
