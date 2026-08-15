import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "@/components/Section";
import { whatsappLink } from "@/data/site";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
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
          </div>

          <div>
            <h2 className="font-display text-base font-semibold">
              Quick links
            </h2>

            <nav className="mt-4 flex flex-col gap-3 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-accent">
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

          <div>
            <h2 className="font-display text-base font-semibold">
              Contact
            </h2>

            <div className="mt-4 space-y-4 text-sm">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+256 703 839388</span>
              </a>

              <a
                href="tel:+256703839388"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+256 703 839388</span>
              </a>

              <a
                href="tel:+256703839248"
                className="flex items-start gap-3 text-muted-foreground hover:text-accent"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+256 703 839248</span>
              </a>

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

          <div>
            <h2 className="font-display text-base font-semibold">
              Visit ADEXXA
            </h2>

            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Naggalama, along Kayunga Road, Uganda</span>
              </div>

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
