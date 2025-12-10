const API_URL = "http://localhost:5000/api";

export async function fetchGraph() {
  const res = await fetch(`${API_URL}/graph`);
  return res.json();
}

export async function fetchGraphMetrics() {
  const res = await fetch(`${API_URL}/graph/metrics`);
  return res.json();
}
