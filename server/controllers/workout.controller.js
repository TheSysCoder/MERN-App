// all workout controllers
import mongoose from "mongoose";
// import schema
import Workout from "../Modules/workoutes.modules.js";

// get all workouts
export const getWorkout = async (req, res, next) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// get single workouts
export const getsingleWorkout = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "No such workouts",
    });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({
      error: "No such workouts",
    });
  } else {
    res.status(200).json(workout);
  }
};

// create new workouts
export const createWorkout = async (req, res, next) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({
      title,
      reps,
      load,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
