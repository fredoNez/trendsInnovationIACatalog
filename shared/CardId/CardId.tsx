import styles from "./CardId.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CardId({ children, className }: Props) {
  return <span className={`${styles.cardId} ${className ?? ""}`}>{children}</span>;
}
