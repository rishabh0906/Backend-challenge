let mongoose = require("mongoose");
const { MONGO_CONFIGURATION } = require("../../Config");
let userSchema = require("../../schemas/User/user");
mongoose.connect(MONGO_CONFIGURATION, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("connected with mongodb");
  }
});

let User_Model = mongoose.model("User", userSchema);

module.exports = User_Model;
