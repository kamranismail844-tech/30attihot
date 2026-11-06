import {
  AlertTriangle,
  Apple,
  ArrowRight,
  Banknote,
  Check,
  ChevronRight,
  CircleCheck,
  CircleX,
  Gift,
  Globe2,
  Info,
  Laptop,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { APK_SIZE, REFERRAL_CODE } from "../constants";
import {
  CopyIconButton,
  DownloadButton,
  Eyebrow,
  OfficialReferralLink,
  Reveal,
} from "./ui";
import { cn } from "../utils/cn";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "install", label: "Download & install" },
  { id: "bonuses", label: "Bonuses & referral" },
  { id: "payments", label: "Payments & safety" },
  { id: "reviews", label: "Reviews & tips" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const SPECS: [string, string][] = [
  ["App name", "3Patti Hot (3 Patti Hot)"],
  ["Category", "Card & casino-style games"],
  ["Platform", "Android 5.1+ (APK)"],
  ["File size", `≈ ${APK_SIZE}`],
  ["Version", "Latest available"],
  ["Price", "Free to download"],
  ["Referral code", REFERRAL_CODE],
  ["Official site", "3pattihot.com"],
  ["Region", "Pakistan & South Asia"],
  ["Last checked", "November 2026"],
];

const GAME_LIST = [
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

const ANDROID_STEPS = [
  "Tap the gold “Download 3Patti Hot” button on this page. The APK starts saving immediately — the referral code is copied to your clipboard at the same time.",
  "Wait for the ~45 MB file to finish. Keep the tab open until your browser shows the download complete.",
  "Open your browser downloads or file manager and tap the APK file.",
  "If Android blocks it, open Settings → Apps → your browser → Install unknown apps and allow it for that browser only.",
  "Tap Install, wait a few seconds, then press Open.",
  "Register with your mobile number, verify the OTP, and paste referral code 10231669 in the invitation field.",
];

const REQUIREMENTS: [string, string][] = [
  ["Operating system", "Android 5.1 (Lollipop) or newer"],
  ["Storage", "Around 100 MB free recommended"],
  ["RAM", "2 GB or more for smooth play"],
  ["Internet", "Stable 3G / 4G / Wi-Fi"],
  ["Install source", "Allow installs from your browser"],
  ["Account", "Mobile number and OTP verification"],
];

const BONUSES = [
  {
    icon: Gift,
    title: "Welcome / first-login reward",
    text: "New accounts may be eligible for a welcome offer after registration. Amount and conditions are set by the operator and can change without notice.",
  },
  {
    icon: Sparkles,
    title: "Daily login & missions",
    text: "Regular players may see daily rewards, tasks or events that keep the lobby active. Nothing here is guaranteed and offers can end at any time.",
  },
  {
    icon: Users,
    title: "Referral programme",
    text: `When you register with code ${REFERRAL_CODE}, the operator may record your account as referred. Later, your own in-app invite code can be shared with friends. Commission rules are set and paid by the operator — not by kanik.shop.`,
  },
  {
    icon: Banknote,
    title: "Deposit / cashback promotions",
    text: "Some accounts are shown first-recharge or cashback promotions. Never deposit money because of a bonus alone, and always read the play-through and withdrawal conditions first.",
  },
];

const PROS = [
  "One-tap APK download with no extra page.",
  "Teen Patti plus a wide selection of side games.",
  "Local wallet support such as JazzCash and EasyPaisa.",
  "Referral code and welcome offers for new accounts.",
  "Lightweight enough for mid-range Android phones.",
];

const CONS = [
  "Not distributed on the Google Play Store.",
  "Real-money features carry financial risk.",
  "Bonuses and withdrawal rules can change.",
  "Results are chance-based — there is no guaranteed win.",
  "Availability and legality vary by region.",
];

const SAFETY = [
  {
    icon: LockKeyhole,
    title: "Protect your login",
    text: "Never share your password or OTP. Support staff never need your OTP.",
  },
  {
    icon: ShieldCheck,
    title: "Verify the source",
    text: "Install only from the official site or a direct link you trust. Avoid “mod”, “hack” or cracked APKs.",
  },
  {
    icon: WalletCards,
    title: "Pay inside the app only",
    text: "Deposits and withdrawals are handled by the operator. kanik.shop never takes payments or holds funds.",
  },
  {
    icon: AlertTriangle,
    title: "Set hard limits",
    text: "Decide a budget and time limit before you play. Never chase losses or borrow money to continue.",
  },
];

export function DeepGuide({ onNotify }: { onNotify: (message: string) => void }) {
  const [tab, setTab] = useState<TabId>("overview");

  return (
    <section
      id="guide"
      className="relative overflow-hidden border-t border-sand-deep/70 bg-white py-10 sm:py-14"
    >
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Eyebrow tone="light">Complete 3Patti Hot guide</Eyebrow>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[8.5px] font-extrabold uppercase tracking-[0.12em] text-emerald-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Updated Nov 2026
              </span>
            </div>
            <h2 className="mt-3.5 font-display text-[26px] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-[33px]">
              3Patti Hot APK: specs,
              <br className="hidden sm:block" /> download &amp; safe play
            </h2>
            <p className="mt-3 text-[12.5px] leading-relaxed text-stone-600 sm:text-[13.5px]">
              Everything visitors usually ask about <strong className="text-ink">3pattihot</strong>{" "}
              — app details, Android, iOS and PC access, bonuses, referral code{" "}
              {REFERRAL_CODE}, payment options, safety and honest reviews.
            </p>
          </div>
        </Reveal>

        <div
          className="no-scrollbar mx-auto mt-5 flex max-w-3xl gap-1.5 overflow-x-auto rounded-xl border border-sand-deep bg-cream p-1"
          role="tablist"
          aria-label="3Patti Hot guide topics"
        >
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={tab === item.id}
              aria-controls={`panel-${item.id}`}
              onClick={() => setTab(item.id)}
              className={cn(
                "shrink-0 rounded-lg px-3 py-2 text-[10px] font-extrabold transition-colors sm:text-[11px]",
                tab === item.id
                  ? "bg-ink text-gold-soft shadow-sm"
                  : "text-stone-500 hover:bg-white hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-5 max-w-3xl">
            <div hidden={tab !== "overview"}
              role="tabpanel"
              id="panel-overview"
              aria-labelledby="tab-overview"
              className="space-y-7"
            >
              <div className="overflow-hidden rounded-2xl border border-sand-deep">
                <div className="flex items-center gap-2 border-b border-sand-deep bg-[#170b07] px-4 py-2.5">
                  <Info className="h-3.5 w-3.5 text-gold" />
                  <h3 className="font-display text-[12px] font-extrabold text-white">
                    App information
                  </h3>
                </div>
                <table className="w-full text-left">
                  <tbody className="divide-y divide-sand">
                    {SPECS.map(([label, value], index) => (
                      <tr key={label} className={index % 2 ? "bg-cream/40" : "bg-white"}>
                        <th
                          scope="row"
                          className="w-[42%] px-3.5 py-2 text-[10px] font-bold text-stone-500 sm:text-[11px]"
                        >
                          {label}
                        </th>
                        <td className="px-3.5 py-2 text-[10.5px] font-extrabold text-ink sm:text-[11.5px]">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  What is 3Patti Hot?
                </h3>
                <div className="mt-2 space-y-2.5 text-[12px] leading-relaxed text-stone-600 sm:text-[13px]">
                  <p>
                    <strong className="text-ink">3Patti Hot</strong> (also written
                    as <em>3 Patti Hot</em> or <em>Teen Patti Hot</em>) is an
                    Android card-game app built around Teen Patti, the widely
                    played three-card game from South Asia. Alongside the main
                    tables it includes casino-style side games such as Dragon
                    Tiger, Roulette, Andar Bahar, Aviator and slots, plus daily
                    rewards and a referral programme.
                  </p>
                  <p>
                    The app is distributed as an APK from the operator&apos;s
                    official website, <strong className="text-ink">3pattihot.com</strong>,
                    so it is usually not available on Google Play. Players in
                    Pakistan often use local wallets for in-app payments. Features,
                    limits, game lists and promotions are controlled by the
                    operator and can change between versions and regions.
                  </p>
                  <p>
                    kanik.shop is an independent guide: we explain the install
                    process, share referral code {REFERRAL_CODE} and point to the
                    official source. We do not create accounts, take deposits or
                    process withdrawals.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  Key features
                </h3>
                <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                  {[
                    { icon: Zap, title: "Fast one-tap download", text: "Direct APK, no extra download page." },
                    { icon: MonitorSmartphone, title: "Built for mobile", text: "Lightweight and smooth on mid-range phones." },
                    { icon: Users, title: "Live-style tables", text: "Play alongside other players in real time." },
                    { icon: Gift, title: "Rewards & referrals", text: "Welcome offers, missions and invite rewards." },
                    { icon: WalletCards, title: "Local payments", text: "In-app JazzCash, EasyPaisa, USDT and bank options." },
                    { icon: Globe2, title: "Official source", text: "Distributed through 3pattihot.com." },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex gap-2.5 rounded-xl border border-sand bg-cream px-3 py-2.5"
                    >
                      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-deep" />
                      <p className="text-[10.5px] leading-snug text-stone-600">
                        <span className="font-extrabold text-ink">{title}. </span>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  Games usually available in 3Patti Hot
                </h3>
                <p className="mt-1.5 text-[11px] text-stone-500">
                  Availability depends on app version, account and region.
                </p>
                <ul className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
                  {GAME_LIST.map((game) => (
                    <li
                      key={game}
                      className="flex items-center gap-1.5 text-[11px] text-stone-600"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                      {game}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="#games"
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold text-gold-deep underline decoration-gold-deep/25 underline-offset-4 hover:text-ruby"
                  >
                    See game artwork
                    <ArrowRight className="h-3 w-3" />
                  </a>
                  <OfficialReferralLink
                    label="Official 3pattihot.com"
                    className="text-stone-500 decoration-stone-300 hover:text-ruby"
                  />
                </div>
              </div>

            </div>

            <div hidden={tab !== "install"}
              role="tabpanel"
              id="panel-install"
              aria-labelledby="tab-install"
              className="space-y-7"
            >
              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  How to download 3Patti Hot for Android
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-stone-600">
                  The Android version is an APK of about {APK_SIZE}. Follow these
                  steps for a clean install:
                </p>
                <ol className="mt-3 space-y-2">
                  {ANDROID_STEPS.map((step, index) => (
                    <li key={step} className="flex gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[8.5px] font-extrabold text-gold-soft">
                        {index + 1}
                      </span>
                      <p className="text-[11.5px] leading-relaxed text-stone-600">{step}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-3">
                  <DownloadButton
                    onNotify={onNotify}
                    size="md"
                    label="DOWNLOAD APK — ONE TAP"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-sand-deep bg-cream p-3.5">
                  <h4 className="flex items-center gap-1.5 font-display text-[12.5px] font-extrabold text-ink">
                    <Apple className="h-3.5 w-3.5 text-gold-deep" />
                    On iPhone / iPad
                  </h4>
                  <p className="mt-1.5 text-[10.5px] leading-relaxed text-stone-600">
                    The APK only installs on Android. iOS availability is decided
                    by the operator; open the official 3pattihot.com page on Safari
                    to see if a web or iOS option is currently offered. Avoid
                    installing “iOS APK” files from random sites.
                  </p>
                  <a
                    href="https://login.rummyoppo.com/ios"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-2 inline-flex items-center gap-1 text-[10px] font-extrabold text-gold-deep hover:text-ruby"
                  >
                    Check iOS option
                    <ChevronRight className="h-3 w-3" />
                  </a>
                </div>
                <div className="rounded-xl border border-sand-deep bg-cream p-3.5">
                  <h4 className="flex items-center gap-1.5 font-display text-[12.5px] font-extrabold text-ink">
                    <Laptop className="h-3.5 w-3.5 text-gold-deep" />
                    On PC / laptop
                  </h4>
                  <p className="mt-1.5 text-[10.5px] leading-relaxed text-stone-600">
                    There is no official Windows version. Players who want a big
                    screen use an Android emulator such as BlueStacks, install the
                    APK inside it, then sign in. Emulators need virtualisation
                    enabled and a reasonably strong PC.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-sand-deep">
                <div className="border-b border-sand-deep bg-cream px-4 py-2.5">
                  <h4 className="flex items-center gap-1.5 font-display text-[12px] font-extrabold text-ink">
                    <Smartphone className="h-3.5 w-3.5 text-gold-deep" />
                    Android requirements
                  </h4>
                </div>
                <table className="w-full text-left">
                  <tbody className="divide-y divide-sand">
                    {REQUIREMENTS.map(([label, value], index) => (
                      <tr key={label} className={index % 2 ? "bg-cream/40" : "bg-white"}>
                        <th className="w-[42%] px-3.5 py-2 text-[10px] font-bold text-stone-500">
                          {label}
                        </th>
                        <td className="px-3.5 py-2 text-[10.5px] font-semibold text-ink">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3.5">
                <h4 className="flex items-center gap-1.5 text-[11.5px] font-extrabold text-amber-900">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  Common install problems
                </h4>
                <ul className="mt-1.5 space-y-1 text-[10.5px] leading-relaxed text-amber-800">
                  <li>• “App not installed” → free up storage and try the download again.</li>
                  <li>• “Blocked by Play Protect” → only continue if you trust the file; check the app name.</li>
                  <li>• Download stops midway → switch to Wi-Fi and restart the one-tap download.</li>
                  <li>• OTP not arriving → wait a minute, check your signal, then request again.</li>
                </ul>
              </div>
            </div>

            <div hidden={tab !== "bonuses"}
              role="tabpanel"
              id="panel-bonuses"
              aria-labelledby="tab-bonuses"
              className="space-y-7"
            >
              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  Bonuses and rewards
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-stone-600">
                  The app often promotes welcome offers, daily rewards and an
                  invite programme. Treat every promotion as a marketing offer:
                  read the conditions inside the app before spending anything.
                </p>
                <div className="mt-3 space-y-2">
                  {BONUSES.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex gap-2.5 rounded-xl border border-sand bg-cream px-3.5 py-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gold-soft/40 text-gold-deep">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-[11px] leading-relaxed text-stone-600">
                        <span className="font-extrabold text-ink">{title}. </span>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-gold-deep/25 bg-gold-soft/20 p-3.5">
                <h4 className="font-display text-[12.5px] font-extrabold text-ink">
                  How to use referral code {REFERRAL_CODE}
                </h4>
                <ol className="mt-2 space-y-1.5">
                  {[
                    "Install 3Patti Hot and open the app.",
                    "Tap Register / Sign Up and enter your mobile number.",
                    "Verify the OTP and create a password.",
                    "Find the invitation / referral / promo-code field.",
                    `Paste ${REFERRAL_CODE} and finish registration.`,
                  ].map((step, index) => (
                    <li key={step} className="flex gap-2 text-[10.5px] text-stone-700">
                      <span className="font-extrabold text-gold-deep">{index + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-2.5 flex items-center gap-2">
                  <span className="rounded-lg border border-gold-deep/25 bg-white px-2.5 py-1.5 font-display text-[12px] font-extrabold tracking-[0.12em] text-ink">
                    {REFERRAL_CODE}
                  </span>
                  <CopyIconButton onNotify={onNotify} tone="light" />
                  <span className="text-[9px] text-stone-500">Tap to copy</span>
                </div>
                <p className="mt-2 text-[9.5px] leading-relaxed text-stone-500">
                  The code does not change the APK download and is entered only at
                  registration. Eligibility, bonus amounts and withdrawal
                  conditions are decided by the operator, not by this page.
                </p>
              </div>

              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  How to register a 3Patti Hot account
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {[
                    "Open the installed app and tap Register / Sign Up.",
                    "Enter a valid mobile number and complete the captcha if shown.",
                    "Enter the OTP you receive by SMS.",
                    "Set a strong password you do not use anywhere else.",
                    "Paste referral code 10231669 in the invitation field.",
                    "Confirm and log in — your account is ready.",
                  ].map((step) => (
                    <li key={step} className="flex gap-1.5 text-[11px] leading-relaxed text-stone-600">
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-deep" strokeWidth={3} />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[10px] leading-relaxed text-stone-500">
                  If you delete the app, your account usually remains with the
                  operator. Reinstall and log in with the same number instead of
                  creating duplicate accounts.
                </p>
              </div>
            </div>

            <div hidden={tab !== "payments"}
              role="tabpanel"
              id="panel-payments"
              aria-labelledby="tab-payments"
              className="space-y-7"
            >
              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  Deposits, withdrawals and payment methods
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-stone-600">
                  Any payment happens inside the operator&apos;s app, not on
                  kanik.shop. Players in Pakistan commonly see these options; the
                  exact list, minimums and processing times are set by the
                  operator.
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {["JazzCash", "EasyPaisa", "Bank transfer", "USDT", "Crypto"].map(
                    (method) => (
                      <span
                        key={method}
                        className="inline-flex items-center gap-1 rounded-lg border border-sand-deep bg-cream px-2.5 py-1.5 text-[10px] font-bold text-stone-600"
                      >
                        <WalletCards className="h-3 w-3 text-gold-deep" />
                        {method}
                      </span>
                    ),
                  )}
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-sand-deep bg-cream p-3.5">
                    <h4 className="font-display text-[12px] font-extrabold text-ink">
                      To deposit
                    </h4>
                    <p className="mt-1 text-[10.5px] leading-relaxed text-stone-600">
                      Open Wallet → Deposit → choose the method → enter the amount →
                      confirm. Always verify the account name shown in the app and
                      keep the transaction receipt.
                    </p>
                  </div>
                  <div className="rounded-xl border border-sand-deep bg-cream p-3.5">
                    <h4 className="font-display text-[12px] font-extrabold text-ink">
                      To withdraw
                    </h4>
                    <p className="mt-1 text-[10.5px] leading-relaxed text-stone-600">
                      Open Wallet → Withdraw → choose the wallet → enter the amount
                      and correct account details → submit. Approvals can take time
                      and may require verification.
                    </p>
                  </div>
                </div>
                <p className="mt-2 flex items-start gap-1.5 rounded-lg bg-amber-50 px-2.5 py-2 text-[9.5px] leading-relaxed text-amber-800">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  Never send money to a person claiming they can “unlock” or “boost”
                  your account. kanik.shop will never ask you for a password, OTP or
                  payment.
                </p>
              </div>

              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  Is 3Patti Hot safe?
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-stone-600">
                  Installing any third-party APK carries some risk. The official
                  file is safer than repacked “modded” APKs found on random
                  download sites, but no app is risk-free. Use the checklist below.
                </p>
                <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                  {SAFETY.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-sand bg-cream px-3 py-2.5"
                    >
                      <h4 className="flex items-center gap-1.5 text-[10.5px] font-extrabold text-ink">
                        <Icon className="h-3.5 w-3.5 text-emerald-deep" />
                        {title}
                      </h4>
                      <p className="mt-1 text-[10px] leading-relaxed text-stone-600">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-sand-deep bg-cream p-3.5">
                <h4 className="flex items-center gap-1.5 font-display text-[12.5px] font-extrabold text-ink">
                  <Users className="h-3.5 w-3.5 text-gold-deep" />
                  3Patti Hot customer support
                </h4>
                <p className="mt-1 text-[10.5px] leading-relaxed text-stone-600">
                  For account, deposit or withdrawal problems, use the support or
                  live-chat option inside the official app or on 3pattihot.com. Keep
                  your user ID and transaction reference ready — never send your
                  password or OTP. This guide cannot access or recover accounts.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <OfficialReferralLink
                    label="Official 3pattihot.com support"
                    className="text-gold-deep decoration-gold-deep/25 hover:text-ruby"
                  />
                  <a
                    href="#download"
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-stone-500 hover:text-ruby"
                  >
                    Reinstall the app
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5">
                  <h4 className="flex items-center gap-1.5 text-[11.5px] font-extrabold text-emerald-deep">
                    <CircleCheck className="h-3.5 w-3.5" />
                    Pros
                  </h4>
                  <ul className="mt-1.5 space-y-1">
                    {PROS.map((item) => (
                      <li key={item} className="flex gap-1.5 text-[10px] leading-relaxed text-stone-600">
                        <Check className="mt-0.5 h-2.5 w-2.5 shrink-0 text-emerald-deep" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-3.5">
                  <h4 className="flex items-center gap-1.5 text-[11.5px] font-extrabold text-ruby">
                    <CircleX className="h-3.5 w-3.5" />
                    Cons
                  </h4>
                  <ul className="mt-1.5 space-y-1">
                    {CONS.map((item) => (
                      <li key={item} className="flex gap-1.5 text-[10px] leading-relaxed text-stone-600">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ruby/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-sand-deep">
                <div className="border-b border-sand-deep bg-cream px-4 py-2.5">
                  <h4 className="font-display text-[12px] font-extrabold text-ink">
                    3Patti Hot vs other Teen Patti apps (general comparison)
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[420px] text-left">
                    <thead className="bg-[#170b07] text-[9px] uppercase tracking-[0.06em] text-gold-soft">
                      <tr>
                        <th className="px-3 py-2 font-extrabold">Feature</th>
                        <th className="px-3 py-2 font-extrabold">3Patti Hot</th>
                        <th className="px-3 py-2 font-extrabold">Typical Teen Patti app</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sand text-[10px]">
                      {[
                        ["Distribution", "Official APK", "APK or app store"],
                        ["Game variety", "Card + casino-style", "Mostly card games"],
                        ["Local wallets", "Usually supported", "Varies"],
                        ["Referral program", "Yes, in-app", "Common"],
                        ["Play Store listing", "Usually not", "Sometimes"],
                      ].map(([feature, hot, other], index) => (
                        <tr key={feature} className={index % 2 ? "bg-cream/40" : "bg-white"}>
                          <th className="px-3 py-2 font-bold text-stone-500">{feature}</th>
                          <td className="px-3 py-2 font-semibold text-ink">{hot}</td>
                          <td className="px-3 py-2 text-stone-600">{other}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div hidden={tab !== "reviews"}
              role="tabpanel"
              id="panel-reviews"
              aria-labelledby="tab-reviews"
              className="space-y-7"
            >
              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  What players tend to say
                </h3>
                <div className="mt-2.5 grid gap-2.5 sm:grid-cols-3">
                  {[
                    {
                      quote:
                        "Quick download and a busy lobby. Teen Patti tables felt smooth on my phone.",
                      name: "Android player",
                      place: "Lahore",
                    },
                    {
                      quote:
                        "The referral field was easy to find during sign-up and the games are simple to browse.",
                      name: "New player",
                      place: "Karachi",
                    },
                    {
                      quote:
                        "Good variety, but I set a strict monthly budget because results are unpredictable.",
                      name: "Regular player",
                      place: "Islamabad",
                    },
                  ].map((review) => (
                    <figure
                      key={review.name}
                      className="rounded-xl border border-sand bg-cream p-3"
                    >
                      <div className="flex gap-0.5 text-gold-deep" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-2.5 w-2.5 fill-current" strokeWidth={0} />
                        ))}
                      </div>
                      <blockquote className="mt-1.5 text-[10.5px] leading-relaxed text-stone-600">
                        “{review.quote}”
                      </blockquote>
                      <figcaption className="mt-1.5 text-[9px] font-bold text-stone-400">
                        {review.name} · {review.place}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="mt-2 text-[9px] leading-relaxed text-stone-400">
                  Illustrative community feedback, not verified customer reviews and
                  not a promise of winnings, rewards or income.
                </p>
              </div>

              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  Practical tips for new players
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {[
                    "Start with free or low-stake tables until you understand the rules.",
                    "Learn the hand rankings: trail, pure sequence, sequence, colour, pair, high card.",
                    "Decide a budget before you open the app and stop when you reach it.",
                    "Never chase losses or borrow money to continue playing.",
                    "Check bonus conditions — play-through requirements can be strict.",
                    "Take breaks. If it stops being entertainment, stop playing.",
                  ].map((tip) => (
                    <li key={tip} className="flex gap-1.5 text-[11px] leading-relaxed text-stone-600">
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-gold-deep" strokeWidth={3} />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-[-0.02em] text-ink">
                  Final verdict
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-stone-600">
                  3Patti Hot is a familiar, lightweight Teen Patti option with a lot
                  of side games and an easy one-tap Android download. It is not on
                  Google Play, involves real-money risk if you use paid features, and
                  should be treated as entertainment rather than income. If you are
                  18+, understand the risks, and real-money gaming is legal where you
                  live, install it from the official source, use referral code{" "}
                  {REFERRAL_CODE} at sign-up, and keep strict limits.
                </p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <DownloadButton
                    onNotify={onNotify}
                    size="md"
                    label="DOWNLOAD 3PATTI HOT APK"
                  />
                  <OfficialReferralLink label="Visit 3pattihot.com" />
                </div>
              </div>
            </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[9px] leading-relaxed text-stone-400">
          This guide is informational and independently maintained. Features,
          payment methods, bonuses and game lists are controlled by the 3Patti Hot
          operator and may change. Real-money gaming is 18+ and subject to local
          law. Play responsibly.
        </p>
      </div>
    </section>
  );
}
