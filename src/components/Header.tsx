import { NAV_LINKS } from "../constants";
import { CodeChip, DownloadButton, Logo } from "./ui";

export function Header({ onNotify }: { onNotify: (message: string) => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-[#140806]/95 backdrop-blur-xl">
      <div className="container-x flex h-[58px] items-center justify-between gap-3 sm:h-[64px]">
        <Logo />
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-2.5 py-2 text-[12px] font-bold text-stone-300 transition-colors hover:bg-white/5 hover:text-gold-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <CodeChip onNotify={onNotify} />
          </span>
          <DownloadButton
            size="sm"
            label="DOWNLOAD APK"
            sublabel={false}
            showArrow={false}
            onNotify={onNotify}
            className="!rounded-lg"
          />
        </div>
      </div>
    </header>
  );
}
