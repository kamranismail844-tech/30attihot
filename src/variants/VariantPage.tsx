import {
  AlertTriangle,
  Apple,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  CircleX,
  Copy,
  Download,
  ExternalLink,
  Gift,
  Globe2,
  Headphones,
  LifeBuoy,
  KeyRound,
  TrendingUp,
  Laptop,
  LockKeyhole,
  Package,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  WalletCards,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactElement } from "react";
import {
  APK_SIZE,
  IOS_URL,
  REFERRAL_CODE,
  REFERRAL_URL,
} from "../constants";
import { copyText } from "../components/ui";
import {
  FAQS,
  FEATURES,
  GAMES,
  GAME_LIST,
  GUIDE_BLOCKS,
  STATS,
} from "./content";
import type { GameTile, SectionKey, VariantConfig as Config } from "./config";
import { cn } from "../utils/cn";
import { AdBanner, AdNative, AdSidebar } from "../components/Ads";

const FONT_STACK: Record<Config["font"], string> = {
  display: "'Sora', ui-sans-serif, system-ui, sans-serif",
  sans: "'Manrope', ui-sans-serif, system-ui, sans-serif",
  serif: "Georgia, 'Times New Roman', serif",
};

const TILE_ASPECT: Record<GameTile, string> = {
  square: "aspect-square",
  tall: "aspect-[4/5]",
  icon: "aspect-square",
  wide: "aspect-[16/9]",
};

function IconGlyph({ name }: { name: string }) {
  const map: Record<string, string> = {
    "Dragon Tiger": "🐉",
    "Thunder Fire": "⚡",
    Rocket: "🚀",
    "Roulette Zoo": "🦁",
    "Classic Fruit": "🍒",
    "Fortune Gems": "💎",
    "Car Roulette": "🏎️",
    Goal: "⚽",
  };
  return <span className="text-3xl sm:text-4xl">{map[name] ?? "🎴"}</span>;
}

