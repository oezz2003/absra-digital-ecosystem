import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

interface DivisionCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  variant: "tech" | "business" | "education";
  buttonText: string;
}

const DivisionCard = ({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  variant, 
  buttonText 
}: DivisionCardProps) => {
  const gradientClass = `${variant}-gradient`;
  
  return (
    <Card className="relative overflow-hidden hover-lift group border-0 shadow-lg bg-card/80 backdrop-blur-sm">
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${gradientClass}`} />
      
      <CardHeader className="space-y-4">
        <div className={`inline-flex p-3 rounded-lg ${gradientClass} w-fit`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full ${gradientClass} mt-2 flex-shrink-0`} />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant={variant} 
          size="lg" 
          className="w-full group-hover:scale-105 transition-transform duration-300"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default DivisionCard;