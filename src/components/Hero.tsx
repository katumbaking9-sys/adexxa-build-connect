import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";
import heroImg from "@/assets/hero-tiling.jpg";
import { Container } from "@/components/Section";
import { btn } from "@/lib/ui";
import { site, whatsappLink } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-ink sm:min-h-[780px] lg:min-h-[820px]">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Tiler spreading cement-based tile adhesive with a notched trowel before laying floor tiles"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-50"
      />

      {/* Cinematic overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40"
        aria-hidden="true"
      />

      {/* Subtle brand glow */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 hairline-grid opacity-20"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[720px] items-center py-24 sm:min-h-[780px] sm:py-28 lg:min-h-[820px] lg:py-32">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_340px]">
          {/* Main content */}
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 reveal">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Manufactured in Uganda
              </p>
            </div>

            {/* Headline */}
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-semibold leading-[0.94] tracking-tight text-ink-foreground sm:text-6xl lg:text-8xl reveal reveal-delay-1">
              Advanced bonding.
              <br />
              <span className="text-accent">Reliable performance.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8 reveal reveal-delay-2">
              High-performance tile adhesive and grout formulated for
              ceramic, porcelain and marble tiling works — with a growing
              range of ADEXXA solutions for construction and finishing.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row reveal reveal-delay-3">
              <Link
                to="/products"
                className={btn("accent", "lg", "group")}
              >
                Explore products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={whatsappLink(
                  "Hello ADEXXA, I would like to make an enquiry."
                )}
                target="_blank"
                rel="noreferrer noopener"
                className={btn("onDark", "lg")}
              >
                <MessageCircle className="h-4 w-4" />
                Talk to ADEXXA
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 reveal reveal-delay-3">
              {[
                "Tile adhesive",
                "Grout",
                "Extra Bond range",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-ink-muted"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/15">
                    <Check className="h-2.5 w-2.5 text-accent" />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Floating information panel */}
          <div className="hidden lg:block reveal reveal-delay-3">
            <div className="border border-white/10 bg-black/25 p-6 backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                ADEXXA / 01
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold text-ink-foreground">
                Built for the work.
              </h2>

              <p className="mt-3 text-sm leading-6 text-ink-muted">
                A focused range of tile adhesive and grout products for
                construction and tiling projects in Uganda.
              </p>

              <div className="mt-6 h-px bg-white/10" />

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                    Manufacturing
                  </p>

                  <p className="mt-1 text-xs leading-5 text-ink-muted">
                    {site.manufacturing.area}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                    Serving
                  </p>

                  <p className="mt-1 text-xs leading-5 text-ink-muted">
                    Contractors, fundis, hardware dealers & developers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-muted sm:flex">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
          Explore
        </span>

        <ArrowDown className="h-4 w-4 animate-bounce text-accent" />
      </div>

      {/* Bottom information bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-ink/70 backdrop-blur-md">
        <Container>
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                k: "Product range",
                v: "Tile adhesive · Grout · Extra Bond",
              },
              {
                k: "Manufacturing",
                v: site.manufacturing.area,
              },
              {
                k: "Main location",
                v: "Bweyogerere · Opp. UNBS Headquarters",
              },
            ].map((item) => (
              <div
                key={item.k}
                className="px-0 py-4 sm:px-7 sm:py-5 first:sm:pl-0"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
                  {item.k}
                </p>

                <p className="mt-1 text-xs leading-5 text-ink-muted">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
