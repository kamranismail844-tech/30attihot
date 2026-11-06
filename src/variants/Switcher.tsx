import { useState } from "react";
import { VARIANTS } from "./config";

export function VariantSwitcher({
  current,
  onSelect,
}: {
  current: number;
  onSelect: (id: number) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-3 z-[80] md:bottom-4">
      {open && (
        <div className="mb-2 w-[236px] overflow-hidden rounded-2xl border border-white/15 bg-[#0d0805]/97 shadow-2xl backdrop-blur-xl">
          <div className="border-b border-white/10 px-3 py-2.5">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-amber-300/80">
              Variant selector
            </p>
            <p className="mt-0.5 text-[9px] text-stone-400">
              11 designs — tap to switch. Live page changes instantly.
            </p>
          </div>
          <div className="max-h-[52vh] overflow-y-auto p-1.5">
            {VARIANTS.map((variant) => (
              <button
                key={variant.id}
                type="button"
                onClick={() => {
                  onSelect(variant.id);
                  setOpen(false);
                }}
                aria-current={current === variant.id}
                className={`flex w-full items-start gap-2 rounded-xl px-2.5 py-2 text-left transition-colors ${
                  current === variant.id ? "bg-amber-400/15" : "hover:bg-white/5"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[9px] font-extrabold ${
                    current === variant.id
                      ? "bg-amber-400 text-[#2b1608]"
                      : "bg-white/10 text-stone-300"
                  }`}
                >
                  {variant.id}
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-extrabold text-white">
                    {variant.name}
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-snug text-stone-400">
                    {variant.note}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Switch page variant"
        className="flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-[#0d0805]/95 px-3 py-2.5 text-[10.5px] font-extrabold text-amber-200 shadow-xl backdrop-blur-xl transition-transform hover:scale-105"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[9px] text-[#2b1608]">
          {current}
        </span>
        {open ? "Close" : "Variants"}
      </button>
    </div>
  );
}
