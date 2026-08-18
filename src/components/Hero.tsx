import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-tiling.jpg";
import { Container } from "@/components/Section";
import { btn } from "@/lib/ui";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Hero Image */}
      <img
        src={heroImg}
        alt="Tiler spreading cement-based tile adhesive with a notched trowel before laying floor tiles"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-ink/70"
        aria-hidden="true"
      />

      {/* Main Hero Content */}
      <Container className="relative py-24 sm:py-32 lg:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow text-red-accent reveal">
            Manufactured in Uganda
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.02] text-ink-foreground sm:text-6xl lg:text-7xl reveal reveal-delay-1">
            Advanced Bonding. Reliable Performance.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl reveal reveal-delay-2">
            High-performance tile adhesive and grout formulated with improved
            bonding characteristics for ceramic, porcelain and marble tiling
            works.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 reveal reveal-delay-3">
            <Link to="/products" className={btn("accent", "lg")}>
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/contact" className={btn("onDark", "lg")}>
              Contact ADEXXA
            </Link>
          </div>
        </div>
      </Container>

      {/* Hero Information Bar */}
      <div className="relative border-t border-ink-border">
        <Container className="grid divide-ink-border sm:grid-cols-3 sm:divide-x">
          {[
            {
              k: "Product range",
              v: "Tile adhesive, grout & Extra Bond",
            },
            {
              k: "Manufacturing",
              v: `${site.manufacturing.area}`,
            },
            {
              k: "Serving",
              v: "Contractors, fundis, hardware & developers",
            },
          ].map((item) => (
            <div
              key={item.k}
              className="px-0 py-6 sm:px-8 sm:first:pl-0"
            >
              <p className="eyebrow text-accent">
                {item.k}
              </p>

              <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
                {item.v}
              </p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
