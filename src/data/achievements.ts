import { Achievement } from "@/types/learning";

export const achievements: Achievement[] = [
  {
    id: "phish-hunter",
    name: "Phish Hunter",
    description: "Identify 50 phishing emails correctly",
    criteria: "Complete 50 phishing-related quiz questions correctly",
    icon: "🎣",
    unlocked: false
  },
  {
    id: "link-sleuth",
    name: "Link Sleuth",
    description: "Correctly inspect 100 suspicious links",
    criteria: "Complete 100 link-related quiz questions correctly",
    icon: "🔗",
    unlocked: false
  },
  {
    id: "streak-keeper",
    name: "Streak Keeper",
    description: "Maintain a 7-day learning streak",
    criteria: "Complete at least one activity for 7 consecutive days",
    icon: "🔥",
    unlocked: false
  },
  {
    id: "perfect-score",
    name: "Perfect Score",
    description: "Complete a module with 100% accuracy",
    criteria: "Answer all quiz questions correctly in a single module",
    icon: "💯",
    unlocked: false
  },
  {
    id: "wifi-warrior",
    name: "Wi-Fi Warrior",
    description: "Master public network security",
    criteria: "Complete Public Wi-Fi Traps module with perfect score",
    icon: "📡",
    unlocked: false
  },
  {
    id: "mitm-detector",
    name: "MITM Detector",
    description: "Become an expert in spotting man-in-the-middle attacks",
    criteria: "Complete MITM module with perfect score",
    icon: "🛡️",
    unlocked: false
  },
  {
    id: "speed-learner",
    name: "Speed Learner",
    description: "Complete a module in under 5 minutes",
    criteria: "Finish any module with perfect score in under 5 minutes",
    icon: "⚡",
    unlocked: false
  },
  {
    id: "comeback-kid",
    name: "Comeback Kid",
    description: "Retry and pass after failing a quiz",
    criteria: "Fail a quiz then retry and pass with perfect score",
    icon: "🔄",
    unlocked: false
  },
  {
    id: "core-defender",
    name: "Core Defender",
    description: "Complete all original four modules",
    criteria: "Complete Phishing, Spoofed Links, Public Wi-Fi, and MITM modules",
    icon: "🏆",
    unlocked: false
  },
  {
    id: "security-scholar",
    name: "Security Scholar",
    description: "Complete all modules",
    criteria: "Complete every module in CyberShield Lab",
    icon: "🎓",
    unlocked: false
  },
  {
    id: "challenge-master",
    name: "Challenge Master",
    description: "Complete 30 daily challenges",
    criteria: "Successfully complete 30 daily challenges",
    icon: "⭐",
    unlocked: false
  },
  {
    id: "shopaholic",
    name: "Shopaholic",
    description: "Purchase 10 items from the shop",
    criteria: "Buy 10 cosmetic items using certcoins",
    icon: "🛒",
    unlocked: false
  },
  {
    id: "beginner-master",
    name: "Beginner Mastery",
    description: "Complete all beginner modules",
    criteria: "Complete all Beginner difficulty modules",
    icon: "🌱",
    unlocked: false
  },
  {
    id: "intermediate-champion",
    name: "Intermediate Champion",
    description: "Conquer intermediate challenges",
    criteria: "Complete all Intermediate difficulty modules",
    icon: "⚔️",
    unlocked: false
  },
  {
    id: "advanced-warrior",
    name: "Advanced Warrior",
    description: "Master advanced security concepts",
    criteria: "Complete all Advanced difficulty modules",
    icon: "🛡️",
    unlocked: false
  },
  {
    id: "perfect-streak",
    name: "Perfect Streak",
    description: "Five perfect scores in a row",
    criteria: "Complete 5 consecutive modules with 100% accuracy",
    icon: "🌟",
    unlocked: false
  },
  {
    id: "crypto-breaker",
    name: "Crypto Breaker",
    description: "Master cryptography fundamentals",
    criteria: "Complete Cryptography module with perfect score",
    icon: "🔓",
    unlocked: false
  },
  {
    id: "network-guardian",
    name: "Network Guardian",
    description: "Protect network infrastructure",
    criteria: "Complete Network Protocols module with perfect score",
    icon: "🌐",
    unlocked: false
  },
  {
    id: "incident-responder",
    name: "Incident Responder",
    description: "Handle security breaches like a pro",
    criteria: "Complete Incident Response module with perfect score",
    icon: "🚨",
    unlocked: false
  },
  {
    id: "threat-analyst",
    name: "Threat Analyst",
    description: "Hunt threats proactively",
    criteria: "Complete Threat Intelligence module with perfect score",
    icon: "🔍",
    unlocked: false
  },
  {
    id: "code-fortress",
    name: "Code Fortress",
    description: "Write secure code that attackers fear",
    criteria: "Complete Secure Coding module with perfect score",
    icon: "💻",
    unlocked: false
  },
  {
    id: "compliance-guru",
    name: "Compliance Guru",
    description: "Navigate regulatory frameworks",
    criteria: "Complete Compliance Frameworks module with perfect score",
    icon: "📜",
    unlocked: false
  },
  {
    id: "apt-destroyer",
    name: "APT Destroyer",
    description: "Defeat advanced persistent threats",
    criteria: "Complete APT module with perfect score",
    icon: "⚔️",
    unlocked: false
  },
  {
    id: "pentesting-ace",
    name: "Pentesting Ace",
    description: "Think like an ethical hacker",
    criteria: "Complete Penetration Testing module with perfect score",
    icon: "🎯",
    unlocked: false
  },
  {
    id: "xp-collector",
    name: "XP Collector",
    description: "Accumulate massive experience",
    criteria: "Earn 5,000 total XP",
    icon: "💰",
    unlocked: false
  },
  {
    id: "xp-hoarder",
    name: "XP Hoarder",
    description: "Legendary experience points",
    criteria: "Earn 10,000 total XP",
    icon: "💎",
    unlocked: false
  },
  {
    id: "certified-pro",
    name: "Certified Professional",
    description: "Earn your first certification",
    criteria: "Complete requirements for any certification tier",
    icon: "📋",
    unlocked: false
  },
  {
    id: "full-certification",
    name: "Fully Certified",
    description: "Earn all certifications",
    criteria: "Complete all certification tiers",
    icon: "🏅",
    unlocked: false
  },
  {
    id: "early-bird",
    name: "Early Bird",
    description: "Start learning before 8 AM",
    criteria: "Complete a module before 8:00 AM",
    icon: "🌅",
    unlocked: false
  },
  {
    id: "night-owl",
    name: "Night Owl",
    description: "Study late into the night",
    criteria: "Complete a module after 10:00 PM",
    icon: "🦉",
    unlocked: false
  },
  {
    id: "weekend-warrior",
    name: "Weekend Warrior",
    description: "Learning never stops",
    criteria: "Complete 5 modules on weekends",
    icon: "📅",
    unlocked: false
  }
];
