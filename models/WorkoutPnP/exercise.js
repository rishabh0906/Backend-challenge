let mongoose = require("mongoose");
const { MONGO_CONFIGURATION } = require("../../Config");
let exerciseSchema = require("../../schemas/WorkoutPnP/exercise");
mongoose.connect(MONGO_CONFIGURATION, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("connected with mongodb");
  }
});

let Exercise_Model = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise_Model;
