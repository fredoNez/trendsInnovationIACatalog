import { ColorClass } from "@/lib/assets";
import styles from "./Badge.module.scss";

type Props = {
  color: ColorClass;
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ color, children, className }: Props) {
  return (
    <span className={`${styles.badge} ${styles[color]} ${className ?? ""}`}>{children}</span>
  );
}
