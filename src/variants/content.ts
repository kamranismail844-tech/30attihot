import { APK_SIZE, REFERRAL_CODE, REFERRAL_URL } from "../constants";

export const GAMES = [
  { name: "Dragon Tiger", image: "./images/game-dragontiger.jpg", hot: true },
  { name: "Thunder Fire", image: "./images/game-thunder.jpg", hot: true },
  { name: "Rocket", image: "./images/game-aviator.jpg" },
  { name: "Roulette Zoo", image: "./images/game-roulette.jpg" },
  { name: "Teen Patti", image: "./images/game-teenpatti.jpg", hot: true },
  { name: "Fortune Gems", image: "./images/game-fortune.jpg" },
  { name: "Car Roulette", image: "./images/game-goal.jpg" },
  { name: "Classic Fruit", image: null },
];

export const STATS = [
  { value: "200M+", label: "Players" },
  { value: "50+", label: "Games" },
  { value: APK_SIZE, label: "APK size" },
  { value: "24/7", label: "Support" },
];

export const FEATURES = [
  {
    title: "Live-style Teen Patti tables",
    text: "Classic three-card action with modern rooms and quick seating.",
  },
  {
    title: "Truly one-tap download",
    text: "The latest APK starts from this page. No extra step, no second click.",
  },
  {
    title: "Local payment options",
    text: "In-app support may include EasyPaisa, JazzCash, USDT and bank methods.",
  },
  {
    title: "Rewards & referrals",
    text: "New-player offers, daily missions and invite rewards.",
  },
  {
    title: "Account & play safety",
    text: "Strong passwords, private OTPs and a trusted install source.",
  },
  {
    title: "Help when you need it",
    text: "Install guidance and in-app support around the clock.",
  },
];

export const GAME_LIST = [
  "Teen Patti",
  "Teen Patti 20-20",
  "Dragon Tiger",
  "Andar Bahar",
  "Roulette",
  "7 Up Down",
  "Thunder 777",
  "Aviator",
  "Fortune Gems",
  "Rummy",
  "Poker",
  "Baccarat",
  "Blackjack",
  "Ludo",
  "Car Roulette",
  "Zoo Roulette",
  "Sports",
  "Fruit slots",
  "Sweet Bonanza",
  "Mines",
];

