import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Check,
  HardHat,
  Home,
  Layers,
  MessageCircle,
  PaintRoller,
  Ruler,
  Wrench,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { site, whatsappLink } from "@/data/site";
import { btn } from "@/lib/ui";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications — Tile Installation Uses | ADEXXA Uganda" },
      {
        name: "description",
        content:
          "Common tiling and construction applications for ADEXXA tile adhesive and grout: floor tiling, wall tiling, residential and commercial construction, renovation and interior tiling.",
      },
      {
        property: "og:title",
        content: "Applications — Tile Installation Uses | ADEXXA Uganda",
      },
      {
        property: "og:description",
        content:
          "Where ADEXXA tile adhesive and grout products are used across construction and tiling projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/applications" },
    ],
    links: [{ rel: "canonical", href: "/applications" }],
  }),

  component: ApplicationsPage,
});

const applications = [
  {
    icon: Layers,
    number: "01",
    title: "Floor tiling",
    short: "Solid foundations for finished spaces.",
    description:
      "Tiling works carried out on floor surfaces during construction and finishing.",
  },
  {
    icon: PaintRoller,
    number: "02",
    title: "Wall tiling",
    short: "Clean finishes from floor to ceiling.",
    description:
      "Tiling works carried out on wall surfaces as part of interior finishing.",
  },
  {
    icon: Home,
    number: "03",
    title: "Residential construction",
    short: "For homes built to be lived in.",
    description:
      "Houses, apartments and residential units where tiling forms part of the works.",
  },
  {
    icon: Building2,
    number: "04",
    title: "Commercial construction",
    short: "Built for demanding project environments.",
    description:
      "Commercial buildings and fit-out projects that include tiling works.",
  },
  {
    icon: Wrench,
    number: "05",
    title: "Renovation projects",
    short: "Refresh existing spaces.",
    description:
      "Refurbishment and re-tiling of existing buildings and interiors.",
  },
  {
    icon: Ruler,
    number: "06",
    title: "Interior tiling",
    short: "Designed around finished interiors.",
    description:
      "Indoor tiling work across horizontal and vertical surfaces.",
  },
  {
    icon: HardHat,
    number: "07",
    title: "Tile installation",
    short: "For the people doing the work.",
    description:
      "General tile installation carried out by professional installers and fundis.",
  },
];

function ApplicationsPage() {
  return (
    <>
      {/* HERO */}
      <Section className="relative overflow-hidden border-b border-border bg-background pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
          aria-hidden="true"
        >
          <div className="absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent" />
                Applications
              </div>

              <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                Built for the places{" "}
                <span className="text-accent">people build.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Explore the common construction, renovation and tiling
                situations where tile adhesive and grout are required.
              </p>
            </div>

            <div className="border-l border-border pl-6 lg:mb-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                ADEXXA / Applications
              </p>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                From residential interiors to commercial construction,
                ADEXXA provides a focused range of materials for tiling work.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Uganda
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* APPLICATION GRID */}
      <Section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-px w-6 bg-accent" />
                Explore
              </div>

              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Applications at a glance
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              These are general application categories. Always check the
              individual product page for confirmed suitability.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application) => (
              <article
                key={application.title}
                className="group relative min-h-[280px] overflow-hidden border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
              >
                {/* Number */}
                <span className="absolute right-6 top-6 text-xs font-bold tracking-[0.18em] text-muted-foreground/30 transition-colors duration-300 group-hover:text-accent/60">
                  {application.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-background transition-all duration-300 group-hover:border-accent group-hover:bg-accent/5">
                  <application.icon
                    className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-8 font-display text-xl font-semibold">
                  {application.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-foreground/80">
                  {application.short}
                </p>

                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  {application.description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>

          {/* NOTE */}
          <div className="mt-10 border border-border bg-muted/50 p-6 sm:p-7">
            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Check className="h-4 w-4 text-accent" />
              </div>

              <div>
                <h3 className="text-sm font-semibold">
                  Product suitability matters
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  These descriptions are general. Always check each product
                  page for the applications confirmed for that specific
                  product, and contact ADEXXA if you need guidance for a
                  particular project.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* DARK STATEMENT */}
      <Section
        tone="ink"
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 hairline-grid opacity-30"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent" />
                From foundations to finishes
              </div>

              <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-ink-foreground sm:text-4xl lg:text-5xl">
                Whatever the project,{" "}
                <span className="text-accent">start with the right material.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-muted sm:text-base">
                ADEXXA brings together tile adhesive and grout products for
                the practical needs of construction and tiling work in Uganda.
              </p>
            </div>

            <div className="grid gap-px bg-ink-border sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Residential projects",
                "Commercial construction",
                "Renovations",
                "Professional tile installation",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-ink p-5"
                >
                  <span className="text-xs font-bold tracking-[0.18em] text-accent">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-medium text-ink-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* PRODUCT CTA */}
      <Section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/products"
              className="group border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-md sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Product catalogue
                </span>

                <ArrowRight className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Find the right ADEXXA product
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                Explore the full tile adhesive, grout and Extra Bond range.
              </p>
            </Link>

            <a
              href={whatsappLink(
                "Hello ADEXXA, I would like help choosing a product for my project."
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="group border border-border bg-muted p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-md sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  <MessageCircle className="h-4 w-4" />
                  Direct support
                </span>

                <ArrowRight className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              <h3 className="mt-7 font-display text-2xl font-semibold">
                Not sure what you need?
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                Contact ADEXXA directly and ask about your specific tiling
                project.
              </p>
            </a>
          </div>
        </Container>
      </Section>

      <CTASection title="Not sure which product suits your project?" />
    </>
  );
}
