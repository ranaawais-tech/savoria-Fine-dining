import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Set active section based on scroll position
      const sections = ["home", "menu", "about", "contact", "reservation"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
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
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "py-2 bg-white/95 backdrop-blur-md shadow-lg" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl md:text-3xl font-bold"
          >
            <span className={cn(
              "bg-clip-text text-transparent transition-all duration-300",
              scrolled 
                ? "bg-gradient-to-r from-primary to-secondary" 
                : "bg-gradient-to-r from-white to-accent"
            )}>
              Savoria
            </span>
          </motion.span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { name: "Home", href: "#home", id: "home" },
            { name: "Menu", href: "#menu", id: "menu" },
            { name: "About Us", href: "#about", id: "about" },
            { name: "Contact", href: "#contact", id: "contact" }
          ].map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className={cn(
                "relative font-medium transition-colors duration-300",
                scrolled ? "text-primary hover:text-secondary" : "text-white hover:text-accent",
                activeSection === item.id && "font-semibold"
              )}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.span
                  layoutId="navbar-underline"
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 -mb-1",
                    scrolled ? "bg-secondary" : "bg-accent"
                  )}
                />
              )}
            </motion.a>
          ))}
        </nav>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <a href="#reservation">
            <Button 
              variant="default" 
              className={cn(
                "hidden md:block transition-all duration-300 shadow-md hover:shadow-lg",
                scrolled 
                  ? "bg-secondary text-white hover:bg-secondary/90" 
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              Book a Table
            </Button>
          </a>
        </motion.div>
        
        <button 
          className={cn(
            "md:hidden flex items-center justify-center w-10 h-10 rounded-full",
            scrolled ? "text-primary bg-gray-100" : "text-white bg-white/20 backdrop-blur-md"
          )}
          onClick={toggleMenu} 
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              {[
                { name: "Home", href: "#home" },
                { name: "Menu", href: "#menu" },
                { name: "About Us", href: "#about" },
                { name: "Contact", href: "#contact" }
              ].map((item, index) => (
                <motion.a 
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  href={item.href} 
                  className="font-medium text-primary hover:text-secondary transition-colors duration-300 py-2 border-b border-gray-100 last:border-0"
                  onClick={closeMenu}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <a href="#reservation" onClick={closeMenu}>
                  <Button 
                    variant="default" 
                    className="w-full bg-secondary text-white hover:bg-secondary/90"
                  >
                    Book a Table
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
