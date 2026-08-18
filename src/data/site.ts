/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------
 * Official ADEXXA contact information.
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
      value: "+256 703 839388",
      label: "+256 703 839388",
      isPlaceholder: false,
    },

    factoryPhone: {
      value: "+256 703 839248",
      label: "+256 703 839248",
      isPlaceholder: false,
    },

    email: {
      value: "Adexxainternationaltd@gmail.com",
      label: "Adexxainternationaltd@gmail.com",
      isPlaceholder: false,
    },

    location: {
  value: "P.O BOX 132896 BWEYOGERERE OPP. UNBS Headquarters",
  label: "P.O BOX 132896 BWEYOGERERE OPP. UNBS Headquarters",
  isPlaceholder: false,
},

    hours: {
      value: "8:00 AM – 5:00 PM",
      label: "8:00 AM – 5:00 PM",
      isPlaceholder: false,
    },
  },

  socials: [
    {
      name: "Facebook",
      url: "",
    },
    {
      name: "Instagram",
      url: "",
    },
    {
      name: "LinkedIn",
      url: "",
    },
    {
      name: "X",
      url: "",
    },
  ],
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp.value}`;

  return message
    ? `${base}?text=${encodeURIComponent(message)}`
    : base;
}
