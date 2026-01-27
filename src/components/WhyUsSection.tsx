import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Palette, 
  Shield, 
  Video, 
  Heart, 
  Users, 
  Star,
  MessageCircle 
} from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Experienced Teachers", description: "Caring and qualified educators" },
  { icon: Palette, title: "Activity-Based Curriculum", description: "Learning through hands-on experiences" },
  { icon: Shield, title: "Safe & Hygienic Campus", description: "Clean and secure environment" },
  { icon: Video, title: "CCTV Surveillance", description: "24/7 security monitoring" },
  { icon: Heart, title: "Child-Friendly Classrooms", description: "Designed for comfort and learning" },
  { icon: Users, title: "Individual Attention", description: "Small class sizes for personal care" },
  { icon: Star, title: "Values & Discipline", description: "Building strong character" },
  { icon: MessageCircle, title: "Parent Communication", description: "Regular updates and involvement" },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-gradient-to-br from-forest-light via-background to-sunshine-light">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-forest-light text-primary text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            What Makes Us <span className="text-gradient-nature">Special</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Creating a nurturing environment where every child thrives
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/30 text-center card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest to-forest-dark flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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

export default WhyUsSection;
