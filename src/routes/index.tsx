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
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Container, Section, SectionHeading } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { ApplicationCard } from "@/components/ApplicationCard";
import { CTASection } from "@/components/CTASection";
import { products } from "@/data/products";
import { site } from "@/data/site";
import manufacturingImg from "@/assets/manufacturing.jpg";
import { btn } from "@/lib/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADEXXA Uganda — Tile Adhesive & Grout Manufacturer" },
      {
        name: "description",
        content:
          "ADEXXA manufactures tile adhesive and grout products in Uganda for construction and tiling projects. Explore the catalogue and send an enquiry.",
      },
      { property: "og:title", content: "ADEXXA Uganda — Tile Adhesive & Grout Manufacturer" },
      {
        property: "og:description",
        content:
          "Ugandan manufacturer of tile adhesive and grout for contractors, fundis, hardware dealers and developers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ADEXXA",
          description:
            "Ugandan manufacturer of tile adhesive and grout products for the construction and tiling market.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Naggalama, along Kayunga Road",
            addressCountry: "UG",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const applications = [
  { icon: Layers, title: "Floor tiling", description: "Tiling works on floor surfaces in new build and finishing projects." },
  { icon: PaintRoller, title: "Wall tiling", description: "Tiling works on wall surfaces as part of interior finishing." },
  { icon: Home, title: "Residential construction", description: "Homes and residential units where tiling forms part of the works." },
  { icon: Building2, title: "Commercial construction", description: "Commercial buildings and fit-out projects requiring tiling." },
  { icon: Wrench, title: "Renovation projects", description: "Refurbishment and re-tiling works on existing buildings." },
  { icon: HardHat, title: "Tile installation projects", description: "General tile installation carried out by professional teams." },
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

function HomePage() {
  const featured = products.filter((p) => p.category !== "extra-bond");

  return (
    <>
      <Hero />

      {/* About */}
      <Section>
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About ADEXXA"
              title="A Ugandan tile adhesive and grout manufacturer"
              description="ADEXXA manufactures tile adhesive and grout products for the construction and tiling market in Uganda. The business is associated publicly with Lukomu Uganda Limited."
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Public information identifies an ADEXXA tile adhesive manufacturing operation in{" "}
              {site.manufacturing.area}, {site.manufacturing.country} — a locally manufactured brand supplying
              practical materials for tiling work.
            </p>
            <Link to="/about" className={btn("outline", "md", "mt-8")}>
              More about ADEXXA <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={manufacturingImg}
              alt="Powder mortar production plant with mixing silos and stacked bags"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full object-cover"
            />
            <span className="absolute bottom-3 left-3 border border-note-border bg-note px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-note-foreground">
              Placeholder image
            </span>
          </div>
        </Container>
      </Section>

      {/* Products */}
      <Section tone="muted">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Product catalogue"
              title="Tile adhesive and grout products"
              description="Browse the ADEXXA range, including the expanding Extra Bond line."
            />
            <Link to="/products/" className={btn("primary", "md")}>
              View full catalogue <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Applications */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Applications"
            title="Where ADEXXA products are used"
            description="Common tiling and construction situations where tile adhesive and grout are required."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((a) => (
              <ApplicationCard key={a.title} icon={a.icon} title={a.title} description={a.description} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why ADEXXA */}
      <Section tone="ink" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hairline-grid opacity-30" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            tone="ink"
            eyebrow="Why ADEXXA"
            title="Locally manufactured materials for tiling work"
          />
          <div className="mt-12 grid gap-px bg-ink-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Locally manufactured", d: "Products are manufactured in Uganda for the local construction market." },
              { t: "Tile adhesive and grout", d: "A focused range covering bonding and joint filling for tiling work." },
              { t: "Construction-focused", d: "Products intended for construction and tiling projects, not general retail goods." },
              { t: "Convenient range", d: "Adhesive in 20 kg and grout in 5 kg packs listed by Ugandan retailers." },
              { t: "Different applications", d: "Solutions covering floor and wall tiling in indoor projects." },
              { t: "Growing catalogue", d: "The Extra Bond range is being added as official product information is confirmed." },
            ].map((item) => (
              <div key={item.t} className="bg-ink p-7">
                <h3 className="font-display text-lg text-ink-foreground">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Customer types */}
      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Who we serve"
            title="Built for the people doing the work"
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customerTypes.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 border border-border bg-card p-5 transition-colors hover:border-accent"
              >
                <c.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="font-display text-sm font-semibold text-foreground">{c.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
