export type MonitoringStatus = "Online" | "Warning" | "Offline";

export interface SummaryItem {
  id: string;
  label: string;
  value: number;
  detail: string;
}

export interface RecentEvent {
  id: string;
  title: string;
  source: string;
  time: string;
  status: MonitoringStatus;
}

export interface OverviewData {
  summary: SummaryItem[];
  recentEvents: RecentEvent[];
}

const overviewData: OverviewData = {
  summary: [
    { id: "equipment", label: "Equipment", value: 128, detail: "124 reporting normally" },
    { id: "events", label: "Events", value: 37, detail: "Last 24 hours" },
    { id: "critical", label: "Critical", value: 4, detail: "Requires attention" },
  ],
  recentEvents: [
    { id: "event-1", title: "Pressure deviation detected", source: "Unit 14", time: "09:42", status: "Warning" },
    { id: "event-2", title: "Connection restored", source: "Gateway 3", time: "09:18", status: "Online" },
    { id: "event-3", title: "Heartbeat missed", source: "Unit 27", time: "08:56", status: "Offline" },
  ],
};

function createDelayedResult<T>(value: T, delayMs: number) {
  return () =>
    new Promise<T>((resolve) => {
      window.setTimeout(() => resolve(value), delayMs);
    });
}

const requestOverview = createDelayedResult(overviewData, 350);

export async function loadOverview(): Promise<OverviewData> {
  return requestOverview();
}

export function printEventLoopOrder(): void {
  console.log("A: synchronous start");

  window.setTimeout(() => {
    console.log("D: timer task");
  }, 0);

  Promise.resolve().then(() => {
    console.log("C: promise microtask");
  });

  console.log("B: synchronous end");
}
