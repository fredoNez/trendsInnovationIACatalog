export type ColorClass = "blue" | "green" | "amber";
export type Category = "infra" | "security" | "tooling";

export type Metric = {
  label: string;
  value: string;
};

export type GridArea = {
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
};

export type Asset = {
  id: string; // used to look up the matching visual component, e.g. "gateway"
  code: string; // catalog id shown on the card, e.g. "GTW-01"
  status: string; // "live" | "inDev" | "deprecated"
  category: Category;
  colorClass: ColorClass;
  badgeText: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[]; // short tags shown on the card face
  stack: string[]; // full tech stack shown in the detail panel
  metrics: Metric[];
  gridArea: GridArea; // where this card sits in the bento grid
  featured?: boolean; // gets a bigger title/desc and taller visual area
  repositoryUrl?: string; // optional URL to the asset's repository
  vPIICovered?: {
    email: boolean;
    phone: boolean;
    name: boolean;
    id_number: boolean;
    address: boolean;
    credit_card: boolean;
  };
};

export const assets: Asset[] = [
  {
    id: "pii",
    code: "PII-03",
    status: "inDev",
    category: "security",
    colorClass: "blue",
    badgeText: "In Development",
    title: "PII Sanitizer Service",
    shortDesc:
      "Detect and redact personal data in text before it reaches a model or a log.",
    longDesc:
      "Middleware that intercepts text before it reaches a model or logging system, detecting sensitive entities (names, emails, phone numbers, IDs) and reversibly redacting or tokenizing them. It complies with internal data retention policies and GDPR.",
    tags: ["Presidio"],
    stack: ["Presidio"],
    metrics: [
      { label: "DETECTED_ENTITIES", value: "6 types" },
      { label: "PRECISION", value: "98.4%" },
      { label: "LATENCY_P50", value: "22ms" },
      { label: "DAILY_REQUESTS", value: "640K" },
    ],
    gridArea: { colStart: 1, colEnd: 2, rowStart: 1, rowEnd: 1 },
    repositoryUrl: "NaN",
    vPIICovered: {
      email: true,
      phone: true,
      name: true,
      id_number: true,
      address: false,
      credit_card: false,
    },
  },
  {
    id: "templateStack",
    code: "TEM-04",
    status: "inDev",
    category: "infra",
    colorClass: "green",
    badgeText: "Ready to Use",
    title: "Frontend & Backend Templates",
    shortDesc:
      "Templates for frontend and backend services, providing a starting point for building applications with best practices in mind.",
    longDesc:
      "Templates for frontend and backend services, providing a starting point for building applications with best practices in mind. Includes pre-configured routing, state management, and API integration.",
    tags: [],
    stack: [],
    metrics: [],
    gridArea: { colStart: 2, colEnd: 3, rowStart: 2, rowEnd: 1 },
    repositoryUrl: "https://github.com/fredoNez/trendsInnovationIA/tree/main/fullstackTemplates",
  },
  
];
