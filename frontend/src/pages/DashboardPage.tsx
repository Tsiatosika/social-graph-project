import React from "react";
import { GraphView } from "../components/GraphView";
import { MetricsCards } from "../components/MetricsCards";

export function DashboardPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Social Graph Analysis</h2>
      <MetricsCards />
      <GraphView />
    </div>
  );
}
