import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { Container, Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import {
  PlaceholderBlock,
  PlaceholderValue,
} from "@/components/Placeholder";
import {
  PLACEHOLDER,
  categoryName,
  getProduct,
} from "@/data/products";
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
      return {
        meta: [
          {
            title: "Product unavailable — ADEXXA",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const { product } = loaderData;
    const title = `${product.name} — ADEXXA Uganda`;

    return {
      meta: [
        {
          title,
        },
        {
          name: "description",
          content: product.shortDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: product.shortDescription,
        },
        {
          property: "og:type",
          content: "product",
        },
        {
          property: "og:url",
          content: `/products/${product.slug}`,
        },
      ],

      links: [
        {
          rel: "canonical",
          href: `/products/${product.slug}`,
        },
      ],
    };
  },

  component: ProductDetail,
  notFoundComponent: ProductNotFound,
});

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
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

  return {
    ref,
    visible,
  };
}

/* =========================================================
   NOT FOUND
========================================================= */

function ProductNotFound() {
  return (
    <Section>
      <Container className="text-center">
        <h1 className="text-3xl">
          Product not found
        </h1>

        <p className="mt-3 text-muted-foreground">
          This product is not part of the current ADEXXA
          catalogue.
        </p>

        <Link
          to="/products"
          className={btn("primary", "md", "mt-8")}
        >
          Back to catalogue
        </Link>
      </Container>
    </Section>
  );
}

/* =========================================================
   PRODUCT DETAIL
========================================================= */

