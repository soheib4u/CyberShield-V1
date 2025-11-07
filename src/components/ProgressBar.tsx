import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Award } from "lucide-react";

interface ProgressBarProps {
  currentXP: number;
  currentLevel: number;
  nextLevelXP: number;
  badges: number;
  achievements: number;
  trophies: number;
}

const ProgressBar = ({ 
  currentXP, 
  currentLevel, 
  nextLevelXP, 
  badges, 
  achievements,
  trophies 
}: ProgressBarProps) => {
  const progress = (currentXP / nextLevelXP) * 100;

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-primary">Level {currentLevel}</div>
          <div className="text-sm text-muted-foreground">
            {currentXP} / {nextLevelXP} XP
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-foreground">{badges}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-foreground">{achievements}</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-foreground">{trophies}</span>
          </div>
        </div>
      </div>
      <Progress value={progress} className="h-3" />
    </div>
  );
};

export default ProgressBar;
