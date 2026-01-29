import { motion } from "framer-motion";
import { Target, Eye, Quote } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom mx-auto">
        {/* About Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-peach-light text-secondary text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Nurturing Young Minds Since Day One
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vrindavan Early Learning Centre is a nurturing preschool in Kharghar, 
                dedicated to providing a warm, safe and stimulating environment for young children. 
                We believe that early childhood is the foundation for lifelong learning.
              </p>
              <p>
                Our approach focuses on learning through play, exploration and meaningful activities 
                that develop confidence, communication skills, creativity and social values.
              </p>
              <p>
                We understand that every child is unique. Our teachers give personal attention to 
                each child, ensuring emotional well-being along with academic readiness. We work 
                closely with parents to support the overall growth and happiness of every child.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-forest-light via-sunshine-light to-peach-light rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 bg-sunshine/30 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-forest/20 rounded-full blur-xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">Our Vision</h3>
                    <p className="text-muted-foreground text-sm">
                      To create a joyful and inspiring learning environment where children develop 
                      confidence, curiosity and strong moral values.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">Our Mission</h3>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Provide a safe and loving atmosphere</li>
                      <li>• Encourage learning through play</li>
                      <li>• Develop communication & creativity</li>
                      <li>• Prepare children for primary school</li>
                      <li>• Partner with parents in development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Founder's Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-forest to-forest-dark rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sunshine/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-peach/10 rounded-full blur-3xl" />
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <Quote className="w-12 h-12 text-sunshine mb-4 mx-auto md:mx-0" />
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto md:mx-0 border-4 border-sunshine/30">
                <img 
                  src={founderPhoto} 
                  alt="Latha Krishnamurthi - Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-foreground mt-4">
                Latha Krishnamurthi
              </h3>
              <p className="text-primary-foreground/80 text-sm">Founder & Centre Head</p>
            </div>

            <div className="md:col-span-2 space-y-4 text-primary-foreground/90">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                Founder's Message
              </h2>
              <p>
                Welcome to Vrindavan Early Learning Centre. I strongly believe that every child 
                is a blessing and deserves to grow in a loving, safe and respectful environment.
              </p>
              <p>
                With several years of experience in early childhood education, my dream has always 
                been to create a preschool where children are not only taught academics but are also 
                nurtured with strong values and confidence.
              </p>
              <p>
                At Vrindavan, we focus on understanding each child's individual needs and helping 
                them grow at their own pace. Our teaching methods are designed to make learning 
                joyful, meaningful and stress-free.
              </p>
              <p className="font-semibold text-sunshine">
                My goal is to build a strong foundation for every child — academically, socially 
                and emotionally — so they are well prepared for their future learning journey.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
