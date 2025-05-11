import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaYelp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Savoria</h3>
            <p className="text-accent mb-4">Elevating dining to an art form with seasonal ingredients and culinary expertise.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-accent hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-accent hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-accent hover:text-white transition-colors duration-300">
                <FaYelp size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-accent hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#menu" className="text-accent hover:text-white transition-colors duration-300">Menu</a></li>
              <li><a href="#about" className="text-accent hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#reservation" className="text-accent hover:text-white transition-colors duration-300">Reservations</a></li>
              <li><a href="#" className="text-accent hover:text-white transition-colors duration-300">Private Events</a></li>
              <li><a href="#" className="text-accent hover:text-white transition-colors duration-300">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Cuisine Street<br/>Foodville, CA 90210</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@savoria.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>5pm - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5pm - 11pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>5pm - 9pm</span>
              </li>
              <li className="mt-4 text-secondary font-medium">
                Closed on major holidays
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-accent">
          <p>&copy; {new Date().getFullYear()} Savoria Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
