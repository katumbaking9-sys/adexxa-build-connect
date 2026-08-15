import { cn } from "@/lib/utils";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="ADEXXA">
      <span className="grid h-8 w-8 place-items-center bg-accent">
        <span className="font-display text-base font-extrabold leading-none text-accent-foreground">A</span>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-xl font-extrabold tracking-[0.16em]",
            tone === "light" ? "text-ink-foreground" : "text-foreground",
          )}
        >
          ADEXXA
        </span>
        <span
          className={cn(
            "mt-0.5 block text-[0.58rem] font-medium uppercase tracking-[0.2em]",
            tone === "light" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          Tile Adhesive &amp; Grout
        </span>
      </span>
    </span>
  );
}
