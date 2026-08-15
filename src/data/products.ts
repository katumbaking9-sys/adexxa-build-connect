/**
 * PRODUCT CATALOGUE
 * ---------------------------------------------------------------
 * Add or edit products here — the catalogue, filters, product detail
 * pages and the enquiry dropdown all read from this file.
 *
 * Rule: only enter information that is verified. For anything unknown,
 * leave the field out or use a PLACEHOLDER string — the UI renders
 * a clearly labelled placeholder instead of inventing content.
 */

import adhesiveImg from "@/assets/product-adhesive-placeholder.jpg";
import groutWhiteImg from "@/assets/product-grout-white-placeholder.jpg";
import groutGreyImg from "@/assets/product-grout-grey-placeholder.jpg";
import genericImg from "@/assets/product-placeholder.jpg";

export const PLACEHOLDER = "__PLACEHOLDER__";

export type CategoryId = "tile-adhesives" | "grout" | "extra-bond";

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  /** e.g. "20 kg bag" — use PLACEHOLDER when unknown */
  packaging: string;
  /** e.g. "Cement-based powder mortar" */
  type: string;
  colour?: string;
  image: string;
  /** true when the image is a stand-in for official packaging photography */
  imageIsPlaceholder: boolean;
  shortDescription: string;
  overview: string;
  keyFeatures: string[];
  applications: string[];
  colours?: string[];
  /** label / value rows. Use PLACEHOLDER for unknown values. */
  technical: { label: string; value: string }[];
  applicationGuidance: string;
};

export const categories: {
  id: CategoryId;
  name: string;
  blurb: string;
}[] = [
  {
    id: "tile-adhesives",
    name: "Tile Adhesives",
    blurb: "Cement-based powder adhesives for bonding tiles and ceramic.",
  },
  {
    id: "grout",
    name: "Grout",
    blurb: "Tile joint filling products, available in white and grey.",
  },
  {
    id: "extra-bond",
    name: "Extra Bond",
    blurb:
      "An expanding range. Variants, packaging and technical data will be published once official product information is supplied.",
  },
];

