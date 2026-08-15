/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------
 * Edit ALL company contact details in this one file.
 * Values marked `isPlaceholder: true` are NOT verified and are shown
 * on the site with a "placeholder" label until official details are supplied.
 */

export const site = {
  name: "ADEXXA",
  legalAssociation: "Lukomu Uganda Limited",
  tagline: "Reliable Solutions for Better Tiling",
  shortDescription:
    "ADEXXA manufactures tile adhesive and grout products for the construction and tiling market in Uganda.",

  /** Manufacturing operation — publicly reported area, not a full postal address. */
  manufacturing: {
    area: "Naggalama, along Kayunga Road",
    country: "Uganda",
    note: "Publicly reported location of the ADEXXA tile adhesive manufacturing operation. Full physical address to be confirmed.",
  },

  contact: {
    /** REPLACE with the official WhatsApp number in international format, e.g. "256700000000" */
    whatsapp: { value: "256700000000", label: "WhatsApp number to be confirmed", isPlaceholder: true },
    /** REPLACE with the official phone number */
    phone: { value: "+256 700 000 000", label: "Phone number to be confirmed", isPlaceholder: true },
    /** REPLACE with the official email address */
    email: { value: "info@example.com", label: "Email address to be confirmed", isPlaceholder: true },
    /** REPLACE with the official location / directions text */
    location: {
      value: "Naggalama, along Kayunga Road, Uganda",
      label: "Full physical address to be confirmed",
      isPlaceholder: true,
    },
    /** REPLACE with the official working hours */
    hours: { value: "Working hours to be confirmed", label: "", isPlaceholder: true },
  },

  /** Social profiles — add official URLs here; empty url renders as a placeholder. */
  socials: [
    { name: "Facebook", url: "" },
    { name: "Instagram", url: "" },
    { name: "LinkedIn", url: "" },
    { name: "X", url: "" },
  ],
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp.value}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
