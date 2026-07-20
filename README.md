# Trends & Innovation — AI Asset Catalog

AI infrastructure catalog built with Next.js 14 (App Router) + TypeScript.
Each component lives in its own folder alongside its `*.module.scss`. `app/globals.scss`
only contains what is truly global: reset, design variables (tokens), and the base background.

## How to run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Structure

```text
app/
  layout.tsx          → loads the 3 fonts (Space Grotesk, Inter, JetBrains Mono) via next/font
  page.tsx             → assembles Nav + Hero + Catalog + Footer
  page.module.scss     → styles for the .shell container
  globals.scss         → ONLY global styles: reset, color tokens, body background

components/
  Nav/
    Nav.tsx
    Nav.module.scss
  Hero/
    Hero.tsx
    Hero.module.scss
  Footer/
    Footer.tsx
    Footer.module.scss
  Catalog/
    Catalog.tsx          → "use client" — active filter + selected asset
    Catalog.module.scss  → filter bar + bento grid container
  AssetCard/
    AssetCard.tsx        → a bento grid card (receives an Asset as a prop)
    AssetCard.module.scss
  DetailPanel/
    DetailPanel.tsx      → side panel that opens when clicking a card
    DetailPanel.module.scss
  visuals/                → one micro-visualization per asset, each in its own folder
    index.ts              → asset.id → visual component map
    GatewayDiagram/
      GatewayDiagram.tsx
      GatewayDiagram.module.scss
    RagPipeline/...
    PiiRedact/...
    EvalBars/...
    PromptStack/...
    StarterTerminal/...
    ReviewDiff/...

shared/                   → components reused by more than one component
  Tag/
    Tag.tsx               → tag chip (used in AssetCard and DetailPanel)
    Tag.module.scss
  Badge/
    Badge.tsx             → status badge with blue/green/amber variants
    Badge.module.scss
  CardId/
    CardId.tsx            → mono label for the catalog code (GTW-01, RAG-02...)
    CardId.module.scss

lib/
  assets.ts               → single source of truth: copy, tags, tech stack, metrics
                              and grid position for each of the 7 assets
```

## Why it's structured this way

- **One component, one folder.** The `.tsx` and its `.module.scss` live together — when deleting or moving a component, you take its style with it, leaving no loose traces in a global CSS file.
- **`globals.scss` is just the foundation.** Reset, tokens (`--blue`, `--green`, `--amber`, etc.), and the body background. No specific component has styles there.
- **`shared/` is for what repeats.** `Tag`, `Badge`, and `CardId` appear in both `AssetCard` and `DetailPanel`; instead of duplicating CSS, they are their own components that both import.
- **The grid position no longer lives in CSS.** Each asset brings its own `gridArea` in `lib/assets.ts` (`colStart`, `colEnd`, `rowStart`, `rowEnd`), and `AssetCard` applies it as an inline style. This way, adding or reordering assets doesn't require touching any `.scss` files.

## Adding a new asset

1. Add an object to the `assets` array in `lib/assets.ts`, including its `gridArea`.
2. Create its folder in `components/visuals/<Name>/` with `<Name>.tsx` + `<Name>.module.scss`, and register it in `components/visuals/index.ts`.
3. If the asset should be the featured one in the grid (like `LLM Unified Gateway` today), set `featured: true` in its `lib/assets.ts` entry.

## Notes

- The grid is CSS Grid (`grid-template-columns: repeat(4, 1fr)`), defined in `Catalog.module.scss`. The position of each card arrives via inline `style` from its data.
- Responsive: Below 900px, the grid switches to 2 columns (the cards recover their natural position) and the detail panel takes up 100% of the width.