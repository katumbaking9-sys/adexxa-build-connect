import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Container, Section } from "@/components/Section";
import { btn } from "@/lib/ui";
import { whatsappLink } from "@/data/site";

export function CTASection({
  title = "Talk to ADEXXA about your project",
  description = "Send an enquiry about tile adhesive, grout or the Extra Bond range and our team will get back to you.",
  productName,
}: {
  title?: string;
  description?: string;
  productName?: string;
}) {
  return (
    <Section tone="ink" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hairline-grid opacity-40" aria-hidden="true" />
      <Container className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <p className="eyebrow text-accent">Enquiries</p>
          <h2 className="mt-3 text-3xl text-ink-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-ink-muted">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            search={productName ? { product: productName } : undefined}
            className={btn("accent", "lg")}
          >
            {productName ? "Ask About This Product" : "Enquire Now"}
          </Link>
          <a
            href={whatsappLink(
              productName
                ? `Hello ADEXXA, I would like to ask about ${productName}.`
                : "Hello ADEXXA, I would like to make an enquiry.",
            )}
            target="_blank"
            rel="noreferrer noopener"
            className={btn("onDark", "lg")}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </Container>
    </Section>
  );
}
