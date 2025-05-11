export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to culinary excellence, discover the passion behind Savoria.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">A Culinary Journey</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2010 by acclaimed Chef Marco Rossi, Savoria began as a small family restaurant with a big vision - to create extraordinary dining experiences that celebrate the finest seasonal ingredients.
            </p>
            <p className="text-gray-600 mb-6">
              Our philosophy is simple: source locally, prepare thoughtfully, and serve passionately. Every dish tells a story of tradition and innovation, crafted with precision and plated with artistic flair.
            </p>
            <p className="text-gray-600">
              Today, we continue this tradition of excellence, welcoming guests to experience our unique blend of flavors in an atmosphere of warm sophistication.
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
            alt="Restaurant interior with elegant table settings" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
            alt="Chef preparing food in kitchen" 
            className="w-full h-auto rounded-lg shadow-lg order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <h3 className="font-display text-2xl font-bold mb-4">Meet Our Chef</h3>
            <p className="text-gray-600 mb-6">
              Chef Marco Rossi brings over 20 years of culinary expertise to Savoria's kitchen. Trained in Florence and refined in Paris, his approach combines classical techniques with contemporary creativity.
            </p>
            <p className="text-gray-600 mb-6">
              His passion for seasonal ingredients and sustainable practices has earned Savoria numerous accolades, including three consecutive years of Michelin recognition.
            </p>
            <p className="text-gray-600">
              "My cooking is a celebration of ingredients in their purest form, enhanced rather than masked. Each plate is a canvas for flavor, texture, and memory." - Chef Marco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
