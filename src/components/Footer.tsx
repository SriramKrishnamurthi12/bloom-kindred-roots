import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import schoolLogo from "@/assets/school-logo.jpg";

const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/918591698387",
  instagram: "https://www.instagram.com/vrind_avan114?igsh=a2RmeHNxamw4eWc5",
  facebook: "https://www.facebook.com/share/15WFULjH9ZP/",
  email: "mailto:admin@velc.in",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card py-12">
      <div className="container-custom mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={schoolLogo} 
                alt="Vrindavan Early Learning Centre" 
                className="h-16 w-auto object-contain bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-card/80 text-sm mb-4">
              Rooted in Values, Growing with Confidence
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-sunshine transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-card" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-sunshine transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-card" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-sunshine transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-card" />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-sunshine transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-card" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-card/80">
              <li><a href="#home" className="hover:text-sunshine transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sunshine transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-sunshine transition-colors">Programs</a></li>
              <li><a href="#contact" className="hover:text-sunshine transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-card/80">
              <li>Playgroup (2–3 years)</li>
              <li>Nursery (3–4 years)</li>
              <li>LKG (4–5 years)</li>
              <li>UKG (5–6 years)</li>
              <li>Summer Camp</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 pt-8 flex justify-center items-center">
          <p className="text-sm text-card/70">
            © {currentYear} Vrindavan Early Learning Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
