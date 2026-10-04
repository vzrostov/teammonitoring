import styles from "./StatusCard.module.css";

interface StatusCardProps {
  label: string;
  value: number;
  detail: string;
}

export function StatusCard({ label, value, detail }: StatusCardProps) {
  return (
    <article className={styles.card}>
      <p className={styles.label}>{label}</p>
      <strong className={styles.value}>{value}</strong>
      <p className={styles.detail}>{detail}</p>
    </article>
  );
}
