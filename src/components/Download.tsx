import {
  Apple,
  Check,
  Download,
  ExternalLink,
  FileCheck2,
  Gift,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import {
  APK_SIZE,
  IOS_URL,
  REFERRAL_CODE,
} from "../constants";
import {
  AppIcon,
  CopyIconButton,
  DownloadButton,
  Eyebrow,
  OfficialReferralLink,
  Reveal,
} from "./ui";

const STEPS = [
  {
    icon: Download,
    title: "Tap download",
    text: "The APK starts saving directly — no extra page.",
  },
  {
    icon: FileCheck2,
    title: "Install the file",
    text: "Allow “unknown apps” if Android asks, then Install.",
  },
  {
    icon: Gift,
    title: "Enter the code",
    text: `Register with referral code ${REFERRAL_CODE}.`,
  },
];

const SPECS = [
  ["Version", "Latest"],
  ["Size", APK_SIZE],
  ["Android", "5.1+"],
  ["Price", "Free"],
];

export function DownloadSection({
  onNotify,
}: {
  onNotify: (message: string) => void;
}) {
  return (
    <section id="download" className="relative overflow-hidden bg-cream py-10 sm:py-14">
      <div
        className="diamond-pattern pointer-events-none absolute -left-20 top-10 h-72 w-72 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-[70px]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <div>
            <Reveal>
              <Eyebrow tone="light">Download &amp; install</Eyebrow>
              <h2 className="mt-3.5 font-display text-[28px] font-extrabold leading-[1.06] tracking-[-0.04em] text-ink sm:text-[36px]">
                One tap is all it takes.
              </h2>
              <p className="mt-2.5 max-w-lg text-[12.5px] leading-relaxed text-stone-600 sm:text-[13.5px]">
                No middle page and no second download button. Tap once, get the
                latest Android APK, then install and register with code{" "}
                <strong className="text-ink">{REFERRAL_CODE}</strong>.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div className="mt-5 rounded-2xl border border-sand-deep bg-white p-3.5 shadow-[0_18px_44px_-36px_rgba(51,29,14,0.55)] sm:p-4">
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <DownloadButton
                    onNotify={onNotify}
                    className="w-full sm:flex-1"
                    label="DOWNLOAD 3PATTI HOT"
                  />
                  <div className="flex items-center justify-between gap-2 rounded-xl border border-gold-deep/20 bg-cream px-2.5 py-2 sm:w-auto">
                    <div>
                      <p className="text-[7px] font-extrabold uppercase tracking-[0.14em] text-gold-deep">
                        Referral code
                      </p>
                      <p className="mt-0.5 font-display text-[15px] font-extrabold leading-none tracking-[0.1em] text-ink">
                        {REFERRAL_CODE}
                      </p>
                    </div>
                    <CopyIconButton onNotify={onNotify} tone="light" />
                  </div>
                </div>

                <div className="mt-3 grid gap-2 border-t border-sand pt-3 sm:grid-cols-3">
                  {STEPS.map(({ icon: Icon, title, text }, index) => (
                    <div key={title} className="flex gap-2">
                      <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gold-soft/35 text-gold-deep">
                        <Icon className="h-3 w-3" strokeWidth={2.4} />
                        <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-ink text-[6px] font-extrabold text-gold-soft">
                          {index + 1}
                        </span>
                      </span>
                      <p className="text-[10px] leading-snug text-stone-600">
                        <span className="font-extrabold text-ink">{title}. </span>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-3.5 grid grid-cols-4 gap-px overflow-hidden rounded-xl border border-sand-deep bg-sand-deep">
                {SPECS.map(([label, value]) => (
                  <div key={label} className="bg-white px-2 py-2">
                    <p className="text-[7px] font-extrabold uppercase tracking-[0.08em] text-stone-400">
                      {label}
                    </p>
                    <p className="mt-0.5 font-display text-[10.5px] font-extrabold text-ink">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                <OfficialReferralLink label="Official 3pattihot.com page" />
                <a
                  href={IOS_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-stone-500 hover:text-ruby"
                >
                  <Apple className="h-3 w-3" />
                  iPhone option
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              </div>

              <p className="mt-2.5 flex items-start gap-1.5 rounded-lg bg-amber-50 px-2.5 py-2 text-[9.5px] leading-relaxed text-amber-800">
                <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                Only install if you are 18+ and real-money gaming is allowed in
                your area. Never share your password or OTP with anyone.
              </p>
            </Reveal>
          </div>

          <Reveal delay={1} className="mx-auto w-full max-w-[330px]">
            <div className="relative rounded-2xl border border-gold/25 bg-[#170b07] p-3 shadow-[0_30px_60px_-34px_rgba(46,25,10,0.65)]">
              <div
                className="pointer-events-none absolute left-1/2 top-6 h-40 w-52 -translate-x-1/2 rounded-full bg-gold/20 blur-[55px]"
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between px-1 pb-2.5">
                <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-white/5 px-2 py-1 text-[7.5px] font-extrabold uppercase tracking-[0.1em] text-gold-soft">
                  <ShieldCheck className="h-2.5 w-2.5" />
                  Android APK
                </span>
                <span className="text-[7.5px] font-bold uppercase tracking-[0.1em] text-stone-500">
                  App preview
                </span>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0605]">
                <img
                  src="./images/hero-queen.jpg"
                  alt="Preview of the 3Patti Hot app screen"
                  width={720}
                  height={1280}
                  loading="lazy"
                  className="h-[190px] w-full object-cover object-[center_22%]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#170b07] via-transparent to-black/20"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-2.5 bottom-2.5">
                  <div className="flex items-center gap-2">
                    <AppIcon className="h-9 w-9" />
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[10.5px] font-extrabold text-white">
                        3Patti Hot
                      </p>
                      <p className="truncate text-[7.5px] text-stone-400">
                        Lightning-fast · 200M+ players
                      </p>
                    </div>
                    <DownloadButton
                      size="sm"
                      label="GET"
                      sublabel={false}
                      showArrow={false}
                      onNotify={onNotify}
                      className="!rounded-md"
                      ariaLabel="Download 3Patti Hot APK"
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-1.5 rounded-md border border-gold/20 bg-black/35 py-1">
                    <span className="text-[6px] uppercase tracking-[0.12em] text-stone-400">
                      Referral
                    </span>
                    <span className="font-display text-[7px] font-extrabold tracking-[0.12em] text-gold-soft">
                      {REFERRAL_CODE}
                    </span>
                    <Check className="h-2 w-2 text-emerald-400" strokeWidth={3} />
                  </div>
                </div>
              </div>

              <div className="mt-2.5 flex items-center justify-between px-1">
                <span className="inline-flex items-center gap-1 text-[7.5px] font-semibold text-stone-500">
                  <Check className="h-2.5 w-2.5 text-emerald-400" strokeWidth={3} />
                  No sign-up to download
                </span>
                <span className="text-[7.5px] font-bold text-stone-500">
                  {APK_SIZE}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
