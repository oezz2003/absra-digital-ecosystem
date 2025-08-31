import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const EducationNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/education" },
    { label: "About", href: "/education/about" },
    { label: "Programs", href: "/education/programs" },
    { label: "Admissions", href: "/education/admissions" },
    { label: "Campus Life", href: "/education/campus-life" },
    { label: "Events", href: "/education/events" },
    { label: "Contact", href: "/education/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-education rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div className="font-bold text-xl">
              Absra <span className="text-education">Education</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground hover:text-education transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="default" className="bg-education hover:bg-education-glow">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block py-2 text-foreground hover:text-education transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="default" className="w-full bg-education hover:bg-education-glow mt-4">
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EducationNavigation;