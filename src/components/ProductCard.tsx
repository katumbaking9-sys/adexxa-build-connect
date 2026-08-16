import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
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
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`group flex h-full flex-col border border-border bg-card transition-all duration-700 hover:-translate-y-1 hover:border-accent ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative overflow-hidden bg-concrete">
        <img
          src={product.image}
          alt={`${product.name} — placeholder product image`}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {product.imageIsPlaceholder ? (
          <span className="absolute left-3 top-3 border border-note-border bg-note px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-note-foreground">
            Placeholder image
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-muted-foreground">
          {categoryName(product.category)}
        </p>

        <h3 className="mt-2 font-display text-lg leading-snug text-foreground">
          {product.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-foreground/80">{product.type}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          {product.packaging === PLACEHOLDER ? (
            <PlaceholderValue label="Packaging pending" />
          ) : (
            (product.sizes.length > 0 ? product.sizes : [product.packaging]).map((s) => (
              <span
                key={s}
                className="border border-border bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground"
              >
                {s}
              </span>
            ))
          )}

          {product.packagingColour ? (
            <span className="border border-border px-2.5 py-1 font-medium text-muted-foreground">
              {product.packagingColour} pack
            </span>
          ) : null}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>

        <div className="mt-7 flex flex-col gap-2 sm:flex-row">
          <a
            href={whatsappLink(
              `Hello ADEXXA, I would like to enquire about ${product.name} (${product.sizes.join(" / ")}).`
            )}
            target="_blank"
            rel="noreferrer noopener"
            className={btn("primary", "sm", "flex-1")}
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Enquire on WhatsApp
          </a>

          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className={btn("outline", "sm", "flex-1")}
          >
            View Product
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <Link
          to="/contact"
          search={{ product: product.name }}
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
        >
          Or send an enquiry form
        </Link>
      </div>
    </article>
  );
}
