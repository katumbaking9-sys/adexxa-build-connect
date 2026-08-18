import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Filter,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

import { Container, Section } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import {
  PLACEHOLDER,
  categories,
  products,
  type CategoryId,
} from "@/data/products";
import { cn } from "@/lib/utils";
import { btn } from "@/lib/ui";

type ProductSearch = {
  category?: CategoryId | "all" | undefined;
};

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    const c = search["category"];
    const valid: string[] = ["all", ...categories.map((x) => x.id)];

    return typeof c === "string" && valid.includes(c)
      ? { category: c as CategoryId | "all" }
      : {};
  },

  head: () => ({
    meta: [
      {
        title: "Products — Tile Adhesive & Grout Catalogue | ADEXXA Uganda",
      },
      {
        name: "description",
        content:
          "Explore the ADEXXA range of tile adhesive, grout and Extra Bond products manufactured in Uganda.",
      },
      {
        property: "og:title",
        content: "ADEXXA Product Catalogue — Tile Adhesive & Grout Uganda",
      },
      {
        property: "og:description",
        content:
          "Explore ADEXXA tile adhesive, grout and Extra Bond products manufactured in Uganda.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/products",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/products",
      },
    ],
  }),

  component: ProductsPage,
});

const chip = (active: boolean) =>
  cn(
    "inline-flex items-center gap-2 rounded-full border px-4 py-2.5",
    "font-display text-[0.68rem] font-bold uppercase tracking-[0.12em]",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-accent/40",
    active
      ? "border-accent bg-accent text-accent-foreground shadow-sm"
      : "border-border bg-background text-muted-foreground hover:border-accent/50 hover:bg-accent/5 hover:text-foreground",
  );

