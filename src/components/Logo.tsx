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
        "inline-flex flex-col items-center",
        className,
      )}
      aria-label="ADEXXA"
    >
      <div className="flex h-12 w-[185px] items-center justify-center overflow-hidden rounded-[999px] bg-[#211f20] sm:h-14 sm:w-[220px]">
        <svg
          viewBox="0 0 440 120"
          className="h-full w-full"
          role="img"
          aria-labelledby="adexxa-logo-title"
        >
          <title id="adexxa-logo-title">ADEXXA</title>

          {/* ADE */}
          <text
            x="24"
            y="82"
            fill="#ffffff"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="70"
            fontWeight="700"
            letterSpacing="2"
          >
            ADE
          </text>

          {/* XA */}
          <text
            x="302"
            y="82"
            fill="#ffffff"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="70"
            fontWeight="700"
            letterSpacing="2"
          >
            XA
          </text>

          {/* Grey diagonal */}
          <path
            d="M205 101 L330 8 L259 78 L205 101 Z"
            fill="#a7a9ac"
          />

          {/* Blue diagonal */}
          <path
            d="M238 20 L315 88 L278 63 L238 20 Z"
            fill="#00a9e8"
          />
        </svg>
      </div>

      <p className="mt-2 text-center font-bold uppercase leading-tight tracking-[0.04em] text-foreground text-[0.58rem] sm:text-[0.68rem]">
        High Performance Tile Adhesive and Grout
      </p>
    </div>
  );
}
