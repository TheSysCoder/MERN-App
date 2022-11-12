// all workout routes
import express from "express";

const router = express.Router();

// get all workouts
router.get("/", (req, res, next) => {
  res.json({
    message: "Get all workouts",
  });
});

// get single workouts
router.get("/:id", (req, res, next) => {
  res.json({
    message: "Get a single workouts",
  });
});

// post workout
router.post("/", (req, res, next) => {
  res.json({
    message: "Post new workout",
  });
});

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
