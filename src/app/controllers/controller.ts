import { Router } from "express";
import SearchService from "../services/SearchService";
import DetailService from "../services/DetailService";

// Instance router express for services
const RouterControllers = Router();
RouterControllers.get("/", SearchService.execute);
RouterControllers.get("/:id", DetailService.execute);

export default RouterControllers;
