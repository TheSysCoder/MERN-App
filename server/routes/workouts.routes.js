// all workout routes
import express from "express";

const router = express.Router();

// import controller
import {
  createWorkout,
  getWorkout,
  getsingleWorkout,
} from "../controllers/workout.controller.js";

// get all workouts
router.get("/", getWorkout);

// get single workouts
router.get("/:id", getsingleWorkout);

// post workout
router.post("/", createWorkout);

// Patch workout
router.patch("/:id", (req, res, next) => {
  res.json({
    message: "Patch workout",
  });
});

// Delete workout
router.delete("/:id", (req, res, next) => {
  res.json({ message: "Delete workout" });
});
export default router;
