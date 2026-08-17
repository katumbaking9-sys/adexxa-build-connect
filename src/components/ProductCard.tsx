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
      className={`group flex h-full flex-col overflow-hidden border border-border bg-card shadow-sm transition-all duration-700 hover:-translate-y-1 hover:border-accent hover:shadow-lg ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-concrete">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {product.imageIsPlaceholder ? (
          <span className="absolute left-4 top-4 border border-note-border bg-note px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-note-foreground">
            Placeholder image
          </span>
        ) : null}

        {/* Product category */}
        <span className="absolute bottom-4 left-4 bg-background/90 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-foreground backdrop-blur-sm">
          {categoryName(product.category)}
        </span>
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl leading-tight text-foreground">
          {product.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-accent">
          {product.type}
        </p>

        {/* Product specifications */}
        <div className="mt-5 flex flex-wrap gap-2">
          {product.packaging === PLACEHOLDER ? (
            <PlaceholderValue label="Packaging pending" />
          ) : (
            (product.sizes.length > 0
              ? product.sizes
              : [product.packaging]
            ).map((s) => (
              <span
                key={s}
                className="border border-border bg-secondary px-2.5 py-1.5 text-xs font-semibold text-secondary-foreground"
              >
                {s}
              </span>
            ))
          )}

          {product.packagingColour ? (
            <span className="border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
              {product.packagingColour} pack
            </span>
          ) : null}
        </div>

        <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>

        {/* Actions */}
        <div className="mt-7 grid grid-cols-2 gap-2">
          <a
            href={whatsappLink(
              `Hello ADEXXA, I would like to enquire about ${product.name} (${product.sizes.join(
                " / "
              )}).`
            )}
            target="_blank"
            rel="noreferrer noopener"
            className={btn("primary", "sm", "w-full")}
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Enquire
          </a>

          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className={btn("outline", "sm", "w-full")}
          >
            View Product
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

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
