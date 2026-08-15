import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { PlaceholderBlock } from "@/components/Placeholder";
import { PLACEHOLDER, categories, products, type CategoryId } from "@/data/products";
import { cn } from "@/lib/utils";

type ProductSearch = { category?: CategoryId | "all" | undefined };

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    const c = search["category"];
    const valid: string[] = ["all", ...categories.map((x) => x.id)];
    return typeof c === "string" && valid.includes(c) ? { category: c as CategoryId | "all" } : {};
  },
  head: () => ({
    meta: [
      { title: "Products — Tile Adhesive & Grout Catalogue | ADEXXA Uganda" },
      {
        name: "description",
        content:
          "Browse the ADEXXA product catalogue: tile adhesive 20 kg, grout in white and grey 5 kg, and the Extra Bond range. Filter by category, packaging and colour.",
      },
      { property: "og:title", content: "ADEXXA Product Catalogue — Tile Adhesive & Grout Uganda" },
      {
        property: "og:description",
        content: "Tile adhesive, grout and the Extra Bond range from ADEXXA, manufactured in Uganda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const chip = (active: boolean) =>
  cn(
    "border px-3.5 py-2 font-display text-[0.7rem] font-semibold uppercase tracking-wider transition-colors",
    active
      ? "border-accent bg-accent text-accent-foreground"
      : "border-input bg-card text-muted-foreground hover:text-foreground",
  );

function ProductsPage() {
  const navigate = useNavigate({ from: "/products/" });
  const { category = "all" } = Route.useSearch();
  const [query, setQuery] = useState("");
  const [packaging, setPackaging] = useState("all");
  const [colour, setColour] = useState("all");

  const packagingOptions = useMemo(
    () => ["all", ...Array.from(new Set(products.map((p) => p.packaging).filter((p) => p !== PLACEHOLDER)))],
    [],
  );
  const colourOptions = useMemo(
    () => ["all", ...Array.from(new Set(products.map((p) => p.colour).filter(Boolean) as string[]))],
    [],
  );

  const filtered = products.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (packaging !== "all" && p.packaging !== packaging) return false;
    if (colour !== "all" && p.colour !== colour) return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      const haystack = [p.name, p.type, p.shortDescription, p.packaging, p.colour ?? ""].join(" ").toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  return (
    <>
      <Section className="border-b border-border pb-12 pt-16 sm:pb-14 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Catalogue"
            title="ADEXXA product catalogue"
            description="Tile adhesive, grout and the Extra Bond range. Use the filters and search to find the product relevant to your project."
          />
        </Container>
      </Section>

      <Section className="pt-12">
        <Container>
          {/* Filters */}
          <div className="flex flex-col gap-6 border border-border bg-card p-5 sm:p-6">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <label className="sr-only" htmlFor="product-search">
                Search products
              </label>
              <input
                id="product-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, e.g. adhesive, grout, 20 kg"
                className="h-12 w-full border border-input bg-background pl-10 pr-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <div>
                <p className="eyebrow text-muted-foreground">Category</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className={chip(category === "all")}
                    onClick={() => navigate({ search: { category: "all" } })}
                  >
                    All
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      className={chip(category === c.id)}
                      onClick={() => navigate({ search: { category: c.id } })}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="eyebrow text-muted-foreground">Packaging</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {packagingOptions.map((p) => (
                    <button key={p} type="button" className={chip(packaging === p)} onClick={() => setPackaging(p)}>
                      {p === "all" ? "All" : p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="eyebrow text-muted-foreground">Colour</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {colourOptions.map((c) => (
                    <button key={c} type="button" className={chip(colour === c)} onClick={() => setColour(c)}>
                      {c === "all" ? "All" : c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Categories with products */}
          <div className="mt-14 space-y-16">
            {categories
              .filter((c) => category === "all" || c.id === category)
              .map((c) => {
                const items = filtered.filter((p) => p.category === c.id);
                return (
                  <div key={c.id}>
                    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
                      <div className="accent-rule">
                        <h2 className="font-display text-2xl text-foreground">{c.name}</h2>
                        <p className="mt-2 max-w-xl text-sm text-muted-foreground">{c.blurb}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{items.length} product(s)</span>
                    </div>

                    {c.id === "extra-bond" ? (
                      <div className="mt-6">
                        <PlaceholderBlock title="Extra Bond product information pending">
                          Product names, variants, packaging, colours and technical data will be published here once
                          official Extra Bond product information is supplied. New variants can be added in
                          src/data/products.ts without redesigning the catalogue.
                        </PlaceholderBlock>
                      </div>
                    ) : null}

                    {items.length > 0 ? (
                      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                       {items.map((p, index) => (
  <ProductCard
    key={p.slug}
    product={p}
    delay={index * 0.15}
  />
))}
                      </div>
                    ) : (
                      <p className="mt-6 text-sm text-muted-foreground">No products match the current filters.</p>
                    )}
                  </div>
                );
              })}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
