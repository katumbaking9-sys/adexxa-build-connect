import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Section";
import { PlaceholderValue } from "@/components/Placeholder";
import { site, whatsappLink } from "@/data/site";
import { categories } from "@/data/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-border bg-ink text-ink-foreground">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">{site.shortDescription}</p>
          <p className="mt-4 text-xs text-ink-muted">Associated with {site.legalAssociation}.</p>
        </div>

        <div>
          <h3 className="eyebrow text-accent">Products</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  to="/products"
                  search={{ category: c.id }}
                  className="text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="text-ink-muted transition-colors hover:text-ink-foreground">
                Full catalogue
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-accent">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/about" className="text-ink-muted transition-colors hover:text-ink-foreground">
                About ADEXXA
              </Link>
            </li>
            <li>
              <Link to="/applications" className="text-ink-muted transition-colors hover:text-ink-foreground">
                Applications
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-ink-muted transition-colors hover:text-ink-foreground">
                Contact &amp; enquiries
              </Link>
            </li>
          </ul>

          <h3 className="eyebrow mt-8 text-accent">Social</h3>
          <ul className="mt-4 flex flex-wrap gap-2 text-xs">
            {site.socials.map((s) => (
              <li key={s.name}>
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border border-ink-border px-2.5 py-1 text-ink-muted transition-colors hover:text-ink-foreground"
                  >
                    {s.name}
                  </a>
                ) : (
                  <span className="border border-dashed border-ink-border px-2.5 py-1 text-ink-muted">
                    {s.name} — link pending
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-accent">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-ink-muted">
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <a href={whatsappLink()} className="hover:text-ink-foreground">
                  WhatsApp
                </a>
                <br />
                <PlaceholderValue label="Official number pending" className="mt-1.5" />
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                Phone
                <br />
                <PlaceholderValue label="Official number pending" className="mt-1.5" />
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                Email
                <br />
                <PlaceholderValue label="Official email pending" className="mt-1.5" />
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {site.manufacturing.area}, {site.manufacturing.country}
                <br />
                <PlaceholderValue label="Full address pending" className="mt-1.5" />
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-ink-border">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} ADEXXA. All rights reserved.
          </p>
          <p>Tile adhesive and grout products manufactured in Uganda.</p>
        </Container>
      </div>
    </footer>
  );
}
