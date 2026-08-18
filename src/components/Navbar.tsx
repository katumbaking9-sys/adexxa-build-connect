import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Section";
import { btn } from "@/lib/ui";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/applications", label: "Applications" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
      <Container className="flex h-20 items-center justify-between gap-6 sm:h-24">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group shrink-0"
          aria-label="ADEXXA home"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex xl:gap-9"
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{
                className:
                  "text-foreground after:scale-x-100",
              }}
              className="group relative py-2 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="hidden items-center gap-2 xl:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Made in Uganda
            </span>
          </div>

          <Link
            to="/contact"
            className={btn("accent", "md")}
          >
            Enquire Now
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center border border-input bg-background text-foreground transition-all duration-200 hover:border-accent hover:bg-secondary lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-border bg-background transition-all duration-300 ease-out lg:hidden ${
          open
            ? "max-h-[520px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <Container className="py-5">
          {/* Mobile Header */}
          <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                ADEXXA
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Reliable Solutions for Better Tiling
              </p>
            </div>

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Uganda
            </span>
          </div>

          {/* Links */}
          <nav
            className="flex flex-col"
            aria-label="Mobile navigation"
          >
            {links.map((l, index) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className:
                    "text-foreground border-l-accent bg-accent/5",
                }}
                className="group flex items-center justify-between border-l-2 border-l-transparent px-4 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-all duration-200 hover:border-l-accent hover:bg-secondary hover:text-foreground"
              >
                <span>{l.label}</span>

                <span className="text-[9px] font-medium tracking-widest text-muted-foreground/40 group-hover:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className={btn("accent", "lg", "mt-5 w-full")}
          >
            Enquire Now
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Manufactured in Uganda
            </span>
          </div>
        </Container>
      </div>
    </header>
  );
}
