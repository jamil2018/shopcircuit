/* eslint-disable import/extensions */
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
// eslint-disable-next-line no-unused-vars
import colors from "colors";

import productsRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddlewares.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

// middlewares
app.use(express.json());
app.use(helmet());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server has started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
