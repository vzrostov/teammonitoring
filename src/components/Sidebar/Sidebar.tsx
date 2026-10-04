import styles from "./Sidebar.module.css";

const navigationItems = ["Dashboard", "Equipment", "Events", "Analytics"];

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav aria-label="Primary navigation">
        <ul className={styles.navigationList}>
          {navigationItems.map((item, index) => (
            <li key={item}>
              <a
                className={styles.navigationLink}
                href={`#${item.toLowerCase()}`}
                aria-current={index === 0 ? "page" : undefined}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
