import { ComponentType } from "react";
import GatewayDiagram from "./GatewayDiagram/GatewayDiagram";
import RagPipeline from "./RagPipeline/RagPipeline";
import PiiRedact from "./PiiRedact/PiiRedact";
import EvalBars from "./EvalBars/EvalBars";
import PromptStack from "./PromptStack/PromptStack";
import StarterTerminal from "./StarterTerminal/StarterTerminal";
import ReviewDiff from "./ReviewDiff/ReviewDiff";

export const visualsByAssetId: Record<string, ComponentType> = {
  gateway: GatewayDiagram,
  rag: RagPipeline,
  pii: PiiRedact,
  eval: EvalBars,
  prompts: PromptStack,
  starter: StarterTerminal,
  review: ReviewDiff,
};
