import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex flex-col items-start translate-x-[-8px] translate-y-[8px]",
        className,
      )}
      aria-label="ADEXXA"
    >
      <div className="w-[210px] sm:w-[240px]">
        <svg
          viewBox="0 0 440 135"
          className="block h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-labelledby="adexxa-logo-title"
        >
          <title id="adexxa-logo-title">ADEXXA</title>

          <rect
            x="3"
            y="3"
            width="434"
            height="129"
            rx="64"
            fill="#211f20"
          />

          <text
            x="30"
            y="91"
            fill="#ffffff"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="72"
            fontWeight="700"
            letterSpacing="1"
          >
            ADE
          </text>

          <text
            x="305"
            y="91"
            fill="#ffffff"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="72"
            fontWeight="700"
            letterSpacing="1"
          >
            XA
          </text>

          <path
            d="M205 112 L332 10 L263 84 L205 112 Z"
            fill="#a7a9ac"
          />

          <path
            d="M239 27 L319 94 L280 66 L239 27 Z"
            fill="#00a9e8"
          />
        </svg>
      </div>

      <p className="mt-[-2px] ml-1 text-left text-[0.62rem] font-bold uppercase leading-tight tracking-[0.045em] text-foreground sm:text-[0.7rem]">
        High Performance Tile Adhesive and Grout
      </p>
    </div>
  );
}
