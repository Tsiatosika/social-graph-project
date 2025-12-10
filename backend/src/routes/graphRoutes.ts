import { Router } from "express";
import { getGraph, getGraphMetrics } from "../controllers/graphController";

const router = Router();

router.get("/", getGraph);
router.get("/metrics", getGraphMetrics);

export default router;
