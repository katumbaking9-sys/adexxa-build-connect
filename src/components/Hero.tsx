import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-tiling.jpg";
import { Container } from "@/components/Section";
import { btn } from "@/lib/ui";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Tiler spreading cement-based tile adhesive with a notched trowel before laying floor tiles"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

      <Container className="relative py-28 sm:py-36 lg:py-44">
        <div className="max-w-3xl reveal">
          <p className="eyebrow text-accent">Manufactured in Uganda</p>
          <h1 className="mt-5 text-4xl leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            ADEXXA supplies tile adhesive and grout products for construction and tiling projects — made for
            contractors, fundis, hardware dealers and developers across Uganda.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/products/" className={btn("accent", "lg")}>
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className={btn("onDark", "lg")}>
              Contact ADEXXA
            </Link>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-ink-border">
        <Container className="grid divide-ink-border sm:grid-cols-3 sm:divide-x">
          {[
            { k: "Product range", v: "Tile adhesive, grout & Extra Bond" },
            { k: "Manufacturing", v: `${site.manufacturing.area}` },
            { k: "Serving", v: "Contractors, fundis, hardware & developers" },
          ].map((item) => (
            <div key={item.k} className="px-0 py-6 sm:px-8 sm:first:pl-0">
              <p className="eyebrow text-accent">{item.k}</p>
              <p className="mt-2 text-sm text-ink-muted">{item.v}</p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
