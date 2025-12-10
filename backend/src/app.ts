// src/app.ts
import express from "express";
import cors from "cors";
import graphRoutes from "./routes/graphRoutes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/graph", graphRoutes);

export default app;
