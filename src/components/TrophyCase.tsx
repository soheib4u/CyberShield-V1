import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trophy, Lock } from "lucide-react";
import { trophies as allTrophies } from "@/data/trophies";

interface TrophyCaseProps {
  unlockedTrophies: string[];
}

const TrophyCase = ({ unlockedTrophies }: TrophyCaseProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Trophy className="w-4 h-4" />
          Trophies ({unlockedTrophies.length}/{allTrophies.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
            Trophy Case
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="grid grid-cols-2 gap-4">
            {allTrophies.map((trophy) => {
              const isUnlocked = unlockedTrophies.includes(trophy.id);
              return (
                <div
                  key={trophy.id}
                  className={`p-6 rounded-lg border text-center transition-all ${
                    isUnlocked
                      ? "bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 shadow-glow"
                      : "bg-muted/30 border-muted opacity-50"
                  }`}
                >
                  <div className={`text-6xl mb-3 ${isUnlocked ? "" : "grayscale opacity-40"}`}>
                    {trophy.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">
                    {trophy.name}
                  </h3>
                  <div className={`text-xs font-semibold mb-2 ${
                    trophy.tier === "platinum" ? "text-purple-400" :
                    trophy.tier === "gold" ? "text-yellow-400" :
                    trophy.tier === "silver" ? "text-gray-400" :
                    "text-amber-600"
                  }`}>
                    {trophy.tier.toUpperCase()}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {trophy.criteria}
                  </p>
                  {!isUnlocked && (
                    <div className="flex items-center justify-center gap-1 mt-3">
                      <Lock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Locked</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TrophyCase;
