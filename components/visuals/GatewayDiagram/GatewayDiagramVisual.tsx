import GatewayDiagram from "./GatewayDiagram";
import { Asset } from "@/lib/assets";

const DEFAULT_TARGETS = [
  { label: "GPT‑4o", tooltip: "OpenAI GPT-4o" },
  { label: "Claude", active: true, tooltip: "Anthropic Claude" },
  { label: "Gemini", tooltip: "Google Gemini" },
  { label: "Llama", tooltip: "Meta Llama" },
];

export default function GatewayDiagramVisual({ content }: { content: Asset }) {
  const cfg = content?.gatewayConfig;
  return (
    <GatewayDiagram
      source={cfg?.source}
      sourceTooltip={cfg?.sourceTooltip ?? "Incoming Request"}
      gatewayLabel={cfg?.gatewayLabel}
      gatewaySubtitle={cfg?.gatewaySubtitle}
      gatewayTooltip={cfg?.gatewayTooltip ?? "Routes to best model"}
      targets={cfg?.targets ?? DEFAULT_TARGETS}
    />
  );
}
