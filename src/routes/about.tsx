```tsx
import { createFileRoute } from "@tanstack/react-router";
import { Container, Section, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { site } from "@/data/site";
import manufacturingImg from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ADEXXA — Smarter Construction Solutions" },
      {
        name: "description",
        content:
          "Discover ADEXXA's mission, vision, values and commitment to quality in modern construction solutions.",
      },
      {
        property: "og:title",
        content: "About ADEXXA — Smarter Construction Solutions",
      },
      {
        property: "og:description",
        content:
          "ADEXXA develops dependable construction solutions designed around performance, innovation and the needs of modern builders.",
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
      "We design for the real world. Our products are developed to deliver dependable performance from application to finished project.",
  },
  {
    number: "02",
    title: "Quality Without Compromise",
    description:
      "Quality is not simply a marketing claim. It is built into our materials, processes, testing and attention to detail.",
  },
  {
    number: "03",
    title: "Innovation With Purpose",
    description:
      "We embrace science, technology and new ideas when they create meaningful value for the people who build and use our products.",
  },
  {
    number: "04",
    title: "Customer Intelligence",
    description:
      "We listen, learn and improve. Every customer interaction helps us understand construction better and create better solutions.",
  },
  {
    number: "05",
    title: "Reliability",
    description:
      "Builders depend on materials they can trust. We work to make ADEXXA a dependable choice, project after project.",
  },
  {
    number: "06",
    title: "Continuous Improvement",
    description:
      "Construction is evolving, and so are we. We continuously challenge our products, processes and thinking to become better.",
  },
  {
    number: "07",
    title: "Responsibility",
    description:
      "We believe the future of construction must consider people, communities, resources and the environment.",
  },
  {
    number: "08",
    title: "African Ambition",
    description:
      "We are building for Africa with global standards in mind — developing solutions that understand local conditions while competing on a global stage.",
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
            description="ADEXXA is a modern Ugandan construction-materials brand focused on dependable tile adhesives, grouts and smarter building solutions — engineered around the needs of today's builders."
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

            {/* BRAND STATEMENT */}
            <div className="border-l-2 border-primary/70 bg-muted/40 p-6 sm:p-8">
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

          <div>
            <div className="relative">
              <img
                src={manufacturingImg}
                alt="Interior of a powder mortar manufacturing plant with silos and stacked bags"
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full object-cover"
              />

              <span className="absolute bottom-3 left-3 border border-note-border bg-note px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-note-foreground">
                Placeholder image
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* MISSION + VISION */}
      <Section className="bg-muted/30">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Why ADEXXA
            </p>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Purpose built for better construction.
            </h2>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our direction is simple: develop practical construction
              technology that helps people build with greater confidence,
              consistency and efficiency.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* MISSION */}
            <div className="border border-border bg-background p-7 sm:p-9">
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
                ADEXXA develops high-performance tile adhesives, grouts and
                construction products around the real needs of modern builders,
                contractors, professionals and homeowners.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Through material science, continuous innovation, rigorous
                quality control and customer-driven thinking, we deliver
                products that perform where it matters most — on the job.
              </p>
            </div>

            {/* VISION */}
            <div className="border border-border bg-background p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Our Vision
              </p>

              <h3 className="mt-3 font-display text-2xl sm:text-3xl">
                Shaping the future of construction in Africa.
              </h3>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                To shape the future of construction in Africa by becoming a
                benchmark for intelligent, reliable and accessible building
                solutions.
              </p>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                We envision a construction industry where quality is expected,
                innovation is practical and every builder has access to products
                engineered to perform in the environments where they are used.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* VALUES */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="What drives us"
            title="Our Values"
            description="The principles behind how we develop products, serve customers and build the ADEXXA brand."
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
                construction products that provide consistent performance,
                dependable results and lasting value. Our approach is grounded
                in material science, controlled production processes, product
                evaluation and continuous improvement.
              </p>

              <p>
                We continually examine how our products perform in real
                construction environments so we can identify opportunities to
                improve formulation, consistency, usability and durability.
              </p>

              <p>
                For us, quality means more than meeting a specification. It
                means giving a contractor confidence in their material, giving
                a professional a product they can depend on and giving a
                homeowner peace of mind in the finished result.
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
```
