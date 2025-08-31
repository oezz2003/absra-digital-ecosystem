import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Absra</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Empowering growth through innovative technology solutions, strategic business consulting, and transformative education.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Case Studies", "Careers", "News"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Divisions</h3>
            <ul className="space-y-2">
              {[
                "Absra Tech",
                "Absra Business", 
                "Absra Education",
                "Consulting",
                "Support"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground/80">hello@absra.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-secondary-foreground/80">
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-secondary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary-foreground/80">
            © 2024 Absra Digital Ecosystem. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;