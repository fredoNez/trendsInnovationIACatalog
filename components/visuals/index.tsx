import { ComponentType } from "react";
import GatewayDiagram from "./GatewayDiagram/GatewayDiagram";
import RagPipeline from "./RagPipeline/RagPipeline";
import PiiRedact from "./PiiRedact/PiiRedact";
import EvalBars from "./EvalBars/EvalBars";
import PromptStack from "./PromptStack/PromptStack";
import StarterTerminal from "./StarterTerminal/StarterTerminal";
import ReviewDiff from "./ReviewDiff/ReviewDiff";
import { Asset } from "@/lib/assets";
import TemplateStack from "./TemplateStack/TemplateStack";

interface VisualProps {
  content: any;
}

export const VisualsByAsset = ({asset}: {asset: Asset}) => {
  const visualsByAssetId: Record<string, ComponentType<VisualProps>> = {
  gateway: GatewayDiagram,
  rag: RagPipeline,
  pii: PiiRedact,
  eval: EvalBars,
  prompts: PromptStack,
  starter: StarterTerminal,
  review: ReviewDiff,
  templateStack: TemplateStack,
};

const VisualComponent = visualsByAssetId[asset.id];
if(!VisualComponent) {
  return null;
}
return <VisualComponent content={asset} />;
}; 
