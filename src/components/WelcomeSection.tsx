import { motion } from "framer-motion";
import { Heart, BookOpen, Star, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Love & Care",
    description: "Learning begins with love and nurturing attention",
  },
  {
    icon: BookOpen,
    title: "Play-Based Learning",
    description: "Engaging activities that spark curiosity",
  },
  {
    icon: Star,
    title: "Strong Values",
    description: "Building character and moral foundation",
  },
  {
    icon: Sparkles,
    title: "Individual Attention",
    description: "Every child is unique and special",
  },
];

const WelcomeSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-forest-light/30">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-forest-light text-primary text-sm font-semibold mb-4">
            Welcome to Our Family
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Welcome to{" "}
            <span className="text-gradient-nature">Vrindavan Early Learning Centre</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A safe, caring and joyful preschool where learning begins with love, play and creativity. 
            We nurture young minds through activity-based learning, strong values and individual attention, 
            helping every child grow confidently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-medium transition-all duration-300 h-full border border-border/50 hover:border-primary/20 card-hover">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-forest-light to-sunshine-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
