import { motion } from "framer-motion";
import { Clock, Smile, Music, Palette, Trees, BookOpen, Home } from "lucide-react";

const schedule = [
  { time: "9:00–9:15", activity: "Welcome & Free Play", icon: Smile, color: "bg-peach" },
  { time: "9:15–9:30", activity: "Circle Time & Rhymes", icon: Music, color: "bg-sky" },
  { time: "9:30–10:00", activity: "Concept Learning", icon: BookOpen, color: "bg-forest" },
  { time: "10:00–10:15", activity: "Snack & Hygiene", icon: Home, color: "bg-sunshine" },
  { time: "10:15–10:45", activity: "Art & Activity", icon: Palette, color: "bg-lavender" },
  { time: "10:45–11:15", activity: "Outdoor Play", icon: Trees, color: "bg-forest" },
  { time: "11:15–11:40", activity: "Story Time & Values", icon: BookOpen, color: "bg-peach" },
  { time: "11:40–12:00", activity: "Revision & Dispersal", icon: Home, color: "bg-sky" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="section-padding bg-card">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sunshine-light text-accent-foreground text-sm font-semibold mb-4">
            Daily Routine
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            A Day at <span className="text-gradient-nature">Vrindavan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            9:00 AM – 12:00 PM | A balanced mix of learning, play and creativity
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-forest via-sunshine to-peach rounded-full hidden md:block" />

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`bg-background rounded-2xl p-5 shadow-soft border border-border/50 inline-block ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {item.time}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {item.activity}
                    </h3>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex w-6 h-6 rounded-full bg-card border-4 border-primary shrink-0 relative z-10" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
