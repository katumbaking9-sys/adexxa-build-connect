import { createFileRoute } from "@tanstack/react-router";
import { Building2, HardHat, Home, Layers, PaintRoller, Ruler, Wrench } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/Section";
import { ApplicationCard } from "@/components/ApplicationCard";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications — Tile Installation Uses | ADEXXA Uganda" },
      {
        name: "description",
        content:
          "Common tiling and construction applications for ADEXXA tile adhesive and grout: floor tiling, wall tiling, residential and commercial construction, renovation and interior tiling.",
      },
      { property: "og:title", content: "Applications — Tile Installation Uses | ADEXXA Uganda" },
      {
        property: "og:description",
        content: "Where ADEXXA tile adhesive and grout products are used across construction and tiling projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/applications" },
    ],
    links: [{ rel: "canonical", href: "/applications" }],
  }),
  component: ApplicationsPage,
});

const applications = [
  { icon: Layers, title: "Floor tiling", description: "Tiling works carried out on floor surfaces during construction and finishing." },
  { icon: PaintRoller, title: "Wall tiling", description: "Tiling works carried out on wall surfaces as part of interior finishing." },
  { icon: Home, title: "Residential construction", description: "Houses, apartments and residential units where tiling forms part of the works." },
  { icon: Building2, title: "Commercial construction", description: "Commercial buildings and fit-out projects that include tiling works." },
  { icon: Wrench, title: "Renovation projects", description: "Refurbishment and re-tiling of existing buildings and interiors." },
  { icon: Ruler, title: "Interior tiling", description: "Indoor tiling work across horizontal and vertical surfaces." },
  { icon: HardHat, title: "Tile installation projects", description: "General tile installation carried out by professional installers and fundis." },
];

function ApplicationsPage() {
  return (
    <>
      <Section className="border-b border-border pb-14 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Applications"
            title="Where ADEXXA products are used"
            description="A general overview of tiling and construction situations where tile adhesive and grout are required. Product-specific suitability is stated only on each product page, based on verified information."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((a) => (
              <ApplicationCard key={a.title} icon={a.icon} title={a.title} description={a.description} />
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
            Note: these descriptions are general. Always check each product page for the applications confirmed for
            that specific product, and contact ADEXXA if you need guidance for a particular project.
          </p>
        </Container>
      </Section>

      <CTASection title="Not sure which product suits your project?" />
    </>
  );
}
