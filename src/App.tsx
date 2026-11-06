import { useCallback, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { DEFAULT_VARIANT_ID, VARIANTS, type VariantConfig } from "./variants/config";
import { VariantPage } from "./variants/VariantPage";
import { VariantSwitcher } from "./variants/Switcher";

type ToastState = { id: number; message: string } | null;

function readVariantFromUrl(): number {
  if (typeof window === "undefined") return DEFAULT_VARIANT_ID;
  const raw = new URLSearchParams(window.location.search).get("v");
  const parsed = Number(raw);
  return VARIANTS.some((variant) => variant.id === parsed) ? parsed : DEFAULT_VARIANT_ID;
}

export default function App() {
  const [variantId, setVariantId] = useState<number>(readVariantFromUrl);
  const [toast, setToast] = useState<ToastState>(null);
  const timerRef = useRef<number | null>(null);

  const notify = useCallback((message: string) => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    setToast({ id: Date.now(), message });
    timerRef.current = window.setTimeout(() => {
      setToast(null);
      timerRef.current = null;
    }, 4000);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  const config: VariantConfig =
    VARIANTS.find((variant) => variant.id === variantId) ?? VARIANTS[0];

  const selectVariant = (id: number) => {
    setVariantId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("v", String(id));
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <>
      <VariantPage config={config} onNotify={notify} />
      <VariantSwitcher current={config.id} onSelect={selectVariant} />

      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-4 bottom-[70px] z-[90] mx-auto flex max-w-sm items-center gap-2.5 rounded-xl border border-amber-300/25 bg-[#1d0e09]/95 px-3.5 py-2.5 text-white shadow-2xl backdrop-blur-xl transition-opacity duration-300 md:bottom-20"
        style={{ visibility: toast ? "visible" : "hidden", opacity: toast ? 1 : 0 }}
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
        <p className="text-[11px] font-semibold leading-snug">
          {toast?.message ?? "Referral code 10231669 copied."}
        </p>
      </div>
    </>
  );
}
