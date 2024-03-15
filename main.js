import express from "express";
import { apiRouter } from "./src/routes/index.js";
import { errorHandler } from "./src/middlewares/error-handler.middleware.js";
import * as config from "./src/utils/config.util.js"

const HOST = config.get("HOST") || "localhost";
const PORT = config.get("PORT") || "5000";
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/api", apiRouter);
app.use("/", (req, res) => {
  console.log("reaching here");
  res.send("Hello World");
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is up and running on ${HOST}:${PORT}`);
});
