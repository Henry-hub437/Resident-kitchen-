import { motion } from 'motion/react';

export function Menu() {
  const menuCategories = [
    {
      title: "Signature Grills",
      items: [
        { name: "Tomahawk Ribeye", desc: "32oz bone-in ribeye, smoked garlic butter, rosemary", price: "₦35,000" },
        { name: "Resident Glazed Ribs", desc: "Slow-cooked pork ribs, signature hickory BBQ, fries", price: "₦22,000" },
        { name: "Grilled Jumbo Prawns", desc: "Herb-marinated prawns, lemon garlic drizzle", price: "₦18,500" },
        { name: "Spicy Suya Skewers", desc: "Prime beef, authentic yaji spice, charred onions", price: "₦8,000" },
      ]
    },
    {
      title: "Handcrafted Cocktails",
      items: [
        { name: "Owerri Sunset", desc: "Premium gin, passionfruit, elderflower, citrus", price: "₦7,500" },
        { name: "Smoked Old Fashioned", desc: "Bourbon, angostura bitters, orange peel, hickory smoke", price: "₦9,000" },
        { name: "Spicy Margarita", desc: "Tequila Blanco, jalapeño, lime, agave, salt rim", price: "₦8,000" },
        { name: "The Resident Elegance", desc: "Vodka, lychee, rose water, sparkling wine top", price: "₦10,000" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-24 md:py-32 bg-dark-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Culinary Excellence</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Our Featured Menu</h2>
          <p className="text-gray-400 max-w-lg mx-auto font-light leading-relaxed mb-6">
            A curated selection of our finest offerings. Prices range from ₦1,000 to ₦40,000 per person ensuring an option for every craving.
          </p>
          <a href="#" className="flex items-center text-gold-500 uppercase tracking-widest text-sm hover:text-white transition-colors border-b border-gold-500 pb-1">
            Download Full Menu
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {menuCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="font-serif text-2xl text-white mb-8 pb-4 border-b border-white/10 uppercase tracking-widest text-center md:text-left">{category.title}</h3>
              <div className="space-y-8">
                {category.items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                       <h4 className="font-serif text-lg text-gray-200 group-hover:text-gold-500 transition-colors uppercase tracking-wide">{item.name}</h4>
                       <div className="flex-grow border-b border-dashed border-white/20 mx-4 relative top-[-4px]"></div>
                       <span className="font-sans text-gold-500 font-medium">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm font-light italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1414235077428-97116666ba8a?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="gallery" className="py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Gallery</span>
          <h2 className="font-serif text-4xl text-white">Visual Taste</h2>
        </div>
        <a href="https://instagram.com" target="_blank" className="font-sans text-xs tracking-widest uppercase text-gray-400 hover:text-gold-500 transition-colors mt-4 md:mt-0 flex items-center">
            Follow us on Instagram <span className="ml-2">→</span>
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[50vh] md:h-[60vh]">
        {images.map((img, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: i * 0.1 }}
             className="relative overflow-hidden group"
           >
              <img 
                src={img} 
                alt="Resident Kitchen imagery"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
