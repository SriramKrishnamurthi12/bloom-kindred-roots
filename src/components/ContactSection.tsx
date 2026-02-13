import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918591698387?text=Hello%20I%20would%20like%20to%20know%20more%20about%20admissions%20at%20Vrindavan%20Early%20Learning%20Centre";

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

        <div className="max-w-2xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

            <a 
              href={WHATSAPP_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-card" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">
                    Quick response via WhatsApp
                  </p>
                </div>
              </div>
            </a>

            <a 
              href="mailto:admin@velc.in"
              className="block bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-peach flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    admin@velc.in
                  </p>
                </div>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/vrind_avan114?igsh=a2RmeHNxamw4eWc5"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6 text-card" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">Instagram</h3>
                  <p className="text-muted-foreground">
                    Follow us on Instagram
                  </p>
                </div>
              </div>
            </a>

            <a 
              href="https://www.facebook.com/share/15WFULjH9ZP/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Facebook className="w-6 h-6 text-card" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">Facebook</h3>
                  <p className="text-muted-foreground">
                    Follow us on Facebook
                  </p>
                </div>
              </div>
            </a>

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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
