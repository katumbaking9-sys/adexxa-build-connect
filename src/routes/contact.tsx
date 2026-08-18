import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
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
      {
        title: "Contact ADEXXA — Tile Adhesive & Grout Enquiries Uganda",
      },
      {
        name: "description",
        content:
          "Send an enquiry to ADEXXA about tile adhesive, grout or the Extra Bond range. Contact details for the Ugandan manufacturer of tile installation materials.",
      },
      {
        property: "og:title",
        content: "Contact ADEXXA — Tile Adhesive & Grout Enquiries Uganda",
      },
      {
        property: "og:description",
        content:
          "Enquire about ADEXXA tile adhesive and grout products in Uganda.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/contact",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/contact",
      },
    ],
  }),

  component: ContactPage,
});

function ContactPage() {
  const { product } = Route.useSearch();

  return (
    <>
      {/* HERO */}
      <Section className="relative overflow-hidden border-b border-border bg-background pb-16 pt-16 sm:pb-20 sm:pt-20">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Contact ADEXXA
            </div>

            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Let’s talk about your{" "}
              <span className="text-accent">project.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Tell us what you need, ask about our products, or speak directly
              with the ADEXXA team about tile adhesive, grout and availability
              in Uganda.
            </p>
          </div>
        </Container>
      </Section>

      {/* MAIN CONTACT AREA */}
      <Section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            {/* FORM */}
            <div className="border border-border bg-card p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  <span className="h-px w-6 bg-accent" />
                  Enquiries
                </div>

                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Send us an enquiry
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  Fill in the form below and tell us what you are looking for.
                  We’ll use the information to understand your enquiry and
                  respond accordingly.
                </p>
              </div>

              <ContactForm
                {...(product ? { defaultProduct: product } : {})}
              />
            </div>

            {/* CONTACT DETAILS */}
            <div className="space-y-6">
              <div className="border border-border bg-card p-6 sm:p-8">
                <div className="mb-7">
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    <span className="h-px w-6 bg-accent" />
                    Get in touch
                  </div>

                  <h2 className="font-display text-2xl font-semibold">
                    Contact ADEXXA
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Reach us directly through any of the official contact
                    channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background">
                      <MessageCircle
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold">WhatsApp</p>

                      <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {site.contact.whatsapp.label}
                      </a>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background">
                      <Phone
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold">Office</p>

                      <a
                        href={`tel:${site.contact.phone.value}`}
                        className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {site.contact.phone.label}
                      </a>
                    </div>
                  </div>

                  {/* Factory */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background">
                      <Phone
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold">Factory</p>

                      <a
                        href={`tel:${site.contact.factoryPhone.value}`}
                        className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {site.contact.factoryPhone.label}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background">
                      <Mail
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold">Email</p>

                      <a
                        href={`mailto:${site.contact.email.value}`}
                        className="mt-1 block break-all text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {site.contact.email.label}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WHATSAPP CTA */}
              <div className="relative overflow-hidden bg-ink p-6 text-ink-foreground sm:p-8">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-accent/20" />
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-accent/10" />

                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center border border-accent/30 bg-accent/10">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </div>

                  <h2 className="font-display text-xl font-semibold">
                    Need a quick answer?
                  </h2>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-ink-muted">
                    For quick questions about products, packaging or
                    availability, chat directly with ADEXXA on WhatsApp.
                  </p>

                  <a
                    href={whatsappLink(
                      "Hello ADEXXA, I would like to make an enquiry."
                    )}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={btn("accent", "md", "mt-6 w-full")}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* LOCATIONS */}
      <Section className="border-t border-border bg-muted/30 py-14 sm:py-20">
        <Container>
          <div className="mb-10 max-w-2xl">
            <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="h-px w-6 bg-accent" />
              Find us
            </div>

            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Our locations
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Visit or contact ADEXXA through one of our locations.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Main Location */}
            <div className="group border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <div className="flex h-10 w-10 items-center justify-center border border-border bg-background">
                <MapPin className="h-4 w-4 text-accent" />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold">
                Main Location
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {site.contact.location.label}
              </p>
            </div>

            {/* The Yard */}
            <div className="group border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <div className="flex h-10 w-10 items-center justify-center border border-border bg-background">
                <MapPin className="h-4 w-4 text-accent" />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold">
                The Yard
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                7th Street, Industrial Area
              </p>

              <a
                href="tel:+256703841492"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
              >
                +256 703 841 492
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Shop AG 39 */}
            <div className="group border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <div className="flex h-10 w-10 items-center justify-center border border-border bg-background">
                <MapPin className="h-4 w-4 text-accent" />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold">
                Shop AG 39
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Seroma One Stop Shopping Centre, Nakasero
              </p>

              <a
                href="tel:+256703839622"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
              >
                +256 703 839 622
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* WORKING HOURS */}
      <Section className="border-t border-border py-10 sm:py-12">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-card">
                <Clock className="h-4 w-4 text-accent" />
              </div>

              <div>
                <p className="text-sm font-semibold">Working hours</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Monday – Saturday · 8:00 AM – 5:00 PM
                </p>
              </div>
            </div>

            <a
              href={whatsappLink(
                "Hello ADEXXA, I would like to make an enquiry."
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
            >
              Contact us on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
