import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import MatrixRain from "@/components/MatrixRain";
import CertificationPanel from "@/components/CertificationPanel";
import { useGameProgress } from "@/hooks/useGameProgress";
import { levels } from "@/data/levels";
import { achievements } from "@/data/achievements";
import { trophies } from "@/data/trophies";
import { modules } from "@/data/modules";
import { User, Award, Trophy, Star, Coins, ArrowLeft, TrendingUp, Target, Zap, Medal } from "lucide-react";

const Profile = () => {
  const { progress, getCurrentLevelInfo } = useGameProgress();
  const levelInfo = getCurrentLevelInfo();

  const currentLevelData = levels.find(l => l.level === progress.currentLevel);
  const nextLevelData = levels.find(l => l.level === progress.currentLevel + 1);
  
  const progressPercent = nextLevelData 
    ? ((progress.totalXP - (currentLevelData?.xpRequired || 0)) / ((nextLevelData.xpRequired - (currentLevelData?.xpRequired || 0)))) * 100
    : 100;

  const totalBadges = Object.values(progress.badges).reduce((sum, count) => sum + count, 0);
  const completionRate = (progress.completedModules.length / modules.length) * 100;

  return (
    <div className="min-h-screen relative bg-background">
      <MatrixRain />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/learn">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Hub
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Profile Overview */}
          <Card className="md:col-span-2 p-6 bg-card/80 backdrop-blur">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <User className="w-12 h-12 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2 bg-gradient-cyber bg-clip-text text-transparent">
                  CyberDefender
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="default" className="text-lg px-3 py-1">
                    Level {progress.currentLevel}
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Coins className="w-4 h-4" />
                    {progress.certCoins} CertCoins
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress to Level {progress.currentLevel + 1}</span>
                    <span className="text-foreground font-semibold">
                      {progress.totalXP} / {nextLevelData?.xpRequired || progress.totalXP} XP
                    </span>
                  </div>
                  <Progress value={progressPercent} className="h-3" />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-background/50 rounded-lg border border-primary/20">
                <Award className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">{totalBadges}</div>
                <div className="text-xs text-muted-foreground">Badges</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border border-primary/20">
                <Star className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                <div className="text-2xl font-bold text-foreground">{progress.unlockedAchievements.length}</div>
                <div className="text-xs text-muted-foreground">Achievements</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border border-primary/20">
                <Trophy className="w-6 h-6 mx-auto mb-2 text-amber-500" />
                <div className="text-2xl font-bold text-foreground">{progress.unlockedTrophies.length}</div>
                <div className="text-xs text-muted-foreground">Trophies</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border border-primary/20">
                <Target className="w-6 h-6 mx-auto mb-2 text-green-500" />
                <div className="text-2xl font-bold text-foreground">{Math.round(completionRate)}%</div>
                <div className="text-xs text-muted-foreground">Complete</div>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="p-6 bg-card/80 backdrop-blur">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Quick Stats
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Modules Completed</span>
                  <span className="text-foreground font-semibold">
                    {progress.completedModules.length}/{modules.length}
                  </span>
                </div>
                <Progress value={(progress.completedModules.length / modules.length) * 100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Certifications</span>
                  <span className="text-foreground font-semibold flex items-center gap-1">
                    <Medal className="w-4 h-4" />
                    {progress.earnedCertifications.length}/4
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Challenges Done</span>
                  <span className="text-foreground font-semibold">{progress.completedChallenges.length}</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Shop Items</span>
                  <span className="text-foreground font-semibold">{progress.ownedShopItems.length}</span>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Zap className="w-4 h-4" />
                  <span className="font-semibold">Total XP: {progress.totalXP}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="p-6 mb-6 bg-card/80 backdrop-blur">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            Recent Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.slice(0, 4).map(achievement => {
              const isUnlocked = progress.unlockedAchievements.includes(achievement.id);
              return (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border transition-all ${
                    isUnlocked
                      ? "bg-primary/10 border-primary/30"
                      : "bg-muted/30 border-muted opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`text-3xl ${isUnlocked ? "" : "grayscale opacity-50"}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground">{achievement.name}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Trophies */}
        <Card className="p-6 mb-6 bg-card/80 backdrop-blur">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-500" />
            Trophy Collection
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trophies.map(trophy => {
              const isUnlocked = progress.unlockedTrophies.includes(trophy.id);
              return (
                <div
                  key={trophy.id}
                  className={`p-4 rounded-lg border text-center transition-all ${
                    isUnlocked
                      ? "bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30"
                      : "bg-muted/30 border-muted opacity-50"
                  }`}
                >
                  <div className={`text-4xl mb-2 ${isUnlocked ? "" : "grayscale opacity-40"}`}>
                    {trophy.icon}
                  </div>
                  <div className="text-xs font-bold text-foreground">{trophy.name}</div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Certifications */}
        <Card className="p-6 bg-card/80 backdrop-blur">
          <CertificationPanel
            completedModules={progress.completedModules}
            totalXP={progress.totalXP}
            perfectScores={0}
          />
        </Card>
      </div>
    </div>
  );
};

export default Profile;
