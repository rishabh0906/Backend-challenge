let mongoose = require("mongoose");
const { MONGO_CONFIGURATION } = require("../../Config");
let workoutSchema = require("../../schemas/WorkoutPnP/workout");
mongoose.connect(MONGO_CONFIGURATION, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("connected with mongodb");
  }
});

let Workout_Model = mongoose.model("workout", workoutSchema);

module.exports = Workout_Model;
