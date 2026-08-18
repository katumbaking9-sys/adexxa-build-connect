import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/Logo";
import { Container } from "@/components/Section";
import { btn } from "@/lib/ui";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/applications", label: "Applications" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* -----------------------------------------------------------
     Scroll effect
  ----------------------------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -----------------------------------------------------------
     Lock body scroll while mobile menu is open
  ----------------------------------------------------------- */
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* -----------------------------------------------------------
     Close mobile menu when resizing to desktop
  ----------------------------------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-border/80 bg-background/90 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between gap-6 transition-all duration-500",
          scrolled ? "h-20" : "h-28",
        )}
      >
        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          aria-label="ADEXXA home"
        >
          <Logo />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{
                exact: link.to === "/",
              }}
              activeProps={{
                className:
                  "text-foreground after:scale-x-100",
              }}
              className={cn(
                "group relative py-2",
                "font-display text-xs font-semibold uppercase tracking-widest",
                "text-muted-foreground",
                "transition-colors duration-300",
                "hover:text-foreground",
                "after:absolute after:inset-x-0 after:-bottom-0.5",
                "after:h-0.5 after:origin-left after:scale-x-0",
                "after:bg-accent after:transition-transform after:duration-300",
                "hover:after:scale-x-100",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* =====================================================
            DESKTOP CTA
        ====================================================== */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={cn(
              btn("accent", "md"),
              "transition-transform duration-300 hover:-translate-y-0.5",
            )}
          >
            Enquire Now
          </Link>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "relative grid h-11 w-11 place-items-center",
            "border border-input text-foreground",
            "transition-all duration-300",
            "hover:border-accent hover:bg-accent/5",
            "lg:hidden",
          )}
        >
          <Menu
            className={cn(
              "absolute h-5 w-5 transition-all duration-300",
              open
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100",
            )}
          />

          <X
            className={cn(
              "absolute h-5 w-5 transition-all duration-300",
              open
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0",
            )}
          />
        </button>
      </Container>

      {/* =======================================================
          MOBILE MENU
      ======================================================== */}
      <div
        id="mobile-navigation"
        className={cn(
          "grid overflow-hidden border-t border-border bg-background lg:hidden",
          "transition-[grid-template-rows,opacity] duration-500 ease-out",
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <Container className="flex flex-col py-5">
            {/* Mobile links */}
            <nav
              className="flex flex-col"
              aria-label="Mobile navigation"
            >
              {links.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{
                    exact: link.to === "/",
                  }}
                  activeProps={{
                    className:
                      "text-foreground border-l-accent bg-accent/[0.04]",
                  }}
                  className={cn(
                    "group border-l-2 border-l-transparent",
                    "px-4 py-4",
                    "font-display text-sm font-semibold uppercase tracking-widest",
                    "text-muted-foreground",
                    "transition-all duration-300",
                    "hover:border-l-accent hover:bg-accent/[0.03]",
                    "hover:pl-5 hover:text-foreground",
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0",
                  )}
                  style={{
                    transitionDelay: open
                      ? `${index * 55 + 80}ms`
                      : "0ms",
                  }}
                >
                  <span className="flex items-center justify-between">
                    {link.label}

                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-5" />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={cn(
                btn("accent", "lg", "mt-5 w-full"),
                "transition-all duration-500",
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0",
              )}
              style={{
                transitionDelay: open ? "350ms" : "0ms",
              }}
            >
              Enquire Now
            </Link>
          </Container>
        </div>
      </div>
    </header>
  );
}