function ProductsPage() {
  const navigate = useNavigate({ from: "/products/" });
  const { category = "all" } = Route.useSearch();

  const [query, setQuery] = useState("");
  const [packaging, setPackaging] = useState("all");
  const [colour, setColour] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const packagingOptions = useMemo(
    () => [
      "all",
      ...Array.from(
        new Set(
          products
            .map((p) => p.packaging)
            .filter((p) => p !== PLACEHOLDER),
        ),
      ),
    ],
    [],
  );

  const colourOptions = useMemo(
    () => [
      "all",
      ...Array.from(
        new Set(products.map((p) => p.packagingColour).filter(Boolean)),
      ),
    ],
    [],
  );

  const filtered = products.filter((p) => {
    if (category !== "all" && p.category !== category) return false;

    if (packaging !== "all" && p.packaging !== packaging) {
      return false;
    }

    if (colour !== "all" && p.packagingColour !== colour) {
      return false;
    }

    if (query.trim()) {
      const q = query.toLowerCase();

      const haystack = [
        p.name,
        p.type,
        p.shortDescription,
        p.overview,
        p.packaging,
        p.packagingColour,
        ...p.keyFeatures,
        ...p.applications,
      ]
        .join(" ")
        .toLowerCase();

      if (!haystack.includes(q)) return false;
    }

    return true;
  });

  const activeFilterCount =
    (category !== "all" ? 1 : 0) +
    (packaging !== "all" ? 1 : 0) +
    (colour !== "all" ? 1 : 0);

  const clearFilters = () => {
    setQuery("");
    setPackaging("all");
    setColour("all");
    navigate({
      search: {
        category: "all",
      },
    });
  };

  return (
    <>
      {/* =========================================================
          PREMIUM HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden bg-ink">
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 hairline-grid opacity-20"
          aria-hidden="true"
        />

        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p className="eyebrow text-accent">
                ADEXXA Product Range
              </p>
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-ink-foreground sm:text-6xl lg:text-7xl">
              Materials made for
              <span className="block text-accent">
                better tiling.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">
              Explore the ADEXXA range of tile adhesives, grout and
              Extra Bond solutions manufactured for construction and
              tiling projects in Uganda.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#catalogue"
                className={btn("accent", "lg")}
              >
                Explore catalogue
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href="/contact"
                className={btn("onDark", "lg")}
              >
                Enquire about products
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-3xl border border-ink-border sm:grid-cols-3">
            <div className="border-b border-ink-border p-5 sm:border-b-0 sm:border-r">
              <p className="text-3xl font-bold text-ink-foreground">
                {products.length}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                Product lines
              </p>
            </div>

            <div className="border-b border-ink-border p-5 sm:border-b-0 sm:border-r">
              <p className="text-3xl font-bold text-ink-foreground">
                20kg
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                Adhesive pack
              </p>
            </div>

            <div className="p-5">
              <p className="text-3xl font-bold text-ink-foreground">
                Uganda
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                Manufactured locally
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          CATALOGUE
      ========================================================== */}
      <Section id="catalogue" className="scroll-mt-20">
        <Container>
          {/* Section intro */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />

                <p className="eyebrow text-accent">
                  Catalogue
                </p>
              </div>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Find the right product
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                Browse by product category, packaging or pack colour,
                or search the complete ADEXXA range.
              </p>
            </div>

            <div className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "product" : "products"}
            </div>
          </div>

          {/* =====================================================
              SEARCH / FILTER BAR
          ====================================================== */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            {/* Search */}
            <div className="relative border-b border-border">
              <Search
                className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />

              <label
                className="sr-only"
                htmlFor="product-search"
              >
                Search products
              </label>

              <input
                id="product-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search adhesive, grout, Extra Bond, 20 kg..."
                className="h-16 w-full bg-transparent pl-14 pr-5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:bg-accent/[0.02]"
              />
            </div>

            {/* Mobile filter button */}
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="flex w-full items-center justify-between border-b border-border px-5 py-4 text-sm font-semibold lg:hidden"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-accent" />
                Filters
              </span>

              <span className="flex items-center gap-2">
                {activeFilterCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-bold text-accent-foreground">
                    {activeFilterCount}
                  </span>
                )}

                <span className="text-xs text-muted-foreground">
                  {showFilters ? "Hide" : "Show"}
                </span>
              </span>
            </button>

            {/* Filters */}
            <div
              className={cn(
                "p-5 sm:p-6 lg:block",
                showFilters ? "block" : "hidden",
              )}
            >
              <div className="grid gap-7 lg:grid-cols-3">
                {/* Category */}
                <div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-3.5 w-3.5 text-accent" />

                    <p className="eyebrow text-muted-foreground">
                      Category
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className={chip(category === "all")}
                      onClick={() =>
                        navigate({
                          search: {
                            category: "all",
                          },
                        })
                      }
                    >
                      {category === "all" && (
                        <Check className="h-3 w-3" />
                      )}
                      All
                    </button>

                    {categories.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className={chip(category === c.id)}
                        onClick={() =>
                          navigate({
                            search: {
                              category: c.id,
                            },
                          })
                        }
                      >
                        {category === c.id && (
                          <Check className="h-3 w-3" />
                        )}
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Packaging */}
                <div>
                  <p className="eyebrow text-muted-foreground">
                    Packaging
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {packagingOptions.map((p) => (
                      <button
                        key={p}
                        type="button"
                        className={chip(packaging === p)}
                        onClick={() => setPackaging(p)}
                      >
                        {packaging === p && (
                          <Check className="h-3 w-3" />
                        )}

                        {p === "all" ? "All" : p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colour */}
                <div>
                  <p className="eyebrow text-muted-foreground">
                    Pack colour
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {colourOptions.map((c) => (
                      <button
                        key={c}
                        type="button"
                        className={chip(colour === c)}
                        onClick={() => setColour(c)}
                      >
                        {colour === c && (
                          <Check className="h-3 w-3" />
                        )}

                        {c === "all" ? "All" : c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {activeFilterCount > 0 && (
                <div className="mt-6 border-t border-border pt-5">
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* =====================================================
              PRODUCT CATEGORIES
          ====================================================== */}
          <div className="mt-16 space-y-20">
            {categories
              .filter(
                (c) =>
                  category === "all" ||
                  c.id === category,
              )
              .map((c) => {
                const items = filtered.filter(
                  (p) => p.category === c.id,
                );

                return (
                  <section key={c.id}>
                    {/* Category heading */}
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                      <div className="absolute inset-y-0 left-0 w-1 bg-accent" />

                      <div className="flex flex-col gap-5 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-2xl">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-accent" />

                            <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent">
                              ADEXXA Range
                            </span>
                          </div>

                          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            {c.name}
                          </h2>

                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {c.blurb}
                          </p>
                        </div>

                        <div className="shrink-0">
                          <div className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-muted-foreground">
                            {items.length}{" "}
                            {items.length === 1
                              ? "product"
                              : "products"}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Products */}
                    {items.length > 0 ? (
                      <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((p, index) => (
                          <ProductCard
                            key={p.slug}
                            product={p}
                            delay={index * 90}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="mt-8 rounded-2xl border border-dashed border-border p-12 text-center">
                        <p className="text-sm text-muted-foreground">
                          No products match the current filters.
                        </p>

                        <button
                          type="button"
                          onClick={clearFilters}
                          className="mt-4 text-xs font-bold uppercase tracking-wider text-accent hover:underline"
                        >
                          Clear filters
                        </button>
                      </div>
                    )}
                  </section>
                );
              })}
          </div>
        </Container>
      </Section>

      {/* =========================================================
          PREMIUM TRUST STRIP
      ========================================================== */}
      <section className="border-y border-border bg-muted">
        <Container className="py-14">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-display text-lg font-bold">
                Manufactured in Uganda
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                ADEXXA products are manufactured and packed locally
                for the Ugandan construction market.
              </p>
            </div>

            <div>
              <p className="font-display text-lg font-bold">
                Built for tiling
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                A focused range covering tile bonding and grout
                applications across construction projects.
              </p>
            </div>

            <div>
              <p className="font-display text-lg font-bold">
                Need help choosing?
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Contact ADEXXA directly for product enquiries,
                availability and project requirements.
              </p>

              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
              >
                Contact ADEXXA
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
