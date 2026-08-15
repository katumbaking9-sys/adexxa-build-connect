import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { site, whatsappLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="font-display text-xl font-semibold">
              {site.name}
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              {site.shortDescription}
            </p>

            <p className="mt-4 text-sm font-medium">
              {site.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <nav className="mt-4 flex flex-col gap-3 text-sm text-ink-muted">
              <Link
                to="/"
                className="transition-colors hover:text-accent"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="transition-colors hover:text-accent"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="transition-colors hover:text-accent"
              >
                About ADEXXA
              </Link>

              <Link
                to="/contact"
                className="transition-colors hover:text-accent"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact</h3>

            <div className="mt-4 space-y-4 text-sm text-ink-muted">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-3 transition-colors hover:text-accent"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+256 703 839388</span>
              </a>

              <a
                href="tel:+256703839388"
                className="flex items-start gap-3 transition-colors hover:text-accent"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Office: +256 703 839388</span>
              </a>

              <a
                href="tel:+256703839248"
                className="flex items-start gap-3 transition-colors hover:text-accent"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Factory: +256 703 839248</span>
              </a>

              <a
                href="mailto:Adexxainternationaltd@gmail.com"
                className="flex items-start gap-3 break-all transition-colors hover:text-accent"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Adexxainternationaltd@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div>
            <h3 className="font-semibold">Visit ADEXXA</h3>

            <div className="mt-4 space-y-4 text-sm text-ink-muted">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Naggalama, along Kayunga Road,
                  <br />
                  Uganda
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Monday – Saturday
                  <br />
                  8:00 AM – 5:00 PM
                </span>
              </div>
            </div>

            <a
              href={whatsappLink(
                "Hello ADEXXA, I would like to make an enquiry."
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 border border-accent bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col gap-3 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>

            <p>
              {site.legalAssociation}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
