import { Request, Response } from "express";
import { buildGraph, computeBasicMetrics } from "../services/graphService";

export async function getGraph(req: Request, res: Response) {
  const graph = await buildGraph();
  res.json(graph);
}

export async function getGraphMetrics(req: Request, res: Response) {
  const metrics = await computeBasicMetrics();
  res.json(metrics);
}
