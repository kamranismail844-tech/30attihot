import { useEffect, useRef, useState } from "react";
import {
  AD_FALLBACK_HTML,
  ADS_ENABLED,
  ADS_PREVIEW_QUERY,
  BANNER_DESKTOP,
  BANNER_SIDEBAR,
  NATIVE_AD,
  buildBannerCode,
  buildNativeCode,
  type BannerUnit,
} from "../config/ads";
import { cn } from "../utils/cn";

/** True only when opened with ?ads=preview (for placement review). */
function isPreviewMode(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return (
      new URLSearchParams(window.location.search).get("ads") === ADS_PREVIEW_QUERY
    );
  } catch {
    return false;
  }
}

function unitReady(unit: BannerUnit): boolean {
  return Boolean(unit.key && unit.host);
}

/**
 * Adsterra's invoke.js uses document.write(), which would wipe a React page.
 * Running each unit inside a sandboxed iframe keeps it isolated and safe.
 */
function AdFrame({ code, height }: { code: string; height: number }) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = ref.current;
    if (!frame) return;
    const doc = frame.contentDocument;
    if (!doc) return;
    doc.open();
    doc.write(code);
    doc.close();
  }, [code]);

  return (
    <iframe
      ref={ref}
      title="Advertisement"
      scrolling="no"
      loading="lazy"
      sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      referrerPolicy="no-referrer"
      className="w-full max-w-full border-0"
      style={{ height, display: "block" }}
    />
  );
}

function AdLabel({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "mb-1 text-center text-[7px] font-bold uppercase tracking-[0.22em] text-stone-400",
        className,
      )}
    >
      Advertisement
    </p>
  );
}

function Placeholder({ label, height }: { label: string; height: number }) {
  return (
    <div
      className="flex w-full items-center justify-center rounded-lg border border-dashed border-stone-300 bg-white/60 text-center text-[9px] font-semibold text-stone-400"
      style={{ height }}
    >
      {label}
    </div>
  );
}

function renderUnit(unit: BannerUnit, fallbackLabel: string) {
  if (unitReady(unit)) {
    return <AdFrame code={buildBannerCode(unit)} height={unit.height} />;
  }
  if (AD_FALLBACK_HTML) {
    return <div dangerouslySetInnerHTML={{ __html: AD_FALLBACK_HTML }} />;
  }
  return <Placeholder label={fallbackLabel} height={Math.min(unit.height, 90)} />;
}

/**
 * Horizontal banner slot (468 x 60).
 * Rendered between content sections — never next to a download button.
 */
export function AdBanner({ className }: { className?: string }) {
  const active = ADS_ENABLED || isPreviewMode();
  if (!active) return null;

  return (
    <div className={cn("mx-auto w-full max-w-3xl px-4", className)}>
      <AdLabel />
      <div className="flex w-full items-center justify-center overflow-hidden">
        {renderUnit(
          BANNER_DESKTOP,
          `Adsterra banner · ${BANNER_DESKTOP.width}×${BANNER_DESKTOP.height} — add your key in src/config/ads.ts`,
        )}
      </div>
    </div>
  );
}

/**
 * Tall sidebar unit (160 x 600). Only shown on wide screens where it can sit
 * beside long-form content without covering anything.
 */
export function AdSidebar({ className }: { className?: string }) {
  const active = ADS_ENABLED || isPreviewMode();
  const [wide, setWide] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 1280,
  );

  useEffect(() => {
    if (!active) return;
    const query = window.matchMedia("(min-width: 1280px)");
    const onChange = () => setWide(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [active]);

  if (!active || !wide) return null;

  return (
    <div className={cn("w-full", className)}>
      <AdLabel />
      {unitReady(BANNER_SIDEBAR) ? (
        <AdFrame code={buildBannerCode(BANNER_SIDEBAR)} height={BANNER_SIDEBAR.height} />
      ) : (
        <Placeholder
          label={`Adsterra skyscraper · ${BANNER_SIDEBAR.width}×${BANNER_SIDEBAR.height}`}
          height={BANNER_SIDEBAR.height}
        />
      )}
    </div>
  );
}

/** Native banner slot — blends into the content flow. */
export function AdNative({ className }: { className?: string }) {
  const active = ADS_ENABLED || isPreviewMode();
  if (!active) return null;

  const ready = Boolean(NATIVE_AD.key);

  return (
    <div className={cn("mx-auto w-full max-w-3xl px-4", className)}>
      <AdLabel />
      {ready ? (
        <AdFrame code={buildNativeCode(NATIVE_AD)} height={320} />
      ) : AD_FALLBACK_HTML ? (
        <div dangerouslySetInnerHTML={{ __html: AD_FALLBACK_HTML }} />
      ) : (
        <Placeholder label="Adsterra native banner — add your key" height={120} />
      )}
    </div>
  );
}
