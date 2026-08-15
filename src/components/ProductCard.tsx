import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PLACEHOLDER, categoryName, type Product } from "@/data/products";
import { PlaceholderValue } from "@/components/Placeholder";
import { btn } from "@/lib/ui";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group reveal flex flex-col border border-border bg-card transition-all duration-500 ease-out hover:-translate-y-2 hover:border-accent hover:shadow-lg">
      <div className="relative overflow-hidden bg-concrete">
        <img
          src={product.image}
          alt={`${product.name} — placeholder product image`}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
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

        <h3 className="mt-2 font-display text-lg leading-snug text-foreground transition-colors duration-300 group-hover:text-accent">
          {product.name}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          {product.packaging === PLACEHOLDER ? (
            <PlaceholderValue label="Packaging pending" />
          ) : (
            <span className="border border-border bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
              {product.packaging}
            </span>
          )}

          {product.colour ? (
            <span className="border border-border bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
              {product.colour}
            </span>
          ) : null}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>

        {product.applications.length > 0 ? (
          <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
            {product.applications.slice(0, 2).map((a) => (
              <li key={a} className="flex gap-2">
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 bg-accent transition-transform duration-300 group-hover:scale-150"
                  aria-hidden="true"
                />
                {a}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className={btn("primary", "sm", "flex-1")}
          >
            View Product
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            search={{ product: product.name }}
            className={btn("outline", "sm", "flex-1")}
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </article>
  );
}
}
