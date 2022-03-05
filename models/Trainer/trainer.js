let mongoose = require("mongoose");
const { MONGO_CONFIGURATION } = require("../../Config");
let trainerSchema = require("../../schemas/Trainer/trainer");
mongoose.connect(MONGO_CONFIGURATION, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("connected with mongodb");
  }
});

let Trainer_Model = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer_Model;
