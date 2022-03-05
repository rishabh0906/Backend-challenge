let mongoose = require("mongoose");
const { MONGO_CONFIGURATION } = require("../../Config");
let sessionSchema = require("../../schemas/WorkoutPnP/session");
mongoose.connect(MONGO_CONFIGURATION, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("connected with mongodb");
  }
});

let Session_Model = mongoose.model("Session", sessionSchema);

module.exports = Session_Model;
