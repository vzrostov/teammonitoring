import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { StatusCard } from "./components/StatusCard/StatusCard";
import { loadOverview, printEventLoopOrder, type OverviewData } from "./data/overview";
import styles from "./App.module.css";

export function App() {
  const [overview, setOverview] = useState<OverviewData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function initialize() {
      try {
        const data = await loadOverview();

        if (active) {
          setOverview(data);
        }
      } catch (error) {
        if (active) {
          setErrorMessage(error instanceof Error ? error.message : "Overview could not be loaded");
        }
      }
    }

    void initialize();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className={styles.appShell}>
      <Header userName="Mr X" onShowRuntimeOrder={printEventLoopOrder} />

      <div className={styles.workspace}>
        <Sidebar />

        <main className={styles.content} id="dashboard">
          <section className={styles.hero}>
            <div>
              <p className={styles.eyebrow}>Dashboard</p>
              <h2>Operational overview</h2>
              <p>Current status across equipment, events, and critical conditions.</p>
            </div>
            <span className={styles.environmentBadge}>Production</span>
          </section>

          {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}

          {!overview ? (
            <p className={styles.loading}>Loading operational data…</p>
          ) : (
            <>
              <section className={styles.summaryGrid} aria-label="Operational summary">
                {overview.summary.map((item) => (
                  <StatusCard key={item.id} label={item.label} value={item.value} detail={item.detail} />
                ))}
              </section>

              <section className={styles.eventsSection} id="events">
                <div className={styles.sectionHeading}>
                  <div>
                    <p className={styles.eyebrow}>Activity</p>
                    <h3>Recent events</h3>
                  </div>
                  <button className={styles.secondaryButton} type="button">
                    View all
                  </button>
                </div>

                <div className={styles.eventList}>
                  {overview.recentEvents.map(({ id, title, source, time, status }) => (
                    <article className={styles.eventRow} key={id}>
                      <div>
                        <strong>{title}</strong>
                        <p>{source}</p>
                      </div>
                      <div className={styles.eventMeta}>
                        <span className={styles.status}>{status}</span>
                        <time>{time}</time>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
