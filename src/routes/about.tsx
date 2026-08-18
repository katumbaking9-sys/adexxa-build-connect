import { createFileRoute } from "@tanstack/react-router";
import { Container, Section, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { site } from "@/data/site";
import manufacturingImg from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About ADEXXA — Tile Adhesive & Grout Manufacturer in Uganda",
      },
      {
        name: "description",
        content:
          "Discover ADEXXA's mission, vision, values and commitment to quality in modern construction materials and tiling solutions.",
      },
      {
        property: "og:title",
        content:
          "About ADEXXA — Tile Adhesive & Grout Manufacturer in Uganda",
      },
      {
        property: "og:description",
        content:
          "ADEXXA develops dependable construction materials around performance, quality, innovation and the needs of modern builders.",
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
    number: "01",
    title: "Performance",
    description:
      "We develop products with real-world performance in mind, helping professionals and homeowners build with greater confidence.",
  },
  {
    number: "02",
    title: "Quality Without Compromise",
    description:
      "Quality is embedded in how we think, manufacture and improve — from materials and processes to the experience of using our products.",
  },
  {
    number: "03",
    title: "Innovation With Purpose",
    description:
      "We embrace research, technology and better ideas when they create meaningful improvements for the construction industry.",
  },
  {
    number: "04",
    title: "Customer Focus",
    description:
      "We listen to the people who build, learn from their experiences and use those insights to create more useful construction solutions.",
  },
  {
    number: "05",
    title: "Reliability",
    description:
      "Construction demands consistency. We strive to make ADEXXA a dependable choice that customers can trust project after project.",
  },
  {
    number: "06",
    title: "Continuous Improvement",
    description:
      "We never treat today's solution as the final answer. We continually evaluate, learn and improve.",
  },
  {
    number: "07",
    title: "Responsibility",
    description:
      "We recognise our responsibility to customers, communities, our people and the resources used throughout the construction value chain.",
  },
  {
    number: "08",
    title: "African Ambition",
    description:
      "We are building from Uganda with a wider African ambition — creating solutions that understand local realities while pursuing high standards.",
  },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <Section className="border-b border-border pb-14 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="About ADEXXA"
            title="Building what’s next."
            description="ADEXXA is a modern Ugandan construction-materials brand focused on dependable tile adhesives, grouts and smarter building solutions — developed around the needs of today's builders."
          />
        </Container>
      </Section>

      {/* STORY + MANUFACTURING */}
      <Section>
        <Container className="grid items-start gap-14 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="accent-rule font-display text-2xl">
                Our Story
              </h2>

              <p className="leading-relaxed text-muted-foreground">
                ADEXXA is a Ugandan tile adhesive and grout brand serving the
                construction industry. Public information identifies an ADEXXA
                tile adhesive manufacturing operation in{" "}
                {site.manufacturing.area}.
              </p>
            </div>

            <div>
              <h2 className="accent-rule font-display text-2xl">
                Local Manufacturing
              </h2>

              <p className="leading-relaxed text-muted-foreground">
                ADEXXA products are manufactured locally in Uganda. The
                manufacturing operation is publicly associated with{" "}
                {site.manufacturing.area}. {site.manufacturing.note}
              </p>
            </div>

            <div className="border-l-2 border-primary bg-muted/40 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Our Commitment
              </p>

              <h2 className="mt-3 font-display text-2xl sm:text-3xl">
                Engineering confidence into every build.
              </h2>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                We believe better construction starts with better materials —
                products developed with performance, consistency and the
                realities of modern building in mind.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={manufacturingImg}
              alt="ADEXXA manufacturing facility"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* MISSION + VISION */}
      <Section className="bg-muted/30">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Our Direction
            </p>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Purpose built for better construction.
            </h2>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              We combine practical construction knowledge, product
              development and customer insight to create solutions that help
              people build better.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* MISSION */}
            <article className="border border-border bg-background p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Our Mission
              </p>

              <h3 className="mt-3 font-display text-2xl sm:text-3xl">
                Smarter solutions. Stronger builds.
              </h3>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                To engineer smarter construction solutions that make building
                simpler, stronger and more reliable.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                We develop tile adhesives, grouts and construction materials
                around the practical needs of contractors, professionals,
                retailers and homeowners.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Through research, continuous improvement, responsible
                manufacturing and customer-driven thinking, we aim to deliver
                products that perform where it matters most — on the job.
              </p>
            </article>

            {/* VISION */}
            <article className="border border-border bg-background p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Our Vision
              </p>

              <h3 className="mt-3 font-display text-2xl sm:text-3xl">
                Shaping the future of construction in Africa.
              </h3>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                To become a trusted benchmark for intelligent, reliable and
                accessible construction solutions across Africa.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                We envision a construction industry where quality is expected,
                innovation is practical and builders have access to materials
                designed for the environments in which they work.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      {/* VALUES */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="What drives us"
            title="Our Values"
            description="The principles that guide how we develop products, serve customers and grow ADEXXA."
          />

          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.number}
                className="bg-background p-6 transition-colors hover:bg-muted/40 sm:p-7"
              >
                <span className="text-xs font-bold tracking-[0.18em] text-primary">
                  {value.number}
                </span>

                <h3 className="mt-4 font-display text-xl">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* QUALITY COMMITMENT */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-80">
                Quality Commitment
              </p>

              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Quality begins before the product reaches the job site.
              </h2>
            </div>

            <div className="space-y-5 leading-relaxed opacity-90">
              <p>
                At ADEXXA, we are committed to developing and delivering
                construction materials that provide consistent performance,
                dependable results and lasting value.
              </p>

              <p>
                Our approach is built around disciplined production,
                responsible material selection, product evaluation and
                continuous improvement.
              </p>

              <p>
                We believe quality is not simply about what a product looks
                like on the shelf. It is about how confidently it performs
                when it is being used to build something that matters.
              </p>

              <p>
                That is why we continually seek better ways to understand
                product performance, improve consistency and respond to the
                evolving needs of the construction industry.
              </p>

              <p className="pt-2 font-display text-xl">
                We don't just make construction products. We engineer
                confidence into every build.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
