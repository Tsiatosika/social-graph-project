import { User } from "../models/User";
import { Relation } from "../models/Relation";

export async function buildGraph() {
  const users = await User.find().lean();
  const relations = await Relation.find().lean();

  const nodes = users.map(u => ({ id: u._id.toString(), label: u.username }));
  const edges = relations.map(r => ({
    source: r.sourceUserId.toString(),
    target: r.targetUserId.toString(),
    type: r.type,
  }));

  return { nodes, edges };
}

export async function computeBasicMetrics() {
  const { nodes, edges } = await buildGraph();
  const nodeCount = nodes.length;
  const edgeCount = edges.length;

  const degree: Record<string, number> = {};
  nodes.forEach(n => (degree[n.id] = 0));
  edges.forEach(e => {
    degree[e.source] += 1;
    degree[e.target] += 1;
  });

  return {
    nodeCount,
    edgeCount,
    degreeDistribution: degree,
  };
}
