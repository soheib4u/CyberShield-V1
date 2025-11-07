import { Level } from "@/types/learning";

export const levels: Level[] = [
  { level: 1, xpRequired: 0, rewards: { certcoins: 50 } },
  { level: 2, xpRequired: 200, rewards: { certcoins: 75 } },
  { level: 3, xpRequired: 450, rewards: { certcoins: 100, cosmeticToken: "basic_avatar_1" } },
  { level: 4, xpRequired: 750, rewards: { certcoins: 125 } },
  { level: 5, xpRequired: 1100, rewards: { certcoins: 150, cosmeticToken: "badge_border_1" } },
  { level: 6, xpRequired: 1500, rewards: { certcoins: 175 } },
  { level: 7, xpRequired: 1950, rewards: { certcoins: 200, cosmeticToken: "theme_matrix_red" } },
  { level: 8, xpRequired: 2450, rewards: { certcoins: 225 } },
  { level: 9, xpRequired: 3000, rewards: { certcoins: 250 } },
  { level: 10, xpRequired: 3600, rewards: { certcoins: 300, cosmeticToken: "effect_glow" } },
  { level: 11, xpRequired: 4250, rewards: { certcoins: 350 } },
  { level: 12, xpRequired: 4950, rewards: { certcoins: 400, cosmeticToken: "avatar_elite_1" } },
  { level: 13, xpRequired: 5700, rewards: { certcoins: 450 } },
  { level: 14, xpRequired: 6500, rewards: { certcoins: 500 } },
  { level: 15, xpRequired: 7350, rewards: { certcoins: 600, cosmeticToken: "badge_border_elite" } },
  { level: 16, xpRequired: 8250, rewards: { certcoins: 700 } },
  { level: 17, xpRequired: 9200, rewards: { certcoins: 800, cosmeticToken: "theme_matrix_purple" } },
  { level: 18, xpRequired: 10200, rewards: { certcoins: 900 } },
  { level: 19, xpRequired: 11250, rewards: { certcoins: 1000 } },
  { level: 20, xpRequired: 12500, rewards: { certcoins: 1500, cosmeticToken: "legendary_avatar" } }
];

export const getCurrentLevel = (xp: number): number => {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= levels[i].xpRequired) {
      return levels[i].level;
    }
  }
  return 1;
};

export const getXPForNextLevel = (currentXP: number): { current: number; required: number; progress: number } => {
  const currentLevel = getCurrentLevel(currentXP);
  if (currentLevel >= 20) {
    return { current: currentXP, required: levels[19].xpRequired, progress: 100 };
  }
  
  const nextLevel = levels[currentLevel];
  const previousLevel = levels[currentLevel - 1];
  const xpIntoLevel = currentXP - previousLevel.xpRequired;
  const xpNeededForLevel = nextLevel.xpRequired - previousLevel.xpRequired;
  const progress = Math.floor((xpIntoLevel / xpNeededForLevel) * 100);
  
  return {
    current: currentXP,
    required: nextLevel.xpRequired,
    progress
  };
};
