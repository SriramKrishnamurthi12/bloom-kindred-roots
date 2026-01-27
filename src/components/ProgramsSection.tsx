import { motion } from "framer-motion";
import { Baby, BookOpen, GraduationCap, School, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Baby,
    title: "Playgroup",
    age: "2–3 Years",
    description: "Social skills, rhymes, stories, free play and routines.",
    color: "bg-peach-light",
    iconBg: "bg-peach",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: BookOpen,
    title: "Nursery",
    age: "3–4 Years",
    description: "Letters, numbers, shapes, colours, art and music.",
    color: "bg-sky-light",
    iconBg: "bg-sky",
    iconColor: "text-card",
  },
  {
    icon: GraduationCap,
    title: "LKG",
    age: "4–5 Years",
    description: "Pre-reading, phonics, math and confidence building.",
    color: "bg-forest-light",
    iconBg: "bg-forest",
    iconColor: "text-primary-foreground",
  },
  {
    icon: School,
    title: "UKG",
    age: "5–6 Years",
    description: "Reading, writing, math concepts and school readiness.",
    color: "bg-lavender-light",
    iconBg: "bg-lavender",
    iconColor: "text-card",
  },
  {
    icon: Sun,
    title: "Summer Camp",
    age: "May",
    description: "Zumba, Yoga, Art & Craft, Science, Puppet Show, Pottery, Magic Show!",
    color: "bg-sunshine-light",
    iconBg: "bg-sunshine",
    iconColor: "text-accent-foreground",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky-light text-sky text-sm font-semibold mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Programs Designed for <span className="text-gradient-nature">Every Stage</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Age-appropriate curriculum that nurtures curiosity, creativity and confidence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${program.color} rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 card-hover border border-border/30`}
            >
              <div className={`w-14 h-14 rounded-xl ${program.iconBg} flex items-center justify-center mb-4`}>
                <program.icon className={`w-7 h-7 ${program.iconColor}`} />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-heading font-bold text-foreground">
                  {program.title}
                </h3>
                <span className="px-3 py-1 rounded-full bg-card text-sm font-medium text-muted-foreground">
                  {program.age}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                {program.description}
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Daycare & After-School */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-br from-peach-light to-sunshine-light rounded-2xl p-6 border border-border/30">
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
              🍼 Daycare Services
            </h3>
            <p className="text-muted-foreground mb-4">
              Available from 1 year onwards with safe, caring and homely environment. 
              Activities include story time, music, art, indoor & outdoor play, yoga and nap time.
            </p>
            <Button 
              variant="warm" 
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Enquire About Daycare
            </Button>
          </div>

          <div className="bg-gradient-to-br from-forest-light to-sky-light rounded-2xl p-6 border border-border/30">
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
              📚 After-School Care
            </h3>
            <p className="text-muted-foreground mb-4">
              Available for children from 4 years onwards including homework support, 
              reading, art, games and supervised play.
            </p>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
