import { motion } from 'motion/react';
import { Star, MapPin, Clock, Phone, ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const reviews = [
    { text: "Food was amazing, cocktails were on point. Best atmosphere in Owerri right now. Must visit!", author: "Chijioke N.", rating: 5 },
    { text: "The Resident Glazed Ribs are completely out of this world. Highly recommend booking ahead.", author: "Amarachi O.", rating: 5 },
    { text: "Sleek, dark, and intimate. Serves great cocktails. A premium addition to Mcc road.", author: "David U.", rating: 4 },
  ];

  return (
    <section id="reviews" className="py-24 bg-dark-900 border-b border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="font-serif text-4xl text-white mb-6">Guest Experiences</h2>
          <div className="flex items-center justify-center space-x-2 text-xl font-serif text-white">
            <span className="font-sans text-2xl font-bold">4.0</span>
            <div className="flex text-gold-500">
               <Star size={20} fill="currentColor" />
               <Star size={20} fill="currentColor" />
               <Star size={20} fill="currentColor" />
               <Star size={20} fill="currentColor" />
               <Star size={20} className="text-gray-600" />
            </div>
            <span className="text-sm font-sans text-gray-400 font-light ml-2">(58 Google Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-dark-950 p-8 border border-white/5 relative"
            >
              <div className="flex text-gold-500 mb-4">
                 {[...Array(review.rating)].map((_, idx) => (
                   <Star key={idx} size={14} fill="currentColor" />
                 ))}
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic">"{review.text}"</p>
              <p className="font-serif text-white uppercase tracking-widest text-sm">— {review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "Do I need to make a reservation?", a: "While walk-ins are welcome, we highly recommend making a reservation, especially on weekends, to guarantee a table." },
    { q: "What is the dress code?", a: "We observe a smart-casual dress code. Guests are encouraged to dress elegantly to match the ambiance." },
    { q: "Do you have parking available?", a: "Yes, secure parking is available for our guests." },
    { q: "Can you host private events?", a: "Absolutely. Please contact our management team via phone or WhatsApp for group bookings and private event packages." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dark-950 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Information</span>
          <h2 className="font-serif text-4xl text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 bg-dark-900">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="font-serif text-lg text-white">{faq.q}</span>
                <ChevronDown className={`text-gold-500 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5 text-gray-400 font-light leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div id="reservation" className="flex flex-col justify-center">
            <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Reservations</span>
            <h2 className="font-serif text-4xl text-white mb-6">Book a Table</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-10">
              For immediate reservations, special event bookings, or inquiries, please contact our team via phone or WhatsApp. We look forward to hosting you.
            </p>
            
            <div className="space-y-6">
              <a 
                href="https://wa.me/2347088272461?text=Hello%20Resident%20Kitchen%20&%20Bar,%20I%20would%20like%20to%20make%20a%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-[#25D366] text-white font-semibold uppercase tracking-widest py-5 hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={20} className="mr-3" />
                Reserve via WhatsApp
              </a>
              
              <div className="flex items-center justify-center space-x-4 my-2">
                 <div className="h-px bg-white/10 flex-grow"></div>
                 <span className="text-gray-500 text-xs uppercase tracking-widest">Or</span>
                 <div className="h-px bg-white/10 flex-grow"></div>
              </div>

              <a 
                href="tel:07088272461"
                className="flex items-center justify-center w-full border border-gold-500 text-gold-500 font-semibold uppercase tracking-widest py-5 hover:bg-gold-500 hover:text-dark-950 transition-colors"
              >
                <Phone size={20} className="mr-3" />
                Call Us Directly
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Location</span>
            <h2 className="font-serif text-4xl text-white mb-8">Visit Us</h2>
            
            <div className="bg-dark-950 border border-white/5 p-8 mb-8 space-y-6 flex-grow">
               <div className="flex items-start space-x-4">
                  <MapPin className="text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">Address</h4>
                    <p className="text-gray-400 font-light leading-relaxed">No 6 M. E. Idohosa Avenue,<br/>Mcc road, Uratta Road,<br/>Owerri 460242, Imo State, Nigeria</p>
                  </div>
               </div>
               
               <div className="h-px w-full bg-white/10"></div>

               <div className="flex items-start space-x-4">
                  <Clock className="text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">Opening Hours</h4>
                    <p className="text-gray-400 font-light">Mon - Thu: 12:00 PM - 11:00 PM</p>
                    <p className="text-gray-400 font-light">Fri - Sat: 12:00 PM - 1:00 AM</p>
                    <p className="text-gray-400 font-light">Sunday: 1:00 PM - 11:00 PM</p>
                  </div>
               </div>
               
               <div className="h-px w-full bg-white/10"></div>

               <div className="flex items-start space-x-4">
                  <Phone className="text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">Contact</h4>
                    <p className="text-gray-400 font-light">0708 827 2461</p>
                  </div>
               </div>
            </div>

            <div className="h-64 w-full bg-dark-800 border border-white/5 relative group overflow-hidden">
               {/* Embed simple Google map for location visual */}
               <iframe 
                 src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=No%206%20M.%20E.%20Idohosa%20Avenue,%20Owerri+(Resident%20kitchen%20&%20Bar)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: 'grayscale(1) invert(90%) contrast(1.2)' }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 transition-all duration-500 group-hover:filter-none"
               ></iframe>
               <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
