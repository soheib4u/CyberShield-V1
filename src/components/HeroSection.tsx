import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shield.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-subtle opacity-80" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-primary/20 shadow-glow">
            <Shield className="w-16 h-16 text-primary" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
          CyberShield Junior
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto">
          Learn cybersecurity the fun way
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Interactive lessons, real-world simulations, and playful challenges that teach students, parents, 
          and beginners how to stay safe online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" onClick={() => window.location.href = "/learn"}>
            Start Learning
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10" onClick={() => window.location.href = "/modules"}>
            Explore Modules
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
