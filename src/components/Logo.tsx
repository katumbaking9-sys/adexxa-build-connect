import { cn } from "@/lib/utils";
import adexxaLogo from "@/assets/adexxa-logo.png";

export function Logo({
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
      <img
        src={adexxaLogo}
        alt="ADEXXA"
        className="h-auto w-[190px] sm:w-[220px]"
      />

      <p className="mt-1.5 text-center text-[0.58rem] font-bold uppercase leading-tight tracking-[0.04em] text-foreground sm:text-[0.68rem]">
        High Performance Tile Adhesive and Grout
      </p>
    </div>
  );
}
