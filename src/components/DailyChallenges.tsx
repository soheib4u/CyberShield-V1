import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Zap, Check } from "lucide-react";
import { dailyChallengesPool } from "@/data/dailyChallenges";

interface DailyChallengesProps {
  completedChallenges: string[];
  onComplete: (challengeId: string, reward: number) => void;
}

const DailyChallenges = ({ completedChallenges, onComplete }: DailyChallengesProps) => {
  const [todayChallenge, setTodayChallenge] = useState(dailyChallengesPool[0]);

  useEffect(() => {
    // Rotate challenge based on day of year
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
    const challengeIndex = dayOfYear % dailyChallengesPool.length;
    setTodayChallenge(dailyChallengesPool[challengeIndex]);
  }, []);

  const isCompleted = completedChallenges.includes(todayChallenge.id);
  const streak = completedChallenges.length;

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Daily Challenge</h3>
        </div>
        {streak > 0 && (
          <Badge variant="default" className="gap-1">
            <Zap className="w-3 h-3" />
            {streak} day streak
          </Badge>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="text-3xl">📅</div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">{todayChallenge.title}</h4>
            <p className="text-sm text-muted-foreground mb-2">{todayChallenge.description}</p>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-primary font-semibold">+{todayChallenge.xpReward} XP</span>
              <span className="text-muted-foreground">Quick challenge</span>
            </div>
          </div>
        </div>

        {isCompleted ? (
          <div className="flex items-center gap-2 text-primary p-3 bg-primary/10 rounded-lg">
            <Check className="w-4 h-4" />
            <span className="text-sm font-semibold">Completed! Come back tomorrow.</span>
          </div>
        ) : (
          <Button 
            className="w-full" 
            onClick={() => onComplete(todayChallenge.id, todayChallenge.xpReward)}
          >
            Start Challenge
          </Button>
        )}
      </div>
    </Card>
  );
};

export default DailyChallenges;
