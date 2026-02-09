import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "A Safe & Joyful Beginning for Your Child",
    subtitle: "Rooted in Values, Growing with Confidence",
    cta: "Admissions Open | Playgroup to UKG",
  },
  {
    image: hero2,
    title: "Learning Through Play & Activities",
    subtitle: "Building Confidence, Creativity and Curiosity",
    cta: "Book a School Visit Today",
  },
  {
    image: hero3,
    title: "Nurturing Young Minds with Care",
    subtitle: "Small Classes | Personal Attention | Happy Learning",
    cta: "Call or WhatsApp to Enquire",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 rounded-full bg-sunshine/90 text-accent-foreground text-sm font-semibold mb-6"
                >
                  🌿 Vrindavan Early Learning Centre
                </motion.span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-card mb-4 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                <p className="text-xl md:text-2xl text-card/90 mb-4 font-medium">
                  {slides[currentSlide].subtitle}
                </p>
                
                <p className="text-lg text-sunshine font-semibold mb-8">
                  {slides[currentSlide].cta}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="hero" 
                    size="xl"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Enroll Now
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-card" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-card" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-sunshine w-8"
                : "bg-card/50 hover:bg-card/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSlider;
