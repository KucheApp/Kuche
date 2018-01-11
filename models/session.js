const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user");

const sessionSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  expires: Date,
  key: String
});

const Session = mongoose.model("Session", itemSchema);

module.exports = Session;
