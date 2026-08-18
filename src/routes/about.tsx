import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Factory,
  Handshake,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { site, whatsappLink } from "@/data/site";
import manufacturingImg from "@/assets/manufacturing.jpg";
import { btn } from "@/lib/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ADEXXA — Tile Adhesive Manufacturer in Uganda" },
      {
        name: "description",
        content:
          "Learn about ADEXXA, a Ugandan construction-materials brand focused on tile adhesive, grout and reliable tiling solutions.",
      },
      {
        property: "og:title",
        content: "About ADEXXA — Tile Adhesive Manufacturer in Uganda",
      },
      {
        property: "og:description",
        content:
          "Discover ADEXXA's mission, vision, values and commitment to quality in tile adhesive and grout solutions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Quality without compromise",
    description:
      "We place product consistency, dependable performance and responsible manufacturing at the centre of what we do.",
  },
  {
    icon: Users,
    number: "02",
    title: "Customer focused",
    description:
      "We listen to contractors, installers, dealers, developers and homeowners to understand the practical demands of real projects.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Continuous improvement",
    description:
      "Better construction materials come from learning, testing, refining processes and continuously improving performance.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Integrity",
    description:
      "We aim to build lasting relationships through transparency, accountability and honest communication.",
  },
  {
    icon: Factory,
    number: "05",
    title: "Local impact",
    description:
      "We are committed to developing locally manufactured construction solutions that contribute to Uganda's growing building sector.",
  },
  {
    icon: Award,
    number: "06",
    title: "Professional excellence",
    description:
      "We pursue high standards across our products, service, manufacturing processes and relationships with customers and partners.",
  },
];

