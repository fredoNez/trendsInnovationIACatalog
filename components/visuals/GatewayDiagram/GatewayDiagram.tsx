"use client";
import { useState } from "react";
import styles from "./GatewayDiagram.module.scss";

interface Target {
  label: string;
  active?: boolean;
  tooltip?: string;
}

interface GatewayDiagramProps {
  source?: string;
  sourceTooltip?: string;
  gatewayLabel?: string;
  gatewaySubtitle?: string;
  gatewayTooltip?: string;
  targets: Target[];
}

interface TooltipState {
  text: string;
  x: number;
  topY: number;
}

const SPACING = 40;
const CENTER_Y = 85;
const TARGET_X = 330;
const GATEWAY_X = 180;
const SOURCE_X = 30;
const TOP_PAD = 30;
const TOOLTIP_H = 18;
const VB_WIDTH = 400;

function tooltipWidth(text: string) {
  return Math.max(52, text.length * 6.5 + 14);
}

// Keep the tooltip rect fully inside the viewBox
function clampTip(x: number, topY: number, w: number) {
  const cx = Math.max(w / 2 + 2, Math.min(VB_WIDTH - w / 2 - 2, x));
  const ty = Math.max(-TOP_PAD + 2, topY);
  return { cx, ty };
}

export default function GatewayDiagram({
  source = "APP",
  sourceTooltip,
  gatewayLabel = "GATEWAY",
  gatewaySubtitle = "routing",
  gatewayTooltip,
  targets,
}: GatewayDiagramProps) {
  const [tip, setTip] = useState<TooltipState | null>(null);

  const show = (text: string, x: number, nodeY: number, radius: number) =>
    setTip({ text, x, topY: nodeY - radius - 8 - TOOLTIP_H });
  const hide = () => setTip(null);

  const totalSpan = (targets.length - 1) * SPACING;
  const firstY = CENTER_Y - totalSpan / 2;
  const viewBoxHeight = Math.max(170, firstY + totalSpan + 40);

  const targetPositions = targets.map((t, i) => ({
    ...t,
    y: firstY + i * SPACING,
  }));

  return (
    <svg
      className={styles.diagram}
      viewBox={`0 -${TOP_PAD} ${VB_WIDTH} ${viewBoxHeight + TOP_PAD}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* source → gateway line */}
      <line x1={SOURCE_X + 22} y1={CENTER_Y} x2={GATEWAY_X - 28} y2={CENTER_Y} className={styles.activeLine} />

      {/* gateway → target lines */}
      {targetPositions.map((t, i) => (
        <line
          key={i}
          x1={GATEWAY_X + 28}
          y1={CENTER_Y}
          x2={TARGET_X - 17}
          y2={t.y}
          className={t.active ? styles.activeLine : undefined}
        />
      ))}

      {/* source node */}
      <g
        onMouseEnter={() => sourceTooltip && show(sourceTooltip, SOURCE_X, CENTER_Y, 20)}
        onMouseLeave={hide}
        style={{ cursor: sourceTooltip ? "default" : undefined }}
      >
        <circle className={styles.node} cx={SOURCE_X} cy={CENTER_Y} r="20" />
        <text x={SOURCE_X} y={CENTER_Y + 4} textAnchor="middle">
          {source}
        </text>
      </g>

      {/* gateway hub */}
      <g
        onMouseEnter={() => gatewayTooltip && show(gatewayTooltip, GATEWAY_X, CENTER_Y, 26)}
        onMouseLeave={hide}
        style={{ cursor: gatewayTooltip ? "default" : undefined }}
      >
        <circle className={styles.hub} cx={GATEWAY_X} cy={CENTER_Y} r="26" />
        <text x={GATEWAY_X} y={CENTER_Y - 4} textAnchor="middle" fontWeight={600} fontSize="9.5">
          {gatewayLabel}
        </text>
        <text x={GATEWAY_X} y={CENTER_Y + 9} textAnchor="middle" fontSize="9" className={styles.blueText}>
          {gatewaySubtitle}
        </text>
      </g>

      {/* target nodes */}
      {targetPositions.map((t, i) => (
        <g
          key={i}
          onMouseEnter={() => t.tooltip && show(t.tooltip, TARGET_X, t.y, 15)}
          onMouseLeave={hide}
          style={{ cursor: t.tooltip ? "default" : undefined }}
        >
          <circle
            cx={TARGET_X}
            cy={t.y}
            r="15"
            className={`${styles.node} ${t.active ? styles.activeNode : ""}`}
          />
          <text
            x={TARGET_X}
            y={t.y + 4}
            textAnchor="middle"
            className={t.active ? styles.blueText : undefined}
          >
            {t.label}
          </text>
        </g>
      ))}

      {/* tooltip — rendered last so it sits on top of all nodes */}
      {tip && (() => {
        const w = tooltipWidth(tip.text);
        const { cx, ty } = clampTip(tip.x, tip.topY, w);
        return (
          <g style={{ pointerEvents: "none" }}>
            <rect
              x={cx - w / 2}
              y={ty}
              width={w}
              height={TOOLTIP_H}
              rx={3}
              className={styles.tooltipBg}
            />
            <text x={cx} y={ty + 12} textAnchor="middle" className={styles.tooltipText}>
              {tip.text}
            </text>
          </g>
        );
      })()}
    </svg>
  );
}
