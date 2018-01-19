var cu = require("./crypto_utils");
var models = require("../models");
var User = models.User;
var Garment = models.Garment;

function getUser(email) {
  var emailHash = cu.hashSync(email);
  return User.findOne({where: {email: emailHash}})
}

function verifyUser(email, password) {
  return getUser(email)
    .then(function(user) {
      if (user === null) throw new Error("email not registered");
      return cu.hashPassword(password, user.dataValues.salt)
        .then(function(passToCheck) {
          if (passToCheck === user.dataValues.password) return user;
          return null;
        })
    })
}

module.exports = {
  create: function(email, password, username) {
    var hashEmail = cu.hashSync(email);
    var salt = cu.newSaltSync(email);
    var makePassword = cu.hashPassword(password, salt);
    var encryptUsername = cu.encrypt(username, salt);
    return Promise.all([hashEmail, salt, makePassword, encryptUsername])
      .then(function(values) {
        return User.create({
          email:    values[0],
          salt:     values[1],
          password: values[2],
          username: values[3]
        })
      })
  },

  get: getUser,
  verify: verifyUser,

  update: function(email, values) {
    return getUser(email)
      .then(function(user) {
        if (user === null) throw new Error("user not found");
        var hashEmail = cu.hashSync(values.email);
        var oldSalt = user.salt;
        var newSalt = cu.newSaltSync(values.email);
        var makePassword = cu.hashPassword(values.password, newSalt);
        var encryptUsername = cu.encrypt(values.username, newSalt);
        var reEncryptImages = Garment.findAll({where: {UserId: user.id}})
          .then(function(garments) {
            var decrypts = [];
            var ids = [];
            for (var i = 0; i < garments.length; i++) {
              var g = garments[i];
              decrypts.push(cu.decrypt(g.dataValues.image, oldSalt));
              ids.push(g.id);
            }
            return Promise.all(decrypts)
              .then(function(plaintexts) {
                var pairs = [];
                for (var i = 0; i < plaintexts.length; i++) {
                  pairs.push({
                    image: plaintexts[i],
                    garmentId: ids[i]
                  })
                }
                return pairs
              })
          })
          .then(function(plaintextPairs) {
            var encrypts = [];
            var ids = [];
            for (var i = 0; i < plaintextPairs.length; i++) {
              var p = plaintextPairs[i];
              encrypts.push(cu.encrypt(p.image, newSalt))
              ids.push(p.garmentId)
            }
            return Promise.all(encrypts)
              .then(function(ciphertexts) {
                var updateGarments = [];
                for (var i = 0; i < ciphertexts.length; i++) {
                  var payload = {image: ciphertexts[i]};
                  updateGarments.push(Garment.update(payload, {where: {id: ids[i]}}))
                }
                return Promise.all(updateGarments);
              })
          })
        var promises = [hashEmail, newSalt, makePassword, encryptUsername, reEncryptImages];
        return Promise.all(promises)
          .then(function(values) {
            return user.update({
              email:    values[0],
              salt:     values[1],
              password: values[2],
              username: values[3]
            })
          })
      })
  },

  delete: function(email, password, username) {
    return verifyUser(email, password)
      .then(function(user) {
        if (user === null) throw new Error("incorrect credentials");
        return cu.encrypt(username, user.dataValues.salt)
          .then(function(encryptUsername) {
            if (encryptUsername !== user.dataValues.username) throw new Error("incorrect credentials");
            return user.destroy()
          })
      })
  },
}
