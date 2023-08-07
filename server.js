import express from "express";
import "dotenv/config";
import { dbConnect } from "./config/dbConnect.js";
import dateRoutes from "./routes/dataRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { validateToken } from "./middlewares/validTokenHandler.js";

//connect db
dbConnect.authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.use("/api", userRoutes);
app.use(validateToken);
app.use("/api/data", dateRoutes);

app.use(errorHandler);

const server = app.listen(process.env.PORT || 8000, () => {
  console.log("Server Started");
});
