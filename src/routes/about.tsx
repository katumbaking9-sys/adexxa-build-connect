import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Factory,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { site } from "@/data/site";
import manufacturingImg from "@/assets/manufacturing.jpg";

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
    title: "Quality without compromise",
    description:
      "We place product consistency, dependable performance and responsible manufacturing at the centre of what we do.",
  },
  {
    icon: Users,
    title: "Customer focused",
    description:
      "We listen to contractors, installers, dealers, developers and homeowners to understand the practical demands of real projects.",
  },
  {
    icon: Lightbulb,
    title: "Continuous improvement",
    description:
      "We believe better construction materials come from learning, testing, refining processes and continuously improving performance.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We aim to build lasting relationships through transparency, accountability and honest communication.",
  },
  {
    icon: Factory,
    title: "Local impact",
    description:
      "We are committed to developing locally manufactured construction solutions that contribute to Uganda's growing building sector.",
  },
  {
    icon: Award,
    title: "Professional excellence",
    description:
      "We pursue high standards across our products, service, manufacturing processes and relationships with customers and partners.",
  },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="border-b border-border pb-14 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="About ADEXXA"
            title="Building confidence into every tile installation"
            description="ADEXXA is a Ugandan construction-materials brand focused on tile adhesive and grout solutions for the people and businesses shaping the built environment."
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              From residential finishing to commercial construction,
              ADEXXA is focused on delivering practical tiling materials
              designed around the demands of modern construction work.
            </p>
          </div>
        </Container>
      </Section>

      {/* Our Story + Manufacturing */}
      <Section>
        <Container className="grid items-start gap-14 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="accent-rule font-display text-2xl">
                Our Story
              </h2>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                ADEXXA is a Ugandan tile adhesive and grout brand serving
                the construction and tiling industry. The business is
                associated publicly with Lukomu Uganda Limited.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our focus is simple: provide construction professionals,
                installers, dealers and property owners with practical
                tiling materials that support dependable installation
                results.
              </p>
            </div>

            <div>
              <h2 className="accent-rule font-display text-2xl">
                Local Manufacturing
              </h2>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                ADEXXA products are manufactured locally in Uganda. The
                manufacturing operation is publicly associated with{" "}
                {site.manufacturing.area}. This local foundation allows the
                brand to serve the Ugandan construction market while
                developing products around the realities of projects carried
                out in the region.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={manufacturingImg}
              alt="Interior of a powder mortar manufacturing plant with silos and stacked bags"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 border border-white/20 bg-ink/90 px-4 py-3 text-xs text-white">
              <span className="block font-semibold uppercase tracking-wider">
                ADEXXA
              </span>
              <span className="mt-1 block text-white/70">
                Local manufacturing • Uganda
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section tone="muted">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center bg-ink text-ink-foreground">
                <Target className="h-7 w-7" aria-hidden="true" />
              </div>

              <p className="eyebrow mt-6 text-accent">
                Our Mission
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Making quality tiling solutions more accessible.
              </h2>
            </div>

            <div className="border-l-2 border-accent pl-6 sm:pl-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                To develop and deliver reliable tile adhesive and grout
                solutions that combine performance, consistency and practical
                value — while supporting contractors, installers, dealers,
                developers and homeowners in achieving better tiling results.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Vision */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="order-2 lg:order-1">
              <p className="text-lg leading-relaxed text-muted-foreground">
                To become a trusted East African construction-materials brand
                recognised for dependable tiling solutions, continuous
                product improvement and a strong commitment to the people
                building our communities.
              </p>
            </div>

            <div className="order-1 border border-border bg-card p-8 lg:order-2">
              <div className="inline-flex h-14 w-14 items-center justify-center bg-accent text-accent-foreground">
                <Lightbulb className="h-7 w-7" aria-hidden="true" />
              </div>

              <p className="eyebrow mt-6 text-accent">
                Our Vision
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                A trusted name in modern construction materials.
              </h2>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="ink" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 hairline-grid opacity-30"
          aria-hidden="true"
        />

        <Container className="relative">
          <SectionHeading
            tone="ink"
            eyebrow="Our Values"
            title="The standards behind the ADEXXA name"
            description="Our values guide how we develop products, serve customers and build relationships across the construction industry."
          />

          <div className="mt-12 grid gap-px bg-ink-border sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="bg-ink p-7 transition-colors hover:bg-ink/90"
                >
                  <Icon
                    className="h-6 w-6 text-accent"
                    aria-hidden="true"
                  />

                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-foreground">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Quality Commitment */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-accent">
                Quality Commitment
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Quality is a process, not a promise.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At ADEXXA, our commitment to quality begins with understanding
                what a tiling project requires and continues through product
                development, manufacturing and customer feedback.
              </p>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We aim for consistency in our materials and continually work
                to improve product performance, manufacturing practices and
                customer experience. Our approach is grounded in practical
                construction requirements and responsible product development.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Consistent product performance",
                  "Responsible manufacturing practices",
                  "Continuous product improvement",
                  "Customer and installer feedback",
                  "Practical construction applications",
                  "Transparent product information",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-border bg-card p-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-medium text-foreground">
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

                <p className="text-sm leading-relaxed text-muted-foreground">
                  We publish product and certification information only when
                  it has been officially confirmed, helping customers make
                  informed decisions based on accurate information.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Commitment Banner */}
      <Section tone="muted">
        <Container>
          <div className="border border-border bg-card p-8 sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow text-accent">
                  ADEXXA
                </p>

                <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  Better materials for better tiling work.
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Explore our product range or speak with ADEXXA about your
                  next tiling or construction project.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground">
                <Factory className="h-5 w-5 text-accent" />
                Manufactured in Uganda
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
