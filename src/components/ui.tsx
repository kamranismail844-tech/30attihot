import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  APK_SIZE,
  APK_URL,
  REFERRAL_CODE,
  REFERRAL_URL,
} from "../constants";
import { cn } from "../utils/cn";

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      return true;
    } catch {
      return false;
    }
  }
}

export function AppIcon({ className }: { className?: string }) {
  return (
    <img
      src="./images/app-icon.svg"
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      decoding="async"
      className={cn(
        "h-12 w-12 shrink-0 rounded-[24%] object-cover shadow-[0_6px_16px_-6px_rgba(0,0,0,0.6)] ring-1 ring-black/15",
        className,
      )}
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="3Patti Hot download guide — back to top"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <AppIcon className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-3 sm:h-11 sm:w-11" />
      <span className="leading-none">
        <span className="block font-display text-[16px] font-extrabold tracking-[-0.03em] text-white sm:text-[18px]">
          3Patti <span className="text-gold-gradient">HOT</span>
        </span>
        <span className="mt-1 block text-[7px] font-extrabold uppercase tracking-[0.19em] text-gold/75 sm:text-[8px] sm:tracking-[0.24em]">
          Teen Patti · Play Big
        </span>
      </span>
    </a>
  );
}

type DownloadButtonProps = {
  label?: string;
  sublabel?: string | false;
  onNotify?: (message: string) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  ariaLabel?: string;
};

export function DownloadButton({
  label = "DOWNLOAD 3PATTI HOT",
  sublabel,
  onNotify,
  className,
  size = "lg",
  showArrow = true,
  ariaLabel,
}: DownloadButtonProps) {
  const handleClick = () => {
    void copyText(REFERRAL_CODE).then((copied) => {
      onNotify?.(
        copied
          ? "Download started — code 10231669 is copied for sign-up."
          : "Download started. Enter code 10231669 when you sign up.",
      );
    });
  };

  return (
    <a
      href={APK_URL}
      download="3PattiHot.apk"
      onClick={handleClick}
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? `${label} — direct one-tap APK download`}
      data-cta="apk-direct"
      className={cn(
        "btn-gold group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl text-left",
        size === "lg" && "px-4 py-3 sm:px-5 sm:py-3.5",
        size === "md" && "px-3.5 py-2.5",
        size === "sm" && "gap-1.5 rounded-lg px-2.5 py-1.5",
        className,
      )}
    >
      <span className="shine pointer-events-none absolute inset-0" aria-hidden="true" />
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-full bg-[#2b1608] text-gold-soft",
          size === "lg" ? "h-9 w-9" : size === "md" ? "h-8 w-8" : "h-6 w-6",
        )}
      >
        <Download
          className={cn(
            size === "sm" ? "h-3 w-3" : size === "md" ? "h-3.5 w-3.5" : "h-4 w-4",
            "transition-transform duration-300 group-hover:translate-y-0.5",
          )}
          strokeWidth={3}
        />
      </span>
      <span className="relative min-w-0">
        <span
          className={cn(
            "block font-display font-extrabold leading-tight tracking-[-0.01em]",
            size === "lg" && "text-[14px] sm:text-[15.5px]",
            size === "md" && "text-[12.5px]",
            size === "sm" && "text-[10.5px]",
          )}
        >
          {label}
        </span>
        {sublabel !== false && (
          <span
            className={cn(
              "mt-0.5 block font-bold uppercase tracking-[0.1em] text-[#5b3a12]/80",
              size === "lg" ? "text-[8.5px] sm:text-[9px]" : "text-[7.5px]",
            )}
          >
            {sublabel ?? `ONE TAP · FREE ${APK_SIZE} APK · ANDROID`}
          </span>
        )}
      </span>
      {showArrow && (
        <ArrowUpRight
          className={cn(
            "relative ml-auto shrink-0 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            size === "lg" ? "h-4.5 w-4.5" : "h-3.5 w-3.5",
          )}
          strokeWidth={2.6}
        />
      )}
    </a>
  );
}

export function CopyIconButton({
  onNotify,
  tone = "dark",
  className,
}: {
  onNotify?: (message: string) => void;
  tone?: "dark" | "light";
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyText(REFERRAL_CODE);
    setCopied(ok);
    onNotify?.(
      ok
        ? "Referral code 10231669 copied. Enter it at sign-up."
        : "Your referral code is 10231669.",
    );
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy referral code ${REFERRAL_CODE}`}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-lg border transition-all duration-200 active:scale-95",
        tone === "dark"
          ? "border-gold/35 bg-white/10 text-gold-soft hover:border-gold/60 hover:bg-white/15"
          : "border-gold-deep/25 bg-white text-gold-deep hover:border-gold-deep/50 hover:bg-gold-soft/25",
        className ?? "h-9 w-9",
      )}
    >
      {copied ? (
        <Check className="h-4 w-4" strokeWidth={3} />
      ) : (
        <Copy className="h-3.5 w-3.5" strokeWidth={2.4} />
      )}
    </button>
  );
}

export function CodeChip({ onNotify }: { onNotify?: (message: string) => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyText(REFERRAL_CODE);
    setCopied(ok);
    onNotify?.(ok ? "Referral code 10231669 copied." : "Your code is 10231669.");
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy referral code ${REFERRAL_CODE}`}
      className="inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-white/5 px-2.5 py-1.5 text-left transition-colors hover:border-gold/55 hover:bg-white/10"
    >
      <span className="text-[7px] font-extrabold uppercase leading-tight tracking-[0.12em] text-gold/60">
        Ref.
        <br />
        code
      </span>
      <span className="font-display text-[11.5px] font-extrabold tracking-[0.08em] text-gold-soft">
        {REFERRAL_CODE}
      </span>
      {copied ? (
        <Check className="h-3 w-3 text-emerald-400" strokeWidth={3} />
      ) : (
        <Copy className="h-3 w-3 text-gold/60" />
      )}
    </button>
  );
}

export function OfficialReferralLink({
  className,
  label = "Open official 3pattihot.com page",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={REFERRAL_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={cn(
        "group inline-flex items-center gap-1.5 text-[11px] font-bold underline decoration-2 underline-offset-4 transition-colors",
        className ?? "text-stone-500 decoration-stone-300 hover:text-ruby hover:decoration-ruby/40",
      )}
    >
      <ExternalLink className="h-3 w-3 shrink-0" />
      {label}
      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.16em]",
        tone === "dark"
          ? "border-gold/25 bg-gold/10 text-gold-soft"
          : "border-gold-deep/20 bg-white text-gold-deep shadow-sm",
        className,
      )}
    >
      <Sparkles className="h-2.5 w-2.5" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  align?: "center" | "left";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={isDark ? "dark" : "light"}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 font-display text-[26px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[34px]",
          isDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-[13px] leading-relaxed sm:text-[14px]",
            isDark ? "text-stone-300" : "text-stone-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const fallback = setTimeout(() => setVisible(true), 700);
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return () => clearTimeout(fallback);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -24px 0px" },
    );
    observer.observe(element);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        visible && "is-visible",
        delay === 1 && "reveal-delay-1",
        delay === 2 && "reveal-delay-2",
        delay === 3 && "reveal-delay-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
