import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/Section";
import { btn } from "@/lib/ui";
import { whatsappLink } from "@/data/site";

export function CTASection({
  title = "Ready to build with ADEXXA?",
  description = "Talk to the ADEXXA team about tile adhesive, grout or the Extra Bond range for your next construction or tiling project.",
  productName,
}: {
  title?: string;
  description?: string;
  productName?: string;
}) {
  return (
    <Section
      tone="ink"
      className="group relative overflow-hidden border-t border-ink-border"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 hairline-grid opacity-30"
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl transition-transform duration-1000 group-hover:scale-110"
        aria-hidden="true"
      />

      {/* Secondary glow */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          {/* Content */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent transition-all duration-500 group-hover:w-16" />

              <p className="eyebrow text-accent">
                ADEXXA • Enquiries
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">
              {description}
            </p>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Tile adhesive",
                "Grout solutions",
                "Extra Bond range",
                "Project enquiries",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
            <Link
              to="/contact"
              search={{ product: productName }}
              className={btn(
                "accent",
                "lg",
                "group/btn min-w-[220px] justify-center",
              )}
            >
              {productName ? "Ask About This Product" : "Enquire Now"}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>

            <a
              href={whatsappLink(
                productName
                  ? `Hello ADEXXA, I would like to ask about ${productName}.`
                  : "Hello ADEXXA, I would like to make an enquiry.",
              )}
              target="_blank"
              rel="noreferrer noopener"
              className={btn(
                "onDark",
                "lg",
                "group/whatsapp min-w-[220px] justify-center",
              )}
            >
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover/whatsapp:scale-110" />

              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom brand strip */}
        <div className="mt-14 flex flex-col gap-4 border-t border-ink-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-accent" />

            <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink-muted">
              Reliable Solutions for Better Tiling
            </span>
          </div>

          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Manufactured in Uganda
          </span>
        </div>
      </Container>
    </Section>
  );
}
