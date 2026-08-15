import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Container, Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { PlaceholderBlock, PlaceholderValue } from "@/components/Placeholder";
import { PLACEHOLDER, categoryName, getProduct } from "@/data/products";
import { whatsappLink } from "@/data/site";
import { btn } from "@/lib/ui";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — ADEXXA" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — ADEXXA Uganda`;
    return {
      meta: [
        { title },
        { name: "description", content: product.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: product.shortDescription },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${product.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${product.slug}` }],
    };
  },
  component: ProductDetail,
  notFoundComponent: ProductNotFound,
});

function ProductNotFound() {
  return (
    <Section>
      <Container className="text-center">
        <h1 className="text-3xl">Product not found</h1>
        <p className="mt-3 text-muted-foreground">This product is not part of the current ADEXXA catalogue.</p>
        <Link to="/products" className={btn("primary", "md", "mt-8")}>
          Back to catalogue
        </Link>
      </Container>
    </Section>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();

  return (
    <>
      <Section className="pb-16 pt-12">
        <Container>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to catalogue
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div className="relative bg-concrete">
              <img
                src={product.image}
                alt={`${product.name} — placeholder product image pending official ADEXXA packaging photography`}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
              {product.imageIsPlaceholder ? (
                <span className="absolute left-4 top-4 border border-note-border bg-note px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-note-foreground">
                  Placeholder image — official photography pending
                </span>
              ) : null}
            </div>

            <div>
              <p className="eyebrow text-muted-foreground">{categoryName(product.category)}</p>
              <h1 className="mt-3 text-3xl sm:text-4xl">{product.name}</h1>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                {product.packaging === PLACEHOLDER ? (
                  <PlaceholderValue label="Packaging pending" />
                ) : (
                  <span className="border border-border bg-secondary px-2.5 py-1 font-medium">{product.packaging}</span>
                )}
                {product.type === PLACEHOLDER ? (
                  <PlaceholderValue label="Product type pending" />
                ) : (
                  <span className="border border-border bg-secondary px-2.5 py-1 font-medium">{product.type}</span>
                )}
                {product.colour ? (
                  <span className="border border-border bg-secondary px-2.5 py-1 font-medium">{product.colour}</span>
                ) : null}
              </div>

              <h2 className="mt-8 font-display text-sm uppercase tracking-widest text-muted-foreground">Overview</h2>
              {product.overview === PLACEHOLDER ? (
                <div className="mt-3">
                  <PlaceholderBlock title="Product overview pending">
                    Official product description will be published once supplied.
                  </PlaceholderBlock>
                </div>
              ) : (
                <p className="mt-3 leading-relaxed text-muted-foreground">{product.overview}</p>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" search={{ product: product.name }} className={btn("accent", "lg")}>
                  Ask About This Product
                </Link>
                <a
                  href={whatsappLink(`Hello ADEXXA, I would like to ask about ${product.name}.`)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={btn("outline", "lg")}
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted" className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="accent-rule font-display text-xl">Key features</h2>
            {product.keyFeatures.length ? (
              <ul className="space-y-3 text-sm text-muted-foreground">
                {product.keyFeatures.map((f) => (
                  <li key={f} className="flex gap-3 border-b border-border pb-3">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            ) : (
              <PlaceholderBlock title="Key features pending">
                Verified product features will be listed here.
              </PlaceholderBlock>
            )}
          </div>

          <div>
            <h2 className="accent-rule font-display text-xl">Recommended applications</h2>
            {product.applications.length ? (
              <ul className="space-y-3 text-sm text-muted-foreground">
                {product.applications.map((a) => (
                  <li key={a} className="flex gap-3 border-b border-border pb-3">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            ) : (
              <PlaceholderBlock title="Applications pending">
                Recommended applications will be listed once confirmed.
              </PlaceholderBlock>
            )}
          </div>

          {product.colours?.length ? (
            <div>
              <h2 className="accent-rule font-display text-xl">Available colours</h2>
              <div className="flex flex-wrap gap-2">
                {product.colours.map((c) => (
                  <span key={c} className="border border-border bg-card px-3 py-1.5 text-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="lg:col-span-2">
            <h2 className="accent-rule font-display text-xl">Technical information</h2>
            <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {product.technical.map((row) => (
                <div key={row.label} className="bg-card p-5">
                  <dt className="eyebrow text-muted-foreground">{row.label}</dt>
                  <dd className="mt-2 text-sm text-foreground">
                    {row.value === PLACEHOLDER ? <PlaceholderValue label="Data pending" /> : row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted-foreground">
              Only verified, publicly available information is shown. Remaining values will be published once official
              technical data is supplied.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="accent-rule font-display text-xl">Application guidance</h2>
            {product.applicationGuidance === PLACEHOLDER ? (
              <PlaceholderBlock title="Application guidance pending">
                Mixing, surface preparation and curing instructions will be published from the official product
                datasheet.
              </PlaceholderBlock>
            ) : (
              <p className="leading-relaxed text-muted-foreground">{product.applicationGuidance}</p>
            )}
          </div>
        </Container>
      </Section>

      <CTASection productName={product.name} title={`Enquire about ${product.name}`} />
    </>
  );
}
