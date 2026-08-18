/**
 * PRODUCT CATALOGUE
 * ---------------------------------------------------------------
 * Product information below is based on the official ADEXXA
 * packaging/product information supplied.
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
  packaging: string;
  sizes: string[];
  packagingColour: string;
  type: string;
  colour?: string;
  image: string;
  imageIsPlaceholder: boolean;
  shortDescription: string;
  overview: string;
  keyFeatures: string[];
  applications: string[];
  colours?: string[];
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
    blurb:
      "A fast-setting, high-strength cement-based tile adhesive supplied in 20 kg red packaging.",
  },
  {
    id: "tile-adhesives",
    name: "Tile Adhesive",
    blurb:
      "ADEXXA cement-based tile adhesive supplied in 20 kg green packaging for fixing tiles and ceramics.",
  },
  {
    id: "grout",
    name: "Tile Grout",
    blurb:
      "ADEXXA tile grout for filling tile joints, available in 1 kg and 5 kg blue packaging.",
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
    type: "Fast-setting, high-strength cement-based tile adhesive",
    image: extraBondImg,
    imageIsPlaceholder: false,

    shortDescription:
      "A fast-setting, high-strength cement-based adhesive for fixing wall and floor tiles onto rendered and screeded substrates.",

    overview:
      "ADEXXA Xtra Bond is a fast-setting cementitious adhesive with improved characteristics. It is a ready-mixed, high-strength cement-based adhesive intended for fixing wall and floor tiles onto substrates of rendering and screed. The product is manufactured and packed by ADEXXA International Ltd.",

    keyFeatures: [
      "Fast-setting cementitious adhesive",
      "High-strength cement-based adhesive",
      "Suitable for wall and floor tiling",
      "For rendered and screeded substrates",
      "20 kg packaging",
      "Red packaging",
      "Manufactured and packed by ADEXXA International Ltd.",
    ],

    applications: [
      "Wall tiling",
      "Floor tiling",
      "Fixing ceramic and floor tiles",
      "Tiling over rendered substrates",
      "Tiling over screeded substrates",
    ],

    technical: [
      {
        label: "Product type",
        value: "Fast-setting, high-strength cement-based tile adhesive",
      },
      {
        label: "Packaging",
        value: "20 kg",
      },
      {
        label: "Packaging colour",
        value: "Red",
      },
      {
        label: "Water requirement",
        value: "Approximately 5 litres of clean water per 20 kg",
      },
      {
        label: "Initial setting",
        value: "6 hours",
      },
      {
        label: "Final setting",
        value: "24 hours",
      },
      {
        label: "Correction time",
        value: "15 minutes",
      },
      {
        label: "Pot life",
        value: "30 minutes",
      },
      {
        label: "Shelf life",
        value: "9 months",
      },
      {
        label: "Floor tile coverage",
        value: "Approximately 4 m² per 20 kg bag",
      },
      {
        label: "Wall tile coverage",
        value: "Approximately 6 m² per 20 kg bag",
      },
      {
        label: "Floor adhesive bed",
        value: "Approximately 5 mm",
      },
      {
        label: "Wall adhesive bed",
        value: "Approximately 3 mm minimum",
      },
      {
        label: "Specification",
        value: "US 13007-1",
      },
      {
        label: "Storage",
        value: "Store in a cool, dry place",
      },
    ],

    applicationGuidance:
      "Empty the contents into a suitable container and slowly add approximately 5 litres of clean water. Gently mix until the mixture becomes a creamy concentrate. Do not add more water. Allow the mixture to rest as required before application and begin applying the adhesive to the prepared surface. For floor tiling, use an appropriate notched floor trowel and spread only enough adhesive to allow the area to be tiled within approximately 10 minutes. A 20 kg bag covers approximately 4 m² for floor tiling. For wall tiling, use an appropriate notched trowel and spread enough adhesive to allow the area to be tiled within approximately 10 minutes. A 20 kg bag covers approximately 6 m² for wall tiling. Allow tiles to set for approximately 24 hours before grouting.",
  },

  {
    slug: "adexxa-tile-adhesive-20kg",
    name: "ADEXXA Tile Adhesive",
    category: "tile-adhesives",
    packaging: "20 kg",
    sizes: ["20 kg"],
    packagingColour: "Green",
    type: "Cement-based tile adhesive",
    image: tileAdhesiveImg,
    imageIsPlaceholder: false,

    shortDescription:
      "Cement-based single-component powder mortar for bonding tiles and ceramics, supplied in a 20 kg green pack.",

    overview:
      "ADEXXA Tile Adhesive Cement is a cement-based single-component powder mortar used for bonding tiles and ceramics. The product is recommended for horizontal and vertical concrete surfaces and is supplied in 20 kg green packaging.",

    keyFeatures: [
      "Cement-based single-component powder mortar",
      "Suitable for tiles and ceramics",
      "Suitable for horizontal and vertical concrete surfaces",
      "Recommended consumption of 3.5–4 kg per m²",
      "20 kg packaging",
      "Green packaging",
      "Manufactured and packed by ADEXXA International Ltd.",
    ],

    applications: [
      "Floor tiling",
      "Wall tiling",
      "Fixing ceramic tiles",
      "Horizontal concrete surfaces",
      "Vertical concrete surfaces",
      "Residential tiling projects",
      "Commercial tiling projects",
    ],

    technical: [
      {
        label: "Product type",
        value: "Cement-based single-component tile adhesive mortar",
      },
      {
        label: "Packaging",
        value: "20 kg",
      },
      {
        label: "Packaging colour",
        value: "Green",
      },
      {
        label: "Recommended consumption",
        value: "3.5–4 kg per m²",
      },
      {
        label: "Mixing water",
        value: "Approximately 4.8–5.6 litres per 20 kg",
      },
      {
        label: "Mixing method",
        value: "Low-speed mixer or trowel until homogeneous",
      },
      {
        label: "Maturation time",
        value: "5–10 minutes",
      },
      {
        label: "Working time after mixing",
        value: "Approximately 2–2.5 hours",
      },
      {
        label: "Open time",
        value: "48 hours",
      },
      {
        label: "Pot life",
        value: "30 minutes",
      },
      {
        label: "Setting / maturing time",
        value: "10 minutes",
      },
      {
        label: "Shelf life",
        value: "2 years",
      },
      {
        label: "Application surfaces",
        value: "Horizontal and vertical concrete surfaces",
      },
      {
        label: "Coverage",
        value: "Up to approximately 5 m² per 20 kg bag",
      },
      {
        label: "Specification",
        value: "US 13007-1",
      },
      {
        label: "Storage",
        value: "Store in a cool, dry place",
      },
    ],

    applicationGuidance:
      "The application surface must be cured and cleaned from dust, oil, paint, curing agents and detergents such as anti-stick materials. If necessary, wet and maintain the surface moisture. If the surface is too water absorbent, apply after using primer. Mix 20 kg of ADEXXA Tile Adhesive with approximately 4.8–5.6 litres of clean water. Preferably mix with a low-speed mixer or trowel until homogeneous. Allow the prepared mortar to rest for 5–10 minutes for maturation, then re-mix before use. The mixture should be consumed within approximately 2–2.5 hours. Apply the adhesive firmly to the prepared surface to create good contact. Select an appropriate notched trowel according to tile size and spread the product. The adhesive should provide contact with at least 80% of the backside of the ceramic tile. A rubber hammer may be used to apply force and improve bonding and adhesion.",
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
      "ADEXXA Tile Grout is presented as the grout product in the ADEXXA range. It is used for filling tile joints and is available in 1 kg and 5 kg blue packaging.",

    keyFeatures: [
      "Tile grout",
      "For filling tile joints",
      "Available in 1 kg and 5 kg",
      "Blue packaging",
    ],

    applications: [
      "Filling tile joints",
      "Wall tiling projects",
      "Floor tiling projects",
    ],

    technical: [
      {
        label: "Product type",
        value: "Tile grout",
      },
      {
        label: "Packaging",
        value: "1 kg and 5 kg",
      },
      {
        label: "Packaging colour",
        value: "Blue",
      },
      {
        label: "Colours available",
        value: PLACEHOLDER,
      },
      {
        label: "Joint width range",
        value: PLACEHOLDER,
      },
      {
        label: "Coverage",
        value: PLACEHOLDER,
      },
      {
        label: "Shelf life & storage",
        value: PLACEHOLDER,
      },
    ],

    applicationGuidance:
      "Allow tiles to set before grouting. Ensure the adhesive is properly set and the tile joints are ready before applying grout.",

    colours: [],
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
