import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-float">
            Absra Digital
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Empowering growth through technology solutions, business innovation, and transformative education
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="animate-pulse-slow">
              Explore Our Solutions
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              Get Started Today
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;