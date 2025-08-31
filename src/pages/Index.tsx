import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DivisionCard from "@/components/DivisionCard";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { 
  Code2, 
  TrendingUp, 
  GraduationCap, 
  Users, 
  Target, 
  Lightbulb,
  Phone,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Divisions Section */}
      <section id="divisions" className="py-20 subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Divisions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Three specialized divisions working together to deliver comprehensive solutions for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="tech">
              <DivisionCard
                title="Absra Tech"
                description="Cutting-edge technology solutions that drive digital transformation and innovation for businesses of all sizes."
                features={[
                  "Custom Software Development",
                  "Mobile App Development", 
                  "Cloud Solutions & DevOps",
                  "AI & Machine Learning",
                  "Cybersecurity Services"
                ]}
                icon={Code2}
                variant="tech"
                buttonText="Explore Tech Solutions"
              />
            </div>
            
            <div id="business">
              <DivisionCard
                title="Absra Business"
                description="Strategic business consulting and growth solutions to help organizations thrive in competitive markets."
                features={[
                  "Business Strategy Consulting",
                  "Digital Transformation",
                  "Marketing & Growth Strategies",
                  "Financial Advisory Services",
                  "HR & Talent Solutions"
                ]}
                icon={TrendingUp}
                variant="business"
                buttonText="Discover Business Solutions"
              />
            </div>
            
            <div id="education">
              <DivisionCard
                title="Absra Education"
                description="Comprehensive educational programs and training that prepare students for future success in technology and business."
                features={[
                  "Primary & Secondary Programs",
                  "Technology Workshops",
                  "Business Skills Training",
                  "AI & Innovation Labs",
                  "Career Development"
                ]}
                icon={GraduationCap}
                variant="education"
                buttonText="Learn About Education"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">Absra</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We combine deep expertise across technology, business, and education to deliver holistic solutions that drive real results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Expert Team</h3>
                <p className="text-muted-foreground">
                  Industry professionals with decades of combined experience
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Results-Driven</h3>
                <p className="text-muted-foreground">
                  Focused on delivering measurable outcomes and lasting impact
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Innovation First</h3>
                <p className="text-muted-foreground">
                  Leveraging cutting-edge technologies and methodologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section id="contact" className="py-20 hero-gradient">
        <div className="container mx-auto px-6 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Let's discuss how Absra can help you achieve your goals through technology, business strategy, or education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>
            
            <div className="pt-8 space-y-2">
              <p className="text-white/80">Call us: +1 (555) 123-4567</p>
              <p className="text-white/80">Email: hello@absra.com</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;