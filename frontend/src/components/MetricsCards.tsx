import React, { useEffect, useState } from "react";
import { fetchGraphMetrics } from "../services/api";

type Metrics = {
  nodeCount: number;
  edgeCount: number;
  degreeDistribution: Record<string, number>;
};

export function MetricsCards() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    fetchGraphMetrics().then((data: Metrics) => {
      setMetrics(data);
    });
  }, []);

  if (!metrics) {
    return <div>Loading metrics...</div>;
  }

  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <div
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          backgroundColor: "#222",
          color: "white",
        }}
      >
        <h3>Nodes</h3>
        <p>{metrics.nodeCount}</p>
      </div>
      <div
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          backgroundColor: "#222",
          color: "white",
        }}
      >
        <h3>Edges</h3>
        <p>{metrics.edgeCount}</p>
      </div>
    </div>
  );
}
