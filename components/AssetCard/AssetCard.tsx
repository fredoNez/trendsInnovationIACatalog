import { CSSProperties } from "react";
import { Asset } from "@/lib/assets";
import { VisualsByAsset } from "@/components/visuals";
import Tag from "@/shared/Tag/Tag";
import Badge from "@/shared/Badge/Badge";
import CardId from "@/shared/CardId/CardId";
import styles from "./AssetCard.module.scss";

type Props = {
  asset: Asset;
  dimmed: boolean;
  onOpen: (asset: Asset) => void;
};

export default function AssetCard({ asset, dimmed, onOpen }: Props) {

  const gridStyle: CSSProperties = {
    gridColumn: `${asset.gridArea.colStart} / ${asset.gridArea.colEnd}`,
    gridRow: `${asset.gridArea.rowStart} / ${asset.gridArea.rowEnd}`,
  };
  console.log("🚀 ~ AssetCard ~ gridStyle:", gridStyle)

  const cardClass = [
    styles.card,
    styles[asset.colorClass],
    asset.featured ? styles.featured : "",
    dimmed ? styles.dimmed : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={cardClass}
      style={gridStyle}
      data-cat={asset.category}
      onClick={() => onOpen(asset)}
    >
      <div className={styles.glow} />
      <div className={styles.top}>
        <CardId>{asset.code}</CardId>
        <Badge color={asset.colorClass}>{asset.badgeText}</Badge>
      </div>
      <h3 className={styles.title}>{asset.title}</h3>
      <p className={styles.desc}>{asset.shortDesc}</p>
      <div className={styles.tags}>
        {asset.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className={styles.visual}>
        <VisualsByAsset asset={asset} />
      </div>
      <span className={styles.openHint}>CLICK →</span>
    </article>
  );
}
