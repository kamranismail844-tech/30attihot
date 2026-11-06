import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import {
  APK_SIZE,
  APK_URL,
  CONTACT_EMAIL,
  IOS_URL,
  REFERRAL_CODE,
  REFERRAL_URL,
} from "../constants";
import { DownloadButton, Logo, copyText } from "./ui";
import { cn } from "../utils/cn";

const LEGAL = [
  {
    title: "Privacy",
    body: "This is a static guide. We do not ask for your name, phone number, password or payment details. Copy buttons only place referral code 10231669 on your clipboard at your request. Downloads and official-page visits go to third-party servers with their own privacy policies. Basic hosting logs may be kept by our provider for security. Questions: hello@kanik.shop.",
  },
  {
    title: "Terms",
    body: "Information only, for adults 18+. App features, rewards and availability are controlled by the operator and may change. We do not guarantee wins, bonuses, withdrawals or income, and we are not responsible for third-party services. Use is at your own discretion and subject to local laws.",
  },
  {
    title: "Disclaimer",
    body: "kanik.shop is an independent affiliate page, not the official 3Patti Hot website. We may receive a referral benefit when you install or register through our links, at no extra cost to you. 3Patti Hot and related marks belong to their owners. Artwork is illustrative. Real-money gaming involves financial risk — only spend what you can afford to lose.",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-[#100605] text-stone-400">
      <div
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-gold/10 blur-[90px]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="grid gap-7 py-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-[10.5px] leading-relaxed text-stone-400">
              An independent one-tap download guide for 3Patti Hot. Official APK
              details, install steps and referral code{" "}
              <span className="font-bold text-gold-soft">{REFERRAL_CODE}</span>.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-md border border-gold/20 bg-white/5 px-2 py-1 text-[8.5px] font-bold text-stone-300">
                <ShieldCheck className="h-3 w-3 text-emerald-400" />
                Independent guide
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-gold/20 bg-white/5 px-2 py-1 text-[8.5px] font-bold text-stone-300">
                <Download className="h-3 w-3 text-gold" />
                {APK_SIZE} APK
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-gold/20 bg-white/5 px-2 py-1 text-[8.5px] font-bold text-stone-300">
                <span className="rounded bg-ruby px-1 text-[7.5px] font-extrabold text-white">
                  18+
                </span>
                Adults only
              </span>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold text-stone-400 hover:text-gold-soft"
            >
              <Mail className="h-3 w-3 text-gold-deep" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Site links">
            <h2 className="font-display text-[9px] font-extrabold uppercase tracking-[0.16em] text-gold/70">
              Explore
            </h2>
            <ul className="mt-2.5 space-y-2">
              {[
                ["Games", "#games"],
                ["Download APK", "#download"],
                ["3Patti Hot guide", "#guide"],
                ["FAQ", "#faq"],
                ["Direct APK file", APK_URL],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[10.5px] font-semibold hover:text-gold-soft"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-[9px] font-extrabold uppercase tracking-[0.16em] text-gold/70">
              Official
            </h2>
            <ul className="mt-2.5 space-y-2">
              <li>
                <a
                  href={REFERRAL_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold hover:text-gold-soft"
                >
                  <ExternalLink className="h-3 w-3 text-gold-deep" />
                  3pattihot.com
                </a>
              </li>
              <li>
                <a
                  href={IOS_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold hover:text-gold-soft"
                >
                  <ExternalLink className="h-3 w-3 text-gold-deep" />
                  iOS option
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold hover:text-gold-soft"
                >
                  Install guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-1.5 border-t border-white/10 py-4 sm:grid-cols-3">
          {LEGAL.map((item) => (
            <details key={item.title} className="group rounded-lg bg-white/[0.035] px-3 py-2">
              <summary className="cursor-pointer list-none text-[9.5px] font-extrabold uppercase tracking-[0.1em] text-stone-300">
                {item.title}
                <span className="float-right text-gold/60 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-1.5 text-[9px] leading-relaxed text-stone-500">
                {item.body}
              </p>
            </details>
          ))}
        </div>

        <div className="border-t border-white/10 py-3.5">
          <p className="text-[8.5px] leading-relaxed text-stone-500">
            <strong className="text-stone-400">Affiliate disclosure:</strong>{" "}
            kanik.shop is not owned by, endorsed by or operated by the 3Patti Hot
            developer. We may earn a referral benefit when you install or register
            through links on this page, at no extra cost to you. 3Patti Hot and
            related marks belong to their owners. Rewards, payments and
            withdrawals are controlled by the operator and are not guaranteed. No
            payments are taken on this site. Real-money gaming is for adults 18+
            where permitted by local law. Play responsibly.
          </p>
          <div className="mt-2 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center">
            <p className="text-[8.5px] text-stone-600">
              © {new Date().getFullYear()} kanik.shop · Independent 3Patti Hot
              guide.
            </p>
            <p className="text-[8.5px] font-semibold text-stone-600">
              Referral code:{" "}
              <span className="font-display font-extrabold tracking-[0.1em] text-gold/80">
                {REFERRAL_CODE}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobileDownloadBar({
  onNotify,
}: {
  onNotify: (message: string) => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyText(REFERRAL_CODE);
    setCopied(ok);
    onNotify?.(
      ok ? "Referral code 10231669 copied." : "Your referral code is 10231669.",
    );
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-[#140806]/95 px-2.5 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-1.5 shadow-[0_-14px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy referral code ${REFERRAL_CODE}`}
          className={cn(
            "flex min-w-0 shrink-0 flex-col items-start rounded-lg border px-2 py-1",
            copied
              ? "border-emerald-400/40 bg-emerald-900/25"
              : "border-gold/25 bg-white/5",
          )}
        >
          <span className="text-[6.5px] font-extrabold uppercase leading-tight tracking-[0.1em] text-gold/60">
            Ref. code
          </span>
          <span className="mt-0.5 flex items-center gap-1 font-display text-[11px] font-extrabold tracking-[0.08em] text-gold-soft">
            {REFERRAL_CODE}
            {copied ? (
              <Check className="h-2.5 w-2.5 text-emerald-400" strokeWidth={3} />
            ) : (
              <Copy className="h-2.5 w-2.5 text-gold/60" />
            )}
          </span>
        </button>
        <DownloadButton
          onNotify={onNotify}
          size="sm"
          label="DOWNLOAD APK"
          sublabel={`Free · ${APK_SIZE} · One tap`}
          className="min-w-0 flex-1 !rounded-lg !px-2.5 !py-1"
        />
      </div>
    </div>
  );
}
