import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { PLACEHOLDER, categoryName, type Product } from "@/data/products";
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
      { threshold: 0.08 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Premium top accent */}
      <div className="absolute left-0 right-0 top-0 z-20 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

      {/* Product Image */}
      <div className="relative overflow-hidden bg-concrete">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]"
        />

        {/* Category badge */}
        <div className="absolute left-4 top-4 z-20">
          <span className="inline-flex items-center gap-1.5 border border-white/20 bg-black/70 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur-md">
            {categoryName(product.category)}
          </span>
        </div>

        {/* Product image placeholder */}
        {product.imageIsPlaceholder ? (
          <span className="absolute bottom-4 left-4 z-20 border border-note-border bg-note px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-note-foreground">
            Placeholder image
          </span>
        ) : null}

        {/* Pack colour indicator */}
        {product.packagingColour ? (
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 border border-white/20 bg-black/70 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {product.packagingColour} pack
          </div>
        ) : null}
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Product label */}
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            ADEXXA Product
          </span>
        </div>

        {/* Product name */}
        <h3 className="mt-3 font-display text-[1.35rem] font-semibold leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
          {product.name}
        </h3>

        {/* Product type */}
        <p className="mt-2 text-sm font-semibold text-accent">
          {product.type}
        </p>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-border transition-colors duration-300 group-hover:bg-accent/20" />

        {/* Specifications */}
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
                className="border border-border bg-secondary/70 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wide text-secondary-foreground transition-colors duration-300 group-hover:border-accent/30"
              >
                {s}
              </span>
            ))
          )}

          {product.packagingColour ? (
            <span className="border border-border bg-background px-3 py-1.5 text-[0.7rem] font-medium text-muted-foreground">
              {product.packagingColour} packaging
            </span>
          ) : null}
        </div>

        {/* Description */}
        <p className="mt-5 flex-1 text-sm leading-6 text-muted-foreground">
          {product.shortDescription}
        </p>

        {/* Actions */}
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
              "w-full transition-transform duration-300 hover:scale-[1.02]",
            )}
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Enquire
          </a>

          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className={btn(
              "outline",
              "sm",
              "w-full transition-all duration-300 hover:scale-[1.02]",
            )}
          >
            View Product
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Contact form */}
        <Link
          to="/contact"
          search={{ product: product.name }}
          className="mt-4 inline-flex items-center justify-center text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          Or send an enquiry form
        </Link>
      </div>
    </article>
  );
}
