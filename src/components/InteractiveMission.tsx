import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Eye, MousePointerClick, AlertTriangle } from "lucide-react";

interface InteractiveMissionProps {
  moduleId: string;
  onComplete: (success: boolean) => void;
}

type MissionData = {
  title: string;
  description: string;
  email?: {
    from: string;
    subject: string;
    body: string;
  };
  redFlags?: Array<{ id: string; text: string; hint: string }>;
  links?: Array<{ display: string; actual: string; isSafe: boolean }>;
  networks?: Array<{ name: string; security: string; isLegit: boolean; owner: string }>;
  buttons?: Array<{ text: string; hover: string; isSafe: boolean }>;
};

const missions: Record<string, MissionData> = {
  phishing: {
    title: "Email Spotter Challenge",
    description: "Analyze this email and identify all red flags",
    email: {
      from: "security@paypa1-verify.com",
      subject: "URGENT: Your account will be suspended!!!",
      body: "Dear Valued Customer,\n\nYour PayPal account has been locked due to suspicious activity. Click here immediately to verify your identity or your account will be permanently deleted within 24 hours.\n\nClick here to verify: http://paypal-security.verify-now.net/login\n\nThank You,\nPayPal Security Team"
    },
    redFlags: [
      { id: "domain", text: "Fake domain (paypa1-verify.com)", hint: "Check the sender's email address carefully" },
      { id: "urgency", text: "Creates false urgency", hint: "Look at the subject line" },
      { id: "generic", text: "Generic greeting", hint: "How are you addressed?" },
      { id: "link", text: "Suspicious link", hint: "Examine the URL in the email body" }
    ]
  },
  "spoofed-links": {
    title: "Link Inspector Mission",
    description: "Hover over links to reveal their true destination",
    links: [
      { display: "www.microsoft.com/security", actual: "http://micros0ft-login.phishing.net", isSafe: false },
      { display: "support.apple.com", actual: "https://support.apple.com", isSafe: true },
      { display: "bit.ly/secure", actual: "http://malware-download.ru/trojan.exe", isSafe: false },
      { display: "amazon.com/deals", actual: "https://www.amazon.com/deals", isSafe: true }
    ]
  },
  "public-wifi": {
    title: "Wi-Fi Network Scanner",
    description: "Identify safe and dangerous networks",
    networks: [
      { name: "Starbucks_Guest", security: "WPA2", isLegit: true, owner: "Starbucks Inc." },
      { name: "FREE_PUBLIC_WIFI", security: "Open", isLegit: false, owner: "Unknown" },
      { name: "Airport_WiFi_Free", security: "Open", isLegit: false, owner: "Unknown" },
      { name: "Airport_Official", security: "WPA2", isLegit: true, owner: "Airport Authority" }
    ]
  },
  "hover-detective": {
    title: "Hover Detective Challenge",
    description: "Practice the hover technique to reveal hidden URLs",
    buttons: [
      { text: "Claim Your Prize!", hover: "http://malware.ru/virus.exe", isSafe: false },
      { text: "View Statement", hover: "https://bankofamerica.com/statements", isSafe: true },
      { text: "Reset Password", hover: "http://g00gle-reset.phishing.net", isSafe: false },
      { text: "Download Receipt", hover: "https://amazon.com/orders/receipt.pdf", isSafe: true }
    ]
  }
};

