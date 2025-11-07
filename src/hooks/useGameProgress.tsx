import { useState, useEffect } from "react";
import { levels } from "@/data/levels";

export interface GameProgress {
  totalXP: number;
  currentLevel: number;
  certCoins: number;
  completedModules: string[];
  unlockedAchievements: string[];
  unlockedTrophies: string[];
  earnedCertifications: string[];
  ownedShopItems: string[];
  completedChallenges: string[];
  badges: Record<string, number>;
}

const STORAGE_KEY = "cyberShield_gameProgress";

const defaultProgress: GameProgress = {
  totalXP: 0,
  currentLevel: 1,
  certCoins: 0,
  completedModules: [],
  unlockedAchievements: [],
  unlockedTrophies: [],
  earnedCertifications: [],
  ownedShopItems: [],
  completedChallenges: [],
  badges: {},
};

export const useGameProgress = () => {
  const [progress, setProgress] = useState<GameProgress>(defaultProgress);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved progress:", e);
      }
    }
  }, []);

  const saveProgress = (newProgress: GameProgress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const addXP = (xp: number) => {
    const newProgress = { ...progress };
    newProgress.totalXP += xp;
    
    // Check for level up
    const sortedLevels = [...levels].reverse();
    const newLevel = sortedLevels.find(level => newProgress.totalXP >= level.xpRequired);
    if (newLevel && newLevel.level > newProgress.currentLevel) {
      newProgress.currentLevel = newLevel.level;
      newProgress.certCoins += newLevel.rewards.certcoins;
    }
    
    saveProgress(newProgress);
  };

  const addCertCoins = (coins: number) => {
    saveProgress({ ...progress, certCoins: progress.certCoins + coins });
  };

  const completeModule = (moduleId: string) => {
    if (!progress.completedModules.includes(moduleId)) {
      saveProgress({
        ...progress,
        completedModules: [...progress.completedModules, moduleId],
      });
    }
  };

  const unlockAchievement = (achievementId: string) => {
    if (!progress.unlockedAchievements.includes(achievementId)) {
      saveProgress({
        ...progress,
        unlockedAchievements: [...progress.unlockedAchievements, achievementId],
      });
    }
  };

  const unlockTrophy = (trophyId: string) => {
    if (!progress.unlockedTrophies.includes(trophyId)) {
      saveProgress({
        ...progress,
        unlockedTrophies: [...progress.unlockedTrophies, trophyId],
      });
    }
  };

  const purchaseItem = (itemId: string, cost: number) => {
    if (progress.certCoins >= cost && !progress.ownedShopItems.includes(itemId)) {
      saveProgress({
        ...progress,
        certCoins: progress.certCoins - cost,
        ownedShopItems: [...progress.ownedShopItems, itemId],
      });
    }
  };

  const completeChallenge = (challengeId: string) => {
    if (!progress.completedChallenges.includes(challengeId)) {
      saveProgress({
        ...progress,
        completedChallenges: [...progress.completedChallenges, challengeId],
      });
    }
  };

  const earnBadge = (badgeId: string) => {
    const newBadges = { ...progress.badges };
    newBadges[badgeId] = (newBadges[badgeId] || 0) + 1;
    saveProgress({ ...progress, badges: newBadges });
  };

  const earnCertification = (certificationId: string) => {
    if (!progress.earnedCertifications.includes(certificationId)) {
      saveProgress({
        ...progress,
        earnedCertifications: [...progress.earnedCertifications, certificationId],
      });
    }
  };

  const getCurrentLevelInfo = () => {
    const currentLevelData = levels.find(l => l.level === progress.currentLevel);
    const nextLevelData = levels.find(l => l.level === progress.currentLevel + 1);
    
    return {
      currentLevel: progress.currentLevel,
      currentXP: progress.totalXP,
      nextLevelXP: nextLevelData?.xpRequired || currentLevelData?.xpRequired || 0,
      xpInCurrentLevel: progress.totalXP - (currentLevelData?.xpRequired || 0),
    };
  };

  return {
    progress,
    addXP,
    addCertCoins,
    completeModule,
    unlockAchievement,
    unlockTrophy,
    purchaseItem,
    completeChallenge,
    earnBadge,
    earnCertification,
    getCurrentLevelInfo,
  };
};