export function VariantPage({
  config,
  onNotify,
}: {
  config: Config;
  onNotify: (message: string) => void;
}) {
  const t = config.theme;
  const font = FONT_STACK[config.font];

  const style = useMemo(
    () =>
      ({
        "--v-bg": t.bg,
        "--v-bg-alt": t.bgAlt,
        "--v-surface": t.surface,
        "--v-border": t.border,
        "--v-text": t.text,
        "--v-muted": t.muted,
        "--v-accent": t.accent,
        "--v-accent-text": t.accentText,
        "--v-cta-from": t.ctaFrom,
        "--v-cta-to": t.ctaTo,
        "--v-cta-text": t.ctaText,
        "--v-radius": config.radius,
        fontFamily: font,
      }) as React.CSSProperties,
    [t, config.radius, font],
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isDarkUnused = useMemo((): boolean => {
    const hex = t.bg.replace("#", "");
    if (hex.length < 6) return true;
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 < 140;
  }, [t.bg]);
  void isDarkUnused;

  const handleDownload = () => {
    void copyText(REFERRAL_CODE).then((ok) =>
      onNotify(
        ok
          ? "Opening 3pattihot.com with your referral — code 10231669 copied as backup."
          : "Opening the official referral page with code 10231669.",
      ),
    );
  };

  const Cta = ({
    label = config.ctaLabel,
    className,
    size = "lg",
  }: {
    label?: string;
    className?: string;
    size?: "lg" | "sm";
  }) => (
    <a
      href={REFERRAL_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleDownload}
      data-cta="referral-main"
      aria-label={`${label} — opens the official 3Patti Hot referral page`}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-extrabold tracking-[-0.01em] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0",
        size === "lg" ? "px-5 py-3.5 text-[15px]" : "px-3.5 py-2 text-[12px]",
        className,
      )}
      style={{
        borderRadius: config.radius,
        backgroundImage: `linear-gradient(112deg, ${t.ctaFrom}, ${t.ctaTo})`,
        color: t.ctaText,
        boxShadow: `0 16px 34px -16px ${t.ctaTo}cc`,
      }}
    >
      <Download
        className={size === "lg" ? "h-[18px] w-[18px]" : "h-3.5 w-3.5"}
        strokeWidth={2.8}
      />
      {label}
      <ArrowRight
        className={cn(
          "transition-transform group-hover:translate-x-0.5",
          size === "lg" ? "h-4 w-4" : "h-3 w-3",
        )}
      />
    </a>
  );

  const CodeBox = () => (
    <div
      className="inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5"
      style={{ borderColor: t.border, background: t.surface }}
    >
      <div>
        <p className="text-[7px] font-extrabold uppercase tracking-[0.16em]" style={{ color: t.muted }}>
          Referral code
        </p>
        <p className="font-display text-[13px] font-extrabold leading-none tracking-[0.12em]" style={{ color: t.accent }}>
          {REFERRAL_CODE}
        </p>
      </div>
      <button
        type="button"
        onClick={async () => {
          const ok = await copyText(REFERRAL_CODE);
          onNotify(ok ? "Referral code 10231669 copied." : "Your code is 10231669.");
        }}
        aria-label={`Copy referral code ${REFERRAL_CODE}`}
        className="flex h-7 w-7 items-center justify-center rounded-md border transition-opacity hover:opacity-80"
        style={{ borderColor: t.border, color: t.accent }}
      >
        <Copy className="h-3 w-3" />
      </button>
    </div>
  );

  const Badge = ({ children }: { children: React.ReactNode }) => (
    <span
      className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-[0.14em]"
      style={{ borderColor: t.border, color: t.muted }}
    >
      {children}
    </span>
  );

  /* ------------------------------- sections ------------------------------- */

  const renderHero = () => {
    const headline = (
      <h1
        className="font-display font-extrabold leading-[1.02] tracking-[-0.045em]"
        style={{ color: t.text }}
      >
        <span className="text-[34px] sm:text-[52px]">3Patti Hot</span>
        <br />
        <span className="text-[26px] sm:text-[40px]" style={{ color: t.accent }}>
          Download
        </span>
      </h1>
    );

    const copy = (
      <div className={config.hero === "posterLeft" ? "" : ""}>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.16em]"
            style={{ background: `${t.accent}1f`, color: t.accent, border: `1px solid ${t.border}` }}
          >
            <Sparkles className="h-2.5 w-2.5" />
            {config.eyebrow}
          </span>
          <Badge>{config.legalBadge}</Badge>
        </div>
        {headline}
        <p className="mt-3 max-w-lg text-[12.5px] leading-relaxed sm:text-[14px]" style={{ color: t.muted }}>
          Explore the 3Patti Hot Teen Patti-style card game and featured game
          modes. Tap download to open the referral page and check current
          install details.
        </p>
        <p className="mt-2 text-[11.5px]" style={{ color: t.muted }}>
          One tap opens 3pattihot.com with code{" "}
          <strong style={{ color: t.accent }}>{REFERRAL_CODE}</strong> already
          attached — your referral is tracked automatically, no code needed.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          <Cta />
          <CodeBox />
        </div>
      </div>
    );

    const poster = (
      <div className="relative mx-auto w-full max-w-[340px]">
        <div
          className="pointer-events-none absolute inset-3 -z-10 rounded-full blur-[52px]"
          style={{ background: `${t.accent}33` }}
          aria-hidden="true"
        />
        <div
          className="overflow-hidden rounded-[22px] p-[2px]"
          style={{
            backgroundImage: `linear-gradient(145deg, ${t.accent}cc, transparent 60%, ${t.accent}66)`,
          }}
        >
          <div className="overflow-hidden rounded-[20px]">
            <img
              src={config.heroImage}
              alt="3Patti Hot-style table host holding a hand of aces with gold coins and casino chips"
              width={720}
              height={1280}
              loading="eager"
              fetchPriority="high"
              className="h-[300px] w-full object-cover object-[center_20%] sm:h-[370px]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: `linear-gradient(to top, ${t.bg}e6, transparent 55%)` }}
              aria-hidden="true"
            />
            <div className="relative -mt-14 px-3 pb-3">
              <div
                className="flex items-center gap-2 rounded-xl border p-2 backdrop-blur"
                style={{ borderColor: t.border, background: `${t.bg}d9` }}
              >
                <img
                  src="./images/app-icon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-[24%]"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-display text-[11.5px] font-extrabold" style={{ color: t.text }}>
                    3Patti Hot
                  </p>
                  <p className="truncate text-[8.5px]" style={{ color: t.muted }}>
                    Lightning-fast download · {APK_SIZE}
                  </p>
                </div>
                <Cta size="sm" label="GET" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    if (config.hero === "posterRight") {
      return (
        <section className="grid items-center gap-7 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-12">
          <div>{copy}</div>
          {poster}
        </section>
      );
    }

    if (config.hero === "posterLeft") {
      return (
        <section className="grid items-center gap-7 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-12">
          {poster}
          <div>{copy}</div>
        </section>
      );
    }

    if (config.hero === "fullBleed") {
      return (
        <section className="relative isolate overflow-hidden py-14 sm:py-20">
          <img
            src="./images/og-cover.jpg"
            alt=""
            aria-hidden="true"
            loading="eager"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{ background: `linear-gradient(100deg, ${t.bg}f7 0%, ${t.bg}e0 45%, ${t.bg}99 100%)` }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-3xl px-1 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.16em]"
                style={{ background: `${t.accent}1f`, color: t.accent, border: `1px solid ${t.border}` }}
              >
                <Sparkles className="h-2.5 w-2.5" />
                {config.eyebrow}
              </span>
              <Badge>{config.legalBadge}</Badge>
            </div>
            <h1
              className="mt-4 font-display text-[40px] font-extrabold leading-[1.01] tracking-[-0.05em] sm:text-[62px]"
              style={{ color: t.text }}
            >
              3Patti <span style={{ color: t.accent }}>Hot</span>
              <span className="mt-2 block text-[22px] font-bold sm:text-[30px]" style={{ color: t.muted }}>
                Teen Patti · Card & Casino · One-tap APK
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-relaxed" style={{ color: t.muted }}>
              Get the latest 3Patti Hot Android APK in a single tap, install
              Teen Patti, Dragon Tiger, Roulette and more, then register with
              referral code {REFERRAL_CODE}.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              <Cta />
              <CodeBox />
            </div>
            <div className="mt-7 flex justify-center gap-3 overflow-x-auto no-scrollbar">
              {GAMES.filter((game) => game.image).slice(0, 4).map((game) => (
                <img
                  key={game.name}
                  src={game.image as string}
                  alt={`${game.name} game artwork`}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="h-24 w-24 shrink-0 rounded-xl object-cover ring-1 ring-white/15 sm:h-28 sm:w-28"
                />
              ))}
            </div>
          </div>
        </section>
      );
    }

    if (config.hero === "banner") {
      return (
        <section className="py-8 lg:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.16em]"
                style={{ background: `${t.accent}14`, color: t.accent, border: `1px solid ${t.border}` }}
              >
                <Sparkles className="h-2.5 w-2.5" />
                {config.eyebrow}
              </span>
              <Badge>{config.legalBadge}</Badge>
            </div>
            <h1
              className="mt-4 font-display text-[38px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[58px]"
              style={{ color: t.text }}
            >
              3Patti Hot <span style={{ color: t.accent }}>Download</span>
              <span className="mt-2 block font-sans text-[16px] font-semibold tracking-normal sm:text-[19px]" style={{ color: t.muted }}>
                Teen Patti, Dragon Tiger &amp; more — one tap.
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-[12.5px] leading-relaxed" style={{ color: t.muted }}>
              Latest Android APK, install steps, iOS and PC options, bonuses and
              referral code {REFERRAL_CODE} — all in one independent guide.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              <Cta />
              <CodeBox />
            </div>
          </div>
          <div className="mt-7 overflow-hidden rounded-[20px] border" style={{ borderColor: t.border }}>
            <img
              src={config.heroImage}
              alt="3Patti Hot-style table host with aces, gold coins and casino chips"
              width={1568}
              height={880}
              loading="eager"
              className="h-[220px] w-full object-cover object-[center_28%] sm:h-[320px]"
            />
          </div>
        </section>
      );
    }

    if (config.hero === "minimal") {
      return (
        <section className="py-9 lg:py-12">
          <div className="mx-auto max-w-md rounded-[20px] border p-5 text-center shadow-xl" style={{ borderColor: t.border, background: t.surface }}>
            <img
              src="./images/app-icon.svg"
              alt="3Patti Hot app icon"
              width={92}
              height={92}
              className="mx-auto h-[92px] w-[92px] rounded-[22%] shadow-lg"
            />
            <h1 className="mt-4 font-display text-[27px] font-extrabold leading-tight tracking-[-0.03em]" style={{ color: t.text }}>
              3Patti Hot
            </h1>
            <p className="mt-1 text-[11.5px] font-bold uppercase tracking-[0.14em]" style={{ color: t.muted }}>
              Teen Patti · Card &amp; Casino · Android
            </p>
            <div className="mt-2.5 flex items-center justify-center gap-1.5">
              <span className="flex gap-0.5" style={{ color: t.accent }} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" strokeWidth={0} />
                ))}
              </span>
              <span className="text-[10px] font-bold" style={{ color: t.muted }}>
                4.8 · 200M+ players · {APK_SIZE}
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Cta className="w-full" />
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border px-4 py-2.5 text-[11.5px] font-bold transition-opacity hover:opacity-80"
                style={{ borderColor: t.border, color: t.text }}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Official 3pattihot.com page
              </a>
            </div>
            <div className="mt-3">
              <CodeBox />
            </div>
            <div className="mt-3 flex items-center justify-center gap-3 text-[9.5px] font-semibold" style={{ color: t.muted }}>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3 w-3" />Free</span>
              <span className="inline-flex items-center gap-1"><Smartphone className="h-3 w-3" />Android 5.1+</span>
              <span className="inline-flex items-center gap-1"><Zap className="h-3 w-3" />One tap</span>
              <Badge>{config.legalBadge}</Badge>
            </div>
          </div>
        </section>
      );
    }

    // splitCard
    return (
      <section className="py-8 lg:py-12">
        <div
          className="relative overflow-hidden rounded-[22px] border"
          style={{ borderColor: t.border, background: t.bgAlt }}
        >
          <img
            src={config.heroImage}
            alt="3Patti Hot-style table host with aces and casino chips"
            width={720}
            height={1280}
            loading="eager"
            className="h-[340px] w-full object-cover object-[center_18%] sm:h-[420px]"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(90deg, ${t.bg}f2 0%, ${t.bg}cc 45%, transparent 75%)` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-md p-5 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.16em]"
                  style={{ background: `${t.accent}1f`, color: t.accent, border: `1px solid ${t.border}` }}
                >
                  <Sparkles className="h-2.5 w-2.5" />
                  {config.eyebrow}
                </span>
                <Badge>{config.legalBadge}</Badge>
              </div>
              <h1 className="mt-3 font-display text-[32px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[46px]" style={{ color: t.text }}>
                3Patti <span style={{ color: t.accent }}>Hot</span>
              </h1>
              <p className="mt-2 text-[12.5px] leading-relaxed" style={{ color: t.muted }}>
                Teen Patti, Dragon Tiger, Roulette and more. One-tap APK
                download, then register with code {REFERRAL_CODE}.
              </p>
              <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
                <Cta />
                <CodeBox />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderStats = () => (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border md:grid-cols-4" style={{ borderColor: t.border, background: t.border }}>
      {STATS.map((stat) => (
        <div key={stat.label} className="px-3.5 py-3.5" style={{ background: t.surface }}>
          <p className="font-display text-[19px] font-extrabold leading-none tracking-[-0.03em]" style={{ color: t.accent }}>
            {stat.value}
          </p>
          <p className="mt-1 text-[8.5px] font-bold uppercase tracking-[0.08em]" style={{ color: t.muted }}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );

  const renderGames = () => (
    <section id="games" className="py-9 sm:py-12">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[8.5px] font-extrabold uppercase tracking-[0.18em]" style={{ color: t.muted }}>
            Tables and arcade
          </p>
          <h2 className="mt-1.5 font-display text-[22px] font-extrabold tracking-[-0.035em] sm:text-[28px]" style={{ color: t.text }}>
            Popular 3Patti Hot games
          </h2>
        </div>
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="hidden shrink-0 items-center gap-1.5 rounded-lg border px-3 py-2 text-[10px] font-extrabold transition-opacity hover:opacity-80 sm:inline-flex"
          style={{ borderColor: t.border, color: t.accent }}
        >
          See all games
          <ChevronRight className="h-3 w-3" />
        </a>
      </div>

      <div
        className={cn(
          "mt-4 grid gap-2 sm:gap-3",
          config.gameTile === "wide" ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-4",
        )}
      >
        {GAMES.map((game) => (
          <a
            key={game.name}
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() =>
              onNotify(`${game.name} opens inside the app — download 3Patti Hot and use code 10231669.`)
            }
            className="group block overflow-hidden rounded-xl border p-1 transition-transform duration-300 hover:-translate-y-0.5"
            style={{ borderColor: t.border, background: t.surface }}
          >
            <div className={cn("relative overflow-hidden rounded-lg", TILE_ASPECT[config.gameTile])}>
              {config.gameTile === "icon" || !game.image ? (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{ backgroundImage: `linear-gradient(145deg, ${t.accent}44, ${t.accent}14)` }}
                >
                  <IconGlyph name={game.name} />
                </div>
              ) : (
                <img
                  src={game.image}
                  alt={`${game.name} game artwork`}
                  width={420}
                  height={420}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              {game.hot && (
                <span className="absolute left-1 top-1 rounded px-1 py-0.5 text-[6px] font-extrabold uppercase tracking-wide" style={{ background: t.accent, color: t.accentText }}>
                  Hot
                </span>
              )}
            </div>
            <p className="truncate px-1 pb-1 pt-1.5 text-center font-display text-[8.5px] font-extrabold sm:text-[10px]" style={{ color: t.text }}>
              {game.name}
            </p>
          </a>
        ))}
      </div>
      <p className="mt-3 text-[9px] leading-relaxed" style={{ color: t.muted }}>
        Illustrative artwork. Actual game list, rules and rewards are controlled
        by the operator and can change by version or region. 18+ only.
      </p>
    </section>
  );

  const renderFeatures = () => (
    <section className="py-9 sm:py-12">
      <h2 className="font-display text-[22px] font-extrabold tracking-[-0.035em] sm:text-[28px]" style={{ color: t.text }}>
        Why players choose 3Patti Hot
      </h2>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="rounded-xl border p-3.5" style={{ borderColor: t.border, background: t.surface }}>
            <h3 className="font-display text-[12.5px] font-extrabold" style={{ color: t.text }}>
              {feature.title}
            </h3>
            <p className="mt-1 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  const renderDownload = () => (
    <section id="download" className="py-9 sm:py-12">
      <div className="rounded-2xl border p-4 sm:p-6" style={{ borderColor: t.border, background: t.bgAlt }}>
        <p className="text-[8.5px] font-extrabold uppercase tracking-[0.18em]" style={{ color: t.muted }}>
          3 Patti Hot APK download guide
        </p>
        <h2 className="mt-1.5 font-display text-[22px] font-extrabold tracking-[-0.035em] sm:text-[28px]" style={{ color: t.text }}>
          One tap is all it takes
        </h2>
        <p className="mt-2 max-w-2xl text-[12px] leading-relaxed" style={{ color: t.muted }}>
          Looking for 3 Patti Hot APK in Pakistan? Open the referral page with
          code {REFERRAL_CODE}, then check the current file, supported devices
          and installation steps on 3pattihot.com. kanik.shop does not host the
          APK.
        </p>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
          {[
            ["01", "Open the referral page", `Use code ${REFERRAL_CODE} when the app asks for it.`],
            ["02", "Check the current file details", "Version, size and Android requirements are shown by the operator."],
            ["03", "Follow the install instructions", 'Allow "unknown apps" if Android asks, then open the game.'],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-xl border p-3" style={{ borderColor: t.border, background: t.surface }}>
              <span className="font-display text-[9px] font-extrabold" style={{ color: t.accent }}>
                {number}
              </span>
              <h3 className="mt-1 font-display text-[12px] font-extrabold" style={{ color: t.text }}>
                {title}
              </h3>
              <p className="mt-1 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          <Cta label="OPEN 3PATTI HOT" />
          <CodeBox />
        </div>
      </div>
    </section>
  );

  const renderEarning = () => (
    <section id="earning" className="py-9 sm:py-12">
      <p className="text-[8.5px] font-extrabold uppercase tracking-[0.18em]" style={{ color: t.muted }}>
        Earning &amp; support
      </p>
      <h2 className="mt-1.5 font-display text-[22px] font-extrabold tracking-[-0.035em] sm:text-[28px]" style={{ color: t.text }}>
        Referral rewards, VIP and 3Patti Hot support
      </h2>
      <div className="mt-4">
        {GUIDE_BLOCKS.filter((block) => block.id === "earning").map((block) => (
          <article key={block.id} className="rounded-2xl border p-4 sm:p-5" style={{ borderColor: t.border, background: t.surface }}>
            {block.intro && (
              <p className="mt-2 text-[11.5px] leading-relaxed" style={{ color: t.muted }}>
                {block.intro}
              </p>
            )}

            {block.earning && (
              <>
                <h3 className="mt-3 font-display text-[14px] font-extrabold tracking-[-0.02em]" style={{ color: t.text }}>
                  How to get started and earn on 3Patti Hot
                </h3>
                <ol className="mt-2 space-y-1.5">
                  {block.earning.map((step, index) => (
                    <li key={step} className="flex gap-2 text-[11px] leading-relaxed" style={{ color: t.muted }}>
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[7.5px] font-extrabold" style={{ background: `${t.accent}22`, color: t.accent }}>
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </>
            )}

            {block.payoutGames && (
              <div className="mt-3">
                <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold" style={{ color: t.text }}>
                  <TrendingUp className="h-3.5 w-3.5" style={{ color: t.accent }} />
                  Highest paying / most popular games on 3Patti Hot
                </h4>
                <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
                  {block.payoutGames.map((game) => (
                    <li key={game} className="flex items-center gap-1.5 text-[10.5px]" style={{ color: t.muted }}>
                      <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: t.accent }} />
                      {game}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {block.vip && (
              <div className="mt-3 rounded-xl border p-3" style={{ borderColor: t.border }}>
                <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold" style={{ color: t.text }}>
                  <Sparkles className="h-3.5 w-3.5" style={{ color: t.accent }} />
                  VIP benefits for regular players
                </h4>
                <ul className="mt-1.5 space-y-1">
                  {block.vip.map((item) => (
                    <li key={item} className="flex gap-1.5 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                      <Check className="mt-0.5 h-3 w-3 shrink-0" style={{ color: t.accent }} strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[9px] leading-relaxed" style={{ color: t.muted }}>
                  VIP tiers and benefits are controlled by the operator, may change,
                  and are never guaranteed by this page.
                </p>
              </div>
            )}

            {block.password && (
              <div className="mt-3 rounded-xl border p-3" style={{ borderColor: t.border }}>
                <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold" style={{ color: t.text }}>
                  <KeyRound className="h-3.5 w-3.5" style={{ color: t.accent }} />
                  How to recover a forgotten password
                </h4>
                <ol className="mt-1.5 space-y-1">
                  {block.password.map((step, index) => (
                    <li key={step} className="flex gap-2 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                      <span className="font-extrabold" style={{ color: t.accent }}>{index + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {block.support && (
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {block.support.map((item) => (
                  <div key={item.title} className="rounded-xl border p-3" style={{ borderColor: t.border }}>
                    <h4 className="flex items-center gap-1.5 text-[10.5px] font-extrabold" style={{ color: t.text }}>
                      {item.title === "In-app support" ? (
                        <LifeBuoy className="h-3 w-3" style={{ color: t.accent }} />
                      ) : (
                        <Headphones className="h-3 w-3" style={{ color: t.accent }} />
                      )}
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[10px] leading-relaxed" style={{ color: t.muted }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );

  const renderGuide = () => (
    <section id="guide" className="py-9 sm:py-12">
      <p className="text-[8.5px] font-extrabold uppercase tracking-[0.18em]" style={{ color: t.muted }}>
        Complete guide
      </p>
      <h2 className="mt-1.5 font-display text-[22px] font-extrabold tracking-[-0.035em] sm:text-[28px]" style={{ color: t.text }}>
        3Patti Hot: specs, install, bonuses &amp; safety
      </h2>

      <div className="mt-4 space-y-5">
        {GUIDE_BLOCKS.filter((block) => block.id !== "earning").map((block) => (
          <article key={block.id} className="rounded-2xl border p-4 sm:p-5" style={{ borderColor: t.border, background: t.surface }}>
            <h3 className="font-display text-[15px] font-extrabold tracking-[-0.02em]" style={{ color: t.text }}>
              {block.label}
            </h3>

            {block.paragraphs?.map((text) => (
              <p key={text.slice(0, 24)} className="mt-2 text-[11.5px] leading-relaxed" style={{ color: t.muted }}>
                {text}
              </p>
            ))}

            {block.specs && (
              <table className="mt-3 w-full text-left">
                <tbody className="divide-y" style={{ borderColor: t.border }}>
                  {block.specs.map(([label, value], index) => (
                    <tr key={label} className={index % 2 ? "opacity-70" : ""}>
                      <th className="w-[42%] py-1.5 pr-3 text-[10.5px] font-bold" style={{ color: t.muted }}>
                        {label}
                      </th>
                      <td className="py-1.5 text-[10.5px] font-extrabold" style={{ color: t.text }}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {block.steps && (
              <ol className="mt-3 space-y-1.5">
                {block.steps.map((step, index) => (
                  <li key={step} className="flex gap-2 text-[11px] leading-relaxed" style={{ color: t.muted }}>
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[7.5px] font-extrabold" style={{ background: `${t.accent}22`, color: t.accent }}>
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            )}

            {block.requirements && (
              <table className="mt-3 w-full text-left">
                <tbody className="divide-y" style={{ borderColor: t.border }}>
                  {block.requirements.map(([label, value], index) => (
                    <tr key={label} className={index % 2 ? "opacity-70" : ""}>
                      <th className="w-[42%] py-1.5 pr-3 text-[10.5px] font-bold" style={{ color: t.muted }}>
                        {label}
                      </th>
                      <td className="py-1.5 text-[10.5px] font-semibold" style={{ color: t.text }}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {block.extra?.map((item) => (
              <div key={item.title} className="mt-3 rounded-xl border p-3" style={{ borderColor: t.border }}>
                <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold" style={{ color: t.text }}>
                  {item.title.includes("iPhone") ? <Apple className="h-3 w-3" /> : <Laptop className="h-3 w-3" />}
                  {item.title}
                </h4>
                <p className="mt-1 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                  {item.text}
                </p>
              </div>
            ))}

            {block.errors && (
              <ul className="mt-3 space-y-1">
                {block.errors.map((error) => (
                  <li key={error} className="flex gap-1.5 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                    <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0" style={{ color: t.accent }} />
                    {error}
                  </li>
                ))}
              </ul>
            )}

            {block.bonuses?.map((bonus) => (
              <div key={bonus.title} className="mt-3 flex gap-2.5 rounded-xl border p-3" style={{ borderColor: t.border }}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ background: `${t.accent}1f`, color: t.accent }}>
                  <Gift className="h-3.5 w-3.5" />
                </span>
                <p className="text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                  <span className="font-extrabold" style={{ color: t.text }}>{bonus.title}. </span>
                  {bonus.text}
                </p>
              </div>
            ))}

            {block.register && (
              <ul className="mt-3 space-y-1">
                {block.register.map((step) => (
                  <li key={step} className="flex gap-1.5 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                    <Check className="mt-0.5 h-3 w-3 shrink-0" style={{ color: t.accent }} strokeWidth={3} />
                    {step}
                  </li>
                ))}
              </ul>
            )}

            {block.methods && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {block.methods.map((method) => (
                  <span key={method} className="inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-[10px] font-bold" style={{ borderColor: t.border, color: t.muted }}>
                    <WalletCards className="h-3 w-3" style={{ color: t.accent }} />
                    {method}
                  </span>
                ))}
              </div>
            )}

            {block.pros && (
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border p-3" style={{ borderColor: t.border }}>
                  <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold" style={{ color: t.text }}>
                    <CircleCheck className="h-3.5 w-3.5" style={{ color: t.accent }} />
                    Pros
                  </h4>
                  <ul className="mt-1.5 space-y-1">
                    {block.pros.map((item) => (
                      <li key={item} className="flex gap-1.5 text-[10px] leading-relaxed" style={{ color: t.muted }}>
                        <Check className="mt-0.5 h-2.5 w-2.5 shrink-0" style={{ color: t.accent }} strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border p-3" style={{ borderColor: t.border }}>
                  <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold" style={{ color: t.text }}>
                    <CircleX className="h-3.5 w-3.5" style={{ color: t.muted }} />
                    Cons
                  </h4>
                  <ul className="mt-1.5 space-y-1">
                    {block.cons?.map((item) => (
                      <li key={item} className="flex gap-1.5 text-[10px] leading-relaxed" style={{ color: t.muted }}>
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: t.muted }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {block.safety && (
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {block.safety.map((item) => (
                  <div key={item.title} className="rounded-xl border p-3" style={{ borderColor: t.border }}>
                    <h4 className="flex items-center gap-1.5 text-[10.5px] font-extrabold" style={{ color: t.text }}>
                      <LockKeyhole className="h-3 w-3" style={{ color: t.accent }} />
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[10px] leading-relaxed" style={{ color: t.muted }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {block.reviews && (
              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                {block.reviews.map((review) => (
                  <figure key={review.name} className="rounded-xl border p-3" style={{ borderColor: t.border }}>
                    <span className="flex gap-0.5" style={{ color: t.accent }} aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 fill-current" strokeWidth={0} />
                      ))}
                    </span>
                    <blockquote className="mt-1.5 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                      “{review.quote}”
                    </blockquote>
                    <figcaption className="mt-1.5 text-[9px] font-bold" style={{ color: t.muted }}>
                      {review.name} · {review.place}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}

            {block.tips && (
              <ul className="mt-3 space-y-1">
                {block.tips.map((tip) => (
                  <li key={tip} className="flex gap-1.5 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                    <Check className="mt-0.5 h-3 w-3 shrink-0" style={{ color: t.accent }} strokeWidth={3} />
                    {tip}
                  </li>
                ))}
              </ul>
            )}

            {block.verdict && (
              <p className="mt-3 rounded-xl border p-3 text-[10.5px] leading-relaxed" style={{ borderColor: t.border, color: t.muted }}>
                <span className="font-extrabold" style={{ color: t.text }}>Final verdict. </span>
                {block.verdict}
              </p>
            )}

            {block.intro && (
              <p className="mt-2 text-[11.5px] leading-relaxed" style={{ color: t.muted }}>
                {block.intro}
              </p>
            )}

            {block.earning && (
              <ol className="mt-3 space-y-1.5">
                {block.earning.map((step, index) => (
                  <li key={step} className="flex gap-2 text-[11px] leading-relaxed" style={{ color: t.muted }}>
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[7.5px] font-extrabold" style={{ background: `${t.accent}22`, color: t.accent }}>
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            )}

            {block.payoutGames && (
              <div className="mt-3">
                <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold" style={{ color: t.text }}>
                  <TrendingUp className="h-3.5 w-3.5" style={{ color: t.accent }} />
                  Highest paying / most popular games on 3Patti Hot
                </h4>
                <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
                  {block.payoutGames.map((game) => (
                    <li key={game} className="flex items-center gap-1.5 text-[10.5px]" style={{ color: t.muted }}>
                      <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: t.accent }} />
                      {game}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {block.vip && (
              <div className="mt-3 rounded-xl border p-3" style={{ borderColor: t.border }}>
                <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold" style={{ color: t.text }}>
                  <Sparkles className="h-3.5 w-3.5" style={{ color: t.accent }} />
                  VIP benefits for regular players
                </h4>
                <ul className="mt-1.5 space-y-1">
                  {block.vip.map((item) => (
                    <li key={item} className="flex gap-1.5 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                      <Check className="mt-0.5 h-3 w-3 shrink-0" style={{ color: t.accent }} strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[9px] leading-relaxed" style={{ color: t.muted }}>
                  VIP tiers and benefits are controlled by the operator, may change,
                  and are never guaranteed by this page.
                </p>
              </div>
            )}

            {block.password && (
              <div className="mt-3 rounded-xl border p-3" style={{ borderColor: t.border }}>
                <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold" style={{ color: t.text }}>
                  <KeyRound className="h-3.5 w-3.5" style={{ color: t.accent }} />
                  How to recover a forgotten password
                </h4>
                <ol className="mt-1.5 space-y-1">
                  {block.password.map((step, index) => (
                    <li key={step} className="flex gap-2 text-[10.5px] leading-relaxed" style={{ color: t.muted }}>
                      <span className="font-extrabold" style={{ color: t.accent }}>{index + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {block.support && (
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {block.support.map((item) => (
                  <div key={item.title} className="rounded-xl border p-3" style={{ borderColor: t.border }}>
                    <h4 className="flex items-center gap-1.5 text-[10.5px] font-extrabold" style={{ color: t.text }}>
                      {item.title === "In-app support" ? (
                        <LifeBuoy className="h-3 w-3" style={{ color: t.accent }} />
                      ) : (
                        <Headphones className="h-3 w-3" style={{ color: t.accent }} />
                      )}
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[10px] leading-relaxed" style={{ color: t.muted }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {block.id === "overview" && (
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
                {GAME_LIST.map((game) => (
                  <li key={game} className="flex items-center gap-1.5 text-[10.5px]" style={{ color: t.muted }}>
                    <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: t.accent }} />
                    {game}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );

  const renderFaq = () => <FaqSection config={config} onNotify={onNotify} />;

  const sectionMap: Record<SectionKey, () => ReactElement> = {
    stats: () => renderStats(),
    games: renderGames,
    features: renderFeatures,
    download: renderDownload,
    guide: renderGuide,
    earning: renderEarning,
    faq: renderFaq,
  };

  return (
    <div style={style} className="min-h-screen" data-variant={config.id}>
      {/* header */}
      <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: t.border, background: t.headerBg }}>
        <div className="container-x flex h-[56px] items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-2">
            <img src="./images/app-icon.svg" alt="" width={34} height={34} className="h-[34px] w-[34px] rounded-[24%]" />
            <span className="font-display text-[14px] font-extrabold tracking-[-0.03em]" style={{ color: t.text }}>
              3Patti <span style={{ color: t.accent }}>HOT</span>
            </span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 md:flex">
            {[
              ["Games", "#games"],
              ["Download", "#download"],
              ["Guide", "#guide"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="rounded-lg px-2.5 py-2 text-[11.5px] font-bold transition-opacity hover:opacity-70" style={{ color: t.muted }}>
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex">
              <CodeBox />
            </span>
            <Cta size="sm" label="DOWNLOAD" />
          </div>
        </div>
      </header>

      <main id="main-content" style={{ background: t.bg, color: t.text }}>
        <div className="container-x" id="top">
          {renderHero()}
          {config.sections.map((key) => (
            <div key={key}>
              {sectionMap[key]()}
              {key === "download" && (
                <div className="py-6">
                  <AdBanner />
                </div>
              )}
              {key === "earning" && (
                <div className="py-6">
                  <AdSidebar />
                </div>
              )}
              {key === "guide" && (
                <div className="py-6">
                  <AdNative />
                </div>
              )}
              {key === "faq" && (
                <div className="py-6">
                  <AdBanner />
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* footer */}
      <footer className="border-t" style={{ borderColor: t.border, background: t.footerBg, color: t.text }}>
        <div className="container-x py-7">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-2">
                <img src="./images/app-icon.svg" alt="" width={30} height={30} className="h-[30px] w-[30px] rounded-[24%]" />
                <span className="font-display text-[14px] font-extrabold">Kanik.shop</span>
              </div>
              <p className="mt-2 max-w-sm text-[10px] leading-relaxed opacity-70">
                Independent referral page. 3Patti Hot controls its app, terms and
                any referral attribution. No APK is hosted here.
              </p>
              <p className="mt-2 text-[10px] font-bold opacity-70">18+ | Play responsibly</p>
            </div>
            <nav aria-label="Footer links">
              <h2 className="text-[9px] font-extrabold uppercase tracking-[0.16em] opacity-60">Explore</h2>
              <ul className="mt-2 space-y-1.5">
                {[
                  ["Games", "#games"],
                  ["Download", "#download"],
                  ["Guide", "#guide"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="text-[10.5px] font-semibold opacity-75 hover:opacity-100">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2 className="text-[9px] font-extrabold uppercase tracking-[0.16em] opacity-60">Official</h2>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold opacity-75 hover:opacity-100">
                    <Globe2 className="h-3 w-3" />
                    3pattihot.com
                  </a>
                </li>
                <li>
                  <a href={IOS_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold opacity-75 hover:opacity-100">
                    <Apple className="h-3 w-3" />
                    iOS option
                  </a>
                </li>
                <li>
                  <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold opacity-75 hover:opacity-100">
                    <Package className="h-3 w-3" />
                    Get the APK
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 border-t pt-4 opacity-60" style={{ borderColor: t.border }}>
            <p className="text-[8.5px] leading-relaxed">
              <strong>Affiliate disclosure:</strong> kanik.shop is not owned by,
              endorsed by or operated by the 3Patti Hot developer. We may receive a
              referral benefit when you install or register through links on this
              page, at no extra cost to you. 3Patti Hot and related marks belong to
              their owners. Rewards, payments and withdrawals are controlled by the
              operator and are not guaranteed. Real-money gaming is 18+ where
              permitted by local law. Play responsibly.
            </p>
            <p className="mt-2 text-[8.5px]">
              © {new Date().getFullYear()} kanik.shop · Referral code {REFERRAL_CODE}
            </p>
          </div>
        </div>
      </footer>

      {/* sticky mobile bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t px-2.5 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-1.5 backdrop-blur-xl md:hidden" style={{ borderColor: t.border, background: t.headerBg }}>
        <div className="mx-auto flex max-w-md items-center gap-2">
          <CodeBox />
          <Cta size="sm" label="DOWNLOAD" className="min-w-0 flex-1" />
        </div>
      </div>
      <div className="h-[56px] md:hidden" aria-hidden="true" style={{ background: t.footerBg }} />
    </div>
  );
}

function FaqSection({ config, onNotify }: { config: Config; onNotify: (message: string) => void }) {
  const t = config.theme;
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    setOpen(0);
  }, [config.id]);

  return (
    <section id="faq" className="py-9 sm:py-12">
      <p className="text-[8.5px] font-extrabold uppercase tracking-[0.18em]" style={{ color: t.muted }}>
        Quick answers
      </p>
      <h2 className="mt-1.5 font-display text-[22px] font-extrabold tracking-[-0.035em] sm:text-[28px]" style={{ color: t.text }}>
        3Patti Hot download FAQ
      </h2>
      <div className="mt-4 space-y-2">
        {FAQS.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q} className="overflow-hidden rounded-xl border" style={{ borderColor: t.border, background: t.surface }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between gap-3 px-3.5 py-3 text-left"
              >
                <span className="font-display text-[11.5px] font-extrabold leading-snug" style={{ color: t.text }}>
                  {item.q}
                </span>
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-transform duration-300"
                  style={{
                    borderColor: t.border,
                    background: isOpen ? t.accent : "transparent",
                    color: isOpen ? t.accentText : t.muted,
                    transform: isOpen ? "rotate(180deg)" : "none",
                  }}
                >
                  <ChevronDown className="h-3 w-3" strokeWidth={2.8} />
                </span>
              </button>
              <div
                id={`faq-panel-${index}`}
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
              >
                <div className="overflow-hidden">
                  <p className="border-t px-3.5 pb-3 pt-2.5 text-[11px] leading-relaxed" style={{ borderColor: t.border, color: t.muted }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-2xl border p-4 sm:flex-row" style={{ borderColor: t.border, background: t.bgAlt }}>
        <div>
          <p className="font-display text-[13px] font-extrabold" style={{ color: t.text }}>
            Ready to play? Download in one tap.
          </p>
          <p className="mt-0.5 text-[10px]" style={{ color: t.muted }}>
            Free APK · Code {REFERRAL_CODE} copied for sign-up · 18+
          </p>
        </div>
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          onClick={() => onNotify("Opening the official 3Patti Hot referral page — code 10231669 copied.")}
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[12px] font-extrabold transition-transform hover:-translate-y-0.5"
          style={{ backgroundImage: `linear-gradient(112deg, ${t.ctaFrom}, ${t.ctaTo})`, color: t.ctaText, borderRadius: config.radius }}
        >
          <Download className="h-3.5 w-3.5" strokeWidth={2.8} />
          DOWNLOAD APK
        </a>
      </div>

      <p className="mt-5 text-[8.5px] leading-relaxed" style={{ color: t.muted }}>
        This guide is informational and independently maintained. Features,
        payment methods, bonuses and game lists are controlled by the 3Patti Hot
        operator and may change. Real-money gaming is 18+ and subject to local
        law. Play responsibly.
      </p>
    </section>
  );
}
