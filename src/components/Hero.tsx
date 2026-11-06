import {
  Check,
  Download,
  Gift,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { APK_SIZE, REFERRAL_CODE } from "../constants";
import { AppIcon, CopyIconButton, DownloadButton, Eyebrow } from "./ui";

const CHIPS = [
  { icon: Users, text: "200M+ players" },
  { icon: Zap, text: "One-tap download" },
  { icon: Gift, text: "New-player rewards" },
];

export function Hero({ onNotify }: { onNotify: (message: string) => void }) {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#140806] pb-10 pt-6 sm:pb-14 sm:pt-9"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 35%, rgba(179,126,37,0.28) 0%, rgba(90,35,12,0.14) 45%, transparent 74%), radial-gradient(ellipse 50% 40% at 5% 15%, rgba(145,17,31,0.28) 0%, transparent 70%)",
        }}
      />
      <div className="hero-dots pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-x">
        <div className="grid items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="reveal is-visible">
            <Eyebrow>3Patti Hot · 2026 Edition</Eyebrow>

            <h1 className="mt-4 font-display text-[36px] font-extrabold leading-[0.99] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[54px]">
              3Patti Hot <span className="text-gold-gradient">Download</span>
              <span className="mt-2 block font-display text-[19px] font-bold leading-[1.15] tracking-[-0.02em] text-stone-200 sm:text-[25px] lg:text-[27px]">
                Teen Patti, Dragon Tiger &amp; more — one tap.
              </span>
            </h1>

            <p className="mt-3.5 max-w-lg text-[12.5px] leading-relaxed text-stone-300/90 sm:mt-4 sm:text-[14px]">
              Get the latest 3Patti Hot APK for Android directly from this page.
              No extra download page, no second click. Enter referral code{" "}
              <strong className="font-extrabold text-gold-soft">{REFERRAL_CODE}</strong>{" "}
              at sign-up for new-player rewards.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {CHIPS.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[9.5px] font-bold text-stone-200 sm:text-[10.5px]"
                >
                  <Icon className="h-3 w-3 text-gold" />
                  {text}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-stretch">
              <DownloadButton
                onNotify={onNotify}
                className="w-full sm:w-auto"
                label="DOWNLOAD 3PATTI HOT"
              />
              <div className="flex min-w-0 items-center gap-2 rounded-xl border border-gold/25 bg-white/[0.05] px-2.5 py-2">
                <div className="min-w-0">
                  <p className="text-[7px] font-extrabold uppercase tracking-[0.16em] text-gold/60">
                    Referral code
                  </p>
                  <p className="mt-0.5 font-display text-[16px] font-extrabold leading-none tracking-[0.16em] text-gold-soft">
                    {REFERRAL_CODE}
                  </p>
                </div>
                <CopyIconButton onNotify={onNotify} />
              </div>
            </div>

            <p className="mt-2 flex items-start gap-1.5 text-[9.5px] leading-relaxed text-stone-400 sm:text-[10px]">
              <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400" strokeWidth={3} />
              Code auto-copies when you tap download. Paste it during app registration.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-white/10 pt-3 text-[9.5px] font-semibold text-stone-400 sm:text-[10.5px]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Official CDN file
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Smartphone className="h-3.5 w-3.5 text-gold" />
                Android 5.1+
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Download className="h-3.5 w-3.5 text-gold" />
                {APK_SIZE} · Free
              </span>
              <span className="rounded bg-ruby px-1 py-0.5 text-[8px] font-extrabold text-white">
                18+
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[350px] sm:max-w-[380px]">
            <div
              className="pointer-events-none absolute inset-4 -z-10 rounded-full bg-gold/20 blur-[55px]"
              aria-hidden="true"
            />
            <div className="relative rounded-[1.75rem] bg-[linear-gradient(145deg,#ffe9ae,#c08427_38%,#6d420e_62%,#f7d47f)] p-[2.5px] shadow-[0_30px_60px_-26px_rgba(0,0,0,0.9)]">
              <div className="overflow-hidden rounded-[1.65rem] bg-[#1a0c07] p-1">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src="./images/hero-queen.jpg"
                    alt="3Patti Hot-inspired table host in a ruby gown holding a hand of aces with gold coins and casino chips"
                    width={720}
                    height={1280}
                    loading="eager"
                    fetchPriority="high"
                    className="h-[318px] w-full object-cover object-[center_22%] sm:h-[380px] lg:h-[432px]"
                  />
                  <div
                    className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#160806] via-[#160806]/75 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-full border border-gold-soft/40 bg-[#1c0c07]/75 px-2 py-1 text-[7.5px] font-extrabold uppercase tracking-[0.12em] text-gold-soft backdrop-blur">
                    <Sparkles className="h-2.5 w-2.5" />
                    Season 2026
                  </div>
                  <div className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full border border-white/25 bg-black/35 px-2 py-1 text-[7.5px] font-bold text-white/90 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    APK online
                  </div>

                  <div className="absolute inset-x-2.5 bottom-2.5 rounded-xl border border-gold/25 bg-[#1b0d08]/88 p-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <AppIcon className="h-10 w-10" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-display text-[11.5px] font-extrabold text-white">
                          3Patti Hot
                        </p>
                        <p className="mt-0.5 truncate text-[8px] text-stone-400">
                          Teen Patti · Card &amp; casino · {APK_SIZE}
                        </p>
                      </div>
                      <DownloadButton
                        size="sm"
                        label="GET"
                        sublabel={false}
                        showArrow={false}
                        onNotify={onNotify}
                        className="!rounded-md"
                        ariaLabel="Download 3Patti Hot APK from the preview"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-[8px] leading-relaxed text-stone-500">
              Fan-made artwork. 3Patti Hot branding belongs to its owner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
