import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "@/components/Section";
import { whatsappLink } from "@/data/site";

function AILLogo() {
  return (
    <div className="flex flex-col items-start">
      <svg
        viewBox="0 0 420 190"
        className="h-20 w-auto"
        role="img"
        aria-label="AIL"
      >
        {/* A */}
        <path
          d="M38 150 L93 25 L148 150"
          fill="none"
          stroke="#171515"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60 105 L126 105"
          fill="none"
          stroke="#171515"
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
          stroke="#171515"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="mt-2 text-xs text-muted-foreground">
        Packed &amp; Manufactured by:
      </p>

      <p className="text-sm font-bold text-foreground">
        ADEXXA INTERNATIONAL LTD.
      </p>
    </div>
  );
}

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand + AIL Manufacturer */}
          <div>
            <Link
              to="/"
              className="font-display text-2xl font-bold tracking-tight"
            >
              ADEXXA
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Quality tile adhesive, grout and Extra Bond solutions for tile
              installation projects in Uganda.
            </p>

            <div className="mt-8">
              <AILLogo />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-display text-base font-semibold">
              Quick links
            </h2>

            <nav className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                to="/"
                className="text-muted-foreground hover:text-accent"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="text-muted-foreground hover:text-accent"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="text-muted-foreground hover:text-accent"
              >
                About ADEXXA
              </Link>

              <Link
                to="/contact"
                className="text-muted-foreground hover:text-accent"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-base font-semibold">
              Contact
            </h2>

            <div className="mt-4 space-y-4 text-sm">

              {/* WhatsApp */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+256 703 839388</span>
              </a>

              {/* Main Phone */}
              <a
                href="tel:+256703839388"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+256 703 839388</span>
              </a>

              {/* Secondary Phone */}
              <a
                href="tel:+256703839248"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+256 703 839248</span>
              </a>

              {/* The Yard */}
              <a
                href="tel:+256703841492"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  The Yard
                  <br />
                  +256 703 841 492
                </span>
              </a>

              {/* Shop AG 39 */}
              <a
                href="tel:+256703839622"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Shop AG 39
                  <br />
                  +256 703 839 622
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:Adexxainternationaltd@gmail.com"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="break-all">
                  Adexxainternationaltd@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Visit */}
          <div>
            <h2 className="font-display text-base font-semibold">
              Visit ADEXXA
            </h2>

            <div className="mt-4 space-y-5 text-sm">

              {/* Factory */}
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

                <span>
                  <strong className="font-semibold text-foreground">
                    Factory
                  </strong>
                  <br />
                  Naggalama, along Kayunga Road, Uganda
                </span>
              </div>

              {/* The Yard */}
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

                <span>
                  <strong className="font-semibold text-foreground">
                    The Yard
                  </strong>
                  <br />
                  7th Street, Industrial Area
                </span>
              </div>

              {/* Shop AG 39 */}
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

                <span>
                  <strong className="font-semibold text-foreground">
                    Shop AG 39
                  </strong>
                  <br />
                  Seroma One Stop Shopping Centre,
                  <br />
                  Nakasero
                </span>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

                <span>
                  Monday – Saturday
                  <br />
                  8:00 AM – 5:00 PM
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} ADEXXA International Ltd. All rights
              reserved.
            </p>

            <p>Tile Adhesive • Grout • Extra Bond</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
