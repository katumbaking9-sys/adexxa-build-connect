/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------
 * Official ADEXXA contact details.
 */

export const site = {
  name: "ADEXXA",
  legalAssociation: "Lukomu Uganda Limited",
  tagline: "Reliable Solutions for Better Tiling",
  shortDescription:
    "ADEXXA manufactures tile adhesive and grout products for the construction and tiling market in Uganda.",

  manufacturing: {
    area: "Naggalama, along Kayunga Road",
    country: "Uganda",
    note: "ADEXXA tile adhesive manufacturing operation.",
  },

  contact: {
    whatsapp: {
      value: "256703839388",
      label: "+256 703 839388",
      isPlaceholder: false,
    },

    phone: {
      value: "+256 703 839248",
      label: "+256 703 839248",
      isPlaceholder: false,
    },

    factory: {
      value: "+256 742 364493",
      label: "+256 742 364493",
      isPlaceholder: false,
    },

    email: {
      value: "Adexxainternationaltd@gmail.com",
      label: "Adexxainternationaltd@gmail.com",
      isPlaceholder: false,
    },

    location: {
      value: "Naggalama, along Kayunga Road, Uganda",
      label: "Naggalama, along Kayunga Road, Uganda",
      isPlaceholder: false,
    },

    hours: {
      value: "Working hours to be confirmed",
      label: "Working hours to be confirmed",
      isPlaceholder: true,
    },
  },

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