export const GUIDE_BLOCKS = [
  {
    id: "overview",
    label: "Overview",
    specs: [
      ["App name", "3Patti Hot (3 Patti Hot)"],
      ["Category", "Card & casino-style games"],
      ["Platform", "Android 5.1+ (APK)"],
      ["File size", `≈ ${APK_SIZE}`],
      ["Price", "Free to download"],
      ["Referral code", REFERRAL_CODE],
      ["Official site", "3pattihot.com"],
      ["Last checked", "November 2026"],
    ],
    paragraphs: [
      "3Patti Hot (also written 3 Patti Hot or Teen Patti Hot) is an Android card-game app built around Teen Patti, the widely played three-card game from South Asia. Alongside the main tables it includes casino-style side games such as Dragon Tiger, Roulette, Andar Bahar, Aviator and slots, plus daily rewards and a referral programme.",
      "The app is distributed as an APK from the operator's official website, 3pattihot.com, so it is usually not available on Google Play. Players in Pakistan often use local wallets for in-app payments. Features, limits, game lists and promotions are controlled by the operator and can change between versions and regions.",
      "kanik.shop is an independent guide: we explain the install process, share referral code " +
        REFERRAL_CODE +
        " and point to the official source. We do not create accounts, take deposits or process withdrawals.",
    ],
  },
  {
    id: "install",
    label: "Download & install",
    steps: [
      "Tap the download button on this page. The APK starts saving immediately and the referral code is copied to your clipboard at the same time.",
      "Wait for the file to finish. Keep the tab open until your browser shows the download complete.",
      "Open your browser downloads or file manager and tap the APK file.",
      'If Android blocks it, open Settings → Apps → your browser → Install unknown apps and allow it for that browser only.',
      "Tap Install, wait a few seconds, then press Open.",
      `Register with your mobile number, verify the OTP and paste referral code ${REFERRAL_CODE} in the invitation field.`,
    ],
    requirements: [
      ["Operating system", "Android 5.1 (Lollipop) or newer"],
      ["Storage", "Around 100 MB free recommended"],
      ["RAM", "2 GB or more for smooth play"],
      ["Internet", "Stable 3G / 4G / Wi-Fi"],
      ["Install source", "Allow installs from your browser"],
      ["Account", "Mobile number and OTP verification"],
    ],
    extra: [
      {
        title: "On iPhone / iPad",
        text: "The APK only installs on Android. iOS availability is decided by the operator — open the official 3pattihot.com page on Safari to check. Avoid installing random “iOS APK” files.",
      },
      {
        title: "On PC / laptop",
        text: "There is no official Windows version. Players who want a big screen use an Android emulator such as BlueStacks, install the APK inside it, then sign in with their account.",
      },
    ],
    errors: [
      "“App not installed” → free up storage and try the download again.",
      "“Blocked by Play Protect” → only continue if you trust the file; check the app name.",
      "Download stops midway → switch to Wi-Fi and restart the download.",
      "OTP not arriving → wait a minute, check your signal, then request again.",
    ],
  },
  {
    id: "bonuses",
    label: "Bonuses & referral",
    bonuses: [
      {
        title: "Welcome / first-login reward",
        text: "New accounts may be eligible for a welcome offer after registration. Amount and conditions are set by the operator and can change without notice.",
      },
      {
        title: "Daily login & missions",
        text: "Regular players may see daily rewards, tasks or events that keep the lobby active. Nothing here is guaranteed and offers can end at any time.",
      },
      {
        title: "Referral programme",
        text: `When you register with code ${REFERRAL_CODE}, the operator may record your account as referred. Later, your own in-app invite code can be shared with friends. Commission rules are set and paid by the operator — not by kanik.shop.`,
      },
      {
        title: "Deposit / cashback promotions",
        text: "Some accounts are shown first-recharge or cashback promotions. Never deposit money because of a bonus alone, and always read the play-through and withdrawal conditions first.",
      },
    ],
    register: [
      "Open the installed app and tap Register / Sign Up.",
      "Enter a valid mobile number and complete the captcha if shown.",
      "Enter the OTP you receive by SMS.",
      "Set a strong password you do not use anywhere else.",
      `Paste referral code ${REFERRAL_CODE} in the invitation field.`,
      "Confirm and log in — your account is ready.",
    ],
  },
  {
    id: "payments",
    label: "Payments & safety",
    methods: ["JazzCash", "EasyPaisa", "Bank transfer", "USDT", "Crypto"],
    pros: [
      "One-tap APK download with no extra page.",
      "Teen Patti plus a wide selection of side games.",
      "Local wallet support such as JazzCash and EasyPaisa.",
      "Referral code and welcome offers for new accounts.",
      "Lightweight enough for mid-range Android phones.",
    ],
    cons: [
      "Not distributed on the Google Play Store.",
      "Real-money features carry financial risk.",
      "Bonuses and withdrawal rules can change.",
      "Results are chance-based — there is no guaranteed win.",
      "Availability and legality vary by region.",
    ],
    safety: [
      {
        title: "Protect your login",
        text: "Never share your password or OTP. Support staff never need your OTP.",
      },
      {
        title: "Verify the source",
        text: "Install only from the official site or a direct link you trust. Avoid “mod” or cracked APKs.",
      },
      {
        title: "Pay inside the app only",
        text: "Deposits and withdrawals are handled by the operator. kanik.shop never takes payments or holds funds.",
      },
      {
        title: "Set hard limits",
        text: "Decide a budget and time limit before you play. Never chase losses or borrow money.",
      },
    ],
  },
  {
    id: "earning",
    label: "Earning & support",
    intro:
      "Most players ask two questions before installing: how the referral and bonus system works, and how to reach support if something goes wrong. Here is the honest version.",
    earning: [
      "Download and install the 3Patti Hot APK from the official source.",
      "Create an account with your mobile number and verify the OTP.",
      `Enter referral code ${REFERRAL_CODE} in the invitation field during registration.`,
      "Collect any welcome or daily-login rewards offered in the app.",
      "Play the games you understand — Teen Patti, Dragon Tiger, Roulette and similar.",
      "Share your own in-app invite code with friends to earn referral commission.",
      "Withdraw through the wallet section once you meet the operator's minimum limit.",
    ],
    vip: [
      "Higher daily bonus or cashback percentages for active accounts.",
      "Priority handling on withdrawal requests in some programmes.",
      "Exclusive event access and seasonal promotions.",
      "Dedicated support handling for higher tiers.",
    ],
    password: [
      "Open the 3Patti Hot app and tap Forgot Password on the login screen.",
      "Enter your registered mobile number and request the OTP.",
      "Enter the OTP, then set and confirm a new password.",
      "Log in with the new password and never share it with anyone.",
    ],
    support: [
      {
        title: "In-app support",
        text: "Use the support or live-chat option inside the official app for account, deposit and withdrawal issues.",
      },
      {
        title: "Official website",
        text: "3pattihot.com publishes current contact details, terms and announcements from the operator.",
      },
      {
        title: "Telegram / WhatsApp channels",
        text: "Some operators run official Telegram or WhatsApp channels. Only use links published on the official site.",
      },
      {
        title: "What support never asks",
        text: "No genuine support agent will ever ask for your password, OTP, screen share or wallet PIN. If someone does, it is a scam.",
      },
    ],
    payoutGames: [
      "Teen Patti Classic",
      "Dragon vs Tiger",
      "Andar Bahar",
      "Rummy",
      "Lucky 7",
      "Car Roulette",
      "Fruit Slots",
      "Aviator",
    ],
  },
  {
    id: "reviews",
    label: "Reviews & tips",
    reviews: [
      {
        quote: "Quick download and a busy lobby. Teen Patti tables felt smooth on my phone.",
        name: "Android player",
        place: "Lahore",
      },
      {
        quote: "The referral field was easy to find during sign-up and the games are simple to browse.",
        name: "New player",
        place: "Karachi",
      },
      {
        quote: "Good variety, but I set a strict monthly budget because results are unpredictable.",
        name: "Regular player",
        place: "Islamabad",
      },
    ],
    tips: [
      "Start with free or low-stake tables until you understand the rules.",
      "Learn the hand rankings: trail, pure sequence, sequence, colour, pair, high card.",
      "Decide a budget before you open the app and stop when you reach it.",
      "Never chase losses or borrow money to continue playing.",
      "Check bonus conditions — play-through requirements can be strict.",
      "Take breaks. If it stops being entertainment, stop playing.",
    ],
    verdict:
      "3Patti Hot is a familiar, lightweight Teen Patti option with a lot of side games and an easy one-tap Android download. It is not on Google Play, involves real-money risk if you use paid features, and should be treated as entertainment rather than income. If you are 18+, understand the risks, and real-money gaming is legal where you live, install it from the official source, use referral code " +
      REFERRAL_CODE +
      " at sign-up, and keep strict limits.",
  },
];

