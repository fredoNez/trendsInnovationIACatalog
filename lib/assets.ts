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
};

export const assets: Asset[] = [
  // {
  //   id: "gateway",
  //   code: "GTW-01",
  //   category: "infra",
  //   colorClass: "blue",
  //   badgeText: "v3.1.0 · Production",
  //   title: "LLM Unified Gateway",
  //   shortDesc:
  //     "Enruta cada solicitud a GPT, Claude, Gemini o Llama a través de un único endpoint, con failover automático y control de costos por equipo.",
  //   longDesc:
  //     "Punto único de entrada para todos los proveedores de modelos. Enruta cada llamada según latencia, costo o disponibilidad, hace retry automático ante rate limits y aplica failover a un proveedor secundario sin cambios en el código del cliente. Incluye logging estructurado y métricas por equipo, modelo y endpoint.",
  //   tags: ["LiteLLM", "FastAPI", "Redis", "Kubernetes"],
  //   stack: ["LiteLLM", "FastAPI", "Redis", "Kubernetes", "PostgreSQL", "Grafana"],
  //   metrics: [
  //     { label: "REQUESTS_DÍA", value: "1.2M" },
  //     { label: "LATENCIA_P50", value: "180ms" },
  //     { label: "PROVEEDORES", value: "6" },
  //     { label: "AHORRO_COSTO", value: "31%" },
  //   ],
  //   gridArea: { colStart: 1, colEnd: 3, rowStart: 1, rowEnd: 3 },
  //   featured: true,
  // },
  // {
  //   id: "rag",
  //   code: "RAG-02",
  //   category: "infra",
  //   colorClass: "blue",
  //   badgeText: "v2.4.0 · Production",
  //   title: "RAG Pipeline Component",
  //   shortDesc:
  //     "Encadena recuperación, reranking y generación en un único pipeline desplegable para respuestas verificables.",
  //   longDesc:
  //     "Componente desplegable que encadena chunking, embeddings, búsqueda vectorial, reranking y generación. Configurable por YAML, con soporte para múltiples fuentes de datos (Notion, Confluence, S3) y evaluación de relevancia integrada antes de pasar a producción.",
  //   tags: ["LangChain", "Pinecone", "Cohere Rerank"],
  //   stack: ["LangChain", "Pinecone", "Cohere Rerank", "OpenAI Embeddings", "FastAPI"],
  //   metrics: [
  //     { label: "DOCS_INDEXADOS", value: "48K" },
  //     { label: "LATENCIA_P50", value: "640ms" },
  //     { label: "RECALL@10", value: "0.91" },
  //     { label: "FUENTES", value: "5" },
  //   ],
  //   gridArea: { colStart: 3, colEnd: 5, rowStart: 1, rowEnd: 2 },
  // },
  {
    id: "pii",
    code: "PII-03",
    category: "security",
    colorClass: "green",
    badgeText: "In Development",
    title: "PII Sanitizer Service",
    shortDesc:
      "Detecta y redacta datos personales en texto antes de que lleguen a un modelo o a un log.",
    longDesc:
      "Middleware que intercepta texto antes de que llegue a un modelo o a un sistema de logging, detecta entidades sensibles (nombres, emails, teléfonos, IDs) y las redacta o tokeniza de forma reversible. Cumple con políticas internas de retención de datos y GDPR.",
    tags: ["Presidio", "spaCy", "FastAPI"],
    stack: ["Presidio", "spaCy", "FastAPI", "Redis"],
    metrics: [
      { label: "ENTIDADES_DETECTADAS", value: "14 tipos" },
      { label: "PRECISIÓN", value: "98.4%" },
      { label: "LATENCIA_P50", value: "22ms" },
      { label: "REQUESTS_DÍA", value: "640K" },
    ],
    gridArea: { colStart: 1, colEnd: 3, rowStart: 1, rowEnd: 2 },
    repositoryUrl: "#"
  },
  // {
  //   id: "eval",
  //   code: "EVL-04",
  //   category: "infra",
  //   colorClass: "blue",
  //   badgeText: "v1.0.0 · Beta",
  //   title: "Model Evaluation Framework",
  //   shortDesc: "Compara modelos contra tus propios test sets y métricas.",
  //   longDesc:
  //     "Framework para correr suites de evaluación contra cualquier modelo del Gateway. Soporta métricas automáticas (exact match, BLEU, similitud semántica) y evaluación asistida por LLM. Los resultados se versionan junto al prompt o modelo evaluado.",
  //   tags: ["Promptfoo", "Pandas"],
  //   stack: ["Promptfoo", "Pandas", "pytest", "Matplotlib"],
  //   metrics: [
  //     { label: "TEST_SETS", value: "37" },
  //     { label: "MODELOS_COMPARADOS", value: "6" },
  //     { label: "RUNS_SEMANA", value: "210" },
  //     { label: "COBERTURA", value: "Beta" },
  //   ],
  //   gridArea: { colStart: 1, colEnd: 2, rowStart: 3, rowEnd: 4 },
  // },
  // {
  //   id: "prompts",
  //   code: "PLB-05",
  //   category: "infra",
  //   colorClass: "blue",
  //   badgeText: "v4.0.1 · Production",
  //   title: "Versioned Prompt Library",
  //   shortDesc: "Versiona cada prompt como código: diffable y con rollback inmediato.",
  //   longDesc:
  //     "Repositorio central de prompts versionados como código. Cada cambio pasa por pull request, con diff legible y rollback inmediato a cualquier versión anterior. Se integra directamente con el Gateway para servir la versión activa en producción.",
  //   tags: ["Git", "YAML"],
  //   stack: ["Git", "YAML", "FastAPI", "GitHub Actions"],
  //   metrics: [
  //     { label: "PROMPTS_ACTIVOS", value: "92" },
  //     { label: "EQUIPOS", value: "9" },
  //     { label: "ROLLBACKS_MES", value: "3" },
  //     { label: "VERSIÓN", value: "v4.0.1" },
  //   ],
  //   gridArea: { colStart: 2, colEnd: 3, rowStart: 3, rowEnd: 4 },
  // },
  // {
  //   id: "starter",
  //   code: "SDK-06",
  //   category: "tooling",
  //   colorClass: "amber",
  //   badgeText: "v2.0.0 · Stable",
  //   title: "AI Project Starter Kit",
  //   shortDesc: "Scaffold de un proyecto de IA listo para producción.",
  //   longDesc:
  //     "Plantilla de proyecto que scaffoldea en un comando la estructura base de un servicio de IA: autenticación, logging estructurado, conexión al Gateway y evaluaciones preconfiguradas. Pensado para pasar de idea a primer deploy en menos de un día.",
  //   tags: ["Cookiecutter", "Docker"],
  //   stack: ["Cookiecutter", "Docker", "GitHub Actions", "FastAPI"],
  //   metrics: [
  //     { label: "PROYECTOS_CREADOS", value: "46" },
  //     { label: "TIEMPO_SETUP", value: "~12 min" },
  //     { label: "PLANTILLAS", value: "4" },
  //     { label: "VERSIÓN", value: "v2.0.0" },
  //   ],
  //   gridArea: { colStart: 3, colEnd: 4, rowStart: 3, rowEnd: 4 },
  // },
  // {
  //   id: "review",
  //   code: "CRA-07",
  //   category: "tooling",
  //   colorClass: "amber",
  //   badgeText: "v0.9.0 · Beta",
  //   title: "AI Code Review Assistant",
  //   shortDesc: "Revisa pull requests y marca cambios riesgosos antes del merge.",
  //   longDesc:
  //     "Bot que se ejecuta en cada pull request, analiza el diff con ayuda de un modelo del Gateway y señala riesgos comunes: manejo de errores faltante, cambios de seguridad sin test, o breaking changes no documentados. Comenta directamente en la PR.",
  //   tags: ["GitHub Actions", "tree-sitter"],
  //   stack: ["GitHub Actions", "tree-sitter", "OpenAI API"],
  //   metrics: [
  //     { label: "PRs_REVISADOS_MES", value: "310" },
  //     { label: "FALSOS_POSITIVOS", value: "8%" },
  //     { label: "REPOS_CONECTADOS", value: "14" },
  //     { label: "VERSIÓN", value: "v0.9.0" },
  //   ],
  //   gridArea: { colStart: 4, colEnd: 5, rowStart: 3, rowEnd: 4 },
  // },
];
