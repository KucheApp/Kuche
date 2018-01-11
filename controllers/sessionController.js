const mongoose = require("mongoose");
const models = require("../models");
const User = models.User;

module.exports = {
  verify: function(key) {
    // TODO
    return Promise.resolve();
  }
}
