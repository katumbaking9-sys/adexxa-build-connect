```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  Home,
  Layers,
  PaintRoller,
  Store,
  Wrench,
  Check,
  MessageCircle,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Container, Section, SectionHeading } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { products } from "@/data/products";
import { whatsappLink } from "@/data/site";
import manufacturingImg from "@/assets/manufacturing.jpg";
import { btn } from "@/lib/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ADEXXA Uganda | Tile Adhesive & Grout Manufacturer",
      },
      {
        name: "description",
        content:
          "ADEXXA is a Ugandan manufacturer of tile adhesive and grout products for contractors, builders, tile installers, hardware dealers and construction projects.",
      },

      // Open Graph
      {
        property: "og:title",
        content: "ADEXXA Uganda | Tile Adhesive & Grout Manufacturer",
      },
      {
        property: "og:description",
        content:
          "Ugandan manufacturer of tile adhesive and grout products for construction, tiling and finishing projects.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content:
          "https://adexxa-build-connect.katumbaking9.workers.dev/",
      },
      {
        property: "og:site_name",
        content: "ADEXXA Uganda",
      },
      {
        property: "og:locale",
        content: "en_UG",
      },

      // Twitter / X
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "ADEXXA Uganda | Tile Adhesive & Grout Manufacturer",
      },
      {
        name: "twitter:description",
        content:
          "Ugandan manufacturer of tile adhesive and grout products for construction and tiling projects.",
      },

      // Search engine instructions
      {
        name: "robots",
        content: "index, follow",
      },
    ],

    links: [
      {
        rel: "canonical",
        href:
          "https://adexxa-build-connect.katumbaking9.workers.dev/",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/adexxa-ail-favicon.png",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id":
                "https://adexxa-build-connect.katumbaking9.workers.dev/#organization",
              name: "ADEXXA",
              url:
                "https://adexxa-build-connect.katumbaking9.workers.dev/",
              description:
                "Ugandan manufacturer of tile adhesive and grout products for the construction and tiling market.",
            },
            {
              "@type": "WebSite",
              "@id":
                "https://adexxa-build-connect.katumbaking9.workers.dev/#website",
              url:
                "https://adexxa-build-connect.katumbaking9.workers.dev/",
              name: "ADEXXA Uganda",
              description:
                "Tile adhesive and grout manufacturer in Uganda.",
              publisher: {
                "@id":
                  "https://adexxa-build-connect.katumbaking9.workers.dev/#organization",
              },
            },
          ],
        }),
      },
    ],
  }),

  component: HomePage,
});

const applications = [
  {
    icon: Layers,
    title: "Floor tiling",
    description:
      "Tiling works on floor surfaces in new build and finishing projects.",
  },
  {
    icon: PaintRoller,
    title: "Wall tiling",
    description:
      "Tiling works on wall surfaces as part of interior finishing.",
  },
  {
    icon: Home,
    title: "Residential construction",
    description:
      "Homes and residential units where tiling forms part of the works.",
  },
  {
    icon: Building2,
    title: "Commercial construction",
    description:
      "Commercial buildings and fit-out projects requiring tiling.",
  },
  {
    icon: Wrench,
    title: "Renovation projects",
    description:
      "Refurbishment and re-tiling works on existing buildings.",
  },
  {
    icon: HardHat,
    title: "Tile installation projects",
    description:
      "General tile installation carried out by professional teams.",
  },
];

const customerTypes = [
  { icon: HardHat, label: "Contractors" },
  { icon: Building2, label: "Builders" },
  { icon: Wrench, label: "Tile installers / fundis" },
  { icon: Store, label: "Hardware dealers" },
  { icon: Factory, label: "Property developers" },
  { icon: Home, label: "Homeowners" },
  { icon: PaintRoller, label: "Renovation professionals" },
];

const benefits = [
  {
    title: "Locally manufactured",
    description:
      "ADEXXA products are manufactured in Uganda for the local construction market.",
  },
  {
    title: "Focused product range",
    description:
      "A dedicated range of tile adhesive and grout for tiling and finishing work.",
  },
  {
    title: "Built around construction",
    description:
      "Products designed around the practical needs of construction and tile installation.",
  },
  {
    title: "Multiple applications",
    description:
      "Suitable product categories for common floor, wall, residential and commercial tiling work.",
  },
  {
    title: "Growing catalogue",
    description:
      "The ADEXXA range continues to grow as additional official product information is confirmed.",
  },
  {
    title: "Direct support",
    description:
      "Customers can contact ADEXXA directly for product enquiries, packaging and availability.",
  },
];

function HomePage() {
  const featured = products.filter((p) => p.category !== "extra-bond");

  return (
    <>
      <Hero />

      {/* INTRO / BRAND STATEMENT */}
      <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent" />
                ADEXXA
              </div>

              <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Reliable solutions for{" "}
                <span className="text-accent">better tiling.</span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                ADEXXA manufactures tile adhesive and grout products for the
                construction and tiling market in Uganda — bringing a focused,
                locally manufactured range to the people doing the work.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
              >
                Discover ADEXXA
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Manufactured in Uganda",
                text: "A local manufacturing operation serving the Ugandan construction market.",
              },
              {
                number: "02",
                title: "Tile adhesive & grout",
                text: "A focused product range for bonding and finishing tiled surfaces.",
              },
              {
                number: "03",
                title: "Made for the work",
                text: "Practical materials for contractors, fundis, builders and project owners.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-card p-7 transition-colors duration-300 hover:bg-muted"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-accent">
                  {item.number}
                </span>

                <h3 className="mt-5 font-display text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ABOUT / MANUFACTURING */}
      <Section tone="muted" className="py-20 sm:py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden border border-border bg-card">
              <img
                src={manufacturingImg}
                alt="Powder mortar production plant with mixing silos and stacked bags"
                loading="lazy"
                width={1536}
                height={1024}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="absolute -bottom-5 -right-4 hidden border border-border bg-card p-5 shadow-sm sm:block">
              <Factory className="h-6 w-6 text-accent" />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em]">
                Uganda
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Local manufacturing
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Inside ADEXXA"
              title="A Ugandan manufacturer focused on tiling."
              description="ADEXXA is associated publicly with Lukomu Uganda Limited and manufactures tile adhesive and grout products for the construction and tiling market."
            />

            <div className="mt-8 space-y-4">
              {[
                "Tile adhesive and grout products",
                "Manufacturing operation in Uganda",
                "Solutions for residential and commercial projects",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </span>

                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className={btn("outline", "md", "mt-9")}
            >
              More about ADEXXA
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* PRODUCTS */}
      <Section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Product catalogue"
              title="Products made for the job."
              description="Explore the ADEXXA range of tile adhesive and grout products."
            />

            <Link
              to="/products"
              className={btn("primary", "md")}
            >
              View full catalogue
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <div
                key={p.slug}
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
            >
              Explore the complete ADEXXA range
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* APPLICATIONS */}
      <Section tone="muted" className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Applications"
              title="Where the work happens."
              description="ADEXXA products are intended for a range of common tiling and construction situations."
            />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((a, index) => (
              <div
                key={a.title}
                className="group transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-full overflow-hidden border border-border bg-card p-7">
                  <span className="absolute right-5 top-5 text-xs font-bold text-muted-foreground/40">
                    0{index + 1}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-border bg-background transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/5">
                    <a.icon
                      className="h-5 w-5 text-accent"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-7 font-display text-lg font-semibold">
                    {a.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {a.description}
                  </p>

                  <div className="mt-6 h-px w-0 bg-accent transition-all duration-300 group-hover:w-10" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY ADEXXA */}
      <Section
        tone="ink"
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 hairline-grid opacity-30"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent" />
                Why ADEXXA
              </div>

              <h2 className="font-display text-3xl font-semibold leading-tight text-ink-foreground sm:text-4xl lg:text-5xl">
                Built around the people doing the work.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-ink-muted sm:text-base">
                From everyday tile installation to larger construction
                projects, ADEXXA provides a focused range of materials for the
                job.
              </p>
            </div>

            <div className="grid gap-px bg-ink-border sm:grid-cols-2">
              {benefits.map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-ink p-7 transition-colors duration-300 hover:bg-ink/80"
                >
                  <span className="text-xs font-bold tracking-[0.18em] text-accent">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 font-display text-lg text-ink-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-ink-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CUSTOMER TYPES */}
      <Section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Who we serve"
            title="For the people building Uganda."
            description="ADEXXA products are intended for the professionals, businesses and homeowners involved in construction and tiling."
            align="center"
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {customerTypes.map((c) => (
              <div
                key={c.label}
                className="group flex items-center gap-4 border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-accent/10">
                  <c.icon
                    className="h-4 w-4 text-accent"
                    aria-hidden="true"
                  />
                </div>

                <span className="font-display text-sm font-semibold">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* DIRECT CONTACT */}
      <Section className="border-t border-border py-14 sm:py-16">
        <Container>
          <div className="relative overflow-hidden bg-muted p-7 sm:p-10 lg:p-12">
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  <MessageCircle className="h-4 w-4" />
                  Direct contact
                </div>

                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Have a project in mind?
                </h2>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Talk directly with ADEXXA about products, packaging,
                  availability or your tiling requirements.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/products"
                  className={btn("primary", "md")}
                >
                  Explore products
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href={whatsappLink(
                    "Hello ADEXXA, I would like to make an enquiry."
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={btn("outline", "md")}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp ADEXXA
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
```
