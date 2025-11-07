import { DailyChallenge } from "@/types/learning";

// Rotating pool of daily challenges
export const dailyChallengesPool: Omit<DailyChallenge, "completedToday" | "date">[] = [
  {
    id: "phishing-speed-1",
    title: "Speed Phisher",
    description: "Identify 5 phishing emails in under 2 minutes",
    moduleId: "phishing",
    xpReward: 100,
    certcoinReward: 50
  },
  {
    id: "link-master-1",
    title: "Link Master",
    description: "Correctly identify 8 spoofed links",
    moduleId: "spoofed-links",
    xpReward: 120,
    certcoinReward: 60
  },
  {
    id: "wifi-guardian-1",
    title: "Wi-Fi Guardian",
    description: "Complete Public Wi-Fi module without mistakes",
    moduleId: "public-wifi",
    xpReward: 150,
    certcoinReward: 75
  },
  {
    id: "mitm-expert-1",
    title: "MITM Expert",
    description: "Score 100% on MITM attack detection",
    moduleId: "mitm",
    xpReward: 150,
    certcoinReward: 80
  },
  {
    id: "sms-defender-1",
    title: "SMS Defender",
    description: "Spot all smishing attempts correctly",
    moduleId: "smishing-vishing",
    xpReward: 120,
    certcoinReward: 60
  },
  {
    id: "download-detective-1",
    title: "Download Detective",
    description: "Identify all dangerous attachments",
    moduleId: "attachment-safety",
    xpReward: 100,
    certcoinReward: 50
  },
  {
    id: "2fa-protector-1",
    title: "2FA Protector",
    description: "Master 2FA security scenarios",
    moduleId: "2fa-social-engineering",
    xpReward: 130,
    certcoinReward: 70
  },
  {
    id: "privacy-pro-1",
    title: "Privacy Pro",
    description: "Perfect score on social media privacy",
    moduleId: "social-media-privacy",
    xpReward: 110,
    certcoinReward: 55
  },
  {
    id: "quick-learner-1",
    title: "Quick Learner",
    description: "Complete any 3 quiz questions correctly in a row",
    moduleId: "phishing",
    xpReward: 80,
    certcoinReward: 40
  },
  {
    id: "streak-builder-1",
    title: "Streak Builder",
    description: "Complete your 3rd consecutive day",
    moduleId: "phishing",
    xpReward: 200,
    certcoinReward: 100
  },
  {
    id: "multi-threat-1",
    title: "Multi-Threat Master",
    description: "Complete 2 different modules today",
    moduleId: "phishing",
    xpReward: 180,
    certcoinReward: 90
  },
  {
    id: "perfect-day-1",
    title: "Perfect Day",
    description: "Answer 10 questions correctly without mistakes",
    moduleId: "spoofed-links",
    xpReward: 250,
    certcoinReward: 125
  },
  {
    id: "comeback-challenge-1",
    title: "Comeback Challenge",
    description: "Retry a failed quiz and get 100%",
    moduleId: "public-wifi",
    xpReward: 150,
    certcoinReward: 75
  },
  {
    id: "theory-scholar-1",
    title: "Theory Scholar",
    description: "Read theory sections in 3 different modules",
    moduleId: "mitm",
    xpReward: 100,
    certcoinReward: 50
  }
];

export const getDailyChallenge = (): DailyChallenge => {
  const today = new Date().toISOString().split('T')[0];
  const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const challengeIndex = dayOfYear % dailyChallengesPool.length;
  
  return {
    ...dailyChallengesPool[challengeIndex],
    completedToday: false,
    date: today
  };
};
