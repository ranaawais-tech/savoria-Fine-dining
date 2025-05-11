import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, ChevronRight, ArrowUp } from "lucide-react";
import { FaYelp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Newsletter section */}
        <div className="py-12 md:py-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-xl max-w-5xl mx-auto transform translate-y-0 md:-translate-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-white">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-white/80">
                  Stay updated with our latest offers, events, and culinary stories.
                </p>
              </div>
              <div className="lg:col-span-2">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow bg-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button className="bg-secondary hover:bg-secondary/90 text-white">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 gap-y-12 pb-12">
          <div className="lg:col-span-4">
            <h3 className="font-display text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
              Savoria
            </h3>
            <p className="text-white/80 mb-6 max-w-md">
              Elevating dining to an art form with seasonal ingredients and culinary expertise. 
              Our passion for exceptional food and service creates memorable experiences for every guest.
            </p>
            <div className="flex space-x-4 mb-8">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <FaYelp size={18} />
              </motion.a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-medium text-xl mb-6 relative inline-block">
              Useful Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Menu", href: "#menu" },
                { name: "About Us", href: "#about" },
                { name: "Reservations", href: "#reservation" },
                { name: "Private Events", href: "#" },
                { name: "Gift Cards", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="font-medium text-xl mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="leading-tight">
                    123 Cuisine Street<br/>
                    Foodville, CA 90210
                  </p>
                  <a href="#" className="text-xs text-secondary hover:text-accent transition-colors mt-1 inline-block">
                    Get Directions
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <a href="tel:+5551234567" className="hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <a href="mailto:info@savoria.com" className="hover:text-accent transition-colors">
                  info@savoria.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="font-medium text-xl mb-6 relative inline-block">
              Opening Hours
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Monday - Thursday</span>
                    <span className="font-medium">5pm - 10pm</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 opacity-0 h-10 mr-3 flex-shrink-0"></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Friday - Saturday</span>
                    <span className="font-medium">5pm - 11pm</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 opacity-0 h-10 mr-3 flex-shrink-0"></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Sunday</span>
                    <span className="font-medium">5pm - 9pm</span>
                  </div>
                </div>
              </li>
              <li className="mt-4 pl-12 text-secondary font-medium">
                Closed on major holidays
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Savoria Restaurant. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors mr-6">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
