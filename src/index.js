import { app } from "./app.js";
import connectDB from "./db/dbConnection.js";
import dotenv from "dotenv";

// config the dotenv file

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;
// called the connect db method

connectDB().then(() => {
  app.on("error", (err) => {
    console.log("server error", err);
  });
  app.listen(port, () => {
    console.log(
      `server is running on port ${port} and its link is  http://localhost:${port}`
    );
  });
});
