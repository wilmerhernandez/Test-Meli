import express from "express";
import RouterControllers from "./app/controllers/controller";
const apps = express();

apps.use("/items", RouterControllers);

apps.listen(2022, () => console.info("listen meli"));
