import { Shield, Lock, Eye, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const modules = [
  {
    icon: Mail,
    title: "Phishing Awareness",
    description: "Learn to spot fake emails and malicious links before they can harm you.",
    level: "Beginner",
    color: "text-accent",
  },
  {
    icon: Lock,
    title: "Password Power",
    description: "Master the art of creating unbreakable passwords and managing them safely.",
    level: "Beginner",
    color: "text-primary",
  },
  {
    icon: Eye,
    title: "Privacy Basics",
    description: "Understand what data you share online and how to control your digital footprint.",
    level: "Intermediate",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Safe Browsing",
    description: "Navigate the web confidently with essential tips for secure online behavior.",
    level: "Beginner",
    color: "text-accent",
  },
];

const LearningModules = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Learning Modules</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start your cybersecurity journey with engaging, interactive lessons designed for all ages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${module.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription className="text-sm">
                    <span className="inline-block px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-2">
                      {module.level}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningModules;
