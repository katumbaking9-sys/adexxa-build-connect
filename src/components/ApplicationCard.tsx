import type { LucideIcon } from "lucide-react";

export function ApplicationCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="group border border-border bg-card p-7 transition-colors hover:border-accent">
      <span className="grid h-11 w-11 place-items-center bg-secondary text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-display text-lg text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
