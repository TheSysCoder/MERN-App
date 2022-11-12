// Entry point of node js REST api
// import all required modules here

import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

// configure dotenv
dotenv.config({
  path: "./config.env",
});

// import routes
import workoutsRoutes from "./routes/workouts.routes.js";

// create express app
const app = express();
const PORT = process.env.PORT || 3001;

// setup morgan dev
app.use(morgan("dev"));
// use json middleware
app.use(json());
// add CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "DELETE", "PUT", "POST", "PATCH"],
  })
);

// listen app
app.listen(PORT, (err) => {
  if (err) {
    console.error("Opps!! something is wrong, server is not starting");
    process.exit();
  } else {
    console.log(
      `Awesome! our express app is started on http://localhost:${PORT}`
    );
  }
});

// connect to DB

const dbURL =
  "mongodb://" +
  process.env.DB_URL +
  ":" +
  process.env.DB_PORT +
  "/" +
  process.env.DB_NAME;
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Yup!! We are now connected to the database");
  })
  .catch((err) => {
    console.error("Something is wrong could not connect to database.", err);
    process.exit();
  });

// call routes
app.use("/api/workouts", workoutsRoutes);
