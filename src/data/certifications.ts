import { Certification } from "@/types/learning";

export const certifications: Certification[] = [
  {
    id: "beginner-cert",
    name: "CyberShield Junior Associate",
    description: "Foundation-level cybersecurity certification for beginners",
    tier: "beginner",
    requirements: {
      modulesRequired: ["phishing", "spoofed-links", "public-wifi", "mitm", "social-media", "downloads", "passwords", "privacy"],
      minXP: 2000,
      perfectScoresRequired: 3
    },
    icon: "🎓",
    earned: false
  },
  {
    id: "intermediate-cert",
    name: "CyberShield Security Analyst",
    description: "Intermediate-level certification for security practitioners",
    tier: "intermediate",
    requirements: {
      modulesRequired: ["phishing-intermediate", "url-intermediate", "network-security", "authentication-intermediate", "social-media-intermediate"],
      minXP: 5000,
      perfectScoresRequired: 5
    },
    icon: "🛡️",
    earned: false
  },
  {
    id: "advanced-cert",
    name: "CyberShield Security Professional",
    description: "Advanced certification for cybersecurity experts",
    tier: "advanced",
    requirements: {
      modulesRequired: ["penetration-testing", "cryptography", "network-protocols", "incident-response", "threat-intelligence", "secure-coding", "compliance-frameworks", "advanced-persistent-threats"],
      minXP: 10000,
      perfectScoresRequired: 8
    },
    icon: "⚡",
    earned: false
  },
  {
    id: "master-cert",
    name: "CyberShield Master Guardian",
    description: "Ultimate certification for completing all tiers with excellence",
    tier: "master",
    requirements: {
      modulesRequired: ["phishing", "spoofed-links", "public-wifi", "mitm", "social-media", "downloads", "passwords", "privacy", "phishing-intermediate", "url-intermediate", "network-security", "authentication-intermediate", "social-media-intermediate", "penetration-testing", "cryptography", "network-protocols", "incident-response", "threat-intelligence", "secure-coding", "compliance-frameworks", "advanced-persistent-threats"],
      minXP: 15000,
      perfectScoresRequired: 15
    },
    icon: "👑",
    earned: false
  }
];

export const getCertificationById = (id: string): Certification | undefined => {
  return certifications.find(cert => cert.id === id);
};

export const getCertificationsByTier = (tier: "beginner" | "intermediate" | "advanced" | "master"): Certification[] => {
  return certifications.filter(cert => cert.tier === tier);
};