const commitments = [
  "Consistent product performance",
  "Responsible manufacturing practices",
  "Continuous product improvement",
  "Customer and installer feedback",
  "Practical construction applications",
  "Transparent product information",
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <Section className="relative overflow-hidden border-b border-border bg-background pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
          aria-hidden="true"
        >
          <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent" />
                About ADEXXA
              </div>

              <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl lg:text-7xl">
                Building confidence
                <br />
                into every{" "}
                <span className="text-accent">tile installation.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                ADEXXA is a Ugandan construction-materials brand focused on
                tile adhesive and grout solutions for the people and
                businesses shaping the built environment.
              </p>
            </div>

            <div className="border-l border-border pl-6 lg:mb-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                ADEXXA / 01
              </p>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Practical tiling materials for residential finishing,
                commercial construction, renovation and professional
                installation.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Made for Uganda
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* STORY + IMAGE */}
      <Section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-px w-7 bg-accent" />
                Our story
              </div>

              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Focused on the materials behind the finish.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-7 text-muted-foreground">
                <p>
                  ADEXXA is a Ugandan tile adhesive and grout brand serving
                  the construction and tiling industry. The business is
                  associated publicly with Lukomu Uganda Limited.
                </p>

                <p>
                  Our focus is simple: provide construction professionals,
                  installers, dealers and property owners with practical
                  tiling materials that support dependable installation
                  results.
                </p>

                <p>
                  From residential finishing to commercial construction,
                  ADEXXA is focused on delivering materials designed around
                  the demands of modern construction work.
                </p>
              </div>

              <Link
                to="/products"
                className={btn("outline", "md", "mt-8")}
              >
                Explore our products
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -right-3 -top-3 h-full w-full border border-accent/20" />

              <img
                src={manufacturingImg}
                alt="Interior of a powder mortar manufacturing plant with silos and stacked bags"
                loading="lazy"
                width={1536}
                height={1024}
                className="relative aspect-[4/3] w-full object-cover"
              />

              <div className="absolute bottom-5 left-5 border border-white/10 bg-ink/90 px-5 py-4 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                  Local manufacturing
                </p>

                <p className="mt-1 text-xs text-white/70">
                  {site.manufacturing.area}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MANUFACTURING STATEMENT */}
      <Section
        tone="ink"
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 hairline-grid opacity-30"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center border border-accent/30 bg-accent/10">
                <Factory className="h-7 w-7 text-accent" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Local manufacturing
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-ink-foreground sm:text-4xl lg:text-5xl">
                Built locally.
                <br />
                <span className="text-accent">Focused on real projects.</span>
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
                ADEXXA products are manufactured locally in Uganda. The
                manufacturing operation is publicly associated with{" "}
                {site.manufacturing.area}. This local foundation allows the
                brand to serve the Ugandan construction market while
                developing products around the realities of projects carried
                out in the region.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* MISSION + VISION */}
      <Section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Mission */}
            <div className="group border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg sm:p-10">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center bg-ink text-ink-foreground">
                  <Target className="h-6 w-6" />
                </div>

                <span className="text-xs font-bold tracking-[0.18em] text-muted-foreground/40 group-hover:text-accent">
                  01
                </span>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Our Mission
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                Making quality tiling solutions more accessible.
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                To develop and deliver reliable tile adhesive and grout
                solutions that combine performance, consistency and practical
                value — while supporting contractors, installers, dealers,
                developers and homeowners in achieving better tiling results.
              </p>
            </div>

            {/* Vision */}
            <div className="group border border-border bg-muted p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg sm:p-10">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center bg-accent text-accent-foreground">
                  <Lightbulb className="h-6 w-6" />
                </div>

                <span className="text-xs font-bold tracking-[0.18em] text-muted-foreground/40 group-hover:text-accent">
                  02
                </span>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Our Vision
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                A trusted name in modern construction materials.
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                To become a trusted East African construction-materials brand
                recognised for dependable tiling solutions, continuous
                product improvement and a strong commitment to the people
                building our communities.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* VALUES */}
      <Section
        tone="ink"
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 hairline-grid opacity-30"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Our values
            </div>

            <h2 className="font-display text-3xl font-semibold text-ink-foreground sm:text-4xl">
              The standards behind the ADEXXA name.
            </h2>

            <p className="mt-5 text-sm leading-7 text-ink-muted sm:text-base">
              Our values guide how we develop products, serve customers and
              build relationships across the construction industry.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink-border sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group relative bg-ink p-7 transition-colors duration-300 hover:bg-ink/90"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />

                    <span className="text-[10px] font-bold tracking-[0.18em] text-ink-muted/40">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-lg font-semibold text-ink-foreground">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-ink-muted">
                    {value.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* QUALITY */}
      <Section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-px w-7 bg-accent" />
                Quality commitment
              </div>

              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Quality is a process,
                <br />
                not a promise.
              </h2>

              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Our approach is grounded in practical construction
                requirements and responsible product development.
              </p>
            </div>

            <div>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                At ADEXXA, our commitment to quality begins with understanding
                what a tiling project requires and continues through product
                development, manufacturing and customer feedback.
              </p>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                We aim for consistency in our materials and continually work
                to improve product performance, manufacturing practices and
                customer experience.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {commitments.map((item) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3 border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 border-l-2 border-accent bg-muted/40 p-5">
                <ShieldCheck
                  className="mt-0.5 h-6 w-6 shrink-0 text-accent"
                  aria-hidden="true"
                />

                <p className="text-sm leading-6 text-muted-foreground">
                  We publish product and certification information only when
                  it has been officially confirmed, helping customers make
                  informed decisions based on accurate information.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL BRAND STATEMENT */}
      <Section
        tone="muted"
        className="relative overflow-hidden py-16 sm:py-20"
      >
        <Container>
          <div className="border border-border bg-card p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  ADEXXA / The next step
                </p>

                <h2 className="mt-4 max-w-3xl font-display text-2xl font-semibold sm:text-3xl lg:text-4xl">
                  Better materials for better tiling work.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Explore our product range or speak directly with ADEXXA
                  about your next tiling or construction project.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
                  Contact ADEXXA
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
