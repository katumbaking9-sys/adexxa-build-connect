import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import {
  PLACEHOLDER,
  categoryName,
  type Product,
} from "@/data/products";
import { PlaceholderValue } from "@/components/Placeholder";
import { whatsappLink } from "@/data/site";
import { btn } from "@/lib/ui";

export function ProductCard({
  product,
  delay = 0,
}: {
  product: Product;
  delay?: number;
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
        threshold: 0.08,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={[
        "group relative flex h-full flex-col overflow-hidden",
        "rounded-sm border border-border bg-card",
        "will-change-transform",
        "transition-[transform,opacity,box-shadow,border-color]",
        "duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",

        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0",

        "hover:-translate-y-2",
        "hover:border-accent/50",
        "hover:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.32)]",

        "motion-reduce:translate-y-0",
        "motion-reduce:opacity-100",
        "motion-reduce:transition-none",
      ].join(" ")}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* =========================================================
          PREMIUM CARD GLOW
      ========================================================== */}
      <div
        className="
          pointer-events-none absolute -inset-px z-0
          rounded-sm opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-sm bg-accent/[0.035]" />
      </div>

      {/* =========================================================
          TOP ACCENT
      ========================================================== */}
      <div
        className="
          absolute left-0 right-0 top-0 z-30 h-0.5
          origin-left scale-x-0 bg-accent
          transition-transform duration-500
          ease-out group-hover:scale-x-100
        "
        aria-hidden="true"
      />

      {/* =========================================================
          PRODUCT IMAGE
      ========================================================== */}
      <div className="relative z-10 overflow-hidden bg-concrete">
        {/* Image overlay */}
        <div
          className="
            absolute inset-0 z-10
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
            opacity-60
            transition-opacity duration-700
            group-hover:opacity-25
          "
          aria-hidden="true"
        />

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="
            aspect-square w-full object-cover
            transition-transform
            duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.065]
            motion-reduce:transition-none
            motion-reduce:transform-none
          "
        />

        {/* =====================================================
            CATEGORY BADGE
        ====================================================== */}
        <div
          className="
            absolute left-4 top-4 z-20
            transition-transform duration-500
            ease-out
            group-hover:-translate-y-0.5
            motion-reduce:transform-none
          "
        >
          <span
            className="
              inline-flex items-center gap-1.5
              border border-white/20
              bg-black/70
              px-3 py-1.5
              text-[0.6rem]
              font-bold uppercase
              tracking-[0.16em]
              text-white
              shadow-sm
              backdrop-blur-md
            "
          >
            {categoryName(product.category)}
          </span>
        </div>

        {/* =====================================================
            PLACEHOLDER BADGE
        ====================================================== */}
        {product.imageIsPlaceholder ? (
          <span
            className="
              absolute bottom-4 left-4 z-20
              border border-note-border
              bg-note
              px-2.5 py-1
              text-[0.6rem]
              font-semibold uppercase
              tracking-wider
              text-note-foreground
            "
          >
            Placeholder image
          </span>
        ) : null}

        {/* =====================================================
            PACK COLOUR
        ====================================================== */}
        {product.packagingColour ? (
          <div
            className="
              absolute bottom-4 right-4 z-20
              flex items-center gap-2
              border border-white/20
              bg-black/70
              px-3 py-1.5
              text-[0.6rem]
              font-semibold uppercase
              tracking-wider
              text-white
              backdrop-blur-md
              transition-transform duration-500
              ease-out
              group-hover:-translate-y-0.5
              motion-reduce:transform-none
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            {product.packagingColour} pack
          </div>
        ) : null}
      </div>

      {/* =========================================================
          PRODUCT INFORMATION
      ========================================================== */}
      <div
        className="
          relative z-10
          flex flex-1 flex-col
          p-6 sm:p-7
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:-translate-y-0.5
          motion-reduce:transform-none
        "
      >
        {/* Product label */}
        <div className="flex items-center gap-2">
          <Sparkles
            className="
              h-3.5 w-3.5 text-accent
              transition-transform duration-500
              group-hover:rotate-12
              group-hover:scale-110
              motion-reduce:transform-none
            "
            aria-hidden="true"
          />

          <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            ADEXXA Product
          </span>
        </div>

        {/* Product name */}
        <h3
          className="
            mt-3
            font-display
            text-[1.35rem]
            font-semibold
            leading-tight
            tracking-tight
            text-foreground
            transition-colors
            duration-300
            group-hover:text-accent
          "
        >
          {product.name}
        </h3>

        {/* Product type */}
        <p className="mt-2 text-sm font-semibold text-accent">
          {product.type}
        </p>

        {/* Divider */}
        <div
          className="
            my-5 h-px w-full
            bg-border
            transition-all duration-500
            group-hover:bg-accent/20
            group-hover:translate-x-1
          "
        />

        {/* =====================================================
            SPECIFICATIONS
        ====================================================== */}
        <div className="flex flex-wrap gap-2">
          {product.packaging === PLACEHOLDER ? (
            <PlaceholderValue label="Packaging pending" />
          ) : (
            (product.sizes.length > 0
              ? product.sizes
              : [product.packaging]
            ).map((s) => (
              <span
                key={s}
                className="
                  border border-border
                  bg-secondary/70
                  px-3 py-1.5
                  text-[0.7rem]
                  font-bold uppercase
                  tracking-wide
                  text-secondary-foreground
                  transition-all duration-300
                  group-hover:border-accent/30
                  group-hover:-translate-y-0.5
                "
              >
                {s}
              </span>
            ))
          )}

          {product.packagingColour ? (
            <span
              className="
                border border-border
                bg-background
                px-3 py-1.5
                text-[0.7rem]
                font-medium
                text-muted-foreground
                transition-colors duration-300
                group-hover:border-accent/20
              "
            >
              {product.packagingColour} packaging
            </span>
          ) : null}
        </div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}
        <p className="mt-5 flex-1 text-sm leading-6 text-muted-foreground">
          {product.shortDescription}
        </p>

        {/* =====================================================
            ACTION BUTTONS
        ====================================================== */}
        <div className="mt-7 grid grid-cols-2 gap-2.5">
          <a
            href={whatsappLink(
              `Hello ADEXXA, I would like to enquire about ${product.name} (${product.sizes.join(
                " / ",
              )}).`,
            )}
            target="_blank"
            rel="noreferrer noopener"
            className={btn(
              "primary",
              "sm",
              `
                w-full
                transition-all
                duration-300
                hover:scale-[1.025]
                active:scale-[0.98]
              `,
            )}
          >
            <MessageCircle
              className="
                h-3.5 w-3.5
                transition-transform duration-300
                group-hover:scale-110
              "
            />

            Enquire
          </a>

          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className={btn(
              "outline",
              "sm",
              `
                w-full
                transition-all
                duration-300
                hover:scale-[1.025]
                active:scale-[0.98]
              `,
            )}
          >
            View Product

            <ArrowRight
              className="
                h-3.5 w-3.5
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* =====================================================
            CONTACT FORM
        ====================================================== */}
        <Link
          to="/contact"
          search={{ product: product.name }}
          className="
            mt-4
            inline-flex
            items-center
            justify-center
            text-xs
            font-medium
            text-muted-foreground
            underline-offset-4
            transition-all
            duration-300
            hover:text-accent
            hover:underline
            hover:tracking-wide
          "
        >
          Or send an enquiry form
        </Link>
      </div>
    </article>
  );
}
