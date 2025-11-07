import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Star, Lock } from "lucide-react";
import { achievements as allAchievements } from "@/data/achievements";

interface AchievementsPanelProps {
  unlockedAchievements: string[];
}

const AchievementsPanel = ({ unlockedAchievements }: AchievementsPanelProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Star className="w-4 h-4" />
          Achievements ({unlockedAchievements.length}/{allAchievements.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
            Achievements
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="grid gap-4">
            {allAchievements.map((achievement) => {
              const isUnlocked = unlockedAchievements.includes(achievement.id);
              return (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border transition-all ${
                    isUnlocked
                      ? "bg-primary/10 border-primary/30"
                      : "bg-muted/30 border-muted opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-4xl ${isUnlocked ? "" : "grayscale opacity-50"}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-foreground">{achievement.name}</h3>
                        {isUnlocked ? (
                          <Badge variant="default" className="text-xs">Unlocked</Badge>
                        ) : (
                          <Lock className="w-3 h-3 text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-primary/70">
                        {achievement.criteria}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AchievementsPanel;
