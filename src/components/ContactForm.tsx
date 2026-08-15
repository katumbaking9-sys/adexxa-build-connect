import { useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { enquiryOptions } from "@/data/products";
import { site, whatsappLink } from "@/data/site";
import { btn } from "@/lib/ui";
import { PlaceholderValue } from "@/components/Placeholder";

const field =
  "h-12 w-full border border-input bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40";

const labelCls = "block font-display text-xs font-semibold uppercase tracking-wider text-foreground";

export function ContactForm({ defaultProduct }: { defaultProduct?: string }) {
  const [product, setProduct] = useState(
    defaultProduct && enquiryOptions.includes(defaultProduct) ? defaultProduct : enquiryOptions[0],
  );
  const [values, setValues] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const summary = [
    `Enquiry from the ADEXXA website`,
    ``,
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Product: ${product}`,
    ``,
    values.message,
  ].join("\n");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-border bg-card p-8">
        <CheckCircle2 className="h-9 w-9 text-accent" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl text-foreground">Enquiry ready to send</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Choose how you would like to send your enquiry to ADEXXA. Automated delivery will be connected once the
          official business email and WhatsApp number are supplied.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappLink(summary)}
            target="_blank"
            rel="noreferrer noopener"
            className={btn("accent", "md")}
          >
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </a>
          <a
            href={`mailto:${site.contact.email.value}?subject=${encodeURIComponent(
              `Product enquiry — ${product}`,
            )}&body=${encodeURIComponent(summary)}`}
            className={btn("outline", "md")}
          >
            Send via Email
          </a>
          <button type="button" onClick={() => setSent(false)} className={btn("ghost", "md")}>
            Edit enquiry
          </button>
        </div>
        <p className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          Contact channels currently use <PlaceholderValue label="placeholder details" /> in src/data/site.ts
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            required
            className={`${field} mt-2`}
            placeholder="Your full name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            required
            type="tel"
            className={`${field} mt-2`}
            placeholder="e.g. 07XX XXX XXX"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`${field} mt-2`}
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="product">
            Product Interested In
          </label>
          <select
            id="product"
            className={`${field} mt-2`}
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            {enquiryOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="mt-2 w-full border border-input bg-card p-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40"
            placeholder="Tell us about your project, quantities or the information you need."
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
          />
        </div>
      </div>

      <button type="submit" className={btn("primary", "lg", "mt-6 w-full sm:w-auto")}>
        <Send className="h-4 w-4" /> Submit Enquiry
      </button>
    </form>
  );
}
