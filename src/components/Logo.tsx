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
        "inline-flex items-center justify-center overflow-hidden rounded-[999px] bg-[#211f20]",
        "h-12 w-[185px] sm:h-14 sm:w-[220px]",
        className,
      )}
      aria-label="ADEXXA"
    >
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

        {/* Grey diagonal of the ADEXXA X */}
        <path
          d="M205 101 L330 8 L259 78 L205 101 Z"
          fill="#a7a9ac"
        />

        {/* Blue diagonal of the ADEXXA X */}
        <path
          d="M238 20 L315 88 L278 63 L238 20 Z"
          fill="#00a9e8"
        />
      </svg>
    </div>
  );
}
