import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { modules } from "@/data/modules";

const ModulesOverview = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              CyberShield Junior
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            Learning Modules
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Master cybersecurity through interactive lessons. Each module teaches essential skills 
            to protect yourself online.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Card 
                  key={module.id}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-card/50 backdrop-blur group"
                >
                  <CardHeader>
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{module.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {module.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                        +{module.xpReward} XP
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                        {module.badge}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground/80 mb-2">What you'll learn:</h4>
                        <ul className="space-y-1">
                          {module.theory.map((theory, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {theory.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link to="/learn">
                        <Button className="w-full">
                          Enter Training Lab
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Jump into the interactive training lab and test your skills in a gamified environment.
          </p>
          <Link to="/learn">
            <Button size="lg" variant="hero">
              Launch Training Lab
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ModulesOverview;
