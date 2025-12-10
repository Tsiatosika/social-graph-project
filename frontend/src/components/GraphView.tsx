import React, { useEffect, useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { fetchGraph } from "../services/api";

type Node = { id: string; label: string };
type Edge = { source: string; target: string; type: string };

export function GraphView() {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    fetchGraph().then((data: { nodes: Node[]; edges: Edge[] }) => {
      const nodes = data.nodes.map((n) => ({
        data: { id: n.id, label: n.label },
      }));
      const edges = data.edges.map((e) => ({
        data: { source: e.source, target: e.target },
      }));
      setElements([...nodes, ...edges]);
    });
  }, []);

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
      layout={{ name: "cose" }}
    />
  );
}
