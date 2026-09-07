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

export type GatewayTarget = {
  label: string;
  active?: boolean;
  tooltip?: string;
};

export type GatewayConfig = {
  source?: string;
  sourceTooltip?: string;
  gatewayLabel?: string;
  gatewaySubtitle?: string;
  gatewayTooltip?: string;
  targets: GatewayTarget[];
};

export type Asset = {
  id: string; // used to look up the matching visual component, e.g. "gateway"
  code: string; // catalog id shown on the card, e.g. "GTW-01"
  status: string; // "live" | "inDev" | "deprecated"
  category: Category; // used for filtering and color coding
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
  gatewayConfig?: GatewayConfig;
};

export const assets: Asset[] = [
  {
    id: "pii",
    code: "Layer 2",
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
    code: "Layer 1",
    status: "live",
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
    {
    id: "authModuleApiGateway",
    code: "Layer 1",
    status: "live",
    category: "infra",
    colorClass: "green",
    badgeText: "Ready to Use",
    title: "Auth Module and API Gateway",
    shortDesc:
      "A standard Node.js/TypeScript service to handle JWT, rate limiting, and basic routing that any application will consume.",
    longDesc:
      "A standard Node.js/TypeScript service to handle JWT, rate limiting, and basic routing that any application will consume. Includes pre-configured authentication, authorization, and API gateway functionality.",
    tags: [],
    stack: ["Node.js", "TypeScript"],
    metrics: [],
    gridArea: { colStart: 3, colEnd: 5, rowStart: 2, rowEnd: 1 },
    repositoryUrl: "https://github.com/fredoNez/trendsInnovationIA/tree/main/auth-module-api-gateway",
    gatewayConfig: {
      source: "APP",
      sourceTooltip: "Incoming Request",
      gatewayLabel: "AUTH",
      gatewaySubtitle: "jwt+rate",
      gatewayTooltip: "[🛡️ JWT Validation → 🚦 Rate Limit ]",
      targets: [
        { label: "API 1", active: true, tooltip: "⚙️ Microservice" }
      ],
    },
  },

];
