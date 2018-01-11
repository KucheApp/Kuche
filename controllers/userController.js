const mongoose = require("mongoose");
const models = require("../models");
const User = models.User;
const Item = models.Item;

module.exports = {
  add: function(username, plaintextPassword, displayName) {
    // TODO
    return Promise.resolve();
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
