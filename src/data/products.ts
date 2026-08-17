/**
 * PRODUCT CATALOGUE
 * ---------------------------------------------------------------
 * Content here follows the official ADEXXA flyer. Only information
 * present on the flyer is stated. Anything unknown uses PLACEHOLDER,
 * which the UI renders as a clearly labelled placeholder.
 */

import extraBondImg from "@/assets/product-extra-bond-red-20kg.jpg";
import tileAdhesiveImg from "@/assets/product-tile-adhesive-green-20kg.jpg";
import tileGroutImg from "@/assets/product-tile-grout-blue.jpg";

export const PLACEHOLDER = "__PLACEHOLDER__";

export type CategoryId = "extra-bond" | "tile-adhesives" | "grout";

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  /** e.g. "20 kg" — use PLACEHOLDER when unknown */
  packaging: string;
  /** all sizes available, as printed on the flyer */
  sizes: string[];
  /** packaging colour from the flyer */
  packagingColour: string;
  /** e.g. "Heavy duty tile adhesive" */
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
    id: "extra-bond",
    name: "Extra Bond",
    blurb: "The heavy-duty tile adhesive in the ADEXXA range, supplied in 20 kg red packaging.",
  },
  {
    id: "tile-adhesives",
    name: "Tile Adhesive",
    blurb: "The standard ADEXXA tile adhesive, supplied in 20 kg green packaging.",
  },
  {
    id: "grout",
    name: "Tile Grout",
    blurb: "ADEXXA tile grout for filling tile joints, available in 1 kg and 5 kg blue packaging.",
  },
];

export const products: Product[] = [
  {
    slug: "adexxa-extra-bond-20kg",
    name: "ADEXXA Extra Bond",
    category: "extra-bond",
    packaging: "20 kg",
    sizes: ["20 kg"],
    packagingColour: "Red",
    type: "Heavy duty tile adhesive",
    image: extraBondImg,
    imageIsPlaceholder: false,
    shortDescription:
      "The heavy-duty tile adhesive in the ADEXXA range, supplied in a 20 kg red pack.",
    overview:
      "ADEXXA Extra Bond is presented on the official ADEXXA flyer as the heavy-duty tile adhesive in the range. It is supplied in 20 kg red packaging and is packed and manufactured by ADEXXA International Ltd.",
    keyFeatures: ["Heavy duty tile adhesive", "20 kg pack", "Red packaging"],
    applications: ["Tile fixing where a heavy-duty adhesive is required"],
    technical: [
      { label: "Product type", value: "Heavy duty tile adhesive" },
      { label: "Packaging", value: "20 kg" },
      { label: "Packaging colour", value: "Red" },
      { label: "Coverage", value: PLACEHOLDER },
      { label: "Mixing ratio", value: PLACEHOLDER },
      { label: "Shelf life & storage", value: PLACEHOLDER },
    ],
    applicationGuidance: PLACEHOLDER,
  },
  {
    slug: "adexxa-tile-adhesive-20kg",
    name: "ADEXXA Tile Adhesive",
    category: "tile-adhesives",
    packaging: "20 kg",
    sizes: ["20 kg"],
    packagingColour: "Green",
    type: "Normal adhesive",
    image: tileAdhesiveImg,
    imageIsPlaceholder: false,
    shortDescription:
      "The standard ADEXXA tile adhesive for everyday tiling work, supplied in a 20 kg green pack.",
    overview:
      "ADEXXA Tile Adhesive is presented on the official ADEXXA flyer as the standard (normal) tile adhesive in the range. It is supplied in 20 kg green packaging and is packed and manufactured by ADEXXA International Ltd.",
    keyFeatures: ["Normal adhesive", "20 kg pack", "Green packaging"],
    applications: ["Standard tile fixing work"],
    technical: [
      { label: "Product type", value: "Normal tile adhesive" },
      { label: "Packaging", value: "20 kg" },
      { label: "Packaging colour", value: "Green" },
      { label: "Coverage", value: PLACEHOLDER },
      { label: "Mixing ratio", value: PLACEHOLDER },
      { label: "Shelf life & storage", value: PLACEHOLDER },
    ],
    applicationGuidance: PLACEHOLDER,
  },
  {
    slug: "adexxa-tile-grout",
    name: "ADEXXA Tile Grout",
    category: "grout",
    packaging: "1 kg & 5 kg",
    sizes: ["1 kg", "5 kg"],
    packagingColour: "Blue",
    type: "Tile grout",
    image: tileGroutImg,
    imageIsPlaceholder: false,
    shortDescription:
      "ADEXXA tile grout for filling tile joints, available in 1 kg and 5 kg blue packs.",
    overview:
      "ADEXXA Tile Grout is presented on the official ADEXXA flyer as the grout product in the range. It is available in 1 kg and 5 kg blue packaging and is packed and manufactured by ADEXXA International Ltd.",
    keyFeatures: ["Tile grout", "Available in 1 kg and 5 kg", "Blue packaging"],
    applications: ["Filling tile joints in tiling projects"],
    technical: [
      { label: "Product type", value: "Tile grout" },
      { label: "Packaging", value: "1 kg and 5 kg" },
      { label: "Packaging colour", value: "Blue" },
      { label: "Colours available", value: PLACEHOLDER },
      { label: "Joint width range", value: PLACEHOLDER },
      { label: "Coverage", value: PLACEHOLDER },
      { label: "Shelf life & storage", value: PLACEHOLDER },
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
  "ADEXXA Extra Bond — 20 kg",
  "ADEXXA Tile Adhesive — 20 kg",
  "ADEXXA Tile Grout — 1 kg",
  "ADEXXA Tile Grout — 5 kg",
  "Other / General Enquiry",
];