export const FAQS = [
  {
    q: "What is 3Patti Hot?",
    a: "3Patti Hot (also written 3 Patti Hot or Teen Patti Hot) is an Android card-game app built around Teen Patti, with extra casino-style mini games and a referral programme. The operator distributes it as an APK from 3pattihot.com. Features, limits and offers are controlled by the operator and can vary by version and region.",
  },
  {
    q: "Is the 3Patti Hot download really one tap?",
    a: "Yes. The download buttons point directly to the latest APK on the operator's content network. Your browser starts saving the file immediately — there is no extra download page or second button. The referral code is copied automatically so it is ready for sign-up.",
  },
  {
    q: `Where do I enter referral code ${REFERRAL_CODE}?`,
    a: `Install and open 3Patti Hot, then start registration. Paste ${REFERRAL_CODE} into the invitation, referral or promo-code field on that sign-up form. The code is not needed to download and does not change the file. Reward eligibility, amounts and conditions are decided by the operator.`,
  },
  {
    q: "How much bonus will I get with the referral code?",
    a: "There is no fixed amount. Welcome or referral rewards depend on the operator's current campaign, your region and whether conditions such as a first deposit are met. This page cannot promise any bonus or payout — always check the visible terms inside the app before spending money.",
  },
  {
    q: "Is 3Patti Hot free to download?",
    a: "The APK download is free. Optional deposits, purchases or cash-game features inside the app may involve money and are handled by the operator. Normal mobile data charges from your network may apply to the download.",
  },
  {
    q: "How do I install the 3Patti Hot APK on Android?",
    a: 'Open the downloaded file from your browser downloads or file manager and tap it. If Android asks, allow installs from that browser under “Install unknown apps”, then tap Install. After installation, open the app, register and enter the referral code in the invitation field.',
  },
  {
    q: "What are the minimum Android requirements?",
    a: "The app is designed for Android 5.1 or newer. For a smoother experience use a phone with at least 2 GB RAM, around 100 MB free storage and a stable 3G, 4G or Wi-Fi connection. Older or low-storage devices may struggle with newer versions.",
  },
  {
    q: "Can I download 3Patti Hot for PC or laptop?",
    a: "There is no official Windows version. You can run the Android APK inside an emulator such as BlueStacks: install the emulator, sign in, open the APK inside it and log in with your account. Emulators need virtualisation support and a reasonably strong PC.",
  },
  {
    q: "Does 3Patti Hot work on iPhone?",
    a: "The file shared here is an Android APK and will not install on iOS. iOS availability is controlled by the operator. Use the official 3pattihot.com link on this page to check whether an iOS or web version is currently available, and avoid random iOS APK downloads.",
  },
  {
    q: "Which payment methods are used for deposit and withdrawal?",
    a: "Players in Pakistan commonly see JazzCash, EasyPaisa, bank transfer and sometimes USDT or crypto. The exact list, minimum amounts, processing time and verification requirements are set by the operator inside the app. All payments happen there — kanik.shop never takes deposits or holds funds.",
  },
  {
    q: "Why is 3Patti Hot not on the Google Play Store?",
    a: 'The operator distributes the Android version as an APK from its own website, so you may not find it on Google Play. That is why this guide links directly to the official APK file and explains the “Install unknown apps” step. Only install from a source you trust.',
  },
  {
    q: "Is 3pattihot.com the official website?",
    a: "Yes, 3pattihot.com is the operator's official website. kanik.shop is an independent guide and referral page, not the official site. For account support, payment questions or official announcements, use 3pattihot.com or the support option inside the app.",
  },
  {
    q: "Is my account and money safe?",
    a: "Security is managed inside the operator's app. Keep your password and OTP private, never install modified APKs, and never send money to someone promising account boosts or guaranteed wins. If a promotion or payment looks suspicious, stop and contact in-app support.",
  },
  {
    q: "How can I earn from 3Patti Hot?",
    a: "Players use two routes: playing games and inviting friends. The operator may show welcome bonuses, daily-login rewards, missions and referral commission for accounts that register with an invite code. There is no guaranteed income — results depend on chance, your budget and the operator's rules. Treat it as entertainment, not a salary.",
  },
  {
    q: "What are the VIP benefits in 3Patti Hot?",
    a: "Regular accounts may unlock higher daily bonuses or cashback, faster withdrawal handling, exclusive events and priority support. VIP tiers are set by the operator, can change at any time, and this page cannot promise access to them.",
  },
  {
    q: "How do I recover my 3Patti Hot password?",
    a: "Tap Forgot Password on the login screen, enter your registered mobile number, request the OTP, then set and confirm a new password. If you cannot receive the OTP, use the in-app support or the official 3pattihot.com contact page. Never share your OTP with anyone.",
  },
  {
    q: "How do I contact 3Patti Hot customer support?",
    a: "Use the support or live-chat option inside the official app, or the contact details published on 3pattihot.com. Some operators run official Telegram or WhatsApp channels — only use links from the official site. Support never asks for your password or OTP.",
  },
  {
    q: "Which 3Patti Hot games pay the most?",
    a: "There is no official payout ranking, but Teen Patti Classic, Dragon vs Tiger, Andar Bahar, Rummy, Aviator and the slot titles are usually the busiest rooms. Busy rooms do not mean better odds — every game is chance-based and the house keeps an edge.",
  },
  {
    q: "Is it legal to play and who can use it?",
    a: "Rules vary by country and region. This page and the app are intended for adults aged 18 or over. Real-money card games carry financial risk and are restricted in some places. Check your local law before playing, set a budget and never spend money you cannot afford to lose.",
  },
];

export const OFFICIAL_LINK = REFERRAL_URL;
