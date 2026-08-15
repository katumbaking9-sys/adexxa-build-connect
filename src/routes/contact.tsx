import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { PlaceholderValue } from "@/components/Placeholder";
import { site, whatsappLink } from "@/data/site";
import { btn } from "@/lib/ui";

type ContactSearch = { product?: string | undefined };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => {
    const p = search["product"];
    return typeof p === "string" ? { product: p } : {};
  },
  head: () => ({
    meta: [
      { title: "Contact ADEXXA — Tile Adhesive & Grout Enquiries Uganda" },
      {
        name: "description",
        content:
          "Send an enquiry to ADEXXA about tile adhesive, grout or the Extra Bond range. Contact details for the Ugandan manufacturer of tile installation materials.",
      },
      { property: "og:title", content: "Contact ADEXXA — Tile Adhesive & Grout Enquiries Uganda" },
      {
        property: "og:description",
        content: "Enquire about ADEXXA tile adhesive and grout products in Uganda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { product } = Route.useSearch();

  return (
    <>
      <Section className="border-b border-border pb-14 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Enquire about ADEXXA products"
            description="Tell us about your project and the products you are interested in. Contact channels below use clearly marked placeholders until official business details are supplied."
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="accent-rule font-display text-2xl">Send an enquiry</h2>
            <ContactForm {...(product ? { defaultProduct: product } : {})} />
          </div>

          <aside className="space-y-8">
            <div className="border border-border bg-card p-6">
              <h2 className="font-display text-lg">Contact details</h2>
              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">WhatsApp</span>
                    <PlaceholderValue label={site.contact.whatsapp.label} className="mt-1.5" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">Phone</span>
                    <PlaceholderValue label={site.contact.phone.label} className="mt-1.5" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">Email</span>
                    <PlaceholderValue label={site.contact.email.label} className="mt-1.5" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">Location</span>
                    <span className="block text-muted-foreground">
                      {site.manufacturing.area}, {site.manufacturing.country}
                    </span>
                    <PlaceholderValue label={site.contact.location.label} className="mt-1.5" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">Working hours</span>
                    <PlaceholderValue label="Hours to be confirmed" className="mt-1.5" />
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                All contact information is managed in one place: src/data/site.ts
              </p>
            </div>

            <div className="border border-border bg-ink p-6 text-ink-foreground">
              <h2 className="font-display text-lg">Chat on WhatsApp</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Quick questions about products, packaging or availability. The link currently uses a placeholder
                number.
              </p>
              <a
                href={whatsappLink("Hello ADEXXA, I would like to make an enquiry.")}
                target="_blank"
                rel="noreferrer noopener"
                className={btn("accent", "md", "mt-5 w-full")}
              >
                <MessageCircle className="h-4 w-4" /> Open WhatsApp
              </a>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
