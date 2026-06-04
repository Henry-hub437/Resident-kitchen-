import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-950/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-white leading-none">RESIDENT</span>
          <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-gold-500 uppercase mt-1">Kitchen & Bar</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm tracking-widest uppercase text-gray-300 hover:text-gold-500 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#reservation" className="border border-gold-500 text-gold-500 px-6 py-2.5 text-sm uppercase tracking-widest hover:bg-gold-500 hover:text-dark-950 transition-all">
            Book a Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="md:hidden absolute top-full left-0 right-0 bg-dark-950 border-b border-white/10 px-4 pt-4 pb-8 flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-center text-gray-200 hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#reservation" onClick={() => setMobileMenuOpen(false)} className="bg-gold-500 flex justify-center text-dark-950 px-6 py-3 text-sm uppercase tracking-widest font-semibold">
            Book a Table
          </a>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
        <div className="md:col-span-1">
          <a href="#" className="flex flex-col mb-6 items-center md:items-start">
            <span className="font-serif text-3xl font-bold tracking-wider text-white leading-none">RESIDENT</span>
            <span className="font-sans text-xs tracking-[0.3em] text-gold-500 uppercase mt-1">Kitchen & Bar</span>
          </a>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Owerri's premier destination for fine dining, exceptional grill, and handcrafted cocktails in an atmosphere of pure elegance.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"><Twitter size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-white tracking-widest">Opening Hours</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex justify-between md:justify-start md:space-x-8"><span>Mon - Thu</span> <span className="text-white">12:00 PM - 11:00 PM</span></li>
            <li className="flex justify-between md:justify-start md:space-x-8"><span>Fri - Sat</span> <span className="text-white">12:00 PM - 1:00 AM</span></li>
            <li className="flex justify-between md:justify-start md:space-x-8"><span>Sunday</span> <span className="text-white">1:00 PM - 11:00 PM</span></li>
          </ul>
        </div>

        <div>
           <h4 className="font-serif text-xl mb-6 text-white tracking-widest">Contact</h4>
           <ul className="space-y-4 text-sm text-gray-400">
             <li className="flex items-start justify-center md:justify-start space-x-3">
               <MapPin size={18} className="text-gold-500 shrink-0 mt-1" />
               <span>No 6 M. E. Idohosa Ave,<br/>Mcc road, Uratta Road,<br/>Owerri 460242, Imo</span>
             </li>
             <li className="flex items-center justify-center md:justify-start space-x-3">
               <Phone size={18} className="text-gold-500 shrink-0" />
               <span>0708 827 2461</span>
             </li>
           </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-white tracking-widest">Links</h4>
          <ul className="space-y-3 text-sm text-gray-400 flex flex-col items-center md:items-start">
            <li><a href="#about" className="hover:text-gold-500 transition-colors">Our Story</a></li>
            <li><a href="#menu" className="hover:text-gold-500 transition-colors">The Menu</a></li>
            <li><a href="#gallery" className="hover:text-gold-500 transition-colors">Gallery</a></li>
            <li><a href="#faq" className="hover:text-gold-500 transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Resident Kitchen & Bar. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for luxury. Built for comfort.</p>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const WHATSAPP_NUMBER = "2347088272461";
  const PHONE_NUMBER = "07088272461";
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href={`tel:${PHONE_NUMBER}`}
        className="w-14 h-14 bg-gold-600 rounded-full flex items-center justify-center shadow-lg shadow-gold-900/50 hover:bg-gold-500 transition-colors"
        aria-label="Call Us"
      >
        <Phone className="text-white" size={24} fill="currentColor" />
      </motion.a>
      
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Resident%20Kitchen%20&%20Bar,%20I%20would%20like%20to%20make%20an%20inquiry.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-900/50 hover:bg-[#20bd5a] transition-colors"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="text-white" size={26} fill="currentColor" />
      </motion.a>
    </div>
  );
}
