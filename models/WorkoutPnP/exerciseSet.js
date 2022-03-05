let mongoose = require("mongoose");
const { MONGO_CONFIGURATION } = require("../../Config");
let exerciseSetSchema = require("../../schemas/WorkoutPnP/exerciseSet");
mongoose.connect(MONGO_CONFIGURATION, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("connected with mongodb");
  }
});

let ExerciseSet_Model = mongoose.model("ExerciseSet", exerciseSetSchema);

module.exports = ExerciseSet_Model;
