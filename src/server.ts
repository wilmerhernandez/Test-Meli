import express from "express";
import RouterControllers from "./app/controllers/controller";
const apps = express();
const cors = require("cors");

apps.use("/items", RouterControllers, function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "http://localhost:3000, X-Requested-With, Content-Type, Accept"
  );
  next();
});

apps.listen(2022, () => console.info("listen meli"));
