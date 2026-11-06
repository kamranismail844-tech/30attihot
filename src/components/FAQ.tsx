import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { REFERRAL_CODE } from "../constants";
import { DownloadButton, Eyebrow, OfficialReferralLink, Reveal } from "./ui";
import { cn } from "../utils/cn";

const FAQS = [
  {
    q: "What is 3Patti Hot?",
    a: "3Patti Hot (also written 3 Patti Hot or Teen Patti Hot) is an Android card-game app built around Teen Patti, with extra casino-style mini games and a referral programme. The operator distributes it as an APK from 3pattihot.com. Features, limits and offers are controlled by the operator and can vary by version and region.",
  },
  {
    q: "Is the 3Patti Hot download really one tap?",
    a: "Yes. The gold download buttons point directly to the latest APK on the operator's content network. Your browser starts saving the file immediately — there is no extra download page or second button. The referral code is copied automatically so it is ready for sign-up.",
  },
  {
    q: "Where do I enter referral code 10231669?",
    a: "Install and open 3Patti Hot, then start registration. Paste 10231669 into the invitation, referral or promo-code field on that sign-up form. The code is not needed to download and does not change the file. Reward eligibility, amounts and conditions are decided by the operator.",
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
    a: "Open the downloaded file from your browser downloads or file manager and tap it. If Android asks, allow installs from that browser under “Install unknown apps”, then tap Install. After installation, open the app, register and enter the referral code in the invitation field.",
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
    a: "The file shared here is an Android APK and will not install on iOS. iOS availability is controlled by the operator. Use the official 3pattihot.com link on this page to check whether an iOS or web version is currently available, and avoid random “iOS APK” downloads.",
  },
  {
    q: "Which payment methods are used for deposit and withdrawal?",
    a: "Players in Pakistan commonly see JazzCash, EasyPaisa, bank transfer and sometimes USDT or crypto. The exact list, minimum amounts, processing time and verification requirements are set by the operator inside the app. All payments happen there — kanik.shop never takes deposits or holds funds.",
  },
  {
    q: "Why is 3Patti Hot not on the Google Play Store?",
    a: "The operator distributes the Android version as an APK from its own website, so you may not find it on Google Play. That is why this guide links directly to the official APK file and explains the “Install unknown apps” step. Only install from a source you trust.",
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
    q: "Is it legal to play and who can use it?",
    a: "Rules vary by country and region. This page and the app are intended for adults aged 18 or over. Real-money card games carry financial risk and are restricted in some places. Check your local law before playing, set a budget and never spend money you cannot afford to lose.",
  },
];

export function FAQ({ onNotify }: { onNotify: (message: string) => void }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream py-10 sm:py-14">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow tone="light">Quick answers</Eyebrow>
            <h2 className="mt-3.5 font-display text-[26px] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-[32px]">
              3Patti Hot download FAQ
            </h2>
            <p className="mt-2 text-[12px] leading-relaxed text-stone-600">
              APK, install, referral code, payments, iOS, PC and safety — answered
              in one place.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-5 max-w-3xl space-y-2">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className={cn(
                  "overflow-hidden rounded-xl border bg-white transition-colors",
                  isOpen
                    ? "border-gold-deep/40"
                    : "border-sand-deep/80 hover:border-gold-deep/25",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-3 px-3.5 py-3 text-left sm:px-4"
                >
                  <span className="font-display text-[11.5px] font-extrabold leading-snug text-ink sm:text-[12.5px]">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "rotate-180 border-gold-deep bg-gold-deep text-white"
                        : "border-sand-deep bg-cream text-stone-500",
                    )}
                  >
                    <ChevronDown className="h-3 w-3" strokeWidth={2.8} />
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-sand px-3.5 pb-3 pt-2.5 text-[11px] leading-relaxed text-stone-600 sm:px-4 sm:text-[11.5px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-between gap-3 rounded-2xl border border-gold/25 bg-[#170b07] p-4 sm:flex-row">
          <div>
            <p className="font-display text-[14px] font-extrabold text-white">
              Ready to play? Download in one tap.
            </p>
            <p className="mt-0.5 text-[10px] text-stone-400">
              Free APK · Code {REFERRAL_CODE} copied for sign-up · 18+
            </p>
            <div className="mt-1.5">
              <OfficialReferralLink
                label="Or visit official 3pattihot.com"
                className="text-stone-400 decoration-stone-600 hover:text-gold-soft hover:decoration-gold/40"
              />
            </div>
          </div>
          <DownloadButton
            onNotify={onNotify}
            size="md"
            label="DOWNLOAD APK"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
