import { Gamepad2, Users, Award } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Gamified Learning",
    description: "Earn points, unlock achievements, and level up as you master cybersecurity concepts through interactive challenges.",
  },
  {
    icon: Users,
    title: "Family-Friendly",
    description: "Designed for learners of all ages - from curious kids to tech-savvy parents, everyone can learn together.",
  },
  {
    icon: Award,
    title: "Real-World Skills",
    description: "Practice with realistic simulations that prepare you for actual online threats and security scenarios.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose CyberShield Junior?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learning cybersecurity doesn't have to be boring or complicated. We make it engaging and accessible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:bg-card/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-cyber mb-4 shadow-glow">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
