import { LucideIcon } from "lucide-react";

export interface Module {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  difficulty: "beginner" | "intermediate" | "advanced";
  theory: TheorySection[];
  quiz: QuizQuestion[];
  xpReward: number;
  tip: string;
}

export interface TheorySection {
  title: string;
  content: string;
  visual?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  taunt: string;
  explanation: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  criteria: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface Trophy {
  id: string;
  name: string;
  tier: "bronze" | "silver" | "gold" | "platinum";
  criteria: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface Level {
  level: number;
  xpRequired: number;
  rewards: {
    certcoins: number;
    cosmeticToken?: string;
  };
}

export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  moduleId: string;
  xpReward: number;
  certcoinReward: number;
  completedToday: boolean;
  date: string;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  type: "avatar" | "badge_border" | "theme" | "effect";
  icon: string;
  owned: boolean;
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  tier: "beginner" | "intermediate" | "advanced" | "master";
  requirements: {
    modulesRequired: string[];
    minXP: number;
    perfectScoresRequired: number;
  };
  icon: string;
  earnedAt?: Date;
  earned: boolean;
}

export interface UserProgress {
  completedModules: string[];
  currentModule: string | null;
  totalXP: number;
  level: number;
  certcoins: number;
  badges: string[];
  achievements: string[];
  trophies: string[];
  certifications: string[];
  ownedItems: string[];
  equippedItems: {
    avatar?: string;
    badgeBorder?: string;
    theme?: string;
    effect?: string;
  };
  dailyStreak: number;
  lastActive: string;
  completedChallenges: string[];
}
