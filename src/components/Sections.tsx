import { motion } from 'motion/react';
import { ChevronRight, UtensilsCrossed, Wine, Star, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2070" 
          alt="Resident Kitchen"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-950/70 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-6 block">Welcome to Resident</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight mb-8">
            A Taste of <br/><span className="italic text-gold-500">Luxury</span> in Owerri
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10">
            Experience exceptional grills, handcrafted cocktails, and unrivaled ambiance in the heart of Imo State.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#reservation" className="w-full sm:w-auto bg-gold-500 text-dark-950 px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-dark-950 transition-colors flex items-center justify-center">
              Reserve a Table <ChevronRight size={18} className="ml-2" />
            </a>
            <a href="#menu" className="w-full sm:w-auto border border-white/30 text-white px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:border-gold-500 hover:text-gold-500 transition-colors">
              Explore Menu
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60"
      >
        <span className="text-xs uppercase tracking-widest text-white mb-2 rotate-90 my-6">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-dark-900 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000" 
            alt="Chef preparing premium grill" 
            referrerPolicy="no-referrer"
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl brightness-90"
          />
          <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-gold-500/30 -z-10 hidden md:block"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 bg-dark-800 p-8 border border-white/10 shadow-2xl hidden md:block w-72">
            <div className="flex items-center space-x-2 text-gold-500 mb-2">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p className="font-serif text-lg text-white mb-2">"The best grill & cocktails in Owerri, period."</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">— Google Reviews</p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Our Story</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">Elevating Owerri's Culinary Landscape</h2>
          <p className="text-gray-400 text-lg mb-6 font-light leading-relaxed">
            Located in the vibrant heart of Mcc road, Resident Kitchen & Bar is born from a passion for exceptional hospitality. We blend the vibrant energy of Imo State with luxury dining standards to create an unforgettable experience.
          </p>
          <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
            From our meticulously sourced premium steaks to our signature handcrafted cocktails, every detail at Resident is designed to impress. Whether it's an intimate date night, a business celebration, or a weekend wind-down, you belong here.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
            <div>
              <p className="font-serif text-3xl text-white mb-1">4.0</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Average Rating</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-white mb-1">50+</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Premium Dishes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Features() {
  const features = [
    { icon: <UtensilsCrossed size={32} className="text-gold-500 mb-4" />, title: "Premium Grill", desc: "Expertly fired cuts sourced for maximum flavor and tenderness." },
    { icon: <Wine size={32} className="text-gold-500 mb-4" />, title: "Handcrafted Cocktails", desc: "Meticulously mixed drinks serving up sophisticated flavor profiles." },
    { icon: <Star size={32} className="text-gold-500 mb-4" />, title: "Exclusive Ambiance", desc: "A sophisticated dark interior crafted for privacy, comfort, and luxury." },
    { icon: <CheckCircle size={32} className="text-gold-500 mb-4" />, title: "VIP Service", desc: "Attentive, discreet, and personalized service tailored just for you." },
  ];

  return (
    <section className="py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Why Choose Us</span>
          <h2 className="font-serif text-4xl text-white">The Resident Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-dark-900 border border-white/5 p-8 hover:border-gold-500/50 transition-colors group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300 origin-left">{feat.icon}</div>
              <h3 className="font-serif text-xl text-white mb-3">{feat.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
