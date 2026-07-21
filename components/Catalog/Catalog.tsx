"use client";

import { useMemo, useState } from "react";
import { assets, Asset, Category } from "@/lib/assets";
import AssetCard from "@/components/AssetCard/AssetCard";
import DetailPanel from "@/components/DetailPanel/DetailPanel";
import styles from "./Catalog.module.scss";

type Filter = "all" | Category;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "infra", label: "Infrastructure" },
  { key: "security", label: "Security" },
  { key: "tooling", label: "Tools" },
];

export default function Catalog() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Asset | null>(null);

  const isDimmed = useMemo(
    () => (asset: Asset) => filter !== "all" && asset.category !== filter,
    [filter]
  );

  return (
    <>
      <div className={styles.filters} id="catalog">
        <span className={styles.filterLabel}>FILTER BY</span>
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`${styles.chip}${filter === f.key ? ` ${styles.active}` : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.bento}>
        {assets.map((asset) => (
          <AssetCard
            key={asset.id}
            asset={asset}
            dimmed={isDimmed(asset)}
            onOpen={setSelected}
          />
        ))}
      </div>

      <DetailPanel asset={selected} onClose={() => setSelected(null)} />
    </>
  );
}
