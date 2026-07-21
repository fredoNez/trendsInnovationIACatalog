"use client";

import { useEffect } from "react";
import { Asset } from "@/lib/assets";
import { VisualsByAsset } from "@/components/visuals";
import Tag from "@/shared/Tag/Tag";
import Badge from "@/shared/Badge/Badge";
import CardId from "@/shared/CardId/CardId";
import styles from "./DetailPanel.module.scss";
import Link from 'next/link';

type Props = {
  asset: Asset | null;
  onClose: () => void;
};

export default function DetailPanel({ asset, onClose }: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const isOpen = asset !== null;
  const Visual = asset ? <VisualsByAsset asset={asset} /> : null;

  return (
    <>
      <div
        className={`${styles.backdrop}${isOpen ? ` ${styles.open}` : ""}`}
        onClick={onClose}
      />
      <div className={`${styles.panel}${isOpen ? ` ${styles.open}` : ""}`}>
        {asset && (
          <>
            <div className={styles.top}>
              <div>
                <CardId className={styles.idBlock}>{asset.code}</CardId>
                <h2 className={styles.title}>{asset.title}</h2>
              </div>
              <button className={styles.close} onClick={onClose}>
                CLOSE ✕
              </button>
            </div>

            <Badge color={asset.colorClass} className={styles.badgeSpacing}>
              {asset.badgeText}
            </Badge>
            <p className={styles.desc}>{asset.longDesc}</p>

            <div className={styles.sectionLabel}>Metrics</div>
            <div className={styles.metrics}>
              {asset.metrics.map((m) => (
                <div className={styles.metricBox} key={m.label}>
                  <div className={styles.metricLabel}>{m.label}</div>
                  <div className={styles.metricValue}>{m.value}</div>
                </div>
              ))}
            </div>

            <div className={styles.sectionLabel}>Technical Stack</div>
            <div className={styles.tags}>
              {asset.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className={styles.sectionLabel}>Preview</div>
            <div className={styles.visualWrap}>{Visual && <VisualsByAsset asset={asset} />}</div>
            <div className={styles.button}>
              <button className={styles.close}>
                <Link href={asset.repositoryUrl || "#"} target="_blank" rel="noopener noreferrer">
                  View Repository →
                </Link>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
