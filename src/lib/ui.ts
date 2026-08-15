import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-display font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  accent: "bg-accent text-accent-foreground hover:brightness-105",
  outline: "border border-input bg-transparent text-foreground hover:bg-secondary",
  ghost: "text-foreground hover:bg-secondary",
  onDark: "border border-ink-border text-ink-foreground hover:bg-ink-border/40",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-[0.7rem]",
  md: "h-11 px-5 text-xs",
  lg: "h-13 px-7 text-sm",
};

export function btn(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}
