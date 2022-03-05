let mongoose = require("mongoose");
const { MONGO_CONFIGURATION } = require("../../Config");
let exerciseInfoSchema = require("../../schemas/Admin/exerciseInfo");
mongoose.connect(MONGO_CONFIGURATION, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("connected with mongodb");
  }
});

let Admin_Model = mongoose.model("admin", exerciseInfoSchema);

module.exports = Admin_Model;
