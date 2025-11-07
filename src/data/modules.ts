import { Module } from "@/types/learning";
import { Mail, Link, Wifi, Shield, MessageSquare, Download, KeyRound, Eye, Lock, Network, AlertTriangle, Code, FileText, Target, Bug, Server } from "lucide-react";

export const modules: Module[] = [
  {
    id: "phishing",
    title: "Phishing Attacks",
    description: "Learn to spot fake emails and malicious messages",
    badge: "Email Hunter",
    icon: Mail,
    difficulty: "beginner",
    xpReward: 250,
    tip: "Always hover over links before clicking to see the real destination URL",
    theory: [
      {
        title: "What is Phishing?",
        content: "Phishing is when attackers disguise themselves as trusted entities to steal your personal information, passwords, or money. They often use fake emails, texts, or websites that look legitimate.",
        visual: "🎣"
      },
      {
        title: "Red Flags to Watch For",
        content: "Suspicious sender addresses, urgent language ('Act now!'), spelling errors, requests for personal info, and links that don't match the claimed destination are all warning signs.",
        visual: "🚩"
      },
      {
        title: "Real vs Fake Domains",
        content: "Attackers use similar-looking domains like 'g00gle.com' (zeros instead of O's) or 'paypa1.com' (1 instead of l). Always check the URL carefully!",
        visual: "🔍"
      }
    ],
    quiz: [
      {
        question: "You receive an email from 'paypa1-security@mail.com' asking you to verify your account. What should you do?",
        options: [
          "Click the link immediately to secure my account",
          "Delete it - it's obviously fake",
          "Reply with my password to prove it's me",
          "Forward it to all my contacts"
        ],
        correctAnswer: 1,
        taunt: "lmaoo you didn't even spot the '1' instead of 'l'? Try harder, rookie!",
        explanation: "The domain uses '1' instead of 'l' in PayPal, and legitimate companies never ask for passwords via email."
      },
      {
        question: "Which email subject line is MOST likely to be phishing?",
        options: [
          "Your monthly newsletter from Amazon",
          "URGENT: Your account will be closed in 24 hours!!!",
          "Shipping confirmation for order #12345",
          "Weekly team meeting notes"
        ],
        correctAnswer: 1,
        taunt: "Seriously? Attackers LOVE creating fake urgency. Wake up!",
        explanation: "Legitimate companies rarely use extreme urgency or multiple exclamation marks. This is a classic pressure tactic."
      },
      {
        question: "You see an email from 'support@bankofamerica-security.net'. Is it legitimate?",
        options: [
          "Yes, it has 'bankofamerica' in it",
          "No, the real Bank of America domain is bankofamerica.com",
          "Maybe, I should click the link to check",
          "Yes, the .net makes it more secure"
        ],
        correctAnswer: 1,
        taunt: "Nice try, but you got hacked! The domain is totally fake.",
        explanation: "Official Bank of America emails come from @bankofamerica.com, not random domains with their name in it."
      },
      {
        question: "An email claims 'You've won $1000! Click here to claim your prize!' What's the giveaway?",
        options: [
          "Nothing, I should claim my prize",
          "Too good to be true + unsolicited = scam",
          "The dollar sign looks weird",
          "The exclamation mark is suspicious"
        ],
        correctAnswer: 1,
        taunt: "You fell for the oldest trick in the book. No free lunch, kiddo!",
        explanation: "Unsolicited 'prizes' or 'winnings' are classic phishing bait. If you didn't enter a contest, you didn't win."
      },
      {
        question: "What's a red flag in this email greeting: 'Dear Valued Customer'?",
        options: [
          "Nothing wrong with it",
          "It's too polite",
          "Real companies use your actual name, not generic greetings",
          "The capitalization is wrong"
        ],
        correctAnswer: 2,
        taunt: "Generic greetings = lazy phishing. You should've caught that!",
        explanation: "Legitimate companies that have your account use your real name. Generic greetings indicate mass phishing."
      },
      {
        question: "You get an email with many spelling errors from 'support@amaz0n.com'. What does this tell you?",
        options: [
          "Amazon's support team made typos",
          "It's likely a phishing email - check the domain too",
          "It's a test from Amazon",
          "Nothing unusual"
        ],
        correctAnswer: 1,
        taunt: "Double whammy: bad spelling AND fake domain. You missed both!",
        explanation: "Professional companies proofread emails. Plus, the domain uses '0' instead of 'o' - clearly fake."
      },
      {
        question: "An email asks you to 'verify your account within 24 hours or it will be deleted.' What should you do?",
        options: [
          "Panic and click the link immediately",
          "Ignore it and check your account by typing the URL directly",
          "Reply asking if it's real",
          "Forward it to friends for advice"
        ],
        correctAnswer: 1,
        taunt: "Urgency = pressure tactic. You fell for it like a total noob!",
        explanation: "Never click links in urgent emails. Go directly to the website by typing the URL yourself to check your account."
      },
      {
        question: "What's suspicious about an email that says 'Click here to unsubscribe' from a list you never joined?",
        options: [
          "Nothing, I should unsubscribe",
          "Clicking confirms your email is active and invites more spam",
          "The grammar is poor",
          "It should say 'opt-out' instead"
        ],
        correctAnswer: 1,
        taunt: "You just told spammers your email works. Smooth move, genius!",
        explanation: "Clicking 'unsubscribe' on spam confirms your email is active, leading to more spam. Just delete it or mark as spam."
      }
    ]
  },
  {
    id: "spoofed-links",
    title: "Spoofed Links",
    description: "Identify fake URLs and domain impersonation tactics",
    badge: "Link Slayer",
    icon: Link,
    difficulty: "beginner",
    xpReward: 300,
    tip: "Use link checkers and always verify shortened URLs before clicking",
    theory: [
      {
        title: "URL Anatomy 101",
        content: "A URL has parts: protocol (https://), domain (google.com), and path (/search). The domain is what matters most - that's who owns the site.",
        visual: "🔗"
      },
      {
        title: "URL Shorteners = Danger",
        content: "Services like bit.ly hide the real destination. Attackers love them because you can't see where you're going until it's too late. Use URL expanders first!",
        visual: "⚠️"
      },
      {
        title: "Lookalike Domains",
        content: "Attackers register domains like 'microso-ft.com' or 'go0gle.com' that look real at a glance. Always check for typos, extra characters, or wrong extensions (.net vs .com).",
        visual: "👁️"
      }
    ],
    quiz: [
      {
        question: "Which URL is most likely legitimate?",
        options: [
          "https://microsofft-login.com/account",
          "http://microsoft.account-verify.net",
          "https://login.live.com/microsoft",
          "https://microsoft.security-check.org"
        ],
        correctAnswer: 2,
        taunt: "lol did you even look at the domains? Amateur hour!",
        explanation: "login.live.com is Microsoft's official login domain. The others are impersonations with fake domains."
      },
      {
        question: "Someone sends you 'bit.ly/fr33-g1ft'. What's the safest action?",
        options: [
          "Click it - free stuff!",
          "Use a URL expander to see the real destination first",
          "Forward it to friends so they get free stuff too",
          "Click it from incognito mode"
        ],
        correctAnswer: 1,
        taunt: "You clicked a blind link? Congrats, you just got pwned!",
        explanation: "Always expand shortened URLs using services like CheckShortURL before clicking."
      },
      {
        question: "What's wrong with 'https://paypa1.com'?",
        options: [
          "Nothing, it's secure because of https://",
          "It uses '1' instead of 'l' - it's a fake site",
          "The .com extension is suspicious",
          "It's missing the 'www'"
        ],
        correctAnswer: 1,
        taunt: "HTTPS doesn't mean safe, it just means encrypted. You got fooled!",
        explanation: "HTTPS only encrypts the connection - it doesn't verify the site is legitimate. The '1' instead of 'l' is a dead giveaway."
      },
      {
        question: "You receive an email with a link: 'Click here for your prize: amaz0n.com'. What do you notice?",
        options: [
          "It's from Amazon so it's safe",
          "The zero '0' instead of 'o' means it's fake",
          "I should click to claim my prize",
          "The .com makes it trustworthy"
        ],
        correctAnswer: 1,
        taunt: "Zero effort on your part = zero security. Try again!",
        explanation: "Amazon's domain is amazon.com with an 'o', not a zero. This is domain impersonation."
      },
      {
        question: "Which of these domains is trying to impersonate Apple?",
        options: [
          "apple.com",
          "app1e.com",
          "support.apple.com",
          "store.apple.com"
        ],
        correctAnswer: 1,
        taunt: "Can't tell 'l' from '1'? Get your eyes checked, noob!",
        explanation: "app1e.com uses the number '1' instead of the letter 'l'. Always verify the exact spelling of domains."
      },
      {
        question: "A URL shows 'secure-netflix.com/login'. What's the issue?",
        options: [
          "It has 'secure' so it's safe",
          "Netflix's real domain is netflix.com, not secure-netflix.com",
          "Nothing wrong - many companies use prefixes",
          "The .com makes it legitimate"
        ],
        correctAnswer: 1,
        taunt: "Attackers LOVE adding 'secure' to fool people like you. Read carefully!",
        explanation: "Adding words before the real domain name creates a completely different domain. Netflix uses netflix.com."
      },
      {
        question: "What makes 'http://login-facebook.com' suspicious?",
        options: [
          "It uses http instead of https",
          "Facebook's real domain is facebook.com, not login-facebook.com",
          "Both A and B",
          "Nothing - it looks fine"
        ],
        correctAnswer: 2,
        taunt: "Two red flags and you missed them both. Epic fail!",
        explanation: "It lacks HTTPS encryption AND uses a fake domain. Facebook's real login is on facebook.com or fb.com."
      },
      {
        question: "Someone texts you 'tinyurl.com/bank-alert'. What should you do FIRST?",
        options: [
          "Click it to see what the alert is",
          "Use a URL expander service to reveal the real link",
          "Reply asking if it's real",
          "Forward it to your bank"
        ],
        correctAnswer: 1,
        taunt: "Blindly clicking shortened URLs? That's how you get hacked, genius!",
        explanation: "Never click shortened URLs without checking where they lead first. Use services like getlinkinfo.com to expand them safely."
      }
    ]
  },
  {
    id: "public-wifi",
    title: "Public Wi-Fi Traps",
    description: "Understand the risks of open networks and how to stay safe",
    badge: "Packet Ghost",
    icon: Wifi,
    difficulty: "beginner",
    xpReward: 275,
    tip: "Use a VPN on public networks and avoid accessing sensitive accounts",
    theory: [
      {
        title: "Why Public Wi-Fi is Dangerous",
        content: "Open networks (no password) let anyone see the traffic passing through them. Attackers can set up fake Wi-Fi hotspots that look real but steal your data.",
        visual: "📡"
      },
      {
        title: "What Can Be Stolen?",
        content: "On unencrypted connections, attackers can capture passwords, credit cards, messages, and session cookies. Even your browsing history isn't safe.",
        visual: "🕵️"
      },
      {
        title: "How to Protect Yourself",
        content: "Use a VPN to encrypt all your traffic, stick to HTTPS sites (padlock icon), and avoid logging into sensitive accounts like banking on public Wi-Fi.",
        visual: "🛡️"
      }
    ],
    quiz: [
      {
        question: "You're at a coffee shop and see two Wi-Fi networks: 'Starbucks_Guest' and 'Starbucks_Free_WiFi'. What should you do?",
        options: [
          "Connect to 'Starbucks_Free_WiFi' - it sounds better",
          "Ask the staff which one is real",
          "Connect to both for faster speed",
          "Use your mobile data instead"
        ],
        correctAnswer: 1,
        taunt: "You connected to a fake hotspot. Your data is literally being stolen right now lol",
        explanation: "Attackers often create fake networks with enticing names. Always verify with staff or use cellular data."
      },
      {
        question: "What does a VPN do on public Wi-Fi?",
        options: [
          "Makes the Wi-Fi faster",
          "Encrypts your internet traffic so others can't read it",
          "Blocks all websites",
          "Gives you free internet"
        ],
        correctAnswer: 1,
        taunt: "VPN = Very Poor Noob? Learn what it actually does!",
        explanation: "A VPN creates an encrypted tunnel for your data, making it unreadable to anyone monitoring the network."
      },
      {
        question: "You're on public Wi-Fi and need to check your bank account. What's the safest option?",
        options: [
          "Go ahead and log in quickly",
          "Wait until you're on a secure network",
          "Use incognito mode",
          "Connect to the Wi-Fi with a VPN first"
        ],
        correctAnswer: 1,
        taunt: "Your bank account just got drained. Should've waited, genius!",
        explanation: "Even with HTTPS, public Wi-Fi for banking is risky. Wait for a trusted network or use cellular data."
      },
      {
        question: "What's the main risk of using public Wi-Fi without protection?",
        options: [
          "Slower internet speed",
          "Others can intercept your data and steal passwords",
          "Your phone battery drains faster",
          "You get more ads"
        ],
        correctAnswer: 1,
        taunt: "You thought slow speed was the issue? Your passwords are being stolen!",
        explanation: "On open networks, attackers can use packet sniffers to capture your data, including passwords and credit cards."
      },
      {
        question: "You see a network called 'Free Airport WiFi' at the airport. What should you consider?",
        options: [
          "It's perfect - airports always have free Wi-Fi",
          "Verify with airport staff if this is the official network",
          "Connect immediately before it fills up",
          "It's safe because airports have good security"
        ],
        correctAnswer: 1,
        taunt: "Fake airport networks are SUPER common. You just connected to a hacker's trap!",
        explanation: "Attackers set up fake networks in airports specifically. Always verify the official network name with staff."
      },
      {
        question: "What does the padlock icon (HTTPS) mean on public Wi-Fi?",
        options: [
          "Your connection to that website is encrypted",
          "The Wi-Fi network is secure",
          "No one can see any of your activity",
          "You're completely safe"
        ],
        correctAnswer: 0,
        taunt: "HTTPS protects the website connection, not the network. You're still exposed!",
        explanation: "HTTPS encrypts data between you and the website, but doesn't protect you from network-level attacks."
      },
      {
        question: "Which activity is safest on public Wi-Fi?",
        options: [
          "Online banking",
          "Reading news articles on HTTPS sites",
          "Entering credit card information",
          "Logging into social media"
        ],
        correctAnswer: 1,
        taunt: "At least you didn't give away your bank details this time!",
        explanation: "Browsing public content on HTTPS sites is relatively safe. Avoid entering sensitive information on public networks."
      },
      {
        question: "Your phone auto-connects to 'Free_Public_WiFi'. What should you do?",
        options: [
          "Leave it connected - it's convenient",
          "Disconnect and turn off auto-connect for open networks",
          "It's fine as long as you don't enter passwords",
          "Keep it connected but use incognito mode"
        ],
        correctAnswer: 1,
        taunt: "Auto-connect = auto-pwned. Turn that feature OFF!",
        explanation: "Auto-connecting to open networks is dangerous. Attackers create fake networks with common names hoping devices auto-connect."
      }
    ]
  },
  {
    id: "mitm",
    title: "Man-in-the-Middle Attacks",
    description: "Learn how attackers intercept communications and how to detect them",
    badge: "MITM Detector",
    icon: Shield,
    difficulty: "beginner",
    xpReward: 350,
    tip: "Always verify HTTPS certificates and watch for security warnings",
    theory: [
      {
        title: "What is MITM?",
        content: "Man-in-the-Middle attacks happen when an attacker secretly intercepts and relays communication between two parties who think they're talking directly to each other.",
        visual: "🔀"
      },
      {
        title: "How MITM Works",
        content: "Attackers position themselves between you and the website you're visiting, often on compromised networks. They can read, modify, or inject data into your connection.",
        visual: "🎭"
      },
      {
        title: "Detection & Prevention",
        content: "Watch for HTTPS warnings, certificate errors, unexpected logouts, or sudden security alerts. Use HTTPS everywhere, VPNs, and avoid suspicious networks.",
        visual: "🔐"
      }
    ],
    quiz: [
      {
        question: "You visit your bank's website and get a certificate warning saying 'This connection is not secure'. What do you do?",
        options: [
          "Click 'Proceed anyway' - I trust my bank",
          "Close the browser immediately and don't log in",
          "Ignore it and enter my password",
          "Refresh the page"
        ],
        correctAnswer: 1,
        taunt: "Congrats, you just gave your bank password to a hacker. Smooth move!",
        explanation: "Certificate warnings mean someone might be intercepting your connection. Never ignore them, especially on sensitive sites."
      },
      {
        question: "What's a sign you might be under a MITM attack?",
        options: [
          "Your internet is slow",
          "You see unexpected certificate errors or security warnings",
          "Your computer is hot",
          "Your battery drains quickly"
        ],
        correctAnswer: 1,
        taunt: "You ignored the warning signs and got hacked. Classic rookie mistake!",
        explanation: "Certificate errors and security warnings are red flags that someone might be intercepting your connection."
      },
      {
        question: "On public Wi-Fi, you notice the Wi-Fi login page asks for your social media password. Is this normal?",
        options: [
          "Yes, that's how public Wi-Fi works",
          "No, this is a MITM attack trying to steal credentials",
          "Maybe, if it's a fancy hotel",
          "Yes, but only if it's HTTPS"
        ],
        correctAnswer: 1,
        taunt: "You gave away your password? Bruh, read the question again!",
        explanation: "Legitimate Wi-Fi login pages never ask for external account credentials. This is a credential harvesting attack."
      },
      {
        question: "Which tool helps prevent MITM attacks?",
        options: [
          "Antivirus software",
          "A VPN that encrypts all traffic",
          "Firewall",
          "Password manager"
        ],
        correctAnswer: 1,
        taunt: "Wrong tool, noob! A VPN encrypts your traffic so attackers can't read it.",
        explanation: "VPNs create encrypted tunnels that prevent attackers from reading or modifying your traffic even if they intercept it."
      },
      {
        question: "You're on a coffee shop Wi-Fi and suddenly get logged out of all your accounts. What might this indicate?",
        options: [
          "Normal internet hiccup",
          "Possible MITM attack stealing your session cookies",
          "Your phone needs an update",
          "The Wi-Fi signal is weak"
        ],
        correctAnswer: 1,
        taunt: "Your sessions just got hijacked. Someone's in your accounts right now!",
        explanation: "Sudden logouts on public Wi-Fi can indicate session hijacking, where attackers steal your authentication cookies."
      },
      {
        question: "What does HTTPS protect you from in a MITM attack?",
        options: [
          "Prevents the attack entirely",
          "Encrypts data between you and the website, making it harder to intercept",
          "Makes your Wi-Fi faster",
          "Blocks all hackers"
        ],
        correctAnswer: 1,
        taunt: "HTTPS helps but isn't perfect. You need layers of defense, rookie!",
        explanation: "HTTPS encrypts your connection to the website, making it harder for MITM attackers to read your data, but certificate spoofing is still possible."
      },
      {
        question: "You notice your browser shows 'Not Secure' next to a website URL. What does this mean?",
        options: [
          "The website is definitely fake",
          "The connection uses HTTP instead of HTTPS - data can be intercepted",
          "Your internet is broken",
          "Nothing important"
        ],
        correctAnswer: 1,
        taunt: "HTTP means your data is sent in plain text. Everyone can read it!",
        explanation: "HTTP connections are not encrypted, allowing anyone on the network to read your data, including passwords."
      },
      {
        question: "An attacker positions themselves between you and a website to read your traffic. What kind of attack is this?",
        options: [
          "Phishing attack",
          "Man-in-the-Middle (MITM) attack",
          "Denial of Service attack",
          "Ransomware attack"
        ],
        correctAnswer: 1,
        taunt: "It's literally in the name! Man-in-the-MIDDLE. Pay attention!",
        explanation: "MITM attacks involve an attacker secretly intercepting and potentially modifying communication between two parties."
      }
    ]
  },
  {
    id: "smishing-vishing",
    title: "Smishing & Vishing",
    description: "Detect SMS and voice call scams trying to steal your info",
    badge: "Call Guardian",
    icon: MessageSquare,
    difficulty: "beginner",
    xpReward: 280,
    tip: "Never share one-time codes or passwords over phone or text, even if the caller claims to be from your bank",
    theory: [
      {
        title: "What are Smishing & Vishing?",
        content: "Smishing (SMS phishing) uses text messages, while vishing (voice phishing) uses phone calls to trick you into revealing personal info or clicking malicious links.",
        visual: "📱"
      },
      {
        title: "Common Tactics",
        content: "Attackers pretend to be banks, delivery services, or tech support. They create urgency ('Your account is locked!') or offer prizes to pressure quick responses.",
        visual: "☎️"
      },
      {
        title: "How to Stay Safe",
        content: "Never click links in unexpected texts. Don't share codes or passwords over phone. Verify by calling official numbers from the company's website, not numbers in the message.",
        visual: "🔒"
      }
    ],
    quiz: [
      {
        question: "You get a text: 'Your package couldn't be delivered. Click here: bit.ly/pkg123'. What do you do?",
        options: [
          "Click the link to reschedule delivery",
          "Delete it - delivery services don't use shortened links",
          "Reply asking which package",
          "Forward it to friends"
        ],
        correctAnswer: 1,
        taunt: "You clicked a smishing link? Your info is being stolen right now!",
        explanation: "Legitimate delivery services send tracking links from their official domains, not shortened URLs in texts."
      },
      {
        question: "A caller says 'This is your bank, we detected fraud. Tell me your one-time code to verify'. What should you do?",
        options: [
          "Give them the code quickly",
          "Hang up and call your bank using the official number",
          "Ask them to verify their identity first",
          "Give them half the code to test"
        ],
        correctAnswer: 1,
        taunt: "You just gave a scammer your 2FA code. Your account is toast!",
        explanation: "Banks NEVER ask for one-time codes or passwords. Hang up and call the official number from your card or their website."
      },
      {
        question: "Text from '5555': 'Congrats! You won $500 gift card. Reply YES to claim'. What's the red flag?",
        options: [
          "The number looks weird",
          "Unsolicited prize offers are always scams",
          "Gift cards aren't real prizes",
          "The amount is too low"
        ],
        correctAnswer: 1,
        taunt: "No one gives free money via text. Wake up, you didn't win anything!",
        explanation: "Legitimate contests notify winners through official channels, not random texts asking you to reply or click links."
      },
      {
        question: "Caller claims to be 'Microsoft Support' saying your computer has a virus. What should you know?",
        options: [
          "Microsoft monitors all computers",
          "Microsoft never cold-calls customers about viruses",
          "I should let them remote access my computer",
          "This is normal for Windows users"
        ],
        correctAnswer: 1,
        taunt: "Microsoft doesn't call you, genius! That's Scamming 101!",
        explanation: "Microsoft, Apple, and other tech companies never make unsolicited calls about viruses. This is a classic tech support scam."
      },
      {
        question: "You receive: 'Your Netflix account is suspended. Update payment: netflix-billing.net'. What's wrong?",
        options: [
          "Nothing, I should update it",
          "Netflix's real domain is netflix.com, not netflix-billing.net",
          "The grammar is poor",
          "It should be an email, not text"
        ],
        correctAnswer: 1,
        taunt: "Fake domain alert! You just gave scammers your credit card!",
        explanation: "Attackers use similar-looking domains. Always go directly to the official site (netflix.com) to check your account."
      },
      {
        question: "Text: 'IRS: You have unpaid taxes. Pay now to avoid arrest: irs-payment.com'. What do you do?",
        options: [
          "Pay immediately to avoid trouble",
          "Ignore it - the IRS never contacts people via text",
          "Reply asking how much I owe",
          "Click to see the amount"
        ],
        correctAnswer: 1,
        taunt: "The IRS uses mail, not texts. You almost got scammed!",
        explanation: "The IRS always contacts taxpayers by physical mail first, never by text or threatening calls."
      },
      {
        question: "Voicemail says 'Press 1 to renew your car warranty'. You don't recognize the company. What now?",
        options: [
          "Press 1 to talk to them",
          "Hang up - it's a robocall scam",
          "Press 2 to be removed from the list",
          "Call them back"
        ],
        correctAnswer: 1,
        taunt: "Pressing 1 connects you to scammers. Just hang up, rookie!",
        explanation: "Car warranty robocalls are notorious scams. Never engage - just hang up and block the number."
      },
      {
        question: "Text: 'Hi mom, my phone broke. This is my new number. Can you send $200 for repairs?' What's suspicious?",
        options: [
          "Nothing, I should help my mom",
          "Scammers impersonate family members - verify by calling their known number",
          "The amount is too specific",
          "Mom would use better grammar"
        ],
        correctAnswer: 1,
        taunt: "You just sent money to a scammer pretending to be your mom. Ouch!",
        explanation: "This is a common scam. Always verify by calling the person's known number or asking personal questions only they'd know."
      }
    ]
  },
  {
    id: "attachment-safety",
    title: "Attachment & Download Safety",
    description: "Recognize dangerous files and avoid malware",
    badge: "File Guardian",
    icon: Download,
    difficulty: "beginner",
    xpReward: 265,
    tip: "Scan all attachments with antivirus before opening, especially .exe, .zip, and .doc files",
    theory: [
      {
        title: "Dangerous File Types",
        content: "Files ending in .exe, .bat, .scr, .zip (with exe inside), .js are risky. Attackers disguise malware as invoices, receipts, or 'important documents'.",
        visual: "⚠️"
      },
      {
        title: "How Malware Spreads",
        content: "Malicious attachments can install viruses, ransomware, or spyware. Once opened, they can steal data, encrypt files, or take control of your device.",
        visual: "🦠"
      },
      {
        title: "Safe Practices",
        content: "Only open attachments you're expecting. Verify sender identity. Use antivirus software. When in doubt, ask the sender through another channel before opening.",
        visual: "✅"
      }
    ],
    quiz: [
      {
        question: "Email from unknown sender with attachment 'Invoice_2024.exe'. What should you do?",
        options: [
          "Open it to see what invoice it is",
          "Delete immediately - .exe files in emails are almost always malware",
          "Reply asking what it's for",
          "Forward to IT to check"
        ],
        correctAnswer: 1,
        taunt: "You opened malware. Your computer is now part of a botnet. Nice job!",
        explanation: "Legitimate invoices are PDF or image files, never .exe (executable) files. .exe attachments are red flags for malware."
      },
      {
        question: "You download a movie file called 'Avatar_2024.mkv.exe'. What's the issue?",
        options: [
          "Nothing wrong",
          "Video files don't have .exe extension - this is malware disguised as a movie",
          "It's a new video format",
          "It needs special player"
        ],
        correctAnswer: 1,
        taunt: "That's not a movie, that's malware! Your PC is infected now!",
        explanation: "Video files use extensions like .mp4, .mkv, or .avi. Adding .exe is a classic trick to disguise malware as media files."
      },
      {
        question: "Your boss emails you 'Urgent_Report.zip'. The writing style seems off. What do you do?",
        options: [
          "Open it immediately since it's from my boss",
          "Verify with your boss through another channel (call/text) before opening",
          "Reply to the email asking if it's real",
          "Open it in incognito mode"
        ],
        correctAnswer: 1,
        taunt: "Your boss's email was hacked. You just infected the company network!",
        explanation: "Email accounts get compromised. Always verify unexpected attachments through a different communication channel."
      },
      {
        question: "What makes a file like 'document.pdf.exe' especially dangerous?",
        options: [
          "It's a large file",
          "It tricks users by hiding .exe after a familiar extension",
          "PDFs can't have exe",
          "It's corrupted"
        ],
        correctAnswer: 1,
        taunt: "Double extensions = double trouble. You got tricked by the oldest trick!",
        explanation: "Attackers use double extensions to fool users. The real extension is .exe (executable), not .pdf. Enable 'show file extensions' in settings."
      },
      {
        question: "You receive 'Resume_John_Smith.docm' for a job application. Is this safe?",
        options: [
          "Yes, it's just a resume",
          "Suspicious - .docm can contain malicious macros. Request .pdf instead",
          "Safe because it's from a job applicant",
          "Safe if I disable macros"
        ],
        correctAnswer: 1,
        taunt: "Macros can execute code. You just hired malware instead of John!",
        explanation: ".docm files contain macros (scripts) that can be malicious. Request .pdf or .docx files which are safer formats."
      },
      {
        question: "Download site offers 'Free_Photoshop_Crack.zip'. What's the risk?",
        options: [
          "No risk, just free software",
          "High risk - cracks and pirated software commonly contain malware",
          "Safe if from a forum",
          "Only risky if it's over 100MB"
        ],
        correctAnswer: 1,
        taunt: "Free cracks = guaranteed malware. You just installed a virus!",
        explanation: "Pirated software and cracks are notorious for bundling malware, spyware, and ransomware. Always use legitimate sources."
      },
      {
        question: "Email attachment 'payment_receipt.pdf' from PayPal. How can you verify it's safe?",
        options: [
          "Just open it",
          "Check sender email matches official PayPal domain AND you made a payment",
          "Scan with antivirus only",
          "Open on phone instead of computer"
        ],
        correctAnswer: 1,
        taunt: "Fake PayPal emails are everywhere! You didn't verify and got phished!",
        explanation: "Verify the sender's email address is from @paypal.com AND that you actually made a recent payment. Otherwise, it's likely phishing."
      },
      {
        question: "What's the safest way to handle unexpected attachments from known contacts?",
        options: [
          "Open them since I know the person",
          "Verify the sender sent it through another method before opening",
          "Scan with antivirus then open",
          "Open on public computer instead"
        ],
        correctAnswer: 1,
        taunt: "Their account was hacked. You trusted blindly and got pwned!",
        explanation: "Accounts get compromised. Always verify unexpected attachments through text, call, or other channels before opening."
      }
    ]
  },
  {
    id: "2fa-social-engineering",
    title: "2FA & Account Recovery Attacks",
    description: "Protect your accounts from social engineering tricks",
    badge: "2FA Guardian",
    icon: KeyRound,
    difficulty: "beginner",
    xpReward: 290,
    tip: "Never share 2FA codes with anyone - not even 'support staff'. Real companies never ask for these codes",
    theory: [
      {
        title: "What is 2FA?",
        content: "Two-Factor Authentication (2FA) adds extra security by requiring a second verification (code, app, fingerprint) beyond your password. It's your second line of defense.",
        visual: "🔐"
      },
      {
        title: "Social Engineering Attacks",
        content: "Attackers trick you into sharing 2FA codes by pretending to be support staff, creating fake urgency, or using phishing sites that prompt for codes.",
        visual: "🎭"
      },
      {
        title: "Safe 2FA Practices",
        content: "Never share codes via call, text, or email. Use authenticator apps over SMS when possible. Verify requests through official channels. Save recovery codes securely offline.",
        visual: "🛡️"
      }
    ],
    quiz: [
      {
        question: "'Google Support' calls asking for your 2FA code to 'fix your account'. What do you do?",
        options: [
          "Give them the code to get help",
          "Hang up - Google never calls asking for 2FA codes",
          "Give them an old code to test",
          "Ask for their employee ID first"
        ],
        correctAnswer: 1,
        taunt: "You gave away the keys to your kingdom. Account = hacked!",
        explanation: "Tech companies NEVER ask for 2FA codes over the phone. These codes are for YOUR eyes only. This is a social engineering attack."
      },
      {
        question: "You get an email: 'Verify your account' with a link that asks for password AND 2FA code. What's happening?",
        options: [
          "Normal security check",
          "Phishing attack collecting both credentials to bypass 2FA",
          "Required update",
          "Account verification"
        ],
        correctAnswer: 1,
        taunt: "You fell for a 2FA bypass phishing scam. Both password AND code stolen!",
        explanation: "Real services never ask for your 2FA code via email link. This is a phishing site designed to steal both credentials in real-time."
      },
      {
        question: "Text: 'Someone tried to log into your account. Reply with the code we just sent to cancel'. What should you do?",
        options: [
          "Reply with the code quickly",
          "Ignore it - replying gives attackers YOUR code",
          "Reply 'STOP'",
          "Forward to the company"
        ],
        correctAnswer: 1,
        taunt: "The attacker IS the one trying to log in! You just helped them!",
        explanation: "Attackers initiate login to YOUR account, then trick you into giving them the code. Never share codes via text reply."
      },
      {
        question: "Which 2FA method is most secure?",
        options: [
          "SMS text message codes",
          "Authenticator app (Google Authenticator, Authy)",
          "Email codes",
          "Security questions"
        ],
        correctAnswer: 1,
        taunt: "SMS can be intercepted! Authenticator apps are way more secure!",
        explanation: "Authenticator apps generate codes offline and are harder to intercept than SMS, which can be hijacked through SIM swapping."
      },
      {
        question: "A site logs you out and immediately asks for password + 2FA code on the login page. Red flag?",
        options: [
          "Normal, just log back in",
          "Suspicious - could be a MITM attack or phishing page",
          "Standard security procedure",
          "Happens when Wi-Fi changes"
        ],
        correctAnswer: 1,
        taunt: "That's a fake login page stealing your credentials in real-time!",
        explanation: "Unexpected logouts on familiar sites, especially requesting both password and 2FA immediately, can indicate MITM or phishing attacks."
      },
      {
        question: "You're setting up 2FA and the site gives you 'recovery codes'. What should you do with them?",
        options: [
          "Email them to yourself",
          "Write them down and store securely offline",
          "Save in your browser",
          "Take a screenshot"
        ],
        correctAnswer: 1,
        taunt: "Digital storage of recovery codes = hacker's dream! Go old school!",
        explanation: "Recovery codes should be written on paper and stored securely offline. Digital storage (email, cloud, screenshots) can be compromised."
      },
      {
        question: "Your phone is lost. Someone texts asking for 2FA codes claiming they found it and want to help. What now?",
        options: [
          "Send codes so they can unlock and return it",
          "Ignore completely - this is a scammer who stole your phone",
          "Give one code to test if they're real",
          "Ask them to mail the phone back"
        ],
        correctAnswer: 1,
        taunt: "They STOLE your phone and you're helping them crack it? Smart!",
        explanation: "If someone has your phone, they don't need YOU to give codes - they're trying to access your accounts. Report lost device immediately."
      },
      {
        question: "Website asks: 'Enter your 2FA code to disable 2FA'. Is this legitimate?",
        options: [
          "Yes, standard security",
          "Maybe legitimate - verify you're on the real site, not a phishing page",
          "No, never enter codes",
          "Yes, but only on mobile"
        ],
        correctAnswer: 1,
        taunt: "Could be real OR a phishing site! You gotta verify the URL first!",
        explanation: "Some legitimate sites do ask for 2FA to disable it, BUT verify you're on the actual site (check URL carefully) as this is also a phishing tactic."
      }
    ]
  },
  {
    id: "social-media-privacy",
    title: "Social Media Privacy & OSINT",
    description: "Learn what you're exposing online and how to protect your privacy",
    badge: "Privacy Ninja",
    icon: Eye,
    difficulty: "beginner",
    xpReward: 270,
    tip: "Review your privacy settings regularly and think before posting - once online, it's forever",
    theory: [
      {
        title: "What is OSINT?",
        content: "Open Source Intelligence (OSINT) is information gathering from public sources. Attackers use your social media posts, photos, and profile info to learn about you.",
        visual: "🔍"
      },
      {
        title: "What You're Exposing",
        content: "Location data, work info, family details, vacation plans, daily routines - all valuable to attackers for phishing, identity theft, or physical security threats.",
        visual: "📍"
      },
      {
        title: "Privacy Best Practices",
        content: "Set profiles to private. Disable location tagging. Be careful what you share publicly. Review tagged photos. Use different emails for different services. Check app permissions regularly.",
        visual: "🔒"
      }
    ],
    quiz: [
      {
        question: "You post 'Excited for my 2-week vacation to Hawaii! Leaving tomorrow!'. What's the security risk?",
        options: [
          "No risk, just sharing excitement",
          "Announcing empty home invites burglars",
          "Someone might steal your vacation idea",
          "Airlines might raise prices"
        ],
        correctAnswer: 1,
        taunt: "You just told burglars your house is empty. Welcome home to robbery!",
        explanation: "Broadcasting vacation plans tells criminals your home is unoccupied. Share vacation photos AFTER you return, not before."
      },
      {
        question: "A fun quiz asks 'What's your mother's maiden name + first pet's name = your superhero name!'. What's the danger?",
        options: [
          "No danger, it's just fun",
          "These are common security questions - you're giving away answers",
          "The quiz is too long",
          "Superheroes aren't real"
        ],
        correctAnswer: 1,
        taunt: "You just gave away your password recovery answers publicly. Genius move!",
        explanation: "These 'fun' quizzes often ask for common security question answers. Attackers collect this data to crack accounts."
      },
      {
        question: "Your profile shows: full name, birthday, home city, employer, and school. What can attackers do with this?",
        options: [
          "Nothing, it's public info",
          "Use it for identity theft, phishing, or targeted attacks",
          "Just friend requests",
          "See your posts"
        ],
        correctAnswer: 1,
        taunt: "You gave attackers everything they need for identity theft on a silver platter!",
        explanation: "This combination helps attackers impersonate you, answer security questions, craft convincing phishing emails, or steal your identity."
      },
      {
        question: "You're tagged in a photo at a concert. The photo has EXIF data showing exact location and time. What's the issue?",
        options: [
          "Nothing wrong",
          "Location data reveals patterns and can be used for stalking",
          "Photo quality is compromised",
          "EXIF data uses storage"
        ],
        correctAnswer: 1,
        taunt: "Location metadata + time stamps = stalker's dream. You're being tracked!",
        explanation: "Photo metadata can reveal your location, routines, and patterns over time. Disable location services or strip metadata before posting."
      },
      {
        question: "A suspicious profile with no posts sends you a friend request. They have friends in common. What should you do?",
        options: [
          "Accept since we have mutual friends",
          "Decline - fake profiles collect info for scams",
          "Accept and message them",
          "Accept but restrict what they see"
        ],
        correctAnswer: 1,
        taunt: "That's a fake profile gathering intel on you. You just expanded their target list!",
        explanation: "Attackers create fake profiles, add random people to build 'credibility', then friend others to harvest personal information."
      },
      {
        question: "You check in at your workplace every day on social media. What information are you leaking?",
        options: [
          "Just showing I have a job",
          "Daily routine, location, and schedule - valuable for targeting attacks",
          "My employer's name",
          "Nothing important"
        ],
        correctAnswer: 1,
        taunt: "You documented your entire routine for attackers. Predictable = vulnerable!",
        explanation: "Regular check-ins reveal your schedule, routine, and when you're away from home. This data helps attackers plan phishing or physical attacks."
      },
      {
        question: "App requests access to your contacts, location, camera, and microphone to work as a 'flashlight'. What's wrong?",
        options: [
          "Normal permissions",
          "Way too many permissions - this app is harvesting your data",
          "New security features",
          "Required for brightness adjustment"
        ],
        correctAnswer: 1,
        taunt: "A flashlight needs camera access? You just installed spyware!",
        explanation: "Apps should only request necessary permissions. A flashlight doesn't need contacts or location - this is data harvesting or spyware."
      },
      {
        question: "What's the safest approach to social media privacy settings?",
        options: [
          "Public profile so everyone can find me",
          "Private profile with restricted audience for posts",
          "Friends of friends can see everything",
          "Public profile but hide my photos"
        ],
        correctAnswer: 1,
        taunt: "Public = everyone including attackers. Lock it down!",
        explanation: "Private profiles with restricted post visibility limit your exposure. Only accept requests from people you actually know in real life."
      }
    ]
  },
  
  // INTERMEDIATE LEVEL MODULES
  {
    id: "phishing-intermediate",
    title: "Advanced Phishing Detection",
    description: "Master sophisticated phishing techniques and spear phishing",
    badge: "Phishing Expert",
    icon: Mail,
    difficulty: "intermediate",
    xpReward: 375,
    tip: "Spear phishing targets specific individuals with personalized attacks - always verify requests through alternate channels",
    theory: [
      {
        title: "Spear Phishing vs Mass Phishing",
        content: "While mass phishing casts a wide net, spear phishing targets specific individuals using personal information. Attackers research their victims on social media and corporate sites.",
        visual: "🎯"
      },
      {
        title: "Business Email Compromise (BEC)",
        content: "Attackers impersonate executives or vendors to trick employees into transferring money or sharing sensitive data. These emails often bypass spam filters.",
        visual: "💼"
      },
      {
        title: "Advanced Detection Techniques",
        content: "Check email headers for the real sender, verify SSL certificates, analyze email metadata, and establish verification procedures for sensitive requests.",
        visual: "🔬"
      }
    ],
    quiz: [
      {
        question: "You receive an email from your CEO's email address asking to urgently wire $50,000 to a vendor. The email bypassed spam filters. What's the best action?",
        options: [
          "Process it immediately - it's from the CEO",
          "Call the CEO directly using a known number to verify, not reply to the email",
          "Forward to accounting to handle",
          "Reply asking for more details"
        ],
        correctAnswer: 1,
        taunt: "CEO fraud is a multi-billion dollar scam. One phone call saves millions!",
        explanation: "BEC attacks spoof executive emails. Always verify large financial requests through a separate communication channel using known contact information."
      },
      {
        question: "An email mentions your recent vacation to Hawaii (which you posted on LinkedIn). It asks you to review an 'urgent document'. What type of attack is this?",
        options: [
          "Mass phishing campaign",
          "Spear phishing using OSINT about you",
          "Regular spam",
          "Legitimate work email"
        ],
        correctAnswer: 1,
        taunt: "They did their homework on YOU. Spear phishing uses personal details for credibility!",
        explanation: "Spear phishing uses publicly available information about you to make the attack more convincing and personalized."
      },
      {
        question: "You receive a DocuSign request to sign a document, but the sender email is 'noreply@doc-usign.com'. What's wrong?",
        options: [
          "Nothing, DocuSign uses various domains",
          "The domain should be 'docusign.com' not 'doc-usign.com'",
          "DocuSign doesn't send emails",
          "The hyphen makes it more secure"
        ],
        correctAnswer: 1,
        taunt: "Typosquatting strikes again! Real DocuSign uses docusign.com, not lookalikes!",
        explanation: "Attackers register similar domains (typosquatting) to impersonate legitimate services. Always verify the exact domain spelling."
      },
      {
        question: "An email contains a legitimate company logo, correct formatting, and references a real ongoing project. What should you still verify?",
        options: [
          "Nothing - it's clearly legitimate",
          "Check the actual sender email address in the email headers",
          "Just verify the logo is correct",
          "Make sure there are no spelling errors"
        ],
        correctAnswer: 1,
        taunt: "Logos are easy to copy! Always check the ACTUAL sender address in headers!",
        explanation: "Professional-looking emails can still be phishing. Verify the sender's actual email address in the full email headers, not just the display name."
      },
      {
        question: "You get an 'invoice' PDF from a known vendor, but the file size is 15MB (usually they're 200KB). What might this indicate?",
        options: [
          "The invoice has more details this time",
          "The PDF might contain embedded malware or macros",
          "It's a higher quality scan",
          "Nothing unusual"
        ],
        correctAnswer: 1,
        taunt: "15MB for a simple invoice? That's malware hiding in there!",
        explanation: "Unusually large file sizes for simple documents can indicate embedded malware, macros, or malicious scripts."
      },
      {
        question: "An email passes SPF, DKIM, and DMARC checks but asks for sensitive information. Is it safe?",
        options: [
          "Yes, those checks prove it's legitimate",
          "No, even legitimate domains can be compromised",
          "Yes, those are the best security measures",
          "Probably safe if it has all three"
        ],
        correctAnswer: 1,
        taunt: "Authentication helps but compromised accounts pass all checks. Verify through other channels!",
        explanation: "Email authentication protocols verify the sender's domain but don't prevent compromised accounts or social engineering."
      },
      {
        question: "You receive a 'phishing test' email from your IT department asking you to click a link to verify awareness. What should you do?",
        options: [
          "Click it to prove you're aware",
          "Report it to IT first to verify it's a legitimate test",
          "Ignore it completely",
          "Delete it immediately"
        ],
        correctAnswer: 1,
        taunt: "Even 'tests' need verification! Attackers impersonate IT security tests too!",
        explanation: "Attackers often impersonate security awareness tests. Contact your IT department through official channels to verify before clicking."
      },
      {
        question: "An email references an internal project code name that's not public. Does this guarantee it's legitimate?",
        options: [
          "Yes, only insiders know that information",
          "No, data breaches or social engineering could have leaked it",
          "Yes, it must be from a colleague",
          "Probably legitimate"
        ],
        correctAnswer: 1,
        taunt: "LinkedIn, data breaches, and loose talk leak 'secret' info. Always verify!",
        explanation: "Internal information can leak through data breaches, LinkedIn posts, or social engineering. Don't rely solely on this for authentication."
      }
    ]
  },
  {
    id: "spoofed-links-intermediate",
    title: "Advanced URL Analysis",
    description: "Master complex URL manipulation and DNS spoofing techniques",
    badge: "URL Forensics",
    icon: Link,
    difficulty: "intermediate",
    xpReward: 450,
    tip: "Use online tools to analyze suspicious links and check SSL certificates before entering credentials",
    theory: [
      {
        title: "Unicode and Homograph Attacks",
        content: "Attackers use Unicode characters that look identical to Latin letters (like Cyrillic 'а' vs Latin 'a') to create fake domains that appear legitimate.",
        visual: "🔤"
      },
      {
        title: "Subdomain Tricks",
        content: "URLs like 'google.com.attacker.com' use legitimate names as subdomains. The actual domain is 'attacker.com'. Always read domains right-to-left.",
        visual: "🪜"
      },
      {
        title: "Open Redirects",
        content: "Legitimate sites with redirect vulnerabilities can be used to send you to malicious sites, bypassing URL reputation checks.",
        visual: "↪️"
      }
    ],
    quiz: [
      {
        question: "Which URL is actually controlled by 'evil.com'? Look carefully:",
        options: [
          "https://login.paypal.com",
          "https://paypal.com.evil.com",
          "https://www.paypal.com/login",
          "https://secure.paypal.com"
        ],
        correctAnswer: 1,
        taunt: "Subdomains trick you! The real domain is what comes BEFORE the TLD (.com)!",
        explanation: "In 'paypal.com.evil.com', the actual domain is 'evil.com'. 'paypal.com' is just a subdomain to trick you."
      },
      {
        question: "You see 'https://аррӏе.com' (using Cyrillic characters). What attack is this?",
        options: [
          "Normal Apple website",
          "Homograph/IDN spoofing attack using lookalike characters",
          "Apple's international site",
          "A legitimate mirror site"
        ],
        correctAnswer: 1,
        taunt: "Those aren't English letters! Homograph attacks use Unicode lookalikes!",
        explanation: "Homograph attacks use Unicode characters from other alphabets that look identical to create fake domains."
      },
      {
        question: "A link shows 'https://google.com@evil.com'. Where does it actually go?",
        options: [
          "google.com",
          "evil.com (the @ symbol indicates a username)",
          "Both sites",
          "Nowhere, it's broken"
        ],
        correctAnswer: 1,
        taunt: "The @ symbol in URLs indicates username:password@domain. You're going to evil.com!",
        explanation: "In URL syntax, anything before @ is treated as credentials, so 'google.com@evil.com' goes to evil.com."
      },
      {
        question: "You find 'https://legitimate-site.com/redirect?url=evil.com'. What's the risk?",
        options: [
          "No risk, legitimate-site.com is safe",
          "Open redirect vulnerability - you'll be sent to evil.com",
          "Double protection from two sites",
          "Legitimate site will block the redirect"
        ],
        correctAnswer: 1,
        taunt: "Open redirects abuse legit sites! You trust the first domain but land on evil.com!",
        explanation: "Open redirect vulnerabilities allow attackers to use trusted domains to redirect you to malicious sites."
      },
      {
        question: "SSL cert shows 'Issued to: bank-security.com' but URL is 'bankofamerica.com'. What does this mean?",
        options: [
          "Both are legitimate Bank of America domains",
          "Certificate mismatch - likely a MITM attack",
          "Normal for security subdomains",
          "Bank of America uses multiple certificates"
        ],
        correctAnswer: 1,
        taunt: "Certificate mismatch = red alert! Someone's intercepting your connection!",
        explanation: "SSL certificates must match the domain you're visiting. A mismatch indicates a man-in-the-middle attack."
      },
      {
        question: "A link uses HTTPS and has a valid certificate, but the domain is 'secure-paypa1.com' (1 not l). Is it safe?",
        options: [
          "Yes, HTTPS means it's secure",
          "No, HTTPS only encrypts the connection, not verify legitimacy",
          "Yes, the certificate validates it",
          "Yes, the 'secure' prefix adds protection"
        ],
        correctAnswer: 1,
        taunt: "HTTPS ≠ Trustworthy! Scam sites get certificates too. Check the domain spelling!",
        explanation: "HTTPS only means the connection is encrypted. Attackers can get SSL certificates for their fake domains."
      },
      {
        question: "What's suspicious about 'https://paypal.com-verify-account.tk'?",
        options: [
          "Nothing, it's a paypal.com subdomain",
          "The .tk TLD and the domain structure - real domain is 'paypal.com-verify-account.tk'",
          "The hyphens look weird",
          "Too many words in the domain"
        ],
        correctAnswer: 1,
        taunt: "That's not paypal.com! The actual domain is the whole thing ending in .tk!",
        explanation: "The domain is 'paypal.com-verify-account.tk', not a subdomain of paypal.com. The .tk TLD is commonly used for scams."
      },
      {
        question: "You hover over a link showing 'amazon.com' but your browser shows 'amaz0n.com' in the status bar. What happened?",
        options: [
          "Browser glitch",
          "HTML display name spoofing - the actual link is different",
          "Both are valid Amazon URLs",
          "Mobile vs desktop version"
        ],
        correctAnswer: 1,
        taunt: "Display text lies! Always check the ACTUAL URL in the status bar!",
        explanation: "HTML allows different display text than the actual URL. Always check where the link really goes before clicking."
      }
    ]
  },
  {
    id: "public-wifi-intermediate",
    title: "Network Security & MITM Prevention",
    description: "Advanced protection techniques for untrusted networks",
    badge: "Network Guardian",
    icon: Wifi,
    difficulty: "intermediate",
    xpReward: 415,
    tip: "Use WPA3 networks when available, and configure your VPN to use strong encryption protocols like WireGuard or OpenVPN",
    theory: [
      {
        title: "Packet Sniffing & ARP Spoofing",
        content: "Attackers use tools like Wireshark and ARP spoofing to intercept network traffic. They position themselves between you and the router to capture data.",
        visual: "📦"
      },
      {
        title: "Evil Twin Attacks",
        content: "Attackers create fake Wi-Fi access points with names identical to legitimate ones, capturing all your traffic when you connect.",
        visual: "👯"
      },
      {
        title: "DNS Hijacking",
        content: "On compromised networks, attackers can redirect your DNS requests, sending you to fake websites even when you type the correct URL.",
        visual: "🔀"
      }
    ],
    quiz: [
      {
        question: "You're at a hotel. Two networks: 'HotelGuest_5G' (password protected) and 'Hotel_Free_WiFi' (open). Which is likely safer?",
        options: [
          "Hotel_Free_WiFi - more convenient",
          "HotelGuest_5G - but verify with front desk first",
          "Both are equally safe",
          "Whichever has stronger signal"
        ],
        correctAnswer: 1,
        taunt: "Password protection helps, but ALWAYS verify the network name with staff first!",
        explanation: "Password-protected networks are generally safer, but attackers can create fake password-protected networks too. Always verify."
      },
      {
        question: "Your VPN shows 'Connected' but you're accessing a banking site. What else should you verify?",
        options: [
          "Nothing, VPN means you're safe",
          "Check the website's SSL certificate and URL carefully",
          "Just verify the padlock icon",
          "VPN handles all security"
        ],
        correctAnswer: 1,
        taunt: "VPN protects the connection, not the destination! Still verify you're on the REAL site!",
        explanation: "VPNs encrypt your traffic but don't prevent you from visiting fake websites. Always verify the site's legitimacy."
      },
      {
        question: "You connect to public Wi-Fi and get a certificate warning for 'google.com'. What's likely happening?",
        options: [
          "Google's certificate expired",
          "Man-in-the-middle attack intercepting your connection",
          "Public Wi-Fi requires acceptance first",
          "Normal for public networks"
        ],
        correctAnswer: 1,
        taunt: "Certificate warnings = MITM attack! Someone's intercepting your connection!",
        explanation: "Certificate warnings on well-known sites indicate someone is intercepting and trying to decrypt your HTTPS traffic."
      },
      {
        question: "Which VPN protocol offers the best security on public Wi-Fi?",
        options: [
          "PPTP (fast and easy)",
          "WireGuard or OpenVPN with AES-256",
          "L2TP (built into most devices)",
          "Any VPN is equally secure"
        ],
        correctAnswer: 1,
        taunt: "PPTP is ancient and broken! Use modern protocols like WireGuard or OpenVPN!",
        explanation: "PPTP has known vulnerabilities. WireGuard and OpenVPN with strong encryption provide the best security."
      },
      {
        question: "You notice two devices on the network with identical MAC addresses. What could this indicate?",
        options: [
          "Normal network behavior",
          "Possible ARP spoofing/MITM attack",
          "Router malfunction",
          "Good signal strength"
        ],
        correctAnswer: 1,
        taunt: "Duplicate MAC addresses = ARP spoofing! Someone's impersonating the router!",
        explanation: "Identical MAC addresses often indicate ARP spoofing, where an attacker impersonates the router to intercept traffic."
      },
      {
        question: "Your laptop shows 'Starbucks' as a saved network, and you're at a Starbucks. It auto-connects. What's the risk?",
        options: [
          "No risk - it's a saved network",
          "Evil twin attack - verify network name with staff",
          "Auto-connect is always safe for saved networks",
          "Starbucks networks are certified safe"
        ],
        correctAnswer: 1,
        taunt: "Attackers create identical network names! Auto-connect makes you an easy target!",
        explanation: "Evil twin attacks use the same network name as legitimate networks. Verify with staff and disable auto-connect."
      },
      {
        question: "You're using VPN on public Wi-Fi, but your DNS requests might still be leaked. How can you check?",
        options: [
          "DNS leaks can't happen with VPN",
          "Use online DNS leak tests to verify your DNS is routed through VPN",
          "Check if websites load faster",
          "VPN always protects DNS"
        ],
        correctAnswer: 1,
        taunt: "DNS leaks expose your browsing even with VPN! Test for leaks regularly!",
        explanation: "Some VPNs don't properly route DNS requests. Use DNS leak test tools to verify your DNS is protected."
      },
      {
        question: "Which setting should you enable on your device before connecting to public Wi-Fi?",
        options: [
          "File sharing",
          "Firewall and disable file/printer sharing",
          "Network discovery",
          "Public folder sharing"
        ],
        correctAnswer: 1,
        taunt: "Disable sharing features! Public Wi-Fi isn't for sharing your files with strangers!",
        explanation: "Enable firewall and disable file sharing, printer sharing, and network discovery to minimize attack surface on public networks."
      }
    ]
  },
  {
    id: "mitm-intermediate",
    title: "SSL/TLS Security & Certificate Analysis",
    description: "Deep dive into encrypted connections and certificate validation",
    badge: "Crypto Expert",
    icon: Shield,
    difficulty: "intermediate",
    xpReward: 525,
    tip: "Install certificate pinning apps and regularly check for certificate transparency logs",
    theory: [
      {
        title: "SSL Stripping Attacks",
        content: "Attackers downgrade HTTPS connections to HTTP, making your encrypted traffic visible. HSTS (HTTP Strict Transport Security) helps prevent this.",
        visual: "🔓"
      },
      {
        title: "Certificate Authority Compromise",
        content: "If a Certificate Authority is compromised, attackers can issue valid certificates for any domain. Certificate pinning adds extra protection.",
        visual: "🏛️"
      },
      {
        title: "Perfect Forward Secrecy",
        content: "Modern TLS uses temporary session keys that can't decrypt past communications even if the server's private key is compromised later.",
        visual: "🔐"
      }
    ],
    quiz: [
      {
        question: "You're on HTTPS but notice the URL bar doesn't show 'Secure' - instead it says 'Not Secure'. What could cause this?",
        options: [
          "Browser glitch",
          "Mixed content (HTTP resources loaded on HTTPS page)",
          "Website is loading",
          "Too many connections"
        ],
        correctAnswer: 1,
        taunt: "Mixed content warning! The page loads insecure HTTP resources - partial protection!",
        explanation: "Mixed content warnings appear when an HTTPS page loads some resources over HTTP, creating potential vulnerabilities."
      },
      {
        question: "A website's certificate is valid but issued by 'Unknown CA'. Should you proceed?",
        options: [
          "Yes, it's technically valid",
          "No, untrusted CA could be a MITM attack",
          "Yes, if the date is current",
          "Doesn't matter if the certificate is valid"
        ],
        correctAnswer: 1,
        taunt: "Unknown CA = untrusted source! Could be a MITM attack with fake certificate!",
        explanation: "Certificates from unknown or untrusted CAs may indicate a man-in-the-middle attack. Only trust certificates from recognized CAs."
      },
      {
        question: "What does HSTS (HTTP Strict Transport Security) protect against?",
        options: [
          "Phishing attacks",
          "SSL stripping and protocol downgrade attacks",
          "Malware downloads",
          "Cookie theft"
        ],
        correctAnswer: 1,
        taunt: "HSTS forces HTTPS only! Prevents attackers from downgrading to insecure HTTP!",
        explanation: "HSTS tells browsers to only use HTTPS for that site, preventing SSL stripping attacks that try to downgrade to HTTP."
      },
      {
        question: "You notice a bank website's certificate is valid for '*.bank.com'. Is this concerning?",
        options: [
          "No, wildcard certificates are normal",
          "Yes, but verify it's issued to the right organization",
          "Yes, banks should never use wildcards",
          "No, the asterisk means extra security"
        ],
        correctAnswer: 1,
        taunt: "Wildcards are common BUT verify the certificate details! Check who it's issued to!",
        explanation: "Wildcard certificates are legitimate but verify the certificate is issued to the correct organization in the certificate details."
      },
      {
        question: "What is 'certificate pinning' and why is it important?",
        options: [
          "Keeping certificates from expiring",
          "Hardcoding expected certificates to prevent fake CA certificates",
          "Making certificates load faster",
          "Encrypting certificates"
        ],
        correctAnswer: 1,
        taunt: "Pinning = trust only specific certificates! Extra protection against compromised CAs!",
        explanation: "Certificate pinning makes apps trust only specific certificates, protecting against compromised Certificate Authorities."
      },
      {
        question: "You see 'TLS 1.0' in the connection info. What's the security implication?",
        options: [
          "Fine, TLS means it's secure",
          "Outdated and vulnerable - site should use TLS 1.2 or 1.3",
          "TLS 1.0 is the most secure version",
          "No difference between TLS versions"
        ],
        correctAnswer: 1,
        taunt: "TLS 1.0 is ancient and broken! Modern sites should use TLS 1.2 or 1.3!",
        explanation: "TLS 1.0 has known vulnerabilities. Secure sites should use TLS 1.2 or 1.3 with modern cipher suites."
      },
      {
        question: "What does 'Certificate Transparency' help prevent?",
        options: [
          "Slow website loading",
          "Mis-issued certificates from compromised CAs",
          "Phishing emails",
          "DDoS attacks"
        ],
        correctAnswer: 1,
        taunt: "CT logs expose fraudulent certificates! Public audit trail catches bad CAs!",
        explanation: "Certificate Transparency creates public logs of all issued certificates, making it harder for compromised CAs to secretly issue fraudulent certificates."
      },
      {
        question: "A site shows 'EV Certificate' with green bar and company name. Does this guarantee no phishing?",
        options: [
          "Yes, EV certificates can't be used for phishing",
          "No, attackers can register companies and get EV certs",
          "Yes, only legitimate companies get EV certificates",
          "EV means Extended Validation = 100% safe"
        ],
        correctAnswer: 1,
        taunt: "EV helps but isn't perfect! Verify the COMPANY NAME matches what you expect!",
        explanation: "While EV certificates require more validation, attackers can still register similar company names and obtain EV certificates."
      }
    ]
  },
  {
    id: "smishing-vishing-intermediate",
    title: "Social Engineering & Voice Manipulation",
    description: "Defend against sophisticated phone and SMS manipulation tactics",
    badge: "Social Defense",
    icon: MessageSquare,
    difficulty: "intermediate",
    xpReward: 420,
    tip: "Establish verbal verification codes with family members to confirm identity in emergency calls",
    theory: [
      {
        title: "Caller ID Spoofing",
        content: "Attackers can fake any phone number, making calls appear from your bank, police, or even family members. Never trust caller ID alone.",
        visual: "☎️"
      },
      {
        title: "Pretexting & Authority Manipulation",
        content: "Attackers use elaborate scenarios (pretexts) and impersonate authority figures to create pressure and urgency, bypassing your rational thinking.",
        visual: "🎭"
      },
      {
        title: "SIM Swapping",
        content: "Attackers convince your mobile carrier to transfer your number to their SIM card, intercepting calls and 2FA codes. Use a PIN with your carrier.",
        visual: "📱"
      }
    ],
    quiz: [
      {
        question: "Caller ID shows your bank's official number asking to verify transactions. What's the safest response?",
        options: [
          "Provide information since caller ID matches",
          "Hang up and call the bank using the number on your card",
          "Ask them to verify their identity first",
          "Give them your account number to verify"
        ],
        correctAnswer: 1,
        taunt: "Caller ID is easily spoofed! ALWAYS call back using a number YOU look up!",
        explanation: "Caller ID spoofing is trivial. Hang up and call back using a number you independently verified from official sources."
      },
      {
        question: "A text from 'Apple' says your iCloud is locked, with a link to verify. The sender number is a regular 10-digit number. What's suspicious?",
        options: [
          "Nothing, seems legit",
          "Apple uses shortcodes (5-6 digits), not regular numbers",
          "The message is too short",
          "No suspicious signs"
        ],
        correctAnswer: 1,
        taunt: "Real company texts use shortcodes! Random 10-digit numbers = scam!",
        explanation: "Legitimate companies typically use registered shortcodes (5-6 digit numbers) for automated texts, not regular phone numbers."
      },
      {
        question: "Someone calls claiming to be IT, knowing your name, department, and recent projects. They need your password to fix an issue. What now?",
        options: [
          "Give password - they clearly work there",
          "Hang up and contact IT through official channels",
          "Give them a fake password first",
          "Ask for their employee ID"
        ],
        correctAnswer: 1,
        taunt: "LinkedIn + pretexting = convincing scam! IT NEVER asks for passwords!",
        explanation: "Attackers research targets on LinkedIn and company sites. Real IT departments never ask for passwords."
      },
      {
        question: "You get a panicked call from 'your child' saying they were arrested and need bail money. The voice sounds similar. What should you do?",
        options: [
          "Send money immediately",
          "Hang up and call your child's actual number directly",
          "Ask what they were arrested for",
          "Call the police station"
        ],
        correctAnswer: 1,
        taunt: "Voice deepfakes and panic tactics! Verify directly through known numbers!",
        explanation: "This is a common grandparent/family emergency scam. Voice can be mimicked. Always verify through known contact methods."
      },
      {
        question: "A text shows 'Message from 【Bank Name】'. What's suspicious about the formatting?",
        options: [
          "Nothing unusual",
          "Special Unicode characters often used in smishing to look official",
          "Too professional looking",
          "The bank name is mentioned"
        ],
        correctAnswer: 1,
        taunt: "Fancy brackets = Unicode tricks to look official! Real banks use plain text!",
        explanation: "Scammers use special Unicode characters to make messages look more official and bypass filters."
      },
      {
        question: "Someone calls from 'Microsoft Security' saying your IP address was used in illegal activity. They know your city. How do they know your location?",
        options: [
          "They're really from Microsoft",
          "IP geolocation is public info - it doesn't prove they're legitimate",
          "They hacked your computer",
          "Microsoft monitors all IPs"
        ],
        correctAnswer: 1,
        taunt: "IP geolocation is PUBLIC! Knowing your city means nothing!",
        explanation: "Anyone can lookup approximate location from IP addresses. This information doesn't authenticate the caller."
      },
      {
        question: "You receive a call with voice saying 'This is an automated message from Social Security Administration about suspicious activity...' What indicates it's a scam?",
        options: [
          "Nothing - seems official",
          "SSA doesn't robocall about suspicious activity or threaten consequences",
          "Automated messages are always scams",
          "The voice sounds robotic"
        ],
        correctAnswer: 1,
        taunt: "Government agencies send LETTERS, not threatening robocalls! Total scam!",
        explanation: "Real government agencies like SSA communicate primarily through mail and don't make threatening robocalls about enforcement."
      },
      {
        question: "What is 'SIM swapping' and how can you protect against it?",
        options: [
          "When phones break - buy insurance",
          "When attackers transfer your number to their SIM - set a carrier PIN",
          "When you change carriers - nothing to worry about",
          "Upgrading SIM cards for 5G"
        ],
        correctAnswer: 1,
        taunt: "SIM swap = number hijacking! Set a PIN with your carrier NOW!",
        explanation: "SIM swapping lets attackers port your number to their device, intercepting calls and 2FA. Protect with a carrier account PIN."
      }
    ]
  },
  {
    id: "attachment-safety-intermediate",
    title: "Advanced Malware Detection",
    description: "Identify sophisticated malware and zero-day exploits",
    badge: "Malware Hunter",
    icon: Download,
    difficulty: "intermediate",
    xpReward: 400,
    tip: "Use sandboxed environments to open suspicious files and check file hashes against VirusTotal",
    theory: [
      {
        title: "Macro Malware & Document Exploits",
        content: "Office documents can contain malicious macros that execute code. Modern exploits don't even need you to enable macros.",
        visual: "📄"
      },
      {
        title: "Steganography & Hidden Payloads",
        content: "Malware can be hidden inside images or other files using steganography, bypassing traditional antivirus detection.",
        visual: "🖼️"
      },
      {
        title: "Fileless Malware",
        content: "Advanced attacks execute entirely in memory without writing files to disk, making them harder to detect and remove.",
        visual: "💭"
      }
    ],
    quiz: [
      {
        question: "You receive an Excel file 'Invoice_Q4.xlsm'. What does the '.xlsm' extension indicate?",
        options: [
          "It's a regular Excel file",
          "Macro-enabled file - could contain malicious code",
          "Extra security features",
          "Modern Excel format"
        ],
        correctAnswer: 1,
        taunt: ".xlsm = macros enabled! Proceed with extreme caution!",
        explanation: "The 'm' in .xlsm indicates macro support. Macros can execute malicious code, so treat these files with extra caution."
      },
      {
        question: "A PDF file is 50KB but your antivirus doesn't detect anything. Could it still be dangerous?",
        options: [
          "No, antivirus checked it",
          "Yes, zero-day exploits or encrypted payloads bypass antivirus",
          "PDFs can't be dangerous",
          "50KB is too small for malware"
        ],
        correctAnswer: 1,
        taunt: "Zero-day exploits = undetected by antivirus! Small files can still be weaponized!",
        explanation: "Zero-day exploits, obfuscation, and encryption can allow malware to bypass antivirus detection."
      },
      {
        question: "You're checking a suspicious file. What's the purpose of comparing its SHA-256 hash on VirusTotal?",
        options: [
          "To make the file load faster",
          "To see if others have flagged this exact file as malicious",
          "To decrypt the file",
          "To compress the file"
        ],
        correctAnswer: 1,
        taunt: "Hash checking = see if others found this file malicious! Crowdsourced detection!",
        explanation: "File hashes uniquely identify files. VirusTotal shows if that exact file has been reported as malicious by multiple antivirus engines."
      },
      {
        question: "What is 'polyglot malware'?",
        options: [
          "Malware that speaks multiple languages",
          "Files that are valid as multiple file types simultaneously",
          "Malware from multiple countries",
          "Extra-large malware files"
        ],
        correctAnswer: 1,
        taunt: "Polyglot = looks like image.jpg but executes as malware.exe! Sneaky!",
        explanation: "Polyglot files are crafted to be valid as multiple file types, bypassing filters that check file extensions."
      },
      {
        question: "You enable 'Protected View' in Office. What does this protect against?",
        options: [
          "Prevents anyone else from viewing your document",
          "Opens untrusted files in sandbox, blocking macros and exploits",
          "Encrypts your documents",
          "Makes documents read-only"
        ],
        correctAnswer: 1,
        taunt: "Protected View = sandbox mode! Opens suspicious files safely!",
        explanation: "Protected View opens untrusted documents in a restricted mode, preventing macros and exploits from executing."
      },
      {
        question: "A .zip file contains 'invoice.pdf.exe'. What's the attack technique?",
        options: [
          "Normal PDF file",
          "Double extension to hide .exe and trick you",
          "Compressed PDF",
          "Secure encrypted invoice"
        ],
        correctAnswer: 1,
        taunt: "Double extension trick! Windows hides known extensions, shows .pdf hides .exe!",
        explanation: "Attackers use double extensions because Windows hides known file extensions by default, so 'invoice.pdf.exe' appears as 'invoice.pdf'."
      },
      {
        question: "What is 'watering hole' attack related to downloads?",
        options: [
          "Malware hidden in water utility bills",
          "Compromising websites you frequently visit to distribute malware",
          "Attacks at coffee shops",
          "Flooding sites with malware"
        ],
        correctAnswer: 1,
        taunt: "Watering hole = compromise sites YOU trust! Targeted attack on your browsing habits!",
        explanation: "Attackers identify sites a target frequently visits and compromise them to distribute malware specifically to those users."
      },
      {
        question: "What does 'sandboxing' suspicious files mean?",
        options: [
          "Storing files in cloud storage",
          "Opening files in isolated virtual environment to observe behavior safely",
          "Deleting files permanently",
          "Compressing files"
        ],
        correctAnswer: 1,
        taunt: "Sandbox = safe isolation chamber! Watch malware behavior without risking your system!",
        explanation: "Sandboxing runs suspicious files in an isolated virtual environment where they can't harm your actual system."
      }
    ]
  },
  {
    id: "2fa-intermediate",
    title: "Authentication Security & MFA Bypass",
    description: "Protect against advanced account takeover techniques",
    badge: "Auth Specialist",
    icon: KeyRound,
    difficulty: "intermediate",
    xpReward: 435,
    tip: "Use hardware security keys (FIDO2/U2F) for critical accounts - they can't be phished",
    theory: [
      {
        title: "2FA Fatigue Attacks",
        content: "Attackers spam 2FA notifications hoping you'll approve one out of frustration. Some tricks involved calling pretending to be IT support.",
        visual: "😩"
      },
      {
        title: "Session Hijacking",
        content: "Even with 2FA, attackers can steal active session cookies to bypass authentication. Use browser isolation and log out after sensitive operations.",
        visual: "🍪"
      },
      {
        title: "MFA Method Weaknesses",
        content: "SMS-based 2FA is vulnerable to SIM swapping. Authenticator apps are better, but hardware keys (FIDO2) are most secure.",
        visual: "🔑"
      }
    ],
    quiz: [
      {
        question: "You get 20 push notifications for 2FA approval in 5 minutes. What's happening?",
        options: [
          "System glitch - approve one",
          "2FA fatigue attack - deny all and change password immediately",
          "Someone's testing your account",
          "Approve one to make it stop"
        ],
        correctAnswer: 1,
        taunt: "MFA fatigue = spam you until you give in! Deny all and secure your account!",
        explanation: "Attackers spam 2FA requests hoping you'll approve out of frustration. This means your password is already compromised."
      },
      {
        question: "Why are hardware security keys (like YubiKey) more secure than SMS 2FA?",
        options: [
          "They're more expensive",
          "Phishing-resistant and can't be intercepted like SMS",
          "They work faster",
          "They're easier to use"
        ],
        correctAnswer: 1,
        taunt: "Hardware keys = phish-proof! SMS can be intercepted, keys can't!",
        explanation: "Hardware keys use cryptographic challenge-response that can't be phished or intercepted, unlike SMS codes."
      },
      {
        question: "A site offers 'SMS, authenticator app, or backup codes' for 2FA. You enabled all three. What's the weakest link?",
        options: [
          "Backup codes",
          "SMS - vulnerable to SIM swapping",
          "Authenticator app",
          "All equally secure"
        ],
        correctAnswer: 1,
        taunt: "Attackers target the weakest link! SMS undermines your stronger methods!",
        explanation: "Attackers will use the weakest method - SMS. Having SMS enabled as an option weakens your overall security."
      },
      {
        question: "What is 'session hijacking' and how does it bypass 2FA?",
        options: [
          "Stealing password only",
          "Stealing the authenticated session cookie after 2FA is completed",
          "Guessing 2FA codes",
          "Hacking the 2FA app"
        ],
        correctAnswer: 1,
        taunt: "Session hijacking = steal cookies, skip 2FA! Logout after sensitive operations!",
        explanation: "After successful authentication, session cookies maintain your logged-in state. Stealing these cookies bypasses 2FA entirely."
      },
      {
        question: "Your authenticator app generates codes offline. A site claims they need to 'sync' your app by entering a code. What's happening?",
        options: [
          "Normal sync procedure",
          "Phishing scam - TOTP codes never need syncing",
          "Required security update",
          "App maintenance"
        ],
        correctAnswer: 1,
        taunt: "TOTP apps don't sync! They're phishing for your current code to log in!",
        explanation: "TOTP (Time-based One-Time Password) apps work offline using shared secrets. They never need 'syncing' - this is a phishing attempt."
      },
      {
        question: "What are 'backup codes' for and how should you store them?",
        options: [
          "For when you forget your password",
          "One-time codes for account recovery - store offline/printed",
          "Extra security codes for friends",
          "For logging in from public computers"
        ],
        correctAnswer: 1,
        taunt: "Backup codes = last resort access! Print and store securely, never online!",
        explanation: "Backup codes let you access your account if you lose your 2FA device. Store them offline (printed/safe) never digitally."
      },
      {
        question: "A phishing site looks identical to the real site and prompts for 2FA. What happens if you enter the code?",
        options: [
          "Nothing, the code is random",
          "Attackers use it immediately to log into the real site",
          "The site will reject it",
          "2FA prevents this"
        ],
        correctAnswer: 1,
        taunt: "Real-time phishing = they enter your code IMMEDIATELY on the real site!",
        explanation: "Sophisticated phishing sites act as man-in-the-middle, forwarding your credentials and 2FA code to the real site in real-time."
      },
      {
        question: "What's the main vulnerability of SMS-based 2FA?",
        options: [
          "SMS is slow",
          "SIM swapping and SMS interception",
          "SMS doesn't work internationally",
          "Costs money"
        ],
        correctAnswer: 1,
        taunt: "SMS 2FA = vulnerable to SIM swapping! Upgrade to app-based or hardware keys!",
        explanation: "SMS can be intercepted through SIM swapping attacks or SS7 protocol vulnerabilities, making it the weakest MFA method."
      }
    ]
  },
  {
    id: "social-media-intermediate",
    title: "Advanced OSINT & Digital Footprint",
    description: "Master advanced privacy protection and information security",
    badge: "OSINT Expert",
    icon: Eye,
    difficulty: "intermediate",
    xpReward: 480,
    tip: "Regularly search for yourself online and set up Google Alerts for your name to monitor your digital footprint",
    theory: [
      {
        title: "Metadata & Geolocation Risks",
        content: "Photos contain EXIF data including GPS coordinates, camera info, and timestamps. This metadata reveals your location, habits, and equipment.",
        visual: "📍"
      },
      {
        title: "Social Engineering via OSINT",
        content: "Attackers piece together information from multiple sources to build detailed profiles for targeted attacks. Everything you post is a puzzle piece.",
        visual: "🧩"
      },
      {
        title: "Data Broker & People Search Sites",
        content: "Your information is sold by data brokers and aggregated on people search sites. You can opt-out, but it requires regular maintenance.",
        visual: "🗄️"
      }
    ],
    quiz: [
      {
        question: "You post a photo of your new house. What information could attackers extract even if you don't mention the address?",
        options: [
          "Nothing without the address",
          "GPS coordinates from EXIF data, house number from photo, nearby landmarks",
          "Only the house color",
          "Just the general neighborhood"
        ],
        correctAnswer: 1,
        taunt: "Photos leak EVERYTHING! EXIF data + visual analysis = exact location!",
        explanation: "Photos contain EXIF metadata with GPS coordinates. Additionally, visible house numbers, landmarks, and street signs can pinpoint your location."
      },
      {
        question: "What is 'doxing' and how is it related to OSINT?",
        options: [
          "A type of virus",
          "Publicly exposing someone's private information gathered through OSINT",
          "A privacy setting",
          "Encrypted messaging"
        ],
        correctAnswer: 1,
        taunt: "Doxing = weaponized OSINT! Public info becomes targeted harassment!",
        explanation: "Doxing is collecting and publishing someone's private information (address, phone, workplace) using OSINT techniques, often for harassment."
      },
      {
        question: "You find your info on a people-search website like Spokeo. What should you do?",
        options: [
          "Nothing, it's public info",
          "Submit opt-out requests to each site (ongoing process)",
          "Report them to police",
          "Ignore it - can't be removed"
        ],
        correctAnswer: 1,
        taunt: "Data brokers sell YOUR info! Opt-out is tedious but necessary!",
        explanation: "You can request removal from data broker sites, but it's an ongoing process as they constantly re-add information from new sources."
      },
      {
        question: "What information should you NEVER share about your job on social media?",
        options: [
          "Your job title",
          "Specific security procedures, system names, or internal projects",
          "Your company name",
          "That you got promoted"
        ],
        correctAnswer: 1,
        taunt: "Internal details = attacker intelligence! Never leak security procedures or system info!",
        explanation: "Specific internal details help attackers craft targeted spear phishing and understand your company's security posture."
      },
      {
        question: "You're going on vacation and want to share photos. What's the safest approach?",
        options: [
          "Post photos in real-time",
          "Wait until you return home to post vacation photos",
          "Post but hide your location",
          "Only post to close friends in real-time"
        ],
        correctAnswer: 1,
        taunt: "'I'm not home' = invitation to burglars! Post AFTER you return!",
        explanation: "Posting vacation photos in real-time advertises that your home is empty. Wait until you return to share trip photos."
      },
      {
        question: "What is 'EXIF data' and why should you remove it before posting photos?",
        options: [
          "Photo filters and effects",
          "Metadata including GPS location, camera info, and timestamp",
          "Photo resolution settings",
          "Color correction data"
        ],
        correctAnswer: 1,
        taunt: "EXIF = hidden location tracker! Strip metadata before posting!",
        explanation: "EXIF data is embedded metadata in photos that can reveal your exact GPS location, when the photo was taken, and device information."
      },
      {
        question: "An attacker researches you for a spear phishing attack. What combination of public info is most dangerous?",
        options: [
          "Just your email address",
          "Job role + boss's name + current projects + personal interests",
          "Only your job title",
          "Your profile picture"
        ],
        correctAnswer: 1,
        taunt: "Complete profile = perfect phishing setup! Each detail makes attacks more convincing!",
        explanation: "Combining professional and personal information allows attackers to craft highly personalized and convincing spear phishing attacks."
      },
      {
        question: "What's the risk of posting about your pet's name, your high school, or your first car?",
        options: [
          "No risk, it's just memories",
          "These are common security question answers",
          "People might judge your choices",
          "It's boring content"
        ],
        correctAnswer: 1,
        taunt: "Security question answers = publicly posted! Makes account recovery attacks easy!",
        explanation: "These personal facts are commonly used as security questions. Posting them publicly allows attackers to bypass account recovery."
      }
    ]
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing Fundamentals",
    description: "Learn the basics of ethical hacking and security assessment",
    badge: "Ethical Hacker",
    icon: Bug,
    difficulty: "advanced",
    xpReward: 600,
    tip: "Always get written authorization before performing penetration tests",
    theory: [
      {
        title: "What is Penetration Testing?",
        content: "Penetration testing is authorized simulated cyber attacks to evaluate security. It identifies vulnerabilities before malicious actors exploit them.",
        visual: "🎯"
      },
      {
        title: "Reconnaissance & Enumeration",
        content: "The first phase involves gathering information about the target system - open ports, services, versions, and potential entry points.",
        visual: "🔍"
      },
      {
        title: "Exploitation & Post-Exploitation",
        content: "After identifying vulnerabilities, testers attempt to exploit them to gain access, then assess the extent of possible damage and data exposure.",
        visual: "⚡"
      }
    ],
    quiz: [
      {
        question: "What is the FIRST phase of a penetration test?",
        options: [
          "Exploitation",
          "Reconnaissance and information gathering",
          "Gaining root access",
          "Writing the report"
        ],
        correctAnswer: 1,
        taunt: "You can't hack what you don't understand! Recon comes first, always!",
        explanation: "Reconnaissance is the initial phase where testers gather information about the target to identify potential attack vectors."
      },
      {
        question: "What does 'privilege escalation' mean in penetration testing?",
        options: [
          "Getting faster internet",
          "Gaining higher-level access from a low-privilege account",
          "Increasing scan speed",
          "Adding more users"
        ],
        correctAnswer: 1,
        taunt: "Privilege escalation = going from user to admin! Basic concept, how'd you miss it?",
        explanation: "Privilege escalation involves exploiting vulnerabilities to gain higher access levels, often from standard user to administrator."
      },
      {
        question: "What is a 'zero-day vulnerability'?",
        options: [
          "A vulnerability that's been known for years",
          "A vulnerability unknown to the vendor with no patch available",
          "A bug fixed the same day it's found",
          "A vulnerability that only works on old systems"
        ],
        correctAnswer: 1,
        taunt: "Zero-day = zero patch! Most dangerous vulns because no fix exists yet!",
        explanation: "Zero-day vulnerabilities are unknown to the software vendor, meaning there's no patch and systems are maximally exposed."
      },
      {
        question: "What tool is commonly used for network port scanning?",
        options: [
          "Microsoft Word",
          "Nmap",
          "Photoshop",
          "Chrome DevTools"
        ],
        correctAnswer: 1,
        taunt: "Nmap is Pentesting 101! Every security pro knows this tool!",
        explanation: "Nmap (Network Mapper) is the industry-standard tool for discovering hosts and services on a network."
      },
      {
        question: "What is SQL injection and why is it dangerous?",
        options: [
          "A way to speed up databases",
          "Injecting malicious SQL code to manipulate or extract database data",
          "A database backup method",
          "A way to optimize queries"
        ],
        correctAnswer: 1,
        taunt: "SQL injection = dump entire databases! One of the most critical web vulnerabilities!",
        explanation: "SQL injection allows attackers to execute arbitrary SQL commands, potentially exposing, modifying, or deleting entire databases."
      },
      {
        question: "What's the difference between 'white box' and 'black box' testing?",
        options: [
          "Color of the test environment",
          "White box has internal knowledge, black box has zero prior knowledge",
          "Testing speed",
          "Cost of testing"
        ],
        correctAnswer: 1,
        taunt: "White box = source code access. Black box = completely blind. Fundamental concepts!",
        explanation: "White box testing involves full knowledge of the system (code, architecture), while black box simulates an external attacker with no inside information."
      },
      {
        question: "Why must penetration testers always have written authorization?",
        options: [
          "For documentation purposes only",
          "Without authorization, it's illegal hacking regardless of intent",
          "To get paid",
          "It's just a formality"
        ],
        correctAnswer: 1,
        taunt: "No authorization = you're a criminal hacker! Always get it in writing!",
        explanation: "Unauthorized penetration testing is illegal and indistinguishable from malicious hacking. Written authorization protects both tester and client."
      },
      {
        question: "What is a 'reverse shell' in penetration testing?",
        options: [
          "A backdoor that connects back to the attacker's machine",
          "Undoing previous commands",
          "A type of encryption",
          "A shell that runs backwards"
        ],
        correctAnswer: 0,
        taunt: "Reverse shell = target calls home to you! Bypasses firewalls like a boss!",
        explanation: "A reverse shell connects from the compromised target back to the attacker, often bypassing firewall restrictions that block incoming connections."
      }
    ]
  },
  {
    id: "cryptography",
    title: "Cryptography Fundamentals",
    description: "Understand encryption, hashing, and cryptographic protocols",
    badge: "Cipher Master",
    icon: Lock,
    difficulty: "advanced",
    xpReward: 650,
    tip: "Never roll your own crypto - always use established, peer-reviewed algorithms",
    theory: [
      {
        title: "Symmetric vs Asymmetric Encryption",
        content: "Symmetric encryption uses one key for both encryption and decryption (AES). Asymmetric uses key pairs - public key encrypts, private key decrypts (RSA).",
        visual: "🔐"
      },
      {
        title: "Hashing vs Encryption",
        content: "Hashing is one-way (can't be reversed) and used for passwords. Encryption is two-way and used for data that needs to be decrypted later.",
        visual: "🔒"
      },
      {
        title: "Digital Signatures & Certificates",
        content: "Digital signatures prove authenticity using asymmetric crypto. SSL/TLS certificates establish trust and encrypt web traffic.",
        visual: "📜"
      }
    ],
    quiz: [
      {
        question: "What's the fundamental difference between hashing and encryption?",
        options: [
          "They're the same thing",
          "Hashing is one-way (irreversible), encryption is two-way (reversible)",
          "Hashing is faster",
          "Encryption is more secure"
        ],
        correctAnswer: 1,
        taunt: "Hashing can't be undone! Basic crypto concept - learn the difference!",
        explanation: "Hashing creates a fixed-size fingerprint that cannot be reversed. Encryption transforms data that can be decrypted with the right key."
      },
      {
        question: "Why should passwords be hashed instead of encrypted?",
        options: [
          "Hashing is faster",
          "If encrypted, anyone with the decryption key could retrieve all passwords",
          "It's cheaper",
          "It takes less space"
        ],
        correctAnswer: 1,
        taunt: "Encrypted passwords = recoverable passwords! One key compromise = all passwords leaked!",
        explanation: "With encryption, compromising the key exposes all passwords. Hashing is one-way, so even with database access, passwords remain protected."
      },
      {
        question: "What is a 'salt' in password hashing?",
        options: [
          "A seasoning for data",
          "Random data added to passwords before hashing to prevent rainbow table attacks",
          "A type of encryption",
          "A password requirement"
        ],
        correctAnswer: 1,
        taunt: "Salting stops rainbow tables! Without it, your hashes are vulnerable!",
        explanation: "Salts are random values added to passwords before hashing, ensuring identical passwords produce different hashes and defeating rainbow tables."
      },
      {
        question: "In asymmetric encryption (RSA), which key do you share publicly?",
        options: [
          "Private key",
          "Public key",
          "Both keys",
          "Neither key"
        ],
        correctAnswer: 1,
        taunt: "It's literally called the PUBLIC key! Keep private key secret, share public key!",
        explanation: "The public key can be freely shared for others to encrypt messages only you (with the private key) can decrypt."
      },
      {
        question: "What is a 'rainbow table' attack?",
        options: [
          "Colorful password cracking",
          "Precomputed tables of hash values used to crack passwords quickly",
          "A type of SQL injection",
          "Network packet analysis"
        ],
        correctAnswer: 1,
        taunt: "Rainbow tables = precomputed hashes! Salting defeats them completely!",
        explanation: "Rainbow tables contain precomputed hashes of common passwords, allowing instant password cracking unless salts are used."
      },
      {
        question: "What does SSL/TLS provide for web traffic?",
        options: [
          "Faster loading",
          "Encryption in transit and server authentication",
          "Better SEO only",
          "Colorful padlock icon"
        ],
        correctAnswer: 1,
        taunt: "SSL/TLS = encrypted connection + verified server! Not just a pretty icon!",
        explanation: "SSL/TLS encrypts data in transit and authenticates the server's identity via certificates, preventing eavesdropping and impersonation."
      },
      {
        question: "Why should you NEVER create your own encryption algorithm?",
        options: [
          "It's too time-consuming",
          "Cryptography requires peer review; custom crypto is almost certainly flawed",
          "It's illegal",
          "It's too expensive"
        ],
        correctAnswer: 1,
        taunt: "Home-brew crypto = broken crypto! Use AES, not your 'clever' algorithm!",
        explanation: "Cryptography is extremely complex. Even experts use peer-reviewed, battle-tested algorithms. Custom crypto contains subtle flaws attackers will exploit."
      },
      {
        question: "What is 'perfect forward secrecy' in encryption?",
        options: [
          "Encryption that never fails",
          "Compromising long-term keys doesn't expose past session keys",
          "Faster encryption",
          "Military-grade encryption"
        ],
        correctAnswer: 1,
        taunt: "PFS = past sessions stay encrypted even if keys leak! Critical for long-term security!",
        explanation: "Perfect Forward Secrecy generates unique session keys that aren't derived from long-term keys, protecting past communications if keys are compromised."
      }
    ]
  },
  {
    id: "network-protocols",
    title: "Network Protocols & Architecture",
    description: "Deep dive into TCP/IP, DNS, and network security",
    badge: "Network Architect",
    icon: Network,
    difficulty: "advanced",
    xpReward: 600,
    tip: "Understanding protocols is essential for both attack and defense",
    theory: [
      {
        title: "OSI Model & TCP/IP Stack",
        content: "The 7-layer OSI model (Physical, Data Link, Network, Transport, Session, Presentation, Application) defines how network communication works at different levels.",
        visual: "📡"
      },
      {
        title: "DNS & Domain Name System",
        content: "DNS translates domain names to IP addresses. DNS spoofing and cache poisoning redirect users to malicious sites by manipulating this process.",
        visual: "🌐"
      },
      {
        title: "TCP Handshake & SYN Floods",
        content: "TCP's 3-way handshake (SYN, SYN-ACK, ACK) establishes connections. SYN flood attacks exploit this by overwhelming servers with incomplete handshakes.",
        visual: "🤝"
      }
    ],
    quiz: [
      {
        question: "What are the three steps of a TCP three-way handshake?",
        options: [
          "CONNECT, SEND, RECEIVE",
          "SYN, SYN-ACK, ACK",
          "REQUEST, RESPONSE, CONFIRM",
          "INIT, DATA, CLOSE"
        ],
        correctAnswer: 1,
        taunt: "SYN, SYN-ACK, ACK! Networking basics - memorize this!",
        explanation: "TCP establishes connections with SYN (synchronize), SYN-ACK (synchronize-acknowledge), and ACK (acknowledge) packets."
      },
      {
        question: "What is DNS cache poisoning?",
        options: [
          "Deleting DNS records",
          "Inserting false DNS entries to redirect traffic to malicious servers",
          "Speeding up DNS lookups",
          "Encrypting DNS queries"
        ],
        correctAnswer: 1,
        taunt: "DNS poisoning = redirect victims to fake sites! Fundamental attack vector!",
        explanation: "DNS cache poisoning inserts fraudulent DNS records, redirecting users to attacker-controlled servers when they visit legitimate domains."
      },
      {
        question: "What layer of the OSI model does a firewall primarily operate at?",
        options: [
          "Physical layer only",
          "Network (Layer 3) and Transport (Layer 4) layers",
          "Presentation layer",
          "Application layer only"
        ],
        correctAnswer: 1,
        taunt: "Firewalls filter at Network/Transport layers! Know your OSI model!",
        explanation: "Traditional firewalls operate at Layer 3 (IP addresses) and Layer 4 (ports/protocols). Next-gen firewalls also inspect application layer."
      },
      {
        question: "What is a SYN flood attack?",
        options: [
          "Too many legitimate users",
          "Overwhelming a server with incomplete TCP handshakes",
          "Flooding with complete connections",
          "DNS attack"
        ],
        correctAnswer: 1,
        taunt: "SYN floods = half-open connections exhaust resources! Classic DoS attack!",
        explanation: "SYN floods send SYN packets but never complete the handshake, exhausting server resources tracking incomplete connections."
      },
      {
        question: "What does 'ARP spoofing' allow an attacker to do?",
        options: [
          "Speed up the network",
          "Intercept traffic by poisoning ARP tables to redirect packets",
          "Encrypt traffic",
          "Block all network access"
        ],
        correctAnswer: 1,
        taunt: "ARP spoofing = become the man-in-the-middle! Layer 2 attack!",
        explanation: "ARP spoofing sends fake ARP messages to associate the attacker's MAC address with another device's IP, redirecting traffic through the attacker."
      },
      {
        question: "Why is HTTPS important beyond 'just encryption'?",
        options: [
          "Makes sites load faster",
          "Provides encryption AND server authentication via certificates",
          "Better for SEO only",
          "Prevents all attacks"
        ],
        correctAnswer: 1,
        taunt: "HTTPS = encryption + authentication! Stops both eavesdropping and impersonation!",
        explanation: "HTTPS encrypts traffic to prevent interception and validates the server's identity via certificates to prevent impersonation attacks."
      },
      {
        question: "What is 'port scanning' used for in network reconnaissance?",
        options: [
          "Speeding up connections",
          "Identifying open ports and services running on a target",
          "Blocking ports",
          "Encrypting ports"
        ],
        correctAnswer: 1,
        taunt: "Port scanning reveals attack surface! First step in targeting a system!",
        explanation: "Port scanning probes a target to discover which ports are open and what services are running, identifying potential entry points."
      },
      {
        question: "What does 'DDoS' stand for and how does it differ from DoS?",
        options: [
          "Direct Denial of Service - same as DoS",
          "Distributed Denial of Service - attacks from multiple sources",
          "Double Denial of Service - twice as powerful",
          "Dynamic Denial of Service - changes constantly"
        ],
        correctAnswer: 1,
        taunt: "DDoS = Distributed! Many zombies attacking simultaneously = harder to stop!",
        explanation: "DDoS uses multiple compromised systems (botnet) to overwhelm the target, making it much harder to block than single-source DoS."
      }
    ]
  },
  {
    id: "incident-response",
    title: "Incident Response & Forensics",
    description: "Learn to detect, contain, and recover from security breaches",
    badge: "Incident Commander",
    icon: AlertTriangle,
    difficulty: "advanced",
    xpReward: 700,
    tip: "Have an incident response plan BEFORE you need it",
    theory: [
      {
        title: "Incident Response Lifecycle",
        content: "The six phases: Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned. Each phase is critical for effective response.",
        visual: "♻️"
      },
      {
        title: "Digital Forensics Principles",
        content: "Preserve evidence integrity through proper collection, documentation, and chain of custody. Never work on original evidence - always create forensic images.",
        visual: "🔬"
      },
      {
        title: "Indicators of Compromise (IoCs)",
        content: "IoCs are artifacts that indicate a security breach: unusual network traffic, unexpected files, suspicious processes, or unauthorized access attempts.",
        visual: "🚨"
      }
    ],
    quiz: [
      {
        question: "What is the FIRST step when you detect a potential security breach?",
        options: [
          "Immediately shut down all systems",
          "Contain the threat while preserving evidence",
          "Delete everything",
          "Post about it on social media"
        ],
        correctAnswer: 1,
        taunt: "Contain first, then investigate! Don't destroy evidence or cause chaos!",
        explanation: "Containment prevents spread while preserving evidence for investigation. Hasty actions can destroy critical forensic data."
      },
      {
        question: "What is 'chain of custody' in digital forensics?",
        options: [
          "Password management",
          "Documented trail proving evidence hasn't been tampered with",
          "Network topology",
          "Backup schedule"
        ],
        correctAnswer: 1,
        taunt: "Chain of custody = legal admissibility! Break it and evidence is worthless in court!",
        explanation: "Chain of custody documents who handled evidence, when, and what they did - critical for legal proceedings and proving evidence integrity."
      },
      {
        question: "Why should you NEVER analyze a compromised system directly?",
        options: [
          "It's too slow",
          "You could alter evidence or trigger destructive malware",
          "It's inconvenient",
          "It costs too much"
        ],
        correctAnswer: 1,
        taunt: "Work on copies! Analyzing live systems destroys evidence and risks triggers!",
        explanation: "Direct analysis can modify timestamps, activate malware, or destroy evidence. Always work on forensic images of the original system."
      },
      {
        question: "What is a 'memory dump' and why is it critical in forensics?",
        options: [
          "Deleted files",
          "Snapshot of RAM containing running processes, keys, and volatile data",
          "Hard drive backup",
          "Network logs"
        ],
        correctAnswer: 1,
        taunt: "Memory dumps capture volatile data lost on shutdown! Critical evidence lives in RAM!",
        explanation: "RAM contains running malware, encryption keys, and active connections that disappear on shutdown. Memory dumps must be captured immediately."
      },
      {
        question: "What does 'eradication' mean in incident response?",
        options: [
          "Firing employees",
          "Removing malware, backdoors, and closing vulnerabilities",
          "Deleting all data",
          "Unplugging everything"
        ],
        correctAnswer: 1,
        taunt: "Eradication = kill the threat completely! Remove malware AND close the entry point!",
        explanation: "Eradication removes the threat and fixes vulnerabilities to prevent reinfection. Just removing malware isn't enough if the door stays open."
      },
      {
        question: "What are 'Indicators of Compromise' (IoCs)?",
        options: [
          "Compromised passwords",
          "Forensic artifacts indicating a breach occurred",
          "Network speed metrics",
          "Employee mistakes"
        ],
        correctAnswer: 1,
        taunt: "IoCs = breadcrumbs attackers leave behind! Learn to spot them early!",
        explanation: "IoCs are evidence of intrusions: suspicious IPs, malware signatures, unusual file hashes, or abnormal network patterns."
      },
      {
        question: "Why is the 'Lessons Learned' phase critical?",
        options: [
          "To blame someone",
          "To improve defenses and prevent recurrence",
          "For compliance paperwork",
          "To write a blog post"
        ],
        correctAnswer: 1,
        taunt: "Lessons Learned = get better! Repeat incidents = you learned nothing!",
        explanation: "Analyzing what happened, how attackers succeeded, and how to prevent it improves overall security posture for future incidents."
      },
      {
        question: "What is 'ransomware containment' best practice?",
        options: [
          "Pay the ransom immediately",
          "Isolate infected systems, don't pay, restore from clean backups",
          "Restart all systems",
          "Negotiate with attackers"
        ],
        correctAnswer: 1,
        taunt: "Never pay ransomware! Isolate, identify, restore from backups!",
        explanation: "Paying encourages future attacks and doesn't guarantee data recovery. Isolate spread, identify the strain, restore from uninfected backups."
      }
    ]
  },
  {
    id: "threat-intelligence",
    title: "Threat Intelligence & Analysis",
    description: "Master threat hunting and intelligence-driven security",
    badge: "Threat Hunter",
    icon: Target,
    difficulty: "advanced",
    xpReward: 650,
    tip: "Proactive threat hunting finds attackers before they strike",
    theory: [
      {
        title: "Threat Intelligence Types",
        content: "Strategic (high-level risks), Tactical (TTPs - tactics, techniques, procedures), Operational (specific campaigns), and Technical (IoCs - IPs, hashes, domains).",
        visual: "🎯"
      },
      {
        title: "MITRE ATT&CK Framework",
        content: "Knowledge base of adversary tactics and techniques based on real-world observations. It maps out how attackers operate from initial access to exfiltration.",
        visual: "🗺️"
      },
      {
        title: "Threat Hunting vs Monitoring",
        content: "Monitoring waits for alerts. Threat hunting proactively searches for hidden threats using hypotheses about attacker behavior.",
        visual: "🔭"
      }
    ],
    quiz: [
      {
        question: "What is the MITRE ATT&CK framework used for?",
        options: [
          "Password management",
          "Documenting adversary tactics, techniques, and procedures (TTPs)",
          "Network design",
          "Compliance auditing"
        ],
        correctAnswer: 1,
        taunt: "ATT&CK = attacker playbook! Maps how real threats operate!",
        explanation: "MITRE ATT&CK is a comprehensive matrix of real-world adversary behaviors, helping defenders understand and detect attack patterns."
      },
      {
        question: "What's the difference between threat intelligence and threat hunting?",
        options: [
          "No difference",
          "Intelligence provides info; hunting actively searches for threats",
          "Hunting is automated, intelligence is manual",
          "Intelligence is slower"
        ],
        correctAnswer: 1,
        taunt: "Intelligence = knowledge! Hunting = action! One feeds the other!",
        explanation: "Threat intelligence provides context and indicators. Threat hunting uses that intelligence to proactively search for undetected threats."
      },
      {
        question: "What does 'TTP' stand for in threat intelligence?",
        options: [
          "Time To Patch",
          "Tactics, Techniques, and Procedures",
          "Threat Testing Protocol",
          "Total Threat Protection"
        ],
        correctAnswer: 1,
        taunt: "TTPs = how attackers operate! Learn to recognize their patterns!",
        explanation: "TTPs describe the behavior and methods attackers use, more valuable than IoCs alone since attackers can't easily change their methods."
      },
      {
        question: "What is 'lateral movement' in a security context?",
        options: [
          "Moving servers physically",
          "Attackers spreading from one compromised system to others",
          "Firewall configuration",
          "Network load balancing"
        ],
        correctAnswer: 1,
        taunt: "Lateral movement = spreading through your network! Stop them at initial entry!",
        explanation: "After initial compromise, attackers move laterally across the network to find valuable targets and establish persistence."
      },
      {
        question: "Why are TTPs more valuable than IoCs alone?",
        options: [
          "TTPs are newer",
          "TTPs describe behavior that's harder for attackers to change than IoCs",
          "TTPs are free",
          "IoCs don't work"
        ],
        correctAnswer: 1,
        taunt: "Attackers change IPs/domains easily but can't easily change their methods!",
        explanation: "IoCs (IPs, domains, hashes) are easily changed. TTPs reveal attacker behavior and methodology, which are harder to alter."
      },
      {
        question: "What is 'living off the land' in attack techniques?",
        options: [
          "Camping outdoors",
          "Using legitimate system tools to avoid detection",
          "Farming attacks",
          "Rural targeting"
        ],
        correctAnswer: 1,
        taunt: "LotL attacks use YOUR tools against you! PowerShell, WMI, etc. = stealthy!",
        explanation: "Attackers use built-in legitimate tools (PowerShell, WMI, certutil) that blend in with normal activity, avoiding signature detection."
      },
      {
        question: "What is a 'threat actor' in cybersecurity?",
        options: [
          "Hollywood celebrity",
          "An individual or group conducting cyber attacks",
          "Antivirus software",
          "Firewall rule"
        ],
        correctAnswer: 1,
        taunt: "Threat actor = the adversary! Know your enemy to defeat them!",
        explanation: "Threat actors are the humans or organizations behind attacks - understanding their motivations and capabilities informs defense strategies."
      },
      {
        question: "What is 'threat intelligence sharing' and why is it important?",
        options: [
          "Gossiping about threats",
          "Organizations sharing IoCs and TTPs to defend collectively",
          "Public breach disclosure",
          "Social media posts about security"
        ],
        correctAnswer: 1,
        taunt: "Sharing threat intel = community defense! Your IoCs protect others!",
        explanation: "Threat intelligence sharing allows organizations to benefit from each other's discoveries, creating collective defense against common threats."
      }
    ]
  },
  {
    id: "secure-coding",
    title: "Secure Coding Practices",
    description: "Learn to write code that's resilient against attacks",
    badge: "Secure Developer",
    icon: Code,
    difficulty: "advanced",
    xpReward: 700,
    tip: "Security must be built in, not bolted on afterward",
    theory: [
      {
        title: "OWASP Top 10",
        content: "The ten most critical web application security risks: Injection, Broken Authentication, Sensitive Data Exposure, XXE, Broken Access Control, Security Misconfiguration, XSS, Insecure Deserialization, Using Components with Known Vulnerabilities, and Insufficient Logging.",
        visual: "📋"
      },
      {
        title: "Input Validation & Sanitization",
        content: "Never trust user input. Validate, sanitize, and escape all inputs. Use parameterized queries, not string concatenation. Implement allow-lists, not deny-lists.",
        visual: "🧹"
      },
      {
        title: "Principle of Least Privilege",
        content: "Grant minimum permissions necessary. Application accounts shouldn't run as admin. Database accounts should have limited access. Reduce attack surface by limiting capabilities.",
        visual: "🔐"
      }
    ],
    quiz: [
      {
        question: "What is the primary defense against SQL injection?",
        options: [
          "Firewall rules",
          "Parameterized queries/prepared statements",
          "Input length limits",
          "Strong passwords"
        ],
        correctAnswer: 1,
        taunt: "Parameterized queries = SQL injection immune! Never concatenate user input into queries!",
        explanation: "Parameterized queries separate SQL code from data, making injection impossible. String concatenation creates vulnerability."
      },
      {
        question: "What is Cross-Site Scripting (XSS) and how do you prevent it?",
        options: [
          "Database attack prevented by encryption",
          "Injecting malicious scripts into web pages - prevent by escaping output",
          "Network attack prevented by firewall",
          "Social engineering prevented by training"
        ],
        correctAnswer: 1,
        taunt: "XSS = injected JavaScript! Always escape/sanitize output shown to users!",
        explanation: "XSS allows attackers to inject scripts that run in victims' browsers. Prevent by escaping HTML/JavaScript in user-generated content."
      },
      {
        question: "Why should you NEVER store passwords in plain text?",
        options: [
          "Takes too much space",
          "Database breach exposes all passwords immediately",
          "It's illegal everywhere",
          "Slows down login"
        ],
        correctAnswer: 1,
        taunt: "Plain text passwords = instant breach disaster! Always use strong hashing (bcrypt)!",
        explanation: "Plain text password storage means a database breach immediately compromises all accounts. Use salted, strong hashing algorithms like bcrypt."
      },
      {
        question: "What is 'security by obscurity' and why is it bad?",
        options: [
          "Good security practice",
          "Relying on secrecy of implementation rather than strong security - easily defeated",
          "Advanced encryption",
          "Password complexity"
        ],
        correctAnswer: 1,
        taunt: "Obscurity isn't security! Real security works even if attackers know how it works!",
        explanation: "Security by obscurity (hiding how something works) fails once discovered. True security uses proven algorithms that work even when attackers understand them."
      },
      {
        question: "What is CSRF (Cross-Site Request Forgery) and how do you prevent it?",
        options: [
          "Database attack prevented by firewall",
          "Unauthorized commands from authenticated user - use anti-CSRF tokens",
          "Password attack prevented by MFA",
          "Network sniffing prevented by VPN"
        ],
        correctAnswer: 1,
        taunt: "CSRF = forged authenticated requests! Anti-CSRF tokens verify request origin!",
        explanation: "CSRF tricks authenticated users into executing unwanted actions. Prevent with unique tokens that verify the request originated from your site."
      },
      {
        question: "What does 'principle of least privilege' mean in application security?",
        options: [
          "No one gets admin rights",
          "Grant minimum permissions necessary for functionality",
          "Users need to request every action",
          "Disable all features by default"
        ],
        correctAnswer: 1,
        taunt: "Least privilege = minimum permissions! Limits damage if compromised!",
        explanation: "Applications and users should have only the permissions they need. This limits the potential damage from compromised accounts or vulnerabilities."
      },
      {
        question: "Why is client-side validation insufficient for security?",
        options: [
          "It's too slow",
          "Attackers bypass client-side checks and submit requests directly",
          "It doesn't work on mobile",
          "It's outdated"
        ],
        correctAnswer: 1,
        taunt: "Client-side validation = UX only! Always validate server-side where attackers can't bypass!",
        explanation: "Client-side validation can be completely bypassed. Always validate on the server where attackers cannot manipulate the checks."
      },
      {
        question: "What are 'security headers' and why use them?",
        options: [
          "HTTP headers that don't exist",
          "HTTP response headers that enable browser security features",
          "Email security settings",
          "Network packet headers"
        ],
        correctAnswer: 1,
        taunt: "Security headers = browser protection! CSP, X-Frame-Options, etc. = essential!",
        explanation: "Security headers like Content-Security-Policy, X-Frame-Options, and HSTS enable browser-level protections against various attacks."
      }
    ]
  },
  {
    id: "compliance-frameworks",
    title: "Compliance Frameworks (GDPR, SOC2)",
    description: "Understand regulatory requirements and security frameworks",
    badge: "Compliance Expert",
    icon: FileText,
    difficulty: "advanced",
    xpReward: 600,
    tip: "Compliance is the minimum - aim for best practices beyond requirements",
    theory: [
      {
        title: "GDPR Principles",
        content: "General Data Protection Regulation mandates data protection by design, user consent, right to erasure, breach notification within 72 hours, and data minimization.",
        visual: "🇪🇺"
      },
      {
        title: "SOC 2 Trust Principles",
        content: "SOC 2 audits service organizations on Security, Availability, Processing Integrity, Confidentiality, and Privacy. It demonstrates operational controls to customers.",
        visual: "✅"
      },
      {
        title: "PCI DSS for Payment Security",
        content: "Payment Card Industry Data Security Standard protects cardholder data. Requirements include encryption, access controls, network segmentation, and regular testing.",
        visual: "💳"
      }
    ],
    quiz: [
      {
        question: "What is GDPR's maximum fine for serious violations?",
        options: [
          "$10,000",
          "€20 million or 4% of global revenue, whichever is higher",
          "€1 million",
          "$100,000"
        ],
        correctAnswer: 1,
        taunt: "GDPR fines = massive! 4% of GLOBAL revenue can bankrupt companies!",
        explanation: "GDPR imposes severe penalties - up to €20 million or 4% of worldwide annual revenue, whichever is higher."
      },
      {
        question: "How long do you have to report a GDPR data breach to authorities?",
        options: [
          "1 year",
          "72 hours",
          "30 days",
          "24 hours"
        ],
        correctAnswer: 1,
        taunt: "72 hours or face penalties! Clock starts when you discover the breach!",
        explanation: "GDPR mandates breach notification to authorities within 72 hours of discovery, or face additional penalties."
      },
      {
        question: "What is SOC 2 and who needs it?",
        options: [
          "A type of firewall",
          "Security audit for service organizations handling customer data",
          "Antivirus software",
          "Social media compliance"
        ],
        correctAnswer: 1,
        taunt: "SOC 2 = trust report! Proves your security controls to customers!",
        explanation: "SOC 2 is an audit report demonstrating that service providers (SaaS, cloud, etc.) have proper controls for security and data protection."
      },
      {
        question: "What does 'right to erasure' mean under GDPR?",
        options: [
          "Delete your social media",
          "Users can request deletion of their personal data",
          "Automatic data deletion",
          "Encrypted data storage"
        ],
        correctAnswer: 1,
        taunt: "Right to be forgotten! Users can demand you delete their data!",
        explanation: "GDPR's right to erasure allows individuals to request deletion of their personal data, with some exceptions for legal obligations."
      },
      {
        question: "What is PCI DSS and who must comply?",
        options: [
          "Email security standard",
          "Payment Card Industry Data Security Standard - anyone handling card data",
          "Network protocol",
          "Social media policy"
        ],
        correctAnswer: 1,
        taunt: "Handle credit cards = must comply with PCI DSS! Non-compliance = huge fines!",
        explanation: "PCI DSS applies to all organizations that store, process, or transmit payment card data, mandating specific security controls."
      },
      {
        question: "What is 'data minimization' principle in GDPR?",
        options: [
          "Compress all data",
          "Collect only data necessary for specific purposes",
          "Delete data weekly",
          "Minimize data breaches"
        ],
        correctAnswer: 1,
        taunt: "Data minimization = collect only what you need! Less data = less risk!",
        explanation: "GDPR requires collecting only the minimum personal data necessary for your stated purpose, reducing risk and liability."
      },
      {
        question: "What's the difference between SOC 2 Type I and Type II?",
        options: [
          "Type I is easier",
          "Type I = controls exist, Type II = controls work over time",
          "Type I is for small companies",
          "No difference"
        ],
        correctAnswer: 1,
        taunt: "Type I = snapshot, Type II = movie! Type II proves sustained compliance!",
        explanation: "SOC 2 Type I audits whether controls are properly designed. Type II tests whether they operated effectively over a period (typically 6-12 months)."
      },
      {
        question: "What is HIPAA and what does it protect?",
        options: [
          "Network protocol",
          "Healthcare privacy law protecting patient health information",
          "Email encryption",
          "Social media guideline"
        ],
        correctAnswer: 1,
        taunt: "HIPAA = healthcare privacy! Protected Health Information (PHI) has strict requirements!",
        explanation: "HIPAA (Health Insurance Portability and Accountability Act) mandates protection of patient health information with severe penalties for violations."
      }
    ]
  },
  {
    id: "advanced-persistent-threats",
    title: "Advanced Persistent Threats (APTs)",
    description: "Understand nation-state attacks and sophisticated threat actors",
    badge: "APT Hunter",
    icon: Server,
    difficulty: "advanced",
    xpReward: 750,
    tip: "APTs require long-term vigilance and defense in depth",
    theory: [
      {
        title: "What are APTs?",
        content: "Advanced Persistent Threats are sophisticated, long-term targeted attacks by well-funded adversaries (nation-states, organized crime). They establish persistence and evade detection.",
        visual: "🎯"
      },
      {
        title: "APT Lifecycle",
        content: "Initial Compromise → Establish Foothold → Escalate Privileges → Internal Reconnaissance → Lateral Movement → Maintain Presence → Complete Mission (exfiltration/sabotage).",
        visual: "♻️"
      },
      {
        title: "Detection & Defense",
        content: "APTs require behavioral analysis, anomaly detection, network segmentation, zero trust architecture, and assume breach mentality. Traditional perimeter security isn't enough.",
        visual: "🛡️"
      }
    ],
    quiz: [
      {
        question: "What distinguishes APTs from regular malware?",
        options: [
          "APTs are faster",
          "APTs are sophisticated, targeted, persistent, and well-funded",
          "APTs are louder",
          "APTs only target governments"
        ],
        correctAnswer: 1,
        taunt: "APTs = patient, skilled, funded adversaries! Not script kiddies!",
        explanation: "APTs use sophisticated techniques, target specific organizations, maintain long-term presence, and have significant resources (often nation-state backed)."
      },
      {
        question: "Why do APTs prioritize 'persistence' over immediate damage?",
        options: [
          "They're lazy",
          "Long-term access enables ongoing espionage and data theft",
          "They don't know how to cause damage",
          "It's easier"
        ],
        correctAnswer: 1,
        taunt: "APT goal = persistent access for months/years of espionage!",
        explanation: "APTs prioritize maintaining undetected access over time to continuously exfiltrate data, spy on communications, and maintain strategic advantage."
      },
      {
        question: "What is 'island hopping' in APT attacks?",
        options: [
          "Attacking vacation resorts",
          "Compromising less-secure partners to reach the primary target",
          "Random targeting",
          "Geographic targeting"
        ],
        correctAnswer: 1,
        taunt: "Island hopping = attack through your weakest partner! Supply chain risk!",
        explanation: "APTs compromise third-party vendors or partners with weaker security to gain access to the primary target's network."
      },
      {
        question: "What is a 'watering hole' attack?",
        options: [
          "Attacking water utilities",
          "Compromising websites the target frequently visits",
          "Flooding attacks",
          "DNS attacks"
        ],
        correctAnswer: 1,
        taunt: "Watering hole = poison the sites your target visits! Indirect compromise!",
        explanation: "APTs compromise websites frequently visited by their target organization, infecting visitors rather than directly attacking the target."
      },
      {
        question: "Why are APTs so difficult to detect?",
        options: [
          "They work slowly and use legitimate tools (living off the land)",
          "They're invisible",
          "They can't be detected",
          "They're too fast"
        ],
        correctAnswer: 0,
        taunt: "APTs = patient and stealthy! Use your own tools, blend with normal traffic!",
        explanation: "APTs move slowly, use legitimate system tools, encrypt communications, and mimic normal behavior to avoid triggering alerts."
      },
      {
        question: "What is 'zero trust' architecture and why is it important against APTs?",
        options: [
          "Trust no one personally",
          "Verify every access request regardless of network location",
          "Disable all access",
          "Block everything"
        ],
        correctAnswer: 1,
        taunt: "Zero trust = never assume, always verify! Critical against persistent adversaries!",
        explanation: "Zero trust assumes breach and verifies every access attempt. This limits lateral movement even if APTs gain initial access."
      },
      {
        question: "What is 'command and control' (C2) in APT operations?",
        options: [
          "Leadership structure",
          "Communication channel between compromised systems and attacker",
          "Network switch configuration",
          "Admin panel"
        ],
        correctAnswer: 1,
        taunt: "C2 = attacker's phone line to compromised systems! Detect C2 = detect APT!",
        explanation: "C2 is the communication infrastructure APTs use to control compromised systems, receive stolen data, and issue commands."
      },
      {
        question: "What is 'defense in depth' and why is it critical against APTs?",
        options: [
          "One strong firewall",
          "Multiple overlapping security layers so breach of one doesn't mean total compromise",
          "Deep packet inspection",
          "Thick walls"
        ],
        correctAnswer: 1,
        taunt: "Defense in depth = multiple barriers! APTs will breach something - make them work for it!",
        explanation: "Defense in depth uses multiple security layers. Even if APTs breach one layer, others provide protection and detection opportunities."
      }
    ]
  }
];

export const getModuleById = (id: string): Module | undefined => {
  return modules.find(module => module.id === id);
};
