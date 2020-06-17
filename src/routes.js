import { Router } from "express";
import routes from "./routes/route";

export default () => {
  const api = Router();
  api.use("/api/", routes);

  return api;
};