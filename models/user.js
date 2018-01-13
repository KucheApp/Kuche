const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = require("./item");
const Session = require("./session");

const userSchema = new Schema({
  username: {type: String, unique: true},
  salt: String,
  hashedPassword: String,
  displayName: String,
  items: [{type: mongoose.Schema.Types.ObjectId, ref: "Item"}],
  session: {type: mongoose.Schema.Types.ObjectId, ref: "Session"}
});

userSchema.pre("remove", function(next) {
  Item.remove({owner: this._id}).exec();
  Session.remove({user: this._id}).exec();
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
