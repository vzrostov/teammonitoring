import styles from "./Header.module.css";

interface HeaderProps {
  userName: string;
  onShowRuntimeOrder: () => void;
}

export function Header({ userName, onShowRuntimeOrder }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.eyebrow}>Operations</p>
        <h1 className={styles.title}>Team Monitoring</h1>
      </div>

      <div className={styles.actions}>
        <button className={styles.runtimeButton} type="button" onClick={onShowRuntimeOrder}>
          Runtime check
        </button>
        <div className={styles.user}>
          <span className={styles.onlineDot} aria-hidden="true" />
          <span>{userName}</span>
        </div>
      </div>
    </header>
  );
}