export const products: Product[] = [
  {
    slug: "adexxa-tile-adhesive-20kg",
    name: "ADEXXA Tile Adhesive",
    category: "tile-adhesives",
    packaging: "20 kg",
    type: "Cement-based powder mortar",
    image: adhesiveImg,
    imageIsPlaceholder: true,
    shortDescription:
      "Cement-based, single-component powder mortar for bonding tiles and ceramic in indoor applications.",
    overview:
      "ADEXXA Tile Adhesive is publicly listed as a cement-based, single-component powder mortar used for bonding tiles and ceramic. It is described as suitable for indoor applications, on horizontal and vertical surfaces.",
    keyFeatures: [
      "Cement-based",
      "Single-component",
      "Powder mortar",
      "For bonding tiles and ceramic",
      "Supplied in 20 kg",
    ],
    applications: [
      "Indoor applications",
      "Horizontal and vertical surfaces",
      "Small and medium-sized floor and wall tiles with water absorption above 3%",
    ],
    technical: [
      { label: "Product type", value: "Cement-based, single-component powder mortar" },
      { label: "Packaging", value: "20 kg" },
      { label: "Application area", value: "Indoor" },
      { label: "Surfaces", value: "Horizontal and vertical" },
      { label: "Tile suitability", value: "Small and medium-sized floor and wall tiles, water absorption above 3%" },
      { label: "Mixing ratio", value: PLACEHOLDER },
      { label: "Coverage", value: PLACEHOLDER },
      { label: "Pot life / open time", value: PLACEHOLDER },
      { label: "Shelf life & storage", value: PLACEHOLDER },
    ],
    applicationGuidance: PLACEHOLDER,
  },
  {
    slug: "adexxa-grout-white-5kg",
    name: "ADEXXA Grout — White",
    category: "grout",
    packaging: "5 kg",
    type: "Tile grout",
    colour: "White",
    image: groutWhiteImg,
    imageIsPlaceholder: true,
    shortDescription: "ADEXXA tile grout in white, listed by Ugandan retailers in a 5 kg pack.",
    overview:
      "ADEXXA Grout is part of the ADEXXA product catalogue for tile installation. Public Ugandan retail listings show it in white, 5 kg.",
    keyFeatures: ["Colour: White", "Supplied in 5 kg", "Part of the ADEXXA tile installation range"],
    applications: ["Filling tile joints in tiling projects"],
    colours: ["White", "Grey"],
    technical: [
      { label: "Packaging", value: "5 kg" },
      { label: "Colour", value: "White" },
      { label: "Composition", value: PLACEHOLDER },
      { label: "Joint width range", value: PLACEHOLDER },
      { label: "Coverage", value: PLACEHOLDER },
      { label: "Shelf life & storage", value: PLACEHOLDER },
    ],
    applicationGuidance: PLACEHOLDER,
  },
  {
    slug: "adexxa-grout-grey-5kg",
    name: "ADEXXA Grout — Grey",
    category: "grout",
    packaging: "5 kg",
    type: "Tile grout",
    colour: "Grey",
    image: groutGreyImg,
    imageIsPlaceholder: true,
    shortDescription: "ADEXXA tile grout in grey, listed by Ugandan retailers in a 5 kg pack.",
    overview:
      "ADEXXA Grout is part of the ADEXXA product catalogue for tile installation. Public Ugandan retail listings show it in grey, 5 kg.",
    keyFeatures: ["Colour: Grey", "Supplied in 5 kg", "Part of the ADEXXA tile installation range"],
    applications: ["Filling tile joints in tiling projects"],
    colours: ["White", "Grey"],
    technical: [
      { label: "Packaging", value: "5 kg" },
      { label: "Colour", value: "Grey" },
      { label: "Composition", value: PLACEHOLDER },
      { label: "Joint width range", value: PLACEHOLDER },
      { label: "Coverage", value: PLACEHOLDER },
      { label: "Shelf life & storage", value: PLACEHOLDER },
    ],
    applicationGuidance: PLACEHOLDER,
  },

  /**
   * EXTRA BOND RANGE
   * Duplicate the entry below for each official Extra Bond variant.
   * Replace every PLACEHOLDER with confirmed information only.
   */
  {
    slug: "extra-bond-variant-1",
    name: "Extra Bond — Product 1 (details pending)",
    category: "extra-bond",
    packaging: PLACEHOLDER,
    type: PLACEHOLDER,
    image: genericImg,
    imageIsPlaceholder: true,
    shortDescription:
      "Placeholder entry for the Extra Bond range. Official product name, packaging and specifications will be published once supplied.",
    overview: PLACEHOLDER,
    keyFeatures: [],
    applications: [],
    technical: [
      { label: "Product type", value: PLACEHOLDER },
      { label: "Packaging", value: PLACEHOLDER },
      { label: "Colours", value: PLACEHOLDER },
      { label: "Application area", value: PLACEHOLDER },
    ],
    applicationGuidance: PLACEHOLDER,
  },
  {
    slug: "extra-bond-variant-2",
    name: "Extra Bond — Product 2 (details pending)",
    category: "extra-bond",
    packaging: PLACEHOLDER,
    type: PLACEHOLDER,
    image: genericImg,
    imageIsPlaceholder: true,
    shortDescription:
      "Placeholder entry for the Extra Bond range. Official product name, packaging and specifications will be published once supplied.",
    overview: PLACEHOLDER,
    keyFeatures: [],
    applications: [],
    technical: [
      { label: "Product type", value: PLACEHOLDER },
      { label: "Packaging", value: PLACEHOLDER },
      { label: "Colours", value: PLACEHOLDER },
      { label: "Application area", value: PLACEHOLDER },
    ],
    applicationGuidance: PLACEHOLDER,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function categoryName(id: CategoryId) {
  return categories.find((c) => c.id === id)?.name ?? id;
}

/** Options shown in the enquiry form dropdown — easy to extend. */
export const enquiryOptions = [
  "ADEXXA Tile Adhesive",
  "ADEXXA Grout — White",
  "ADEXXA Grout — Grey",
  "Extra Bond",
  "Other / General Enquiry",
];
