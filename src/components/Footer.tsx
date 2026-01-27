import { Heart, Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card py-12">
      <div className="container-custom mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest to-sunshine flex items-center justify-center">
                <Leaf className="w-6 h-6 text-card" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Vrindavan</h3>
                <p className="text-sm text-card/70">Early Learning Centre</p>
              </div>
            </div>
            <p className="text-card/80 text-sm">
              Rooted in Values, Growing with Confidence
            </p>
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

        <div className="border-t border-card/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-card/70">
            © {currentYear} Vrindavan Early Learning Centre. All rights reserved.
          </p>
          <p className="text-sm text-card/70 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-peach fill-peach" /> in Kharghar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
