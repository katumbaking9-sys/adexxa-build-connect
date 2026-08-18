/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------
 * Official ADEXXA business, contact and location information.
 *
 * Keep business information here so the entire website uses
 * one consistent source of truth.
 */

export const site = {
  name: "ADEXXA",
  legalName: "ADEXXA International Ltd.",
  legalAssociation: "Lukomu Uganda Limited",

  tagline: "Reliable Solutions for Better Tiling",

  shortDescription:
    "ADEXXA manufactures tile adhesive, grout and Extra Bond products for the construction and tiling market in Uganda.",

  country: "Uganda",

  manufacturing: {
    area: "Naggalama, along Kayunga Road",
    country: "Uganda",
    note: "ADEXXA tile adhesive manufacturing operation.",
  },

  address: {
    postal: "P.O BOX 132896 BWEYOGERERE OPP. UNBS Headquarters",
    locality: "Bweyogerere",
    country: "Uganda",
  },

  locations: {
    main: {
      name: "ADEXXA",
      address: "P.O BOX 132896 BWEYOGERERE OPP. UNBS Headquarters",
    },

    factory: {
      name: "Factory",
      address: "Naggalama, along Kayunga Road, Uganda",
      phone: "+256 703 839248",
    },

    yard: {
      name: "The Yard",
      address: "7th Street, Industrial Area",
      phone: "+256 703 841 492",
    },

    shop: {
      name: "Shop AG 39",
      address: "Seroma One Stop Shopping Centre, Nakasero",
      phone: "+256 703 839622",
    },
  },

  contact: {
    whatsapp: {
      value: "256703839388",
      label: "+256 703 839388",
      isPlaceholder: false,
    },

    phone: {
      value: "+256703839388",
      label: "+256 703 839388",
      isPlaceholder: false,
    },

    factoryPhone: {
      value: "+256703839248",
      label: "+256 703 839248",
      isPlaceholder: false,
    },

    yardPhone: {
      value: "+256703841492",
      label: "+256 703 841 492",
      isPlaceholder: false,
    },

    shopPhone: {
      value: "+256703839622",
      label: "+256 703 839 622",
      isPlaceholder: false,
    },

    email: {
      value: "Adexxainternationaltd@gmail.com",
      label: "Adexxainternationaltd@gmail.com",
      isPlaceholder: false,
    },

    location: {
      value:
        "P.O BOX 132896 BWEYOGERERE OPP. UNBS Headquarters",
      label:
        "P.O BOX 132896 BWEYOGERERE OPP. UNBS Headquarters",
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
