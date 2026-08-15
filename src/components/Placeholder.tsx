import { cn } from "@/lib/utils";

/** Inline value that has not been verified yet. */
export function PlaceholderValue({ label = "To be supplied", className }: { label?: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border border-dashed border-note-border bg-note px-2 py-0.5 text-xs font-medium text-note-foreground",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-note-border" aria-hidden="true" />
      {label}
    </span>
  );
}

/** Block-level notice for a section awaiting official content. */
export function PlaceholderBlock({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="border border-dashed border-note-border bg-note p-5">
      <p className="eyebrow text-note-foreground">Editable placeholder</p>
      <p className="mt-2 font-display text-sm font-semibold text-foreground">{title}</p>
      {children ? <p className="mt-1.5 text-sm text-muted-foreground">{children}</p> : null}
    </div>
  );
}
