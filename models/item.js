const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./user");

const itemSchema = new Schema({
  name: String,
  category: String,
  quantityAmount: Number,
  quantityUnits: String,
  purchased: {type: Date, default: Date.now},
  expiration: Date,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
