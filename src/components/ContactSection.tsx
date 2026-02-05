import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-forest-light/30">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-peach-light text-secondary text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Get In <span className="text-gradient-nature">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Schedule a visit or enquire about admissions today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Plot B-5&6, Sector 12, Prime Mall Lane,<br />
                    Kharghar, Behind Pranaam Hotel<br />
                    Navi Mumbai - 410210
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-peach flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+918591698387" className="hover:text-primary transition-colors">
                      +91 85916 98387
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-card" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">
                    <a 
                      href="https://wa.me/918591698387" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Quick response via WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sunshine flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">School Hours</h3>
                  <p className="text-muted-foreground">
                    Monday – Saturday<br />
                    9:00 AM – 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-medium border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send us a Message
              </h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Parent's Name
                    </label>
                    <Input 
                      placeholder="Your name" 
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input 
                      placeholder="Your phone" 
                      className="rounded-xl h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    className="rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Child's Age
                  </label>
                  <Input 
                    placeholder="e.g., 2.5 years" 
                    className="rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your enquiry..."
                    className="rounded-xl min-h-[120px] resize-none"
                  />
                </div>
                <Button variant="hero" size="xl" className="w-full">
                  Send Enquiry
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
