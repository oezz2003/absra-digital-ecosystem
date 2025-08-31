import { Button } from "@/components/ui/button";
import { Code2, Smartphone, Cloud, Shield, Bot, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const TechHome = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-20 hero-gradient text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Cutting-Edge <span className="text-tech-glow">Technology</span> Solutions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Transform your business with innovative software solutions, AI-powered automation, and cloud technologies that drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Explore Our Services
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-tech">Absra Tech</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a leading technology company specializing in custom software development, mobile applications, 
              cloud solutions, and AI-driven automation. Our expert team delivers innovative solutions that help 
              businesses scale and thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-tech">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex p-4 rounded-full bg-tech/10 mb-6">
                <Code2 className="w-8 h-8 text-tech" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Software Development</h3>
              <p className="text-muted-foreground mb-6">
                Tailored software solutions built to meet your specific business requirements and workflows.
              </p>
              <Link to="/tech/services/custom-software">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex p-4 rounded-full bg-tech/10 mb-6">
                <Smartphone className="w-8 h-8 text-tech" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
              <p className="text-muted-foreground mb-6">
                Native and cross-platform mobile applications that engage users and drive business growth.
              </p>
              <Link to="/tech/services/mobile-apps">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex p-4 rounded-full bg-tech/10 mb-6">
                <Cloud className="w-8 h-8 text-tech" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Scalable cloud infrastructure and migration services for improved performance and cost efficiency.
              </p>
              <Link to="/tech/services/cloud-solutions">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex p-4 rounded-full bg-tech/10 mb-6">
                <Bot className="w-8 h-8 text-tech" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI & Automation</h3>
              <p className="text-muted-foreground mb-6">
                Intelligent automation solutions and AI-powered tools to streamline your business processes.
              </p>
              <Link to="/tech/services/automation-ai">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex p-4 rounded-full bg-tech/10 mb-6">
                <Shield className="w-8 h-8 text-tech" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive security solutions to protect your digital assets and ensure compliance.
              </p>
              <Link to="/tech/services/cybersecurity">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex p-4 rounded-full bg-tech/10 mb-6">
                <Zap className="w-8 h-8 text-tech" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-muted-foreground mb-6">
                Modern, responsive websites and web applications built with the latest technologies.
              </p>
              <Link to="/tech/services/web-development">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="text-tech">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped businesses transform through technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">E-commerce Platform Transformation</h3>
              <p className="text-muted-foreground mb-4">
                Increased online sales by 300% through custom platform development
              </p>
              <div className="text-sm text-tech font-medium">Retail • Custom Software</div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Healthcare Solution</h3>
              <p className="text-muted-foreground mb-4">
                Improved patient outcomes with predictive analytics and automation
              </p>
              <div className="text-sm text-tech font-medium">Healthcare • AI/ML</div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Migration Success</h3>
              <p className="text-muted-foreground mb-4">
                Reduced infrastructure costs by 60% while improving performance
              </p>
              <div className="text-sm text-tech font-medium">Enterprise • Cloud</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/tech/case-studies">
              <Button size="xl" className="bg-tech hover:bg-tech-glow">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-tech">Technology Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver the best solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Redis', 'TensorFlow', 'Firebase'].map((tech) => (
              <div key={tech} className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-lg font-semibold text-tech">{tech}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/tech/technologies">
              <Button variant="outline" size="xl">
                Explore All Technologies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Let's discuss how our technology solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/tech/contact">
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechHome;