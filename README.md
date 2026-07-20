# Trends & Innovation — AI Asset Catalog

Catálogo de infraestructura de IA construido con Next.js 14 (App Router) + TypeScript.
Cada componente vive en su propia carpeta junto a su `*.module.scss`. `app/globals.scss`
solo contiene lo verdaderamente global: reset, variables de diseño (tokens) y el fondo base.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

```
app/
  layout.tsx          → carga las 3 fuentes (Space Grotesk, Inter, JetBrains Mono) vía next/font
  page.tsx             → arma Nav + Hero + Catalog + Footer
  page.module.scss     → estilos del contenedor `.shell`
  globals.scss         → SOLO estilos globales: reset, tokens de color, fondo de body

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
    Catalog.tsx          → "use client" — filtro activo + asset seleccionado
    Catalog.module.scss  → barra de filtros + contenedor del bento grid
  AssetCard/
    AssetCard.tsx        → una tarjeta del bento grid (recibe un Asset como prop)
    AssetCard.module.scss
  DetailPanel/
    DetailPanel.tsx      → panel lateral que se abre al hacer click en una tarjeta
    DetailPanel.module.scss
  visuals/                → una micro-visualización por asset, cada una en su carpeta
    index.ts              → mapa asset.id → componente visual
    GatewayDiagram/
      GatewayDiagram.tsx
      GatewayDiagram.module.scss
    RagPipeline/...
    PiiRedact/...
    EvalBars/...
    PromptStack/...
    StarterTerminal/...
    ReviewDiff/...

shared/                   → componentes reutilizados por más de un componente
  Tag/
    Tag.tsx               → chip de tag (usado en AssetCard y DetailPanel)
    Tag.module.scss
  Badge/
    Badge.tsx             → badge de estado con variantes blue/green/amber
    Badge.module.scss
  CardId/
    CardId.tsx            → etiqueta mono del código de catálogo (GTW-01, RAG-02...)
    CardId.module.scss

lib/
  assets.ts               → única fuente de verdad: copys, tags, stack técnico, métricas
                             y posición en el grid de cada uno de los 7 assets
```

## Por qué está dividido así

- **Un componente, una carpeta.** El `.tsx` y su `.module.scss` viven juntos — al borrar o
  mover un componente, te llevas su estilo con él, sin rastros sueltos en un CSS global.
- **`globals.scss` es solo fundamento.** Reset, tokens (`--blue`, `--green`, `--amber`, etc.)
  y el fondo del body. Ningún componente específico tiene estilos ahí.
- **`shared/` es para lo que se repite.** `Tag`, `Badge` y `CardId` aparecen tanto en
  `AssetCard` como en `DetailPanel`; en vez de duplicar CSS, son componentes propios que
  ambos importan.
- **La posición en el grid ya no vive en CSS.** Cada asset trae su propio `gridArea` en
  `lib/assets.ts` (`colStart`, `colEnd`, `rowStart`, `rowEnd`) y `AssetCard` lo aplica como
  estilo inline. Así, agregar o reordenar assets no requiere tocar ningún archivo `.scss`.

## Añadir un asset nuevo

1. Agrega un objeto al array `assets` en `lib/assets.ts`, incluyendo su `gridArea`.
2. Crea su carpeta en `components/visuals/<Nombre>/` con `<Nombre>.tsx` +
   `<Nombre>.module.scss`, y regístrala en `components/visuals/index.ts`.
3. Si el asset debe ser el destacado del grid (como hoy `LLM Unified Gateway`), marca
   `featured: true` en su entrada de `lib/assets.ts`.

## Notas

- El grid es CSS Grid (`grid-template-columns: repeat(4, 1fr)`), definido en
  `Catalog.module.scss`. La posición de cada card llega vía `style` inline desde sus datos.
- Responsive: por debajo de 900px el grid pasa a 2 columnas (las cards recuperan su
  posición natural) y el panel de detalle ocupa el 100% del ancho.
