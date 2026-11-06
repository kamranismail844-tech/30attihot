import { Dices, Flame, TrendingUp } from "lucide-react";
import { REFERRAL_URL } from "../constants";
import { Reveal, SectionHeading } from "./ui";

const GAMES = [
  { name: "Teen Patti", image: "./images/game-teenpatti.jpg", hot: true },
  { name: "Dragon Tiger", image: "./images/game-dragontiger.jpg", hot: true },
  { name: "Thunder 777", image: "./images/game-thunder.jpg", hot: true },
  { name: "Aviator", image: "./images/game-aviator.jpg" },
  { name: "Roulette", image: "./images/game-roulette.jpg" },
  { name: "Fortune Gems", image: "./images/game-fortune.jpg" },
  { name: "Goal", image: "./images/game-goal.jpg" },
  { name: "7 Up Down", image: null },
];

export function Games({ onNotify }: { onNotify: (message: string) => void }) {
  return (
    <section
      id="games"
      className="relative isolate overflow-hidden bg-[#1a0a08] py-9 sm:py-12"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% -10%, rgba(169,18,31,0.35) 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 100% 100%, rgba(185,126,34,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="container-x">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="Inside the app"
              title="Popular games on 3Patti Hot"
              className="max-w-lg"
            />
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="hidden shrink-0 items-center gap-1.5 rounded-lg border border-gold/30 bg-gold/10 px-3 py-2 text-[10.5px] font-extrabold text-gold-soft transition-colors hover:bg-gold/15 sm:inline-flex"
            >
              <Flame className="h-3.5 w-3.5" />
              See all games
            </a>
          </div>
        </Reveal>

        <div className="mt-5 grid grid-cols-4 gap-2 sm:mt-6 sm:gap-3.5">
          {GAMES.map((game, index) => (
            <Reveal key={game.name} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => onNotify(`${game.name} opens inside the app — download 3Patti Hot and use code 10231669.`)}
                aria-label={`${game.name} on the official 3Patti Hot app`}
                className="group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] p-1 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-white/[0.08] sm:p-1.5"
              >
                <div className="relative overflow-hidden rounded-[9px]">
                  {game.image ? (
                    <img
                      src={game.image}
                      alt={`${game.name} game artwork`}
                      width={512}
                      height={512}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full bg-[#2a0d12] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-[#7b3fb0] via-[#3d1f6b] to-[#170a2e]">
                      <Dices
                        className="h-8 w-8 text-gold-soft sm:h-10 sm:w-10"
                        strokeWidth={1.7}
                      />
                    </div>
                  )}
                  {game.hot && (
                    <span className="absolute left-1 top-1 inline-flex items-center gap-0.5 rounded bg-gold px-1 py-0.5 text-[6px] font-extrabold uppercase tracking-[0.04em] text-[#3d2208] sm:text-[7px]">
                      <TrendingUp className="h-2 w-2" strokeWidth={3} />
                      Hot
                    </span>
                  )}
                  <span
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <p className="truncate px-0.5 pb-0.5 pt-1.5 text-center font-display text-[8.5px] font-extrabold tracking-[-0.01em] text-white sm:text-[10.5px]">
                  {game.name}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-center text-[9px] leading-relaxed text-stone-500 sm:text-[10px]">
          Illustrative artwork. Actual game list, rules and rewards are controlled
          by the operator and can change by version or region. 18+ only.
        </p>
      </div>
    </section>
  );
}
