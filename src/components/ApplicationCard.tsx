import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={[
        "group relative overflow-hidden",
        "border border-border bg-card",
        "p-7",
        "will-change-transform",
        "transition-[transform,opacity,box-shadow,border-color]",
        "duration-700",
        "ease-[cubic-bezier(0.22,1,0.36,1)]",

        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0",

        "hover:-translate-y-2",
        "hover:border-accent/50",
        "hover:shadow-[0_24px_55px_-22px_rgba(0,0,0,0.28)]",

        "motion-reduce:translate-y-0",
        "motion-reduce:opacity-100",
        "motion-reduce:transition-none",
      ].join(" ")}
    >
      {/* =====================================================
          TOP ACCENT LINE
      ====================================================== */}
      <div
        className="
          absolute left-0 right-0 top-0
          h-0.5
          origin-left
          scale-x-0
          bg-accent
          transition-transform
          duration-500
          ease-out
          group-hover:scale-x-100
        "
        aria-hidden="true"
      />

      {/* =====================================================
          SUBTLE BACKGROUND GLOW
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute -right-12 -top-12
          h-32 w-32
          rounded-full
          bg-accent/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
        aria-hidden="true"
      />

      {/* =====================================================
          ICON
      ====================================================== */}
      <span
        className="
          relative z-10
          grid h-11 w-11
          place-items-center
          bg-secondary
          text-foreground

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:-translate-y-1
          group-hover:rotate-[-3deg]
          group-hover:scale-110
          group-hover:bg-accent
          group-hover:text-accent-foreground

          motion-reduce:transform-none
        "
      >
        <Icon
          className="
            h-5 w-5
            transition-transform
            duration-500
            group-hover:scale-110
          "
          aria-hidden="true"
        />
      </span>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative z-10
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:-translate-y-0.5
          motion-reduce:transform-none
        "
      >
        <h3
          className="
            mt-6
            font-display
            text-lg
            font-semibold
            text-foreground
            transition-colors
            duration-300
            group-hover:text-accent
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-relaxed
            text-muted-foreground
            transition-colors
            duration-300
          "
        >
          {description}
        </p>
      </div>

      {/* =====================================================
          BOTTOM DETAIL
      ====================================================== */}
      <div
        className="
          relative z-10
          mt-6
          h-px
          w-8
          bg-border
          transition-all
          duration-500
          group-hover:w-14
          group-hover:bg-accent
        "
        aria-hidden="true"
      />
    </article>
  );
}
