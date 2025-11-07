import { Link } from "react-router-dom";
import MatrixRain from "@/components/MatrixRain";
import { modules } from "@/data/modules";
import { Lock, CheckCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useGameProgress } from "@/hooks/useGameProgress";
import ProgressBar from "@/components/ProgressBar";
import AchievementsPanel from "@/components/AchievementsPanel";
import TrophyCase from "@/components/TrophyCase";
import RewardsShop from "@/components/RewardsShop";
import DailyChallenges from "@/components/DailyChallenges";

const hackerQuotes = [
  "The only truly secure system is one that is powered off. - Gene Spafford",
  "Hackers are breaking the systems for profit. Someone needs to break the systems for knowledge. - Dan Kaminsky",
  "Security is not a product, but a process. - Bruce Schneier",
  "To know your enemy, you must become your enemy. - Sun Tzu",
  "The best way to predict the future is to invent it. - Alan Kay"
];

const LearningHub = () => {
  const [quote, setQuote] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");
  const { progress, getCurrentLevelInfo, purchaseItem, completeChallenge, addXP } = useGameProgress();
  const levelInfo = getCurrentLevelInfo();

  useEffect(() => {
    setQuote(hackerQuotes[Math.floor(Math.random() * hackerQuotes.length)]);
  }, []);

  const filteredModules = difficultyFilter === "all" 
    ? modules 
    : modules.filter(m => m.difficulty === difficultyFilter);

  const isModuleUnlocked = (index: number) => {
    if (index === 0) return true;
    return progress.completedModules.includes(modules[index - 1].id);
  };

  const isModuleCompleted = (moduleId: string) => {
    return progress.completedModules.includes(moduleId);
  };

  const totalBadges = Object.values(progress.badges).reduce((sum, count) => sum + count, 0);

  return (
    <div className="min-h-screen relative" style={{ background: "linear-gradient(135deg, hsl(220 25% 8%), hsl(180 40% 12%))" }}>
      <MatrixRain />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 font-mono" style={{ color: "hsl(180 85% 65%)", textShadow: "0 0 20px hsl(180 85% 65% / 0.5)" }}>
            CYBERSHIELD TRAINING LAB
          </h1>
          <p className="text-xl font-mono mb-6" style={{ color: "hsl(180 70% 70%)" }}>
            &gt; INITIALIZING HACKING SIMULATION_
          </p>
          <div className="max-w-2xl mx-auto p-4 border rounded" style={{ borderColor: "hsl(180 60% 50%)", backgroundColor: "hsl(220 20% 15%)" }}>
            <p className="text-sm font-mono italic" style={{ color: "hsl(180 50% 75%)" }}>
              "{quote}"
            </p>
          </div>
        </div>

        {/* Progress & Actions Bar */}
        <div className="max-w-4xl mx-auto mb-6">
          <ProgressBar
            currentXP={levelInfo.currentXP}
            currentLevel={levelInfo.currentLevel}
            nextLevelXP={levelInfo.nextLevelXP}
            badges={totalBadges}
            achievements={progress.unlockedAchievements.length}
            trophies={progress.unlockedTrophies.length}
          />
          
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <Link to="/profile">
              <Button variant="outline" className="gap-2">
                <User className="w-4 h-4" />
                Profile
              </Button>
            </Link>
            <AchievementsPanel unlockedAchievements={progress.unlockedAchievements} />
            <TrophyCase unlockedTrophies={progress.unlockedTrophies} />
            <RewardsShop
              certCoins={progress.certCoins}
              ownedItems={progress.ownedShopItems}
              onPurchase={purchaseItem}
            />
          </div>

          <DailyChallenges
            completedChallenges={progress.completedChallenges}
            onComplete={(challengeId, reward) => {
              completeChallenge(challengeId);
              addXP(reward);
            }}
          />

          {/* Difficulty Filter */}
          <div className="flex gap-2 justify-center mb-6">
            <Button
              variant={difficultyFilter === "all" ? "default" : "outline"}
              onClick={() => setDifficultyFilter("all")}
              className="font-mono"
              style={{
                backgroundColor: difficultyFilter === "all" ? "hsl(180 50% 15%)" : "transparent",
                borderColor: "hsl(180 60% 50%)",
                color: "hsl(180 85% 65%)"
              }}
            >
              ALL LEVELS
            </Button>
            <Button
              variant={difficultyFilter === "beginner" ? "default" : "outline"}
              onClick={() => setDifficultyFilter("beginner")}
              className="font-mono"
              style={{
                backgroundColor: difficultyFilter === "beginner" ? "hsl(120 50% 25%)" : "transparent",
                borderColor: "hsl(120 60% 50%)",
                color: "hsl(120 85% 65%)"
              }}
            >
              BEGINNER
            </Button>
            <Button
              variant={difficultyFilter === "intermediate" ? "default" : "outline"}
              onClick={() => setDifficultyFilter("intermediate")}
              className="font-mono"
              style={{
                backgroundColor: difficultyFilter === "intermediate" ? "hsl(45 50% 25%)" : "transparent",
                borderColor: "hsl(45 60% 50%)",
                color: "hsl(45 85% 65%)"
              }}
            >
              INTERMEDIATE
            </Button>
            <Button
              variant={difficultyFilter === "advanced" ? "default" : "outline"}
              onClick={() => setDifficultyFilter("advanced")}
              className="font-mono"
              style={{
                backgroundColor: difficultyFilter === "advanced" ? "hsl(0 50% 25%)" : "transparent",
                borderColor: "hsl(0 60% 50%)",
                color: "hsl(0 85% 65%)"
              }}
            >
              ADVANCED
            </Button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {filteredModules.map((module, index) => {
            const unlocked = isModuleUnlocked(index);
            const completed = isModuleCompleted(module.id);
            
            const difficultyColors = {
              beginner: { border: "hsl(120 60% 50%)", text: "hsl(120 85% 65%)" },
              intermediate: { border: "hsl(45 60% 50%)", text: "hsl(45 85% 65%)" },
              advanced: { border: "hsl(0 60% 50%)", text: "hsl(0 85% 65%)" }
            };
            
            const diffColor = difficultyColors[module.difficulty];

            return (
              <div
                key={module.id}
                className="p-6 border-2 rounded-lg relative transition-all duration-300"
                style={{
                  borderColor: completed ? "hsl(180 70% 60%)" : unlocked ? "hsl(180 60% 50%)" : "hsl(220 15% 25%)",
                  backgroundColor: unlocked ? "hsl(220 20% 15%)" : "hsl(220 25% 12%)",
                  opacity: unlocked ? 1 : 0.5,
                  boxShadow: unlocked ? "0 0 20px hsl(180 70% 50% / 0.3)" : "none"
                }}
              >
                {completed && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle className="w-6 h-6" style={{ color: "hsl(180 70% 60%)" }} />
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{completed ? "✓" : unlocked ? "▶" : "🔒"}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-mono mb-2" style={{ color: unlocked ? "hsl(180 85% 65%)" : "hsl(220 15% 30%)" }}>
                      {module.title}
                    </h3>
                    <p className="text-sm font-mono mb-3" style={{ color: unlocked ? "hsl(180 50% 75%)" : "hsl(220 15% 30%)" }}>
                      {module.description}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono px-2 py-1 border rounded" style={{ borderColor: "hsl(180 70% 60%)", color: "hsl(180 85% 65%)" }}>
                        +{module.xpReward} XP
                      </span>
                      <span className="text-xs font-mono px-2 py-1 border rounded" style={{ borderColor: "hsl(165 80% 55%)", color: "hsl(165 90% 60%)" }}>
                        {module.badge}
                      </span>
                      <span 
                        className="text-xs font-mono px-2 py-1 border rounded uppercase" 
                        style={{ borderColor: diffColor.border, color: diffColor.text }}
                      >
                        {module.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                {unlocked ? (
                  <Link to={`/learn/${module.id}`}>
                    <Button 
                      className="w-full font-mono border-2"
                      style={{ 
                        backgroundColor: completed ? "hsl(180 60% 20%)" : "hsl(180 50% 15%)",
                        borderColor: "hsl(180 70% 60%)",
                        color: "hsl(180 85% 65%)"
                      }}
                    >
                      {completed ? "REPLAY MISSION" : "START MISSION"}
                    </Button>
                  </Link>
                ) : (
                  <div className="text-center py-2 font-mono text-sm" style={{ color: "hsl(220 15% 35%)" }}>
                    <Lock className="w-4 h-4 inline mr-2" />
                    Complete previous missions to unlock
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Back to Landing */}
        <div className="text-center">
          <Link to="/">
            <Button 
              variant="outline"
              className="font-mono border-2"
              style={{ borderColor: "hsl(180 60% 50%)", color: "hsl(180 85% 65%)", backgroundColor: "hsl(220 20% 15%)" }}
            >
              &lt; RETURN TO BASE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearningHub;
