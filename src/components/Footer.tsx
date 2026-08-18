import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "@/components/Section";
import { site, whatsappLink } from "@/data/site";

function AILLogo() {
  return (
    <div className="flex flex-col items-start">
      <svg
        viewBox="0 0 420 190"
        className="h-16 w-auto sm:h-20"
        role="img"
        aria-label="AIL"
      >
        {/* A */}
        <path
          d="M38 150 L93 25 L148 150"
          fill="none"
          stroke="#ffffff"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M60 105 L126 105"
          fill="none"
          stroke="#ffffff"
          strokeWidth="24"
          strokeLinecap="round"
        />

        {/* Red dot */}
        <circle cx="93" cy="91" r="16" fill="#ed1c24" />

        {/* I */}
        <path
          d="M184 28 L184 150"
          fill="none"
          stroke="#3656ad"
          strokeWidth="32"
          strokeLinecap="round"
        />

        {/* L */}
        <path
          d="M245 28 L245 150 L367 150"
          fill="none"
          stroke="#ffffff"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="mt-2 text-[0.65rem] uppercase tracking-wider text-ink-muted">
        Packed &amp; Manufactured by
      </p>

      <p className="mt-1 text-sm font-bold text-ink-foreground">
        ADEXXA INTERNATIONAL LTD.
      </p>
    </div>
  );
}

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About ADEXXA" },
  { to: "/applications", label: "Applications" },
  { to: "/contact", label: "Contact" },
] as const;

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-ink-border bg-ink">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 hairline-grid opacity-20"
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Main footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.7fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <span className="font-display text-3xl font-bold tracking-tight text-ink-foreground transition-colors duration-300 group-hover:text-accent">
                ADEXXA
              </span>

              <span className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
            </Link>

            <div className="mt-5 h-px w-12 bg-accent transition-all duration-500 hover:w-20" />

            <p className="mt-6 max-w-sm text-sm leading-7 text-ink-muted">
              Reliable tile adhesive, grout and Extra Bond solutions for
              construction and tiling projects across Uganda.
            </p>

            {/* Address highlight */}
            <div className="mt-7 border-l-2 border-accent bg-white/[0.03] p-4">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-accent">
                Main Address
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-ink-foreground">
                {site.contact.location.label}
              </p>
            </div>

            {/* AIL */}
            <div className="mt-9">
              <AILLogo />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="eyebrow text-accent">
              Explore
            </p>

            <h2 className="mt-3 font-display text-lg font-semibold text-ink-foreground">
              Quick links
            </h2>

            <nav className="mt-6 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="group flex items-center gap-2 text-sm text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
                >
                  <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-accent">
              Get in touch
            </p>

            <h2 className="mt-3 font-display text-lg font-semibold text-ink-foreground">
              Contact ADEXXA
            </h2>

            <div className="mt-6 space-y-4">
              {/* WhatsApp */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-start gap-3 text-sm text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
              >
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-muted">
                    WhatsApp
                  </span>

                  <span className="mt-1 block font-medium">
                    +256 703 839388
                  </span>
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+256703839388"
                className="group flex items-start gap-3 text-sm text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
              >
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-muted">
                    Main line
                  </span>

                  <span className="mt-1 block font-medium">
                    +256 703 839388
                  </span>
                </span>
              </a>

              {/* Factory phone */}
              <a
                href="tel:+256703839248"
                className="group flex items-start gap-3 text-sm text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
              >
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
                />

                <span>
                  <span className="block text-xs uppercase tracking-wider text-ink-muted">
                    Factory
                  </span>

                  <span className="mt-1 block font-medium">
                    +256 703 839248
                  </span>
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:Adexxainternationaltd@gmail.com"
                className="group flex items-start gap-3 text-sm text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
              >
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
                />

                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-ink-muted">
                    Email
                  </span>

                  <span className="mt-1 block break-all font-medium">
                    Adexxainternationaltd@gmail.com
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <p className="eyebrow text-accent">
              Locations
            </p>

            <h2 className="mt-3 font-display text-lg font-semibold text-ink-foreground">
              Find ADEXXA
            </h2>

            <div className="mt-6 space-y-5">
              {/* Main address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

                <div className="text-sm leading-6 text-ink-muted">
                  <strong className="font-semibold text-ink-foreground">
                    Main Address
                  </strong>

                  <br />

                  {site.contact.location.label}
                </div>
              </div>

              {/* Factory */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

                <div className="text-sm leading-6 text-ink-muted">
                  <strong className="font-semibold text-ink-foreground">
                    Factory
                  </strong>

                  <br />

                  Naggalama, along Kayunga Road
                  <br />
                  Uganda
                </div>
              </div>

              {/* The Yard */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

                <div className="text-sm leading-6 text-ink-muted">
                  <strong className="font-semibold text-ink-foreground">
                    The Yard
                  </strong>

                  <br />

                  7th Street, Industrial Area
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

                <div className="text-sm leading-6 text-ink-muted">
                  <strong className="font-semibold text-ink-foreground">
                    Opening Hours
                  </strong>

                  <br />

                  Monday – Saturday
                  <br />
                  8:00 AM – 5:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="border-y border-ink-border py-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-ink-foreground">
                Have a tiling project in mind?
              </p>

              <p className="mt-1 text-xs text-ink-muted">
                Talk to ADEXXA about products, availability and project
                requirements.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-ink-foreground"
            >
              Enquire Now

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ADEXXA International Ltd. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span>Tile Adhesive</span>

            <span className="h-1 w-1 rounded-full bg-accent" />

            <span>Grout</span>

            <span className="h-1 w-1 rounded-full bg-accent" />

            <span>Extra Bond</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
