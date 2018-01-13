const mongoose = require("mongoose");
const moment = require("moment");
const jwt = require("jwt-simple");
const models = require("../models");
const utils = require("../utils");

const User = models.User;
const Session = models.Session;

const constants = utils.constants;

const SPOOFED_TOKEN = "Spoofed token";
const EXPIRED_TOKEN = "Token has expired";

module.exports = {
  create: function(username) {
    let expires = moment().add(1, "days").valueOf();
    let token = jwt.encode({
      iss: username,
      exp: expires
    }, constants.get("JWT_SECRET"));
    // TODO: finish
  },
  verify: function(key) {
    // TODO
    return Promise.resolve();
  },
  middleware: function(req, res, next) {
    // express middleware for JSON Web Tokens
    // https://www.sitepoint.com/using-json-web-tokens-node-js/

  }
}