function ProductDetail() {
  const { product } = Route.useLoaderData();

  const hero = useReveal();
  const features = useReveal();
  const applications = useReveal();
  const technical = useReveal();
  const guidance = useReveal();

  return (
    <>
      {/* =====================================================
          PRODUCT HERO
      ====================================================== */}

      <Section className="pb-16 pt-12">
        <Container>
          {/* Back button */}

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:gap-3 hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />

            Back to catalogue
          </Link>

          {/* Hero */}

          <div
            ref={hero.ref}
            className={`mt-8 grid gap-12 transition-all duration-700 lg:grid-cols-2 ${
              hero.visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Product image */}

            <div className="group relative overflow-hidden bg-concrete">
              <img
                src={product.image}
                alt={`${product.name} — placeholder product image pending official ADEXXA packaging photography`}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Image overlay */}

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70"
                aria-hidden="true"
              />

              {/* Placeholder */}

              {product.imageIsPlaceholder ? (
                <span className="absolute left-4 top-4 border border-note-border bg-note px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-note-foreground">
                  Placeholder image — official photography pending
                </span>
              ) : null}
            </div>

            {/* Product information */}

            <div className="flex flex-col justify-center">
              <p className="eyebrow text-accent">
                {categoryName(product.category)}
              </p>

              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>

              {/* Product badges */}

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                {product.packaging === PLACEHOLDER ? (
                  <PlaceholderValue label="Packaging pending" />
                ) : (
                  <span className="border border-border bg-secondary px-2.5 py-1 font-medium transition-colors hover:border-accent/40">
                    {product.packaging}
                  </span>
                )}

                {product.type === PLACEHOLDER ? (
                  <PlaceholderValue label="Product type pending" />
                ) : (
                  <span className="border border-border bg-secondary px-2.5 py-1 font-medium transition-colors hover:border-accent/40">
                    {product.type}
                  </span>
                )}

                {product.colour ? (
                  <span className="border border-border bg-secondary px-2.5 py-1 font-medium transition-colors hover:border-accent/40">
                    {product.colour}
                  </span>
                ) : null}
              </div>

              {/* Divider */}

              <div className="mt-8 h-px w-full bg-border" />

              {/* Overview */}

              <h2 className="mt-8 font-display text-sm uppercase tracking-widest text-muted-foreground">
                Overview
              </h2>

              {product.overview === PLACEHOLDER ? (
                <div className="mt-3">
                  <PlaceholderBlock title="Product overview pending">
                    Official product description will be published once
                    supplied.
                  </PlaceholderBlock>
                </div>
              ) : (
                <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {product.overview}
                </p>
              )}

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  search={{
                    product: product.name,
                  }}
                  className={btn(
                    "accent",
                    "lg",
                    "transition-transform duration-300 hover:-translate-y-0.5",
                  )}
                >
                  Ask About This Product
                </Link>

                <a
                  href={whatsappLink(
                    `Hello ADEXXA, I would like to ask about ${product.name}.`,
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={btn(
                    "outline",
                    "lg",
                    "transition-transform duration-300 hover:-translate-y-0.5",
                  )}
                >
                  <MessageCircle className="h-4 w-4" />

                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =====================================================
          PRODUCT INFORMATION
      ====================================================== */}

      <Section
        tone="muted"
        className="py-16"
      >
        <Container className="grid gap-10 lg:grid-cols-2">

          {/* =================================================
              KEY FEATURES
          ================================================== */}

          <div
            ref={features.ref}
            className={`transition-all duration-700 ${
              features.visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="accent-rule font-display text-xl">
              Key features
            </h2>

            {product.keyFeatures.length ? (
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {product.keyFeatures.map((f, index) => (
                  <li
                    key={f}
                    className="flex gap-3 border-b border-border pb-3 transition-transform duration-300 hover:translate-x-1"
                    style={{
                      transitionDelay: `${index * 70}ms`,
                    }}
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 bg-accent"
                      aria-hidden="true"
                    />

                    {f}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6">
                <PlaceholderBlock title="Key features pending">
                  Verified product features will be listed here.
                </PlaceholderBlock>
              </div>
            )}
          </div>

          {/* =================================================
              APPLICATIONS
          ================================================== */}

          <div
            ref={applications.ref}
            className={`transition-all duration-700 delay-100 ${
              applications.visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="accent-rule font-display text-xl">
              Recommended applications
            </h2>

            {product.applications.length ? (
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {product.applications.map((a, index) => (
                  <li
                    key={a}
                    className="flex gap-3 border-b border-border pb-3 transition-transform duration-300 hover:translate-x-1"
                    style={{
                      transitionDelay: `${index * 70}ms`,
                    }}
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 bg-accent"
                      aria-hidden="true"
                    />

                    {a}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6">
                <PlaceholderBlock title="Applications pending">
                  Recommended applications will be listed once confirmed.
                </PlaceholderBlock>
              </div>
            )}
          </div>

          {/* =================================================
              AVAILABLE COLOURS
          ================================================== */}

          {product.colours?.length ? (
            <div className="transition-all duration-700">
              <h2 className="accent-rule font-display text-xl">
                Available colours
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.colours.map((c) => (
                  <span
                    key={c}
                    className="border border-border bg-card px-3 py-1.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* =================================================
              TECHNICAL INFORMATION
          ================================================== */}

          <div
            ref={technical.ref}
            className={`lg:col-span-2 transition-all duration-700 ${
              technical.visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="accent-rule font-display text-xl">
              Technical information
            </h2>

            <dl className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
              {product.technical.map((row, index) => (
                <div
                  key={row.label}
                  className="bg-card p-5 transition-colors duration-300 hover:bg-accent/[0.03]"
                  style={{
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  <dt className="eyebrow text-muted-foreground">
                    {row.label}
                  </dt>

                  <dd className="mt-2 text-sm text-foreground">
                    {row.value === PLACEHOLDER ? (
                      <PlaceholderValue label="Data pending" />
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Only verified, publicly available information is shown.
              Remaining values will be published once official technical
              data is supplied.
            </p>
          </div>

          {/* =================================================
              APPLICATION GUIDANCE
          ================================================== */}

          <div
            ref={guidance.ref}
            className={`lg:col-span-2 transition-all duration-700 ${
              guidance.visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="accent-rule font-display text-xl">
              Application guidance
            </h2>

            <div className="mt-6">
              {product.applicationGuidance === PLACEHOLDER ? (
                <PlaceholderBlock title="Application guidance pending">
                  Mixing, surface preparation and curing instructions will be
                  published from the official product datasheet.
                </PlaceholderBlock>
              ) : (
                <p className="leading-relaxed text-muted-foreground">
                  {product.applicationGuidance}
                </p>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <CTASection
        productName={product.name}
        title={`Enquire about ${product.name}`}
      />
    </>
  );
}
