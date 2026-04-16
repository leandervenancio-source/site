import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [1, 2, 3, 4];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-12 md:py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-display text-azul-noite text-center mb-8 md:mb-16">
            O que dizem nossos clientes
          </h2>
          
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-4 gap-8">
            {testimonials.map((i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-2 rounded-xl shadow-sm border border-azul-noite/10 hover:shadow-md transition-shadow"
              >
                <img 
                  src={`/assets/depoimento-${i}.jpeg`} 
                  alt={`Depoimento ${i}`} 
                  className="w-full h-auto rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile View (Automatic Carousel) */}
          <div className="md:hidden relative h-[380px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-[85%] max-w-[300px] bg-white p-2 rounded-2xl shadow-xl border border-azul-noite/10"
              >
                <img 
                  src={`/assets/depoimento-${testimonials[activeIndex]}.jpeg`} 
                  alt={`Depoimento ${testimonials[activeIndex]}`} 
                  className="w-full h-auto rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-4 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i 
                    ? "bg-accent-premium w-6" 
                    : "bg-accent-premium/20"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
