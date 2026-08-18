import { createFileRoute } from "@tanstack/react-router";
import { Container, Section, SectionHeading } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { PlaceholderBlock } from "@/components/Placeholder";
import { site } from "@/data/site";
import manufacturingImg from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ADEXXA — Tile Adhesive Manufacturer in Uganda" },
      {
        name: "description",
        content:
          "ADEXXA is a Ugandan manufacturer of tile adhesive and grout, associated with Lukomu Uganda Limited, with a manufacturing operation in Naggalama along Kayunga Road.",
      },
      {
        property: "og:title",
        content: "About ADEXXA — Tile Adhesive Manufacturer in Uganda",
      },
      {
        property: "og:description",
        content:
          "A locally manufactured Ugandan construction-materials brand for tiling projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section className="border-b border-border pb-14 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="About ADEXXA"
            title="A Ugandan construction-materials brand"
            description="ADEXXA manufactures tile adhesive and grout products for the construction and tiling market in Uganda. The business is associated publicly with Lukomu Uganda Limited."
          />
        </Container>
      </Section>

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

              <div className="mt-4">
                <PlaceholderBlock title="Company history — editable">
                  Founding year, milestones and the full company story will be
                  added once supplied.
                </PlaceholderBlock>
              </div>
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

            <div>
              <h2 className="accent-rule font-display text-2xl">
                Quality Commitment
              </h2>

              <PlaceholderBlock title="Quality statement — editable">
                Quality control processes, testing standards and any
                certifications will be published here once officially
                confirmed. No quality claims are made until then.
              </PlaceholderBlock>
            </div>
          </div>

          <div className="space-y-10">
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

            <div>
              <h2 className="accent-rule font-display text-2xl">
                Our Mission
              </h2>

              <PlaceholderBlock title="Mission statement — editable">
                Add the official ADEXXA mission statement here.
              </PlaceholderBlock>
            </div>

            <div>
              <h2 className="accent-rule font-display text-2xl">
                Our Vision
              </h2>

              <PlaceholderBlock title="Vision statement — editable">
                Add the official ADEXXA vision statement here.
              </PlaceholderBlock>
            </div>

            <div>
              <h2 className="accent-rule font-display text-2xl">
                Our Values
              </h2>

              <PlaceholderBlock title="Company values — editable">
                Add the official ADEXXA values here.
              </PlaceholderBlock>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