const InteractiveMission = ({ moduleId, onComplete }: InteractiveMissionProps) => {
  const [selectedFlags, setSelectedFlags] = useState<string[]>([]);
  const [selectedLinks, setSelectedLinks] = useState<{ [key: number]: boolean | null }>({});
  const [selectedNetworks, setSelectedNetworks] = useState<{ [key: number]: boolean | null }>({});
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const mission = missions[moduleId as keyof typeof missions];

  if (!mission) {
    return (
      <Card className="p-6">
        <p className="text-muted-foreground">Interactive mission coming soon for this module!</p>
      </Card>
    );
  }

  const handleFlagToggle = (flagId: string) => {
    setSelectedFlags(prev =>
      prev.includes(flagId) ? prev.filter(id => id !== flagId) : [...prev, flagId]
    );
  };

  const handleSubmitPhishing = () => {
    const correctFlags = mission.redFlags?.map(f => f.id) || [];
    const correctCount = selectedFlags.filter(flag => correctFlags.includes(flag)).length;
    const incorrectCount = selectedFlags.length - correctCount;
    const finalScore = Math.max(0, (correctCount / correctFlags.length) * 100 - (incorrectCount * 10));
    
    setScore(Math.round(finalScore));
    setCompleted(true);
    onComplete(finalScore >= 75);
  };

  const handleLinkCheck = (index: number, isSafe: boolean) => {
    setSelectedLinks(prev => ({ ...prev, [index]: isSafe }));
  };

  const handleNetworkCheck = (index: number, isLegit: boolean) => {
    setSelectedNetworks(prev => ({ ...prev, [index]: isLegit }));
  };

  const handleSubmitLinks = () => {
    if (!mission.links) return;
    let correct = 0;
    mission.links.forEach((link, i) => {
      if (selectedLinks[i] === link.isSafe) correct++;
    });
    const finalScore = (correct / mission.links.length) * 100;
    setScore(Math.round(finalScore));
    setCompleted(true);
    onComplete(finalScore >= 75);
  };

  const handleSubmitNetworks = () => {
    if (!mission.networks) return;
    let correct = 0;
    mission.networks.forEach((network, i) => {
      if (selectedNetworks[i] === network.isLegit) correct++;
    });
    const finalScore = (correct / mission.networks.length) * 100;
    setScore(Math.round(finalScore));
    setCompleted(true);
    onComplete(finalScore >= 75);
  };

  // Phishing Email Mission
  if (moduleId === "phishing" && mission.email) {
    return (
      <Card className="p-6 bg-card/80 backdrop-blur">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-primary">{mission.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{mission.description}</p>
        </div>

        <div className="bg-background/50 border border-primary/20 rounded-lg p-4 mb-6 font-mono text-sm">
          <div className="mb-2">
            <span className="text-muted-foreground">From:</span> {mission.email.from}
          </div>
          <div className="mb-4">
            <span className="text-muted-foreground">Subject:</span> {mission.email.subject}
          </div>
          <div className="whitespace-pre-wrap text-foreground">
            {mission.email.body}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
            Click all red flags you can find:
          </h4>
          <div className="grid gap-2">
            {mission.redFlags?.map(flag => (
              <Button
                key={flag.id}
                variant={selectedFlags.includes(flag.id) ? "default" : "outline"}
                className="justify-start gap-2"
                onClick={() => handleFlagToggle(flag.id)}
              >
                {selectedFlags.includes(flag.id) && <CheckCircle className="w-4 h-4" />}
                {flag.text}
              </Button>
            ))}
          </div>
        </div>

        {!completed ? (
          <Button onClick={handleSubmitPhishing} className="w-full">
            Submit Analysis
          </Button>
        ) : (
          <div className="text-center">
            <Badge variant={score >= 75 ? "default" : "destructive"} className="text-lg px-4 py-2">
              Score: {score}%
            </Badge>
            <p className="mt-2 text-sm text-muted-foreground">
              {score >= 75 ? "Great job! You spotted the threats." : "Keep practicing to improve your detection skills."}
            </p>
          </div>
        )}
      </Card>
    );
  }

  // Link Inspector Mission
  if (moduleId === "spoofed-links" && mission.links) {
    return (
      <Card className="p-6 bg-card/80 backdrop-blur">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-primary">{mission.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{mission.description}</p>
        </div>

        <div className="grid gap-4 mb-6">
          {mission.links.map((link, index) => (
            <div key={index} className="border border-primary/20 rounded-lg p-4">
              <div className="mb-2 font-mono text-sm">
                <div className="text-muted-foreground">Display text:</div>
                <div className="text-primary">{link.display}</div>
              </div>
              <div className="mb-3 font-mono text-sm">
                <div className="text-muted-foreground">Actual URL:</div>
                <div className="text-foreground break-all">{link.actual}</div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={selectedLinks[index] === true ? "default" : "outline"}
                  onClick={() => handleLinkCheck(index, true)}
                  className="flex-1"
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Safe
                </Button>
                <Button
                  size="sm"
                  variant={selectedLinks[index] === false ? "destructive" : "outline"}
                  onClick={() => handleLinkCheck(index, false)}
                  className="flex-1"
                >
                  <XCircle className="w-4 h-4 mr-1" />
                  Dangerous
                </Button>
              </div>
            </div>
          ))}
        </div>

        {!completed ? (
          <Button onClick={handleSubmitLinks} className="w-full">
            Submit Analysis
          </Button>
        ) : (
          <div className="text-center">
            <Badge variant={score >= 75 ? "default" : "destructive"} className="text-lg px-4 py-2">
              Score: {score}%
            </Badge>
            <p className="mt-2 text-sm text-muted-foreground">
              {score >= 75 ? "Excellent link detection skills!" : "Review the URLs more carefully next time."}
            </p>
          </div>
        )}
      </Card>
    );
  }

  // Wi-Fi Network Mission
  if (moduleId === "public-wifi" && mission.networks) {
    return (
      <Card className="p-6 bg-card/80 backdrop-blur">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-primary">{mission.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{mission.description}</p>
        </div>

        <div className="grid gap-4 mb-6">
          {mission.networks.map((network, index) => (
            <div key={index} className="border border-primary/20 rounded-lg p-4">
              <div className="mb-2">
                <div className="font-bold text-foreground">{network.name}</div>
                <div className="text-xs text-muted-foreground">Security: {network.security}</div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={selectedNetworks[index] === true ? "default" : "outline"}
                  onClick={() => handleNetworkCheck(index, true)}
                  className="flex-1"
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Safe
                </Button>
                <Button
                  size="sm"
                  variant={selectedNetworks[index] === false ? "destructive" : "outline"}
                  onClick={() => handleNetworkCheck(index, false)}
                  className="flex-1"
                >
                  <XCircle className="w-4 h-4 mr-1" />
                  Suspicious
                </Button>
              </div>
            </div>
          ))}
        </div>

        {!completed ? (
          <Button onClick={handleSubmitNetworks} className="w-full">
            Submit Analysis
          </Button>
        ) : (
          <div className="text-center">
            <Badge variant={score >= 75 ? "default" : "destructive"} className="text-lg px-4 py-2">
              Score: {score}%
            </Badge>
            <p className="mt-2 text-sm text-muted-foreground">
              {score >= 75 ? "You know how to spot dangerous networks!" : "Remember to check both security type and network names."}
            </p>
          </div>
        )}
      </Card>
    );
  }

  // Hover Detective Mission
  if (moduleId === "hover-detective" && mission.buttons) {
    return (
      <Card className="p-6 bg-card/80 backdrop-blur">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-primary">{mission.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{mission.description}</p>
          <div className="flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-400">
            <Eye className="w-4 h-4" />
            <span>Hover over each button to see the actual URL</span>
          </div>
        </div>

        <div className="grid gap-4 mb-6">
          {mission.buttons.map((btn, index) => (
            <div key={index} className="border border-primary/20 rounded-lg p-4">
              <div
                className="relative mb-3"
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="bg-primary/10 border border-primary/30 rounded px-4 py-2 text-center cursor-pointer hover:bg-primary/20 transition-colors">
                  <MousePointerClick className="w-4 h-4 inline mr-2" />
                  {btn.text}
                </div>
                {hoveredLink === index && (
                  <div className="absolute top-full mt-2 left-0 right-0 bg-background border border-primary/30 rounded p-2 z-10 break-all text-xs font-mono">
                    {btn.hover}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={selectedLinks[index] === true ? "default" : "outline"}
                  onClick={() => handleLinkCheck(index, true)}
                  className="flex-1"
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Safe
                </Button>
                <Button
                  size="sm"
                  variant={selectedLinks[index] === false ? "destructive" : "outline"}
                  onClick={() => handleLinkCheck(index, false)}
                  className="flex-1"
                >
                  <XCircle className="w-4 h-4 mr-1" />
                  Dangerous
                </Button>
              </div>
            </div>
          ))}
        </div>

        {!completed ? (
          <Button onClick={handleSubmitLinks} className="w-full">
            Submit Analysis
          </Button>
        ) : (
          <div className="text-center">
            <Badge variant={score >= 75 ? "default" : "destructive"} className="text-lg px-4 py-2">
              Score: {score}%
            </Badge>
            <p className="mt-2 text-sm text-muted-foreground">
              {score >= 75 ? "Perfect! You've mastered the hover technique." : "Always hover before clicking to verify URLs."}
            </p>
          </div>
        )}
      </Card>
    );
  }

  return null;
};

export default InteractiveMission;
