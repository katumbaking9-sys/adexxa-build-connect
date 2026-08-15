import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  className,
  tone = "default",
  children,
}: {
  className?: string;
  tone?: "default" | "muted" | "ink";
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "py-20 sm:py-28",
        tone === "muted" && "bg-secondary",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "default",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "default" | "ink";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl reveal",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "ink" ? "text-accent" : "text-accent-foreground/80")}>
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "mt-3 text-3xl sm:text-4xl",
          tone === "ink" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
