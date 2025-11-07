import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { certifications } from "@/data/certifications";
import { CheckCircle2, Lock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface CertificationPanelProps {
  completedModules: string[];
  totalXP: number;
  perfectScores: number;
}

const CertificationPanel = ({ completedModules, totalXP, perfectScores }: CertificationPanelProps) => {
  const calculateProgress = (cert: typeof certifications[0]) => {
    const modulesCompleted = cert.requirements.modulesRequired.filter(moduleId =>
      completedModules.includes(moduleId)
    ).length;
    const moduleProgress = (modulesCompleted / cert.requirements.modulesRequired.length) * 100;
    const xpProgress = (totalXP / cert.requirements.minXP) * 100;
    const perfectScoreProgress = (perfectScores / cert.requirements.perfectScoresRequired) * 100;

    return {
      modulesCompleted,
      moduleProgress: Math.min(moduleProgress, 100),
      xpProgress: Math.min(xpProgress, 100),
      perfectScoreProgress: Math.min(perfectScoreProgress, 100),
      overall: Math.min((moduleProgress + xpProgress + perfectScoreProgress) / 3, 100)
    };
  };

  const isCertificationEarned = (cert: typeof certifications[0]) => {
    const progress = calculateProgress(cert);
    return progress.overall === 100;
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "beginner":
        return "text-green-500";
      case "intermediate":
        return "text-yellow-500";
      case "advanced":
        return "text-orange-500";
      case "master":
        return "text-purple-500";
      default:
        return "text-muted-foreground";
    }
  };

  const getTierBadgeVariant = (tier: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (tier) {
      case "beginner":
        return "secondary";
      case "intermediate":
        return "default";
      case "advanced":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-8 h-8 text-primary" />
        <div>
          <h2 className="text-2xl font-bold">Certifications</h2>
          <p className="text-muted-foreground">Earn professional certifications by completing modules</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert) => {
          const progress = calculateProgress(cert);
          const earned = isCertificationEarned(cert);

          return (
            <Card key={cert.id} className={cn(
              "transition-all",
              earned ? "border-primary shadow-lg" : "border-border"
            )}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className={cn("text-4xl", getTierColor(cert.tier))}>
                      {cert.icon}
                    </span>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {cert.name}
                        {earned && <CheckCircle2 className="w-5 h-5 text-primary" />}
                        {!earned && <Lock className="w-4 h-4 text-muted-foreground" />}
                      </CardTitle>
                      <CardDescription>{cert.description}</CardDescription>
                    </div>
                  </div>
                </div>
                <Badge variant={getTierBadgeVariant(cert.tier)} className="w-fit mt-2">
                  {cert.tier.toUpperCase()}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                {!earned && (
                  <>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Modules Completed</span>
                        <span className="font-medium">
                          {progress.modulesCompleted}/{cert.requirements.modulesRequired.length}
                        </span>
                      </div>
                      <Progress value={progress.moduleProgress} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">XP Progress</span>
                        <span className="font-medium">
                          {totalXP}/{cert.requirements.minXP}
                        </span>
                      </div>
                      <Progress value={progress.xpProgress} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Perfect Scores</span>
                        <span className="font-medium">
                          {perfectScores}/{cert.requirements.perfectScoresRequired}
                        </span>
                      </div>
                      <Progress value={progress.perfectScoreProgress} />
                    </div>

                    <div className="pt-2 border-t">
                      <div className="flex justify-between text-sm font-semibold">
                        <span>Overall Progress</span>
                        <span>{progress.overall.toFixed(0)}%</span>
                      </div>
                      <Progress value={progress.overall} className="mt-2" />
                    </div>
                  </>
                )}

                {earned && (
                  <div className="flex items-center justify-center py-4">
                    <div className="text-center space-y-2">
                      <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
                      <p className="text-lg font-bold text-primary">Certification Earned!</p>
                      <p className="text-sm text-muted-foreground">
                        Congratulations on achieving this milestone
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationPanel;
