import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/userRoute.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// setup the middle ware to get the data from the client

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(morgan("dev"));
app.use(express.static("public"));

app.use(cookieParser());

// import routes and give the server access to them

app.use("/api/v1/users", userRoutes);

export { app };
