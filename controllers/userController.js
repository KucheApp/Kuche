const mongoose = require("mongoose");
const models = require("../models");
const utils = require("../utils");

const User = models.User;
const Item = models.Item;

const crypto = utils.crypto;

// const userSchema = new Schema({
//   username: {type: String, unique: true},
//   salt: String,
//   hashedPassword: String,
//   displayName: String,
//   items: [{type: mongoose.Schema.Types.ObjectId, ref: "Item"}],
//   session: {type: mongoose.Schema.Types.ObjectId, ref: "Session"}
// });

module.exports = {
  add: function(username, plaintextPassword, displayName) {
    let user = new User({
      username: username,
      salt: "",
      hashedPassword: crypto.hash(plaintextPassword),
      displayName: displayName
    });
    // TODO: create token
    return Promise.resolve();
  },
  verify: function(username, plaintextPassword) {
    // TODO: verify token instead of credentials
    let hashedPassword = crypto.hash(plaintextPassword);
    return User.find({username: username})
    .then((err, found) => {
      if (err != undefined) throw err;
      if (found === undefined) {
        throw new Error("username not found");
      }
      if (found.hashedPassword !== hashedPassword) {
        throw new Error("incorrect password");
      }
    })
  },
  get: function(sessionKey) {
    // TODO
    return Promise.resolve();
  },
  update: function(oldValues, newValues) {
    // TODO
    return Promise.resolve();
  },
  delete: function(username, password) {
    // TODO
    return Promise.resolve();
  },
  newSession: function(username, password) {
    // TODO
    return Promise.resolve();
  }
}
