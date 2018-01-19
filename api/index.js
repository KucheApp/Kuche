var express = require("express");
var auth = require("basic-auth");
var moment = require("moment");

var uu = require("./user_utils");
var cu = require("./crypto_utils");
var models = require("../models");
var User = models.User;
var FoodItem = models.FoodItem;

module.exports = function(app) {
  var tu = require("./token_utils")(app);
  var jwtauth = tu.middleware;

  var router = express.Router();

  function accessDenied(req, res) {
    res.statusCode = 401;
    res.setHeader("WWW-Authenticate", 'Basic realm="veve"');
    res.end("Access denied");
  }

  function forbidden(req, res) {
    res.statusCode = 403;
    res.end("Forbidden");
  }

  function forbiddenIfNoUser(req, res, next) {
    if (req.user == undefined) {
      return forbidden(req, res);
    } else {
      next();
    }
  }

  router.post("/signup", function(req, res) {
    var values = req.body || req.params;
    uu.get(values.email)
      .then(function(user) {
        if (user !== null) {
          throw new Error("email already registered")
        }
        return uu.create(values.email, values.password, values.username);
      })
      .then(function(newUser) {
        var token = tu.create(values.email);
        res.json({
          error: false,
          session: token
        })
      })
      .catch(function(err) {
        return res.json({
          error: true,
          errorMsg: err.message
        });
      })
  });

  router.get("/token", function(req, res) {
    var header = auth(req);
    uu.verify(header.name, header.pass)
      .then(function(user) {
        if (user === null) {
          return forbidden(req, res);
        } else {
          var token = tu.create(header.name);
          res.json(token);
        }
      })
      .catch(function(err) {
        forbidden(req, res);
      })
  });

  router.get("/username",
    jwtauth,
    forbiddenIfNoUser,
    function(req, res) {
      cu.decrypt(req.user.username, req.user.salt)
        .then(function(decryptedUsername) {
          res.json({
            error: false,
            username: decryptedUsername
          });
        })
    }
  );

  router.put("/account",
    jwtauth,
    forbiddenIfNoUser,
    function(req, res) {
      var header = auth(req);
      if (header == undefined) {
        return forbidden(req, res);
      }

      if (req.body == undefined) {
        return res.json({
          error: true,
          errorMsg: "must provide updated values"
        })
      }

      if (req.body.email == undefined || req.body.password == undefined || req.body.username == undefined) {
        return res.json({
          error: true,
          errorMsg: "must provide all updated values"
        })
      }

      return uu.update(header.name, req.body)
        .then(function(result) {
          res.json({
            error: false
          })
        })
        .catch(function(err) {
          res.json({
            error: true,
            errorMsg: err.message
          })
        })
    }
  );

  router.delete("/account",
    jwtauth,
    forbiddenIfNoUser,
    function(req, res) {
      var header = auth(req);
      if (header === undefined) {
        return forbidden(req, res);
      }

      if (req.body.username == undefined) {
        return forbidden(req,res);
      }

      uu.delete(header.name, header.pass, req.body.username)
        .then(function(result) {
          res.json({
            error: false
          });
        })
        .catch(function(err) {
          return forbidden(req, res);
        })
    }
  );

  /* Food Items */

  function FoodItemPublic(fi) {
    delete fi["UserId"];
    return fi;
  }

  router.get("/food/:location",
    jwtauth,
    forbiddenIfNoUser,
    function(req, res) {
      let query = {where: {UserId: req.user.dataValues.id}};
      query.where.location = req.params.location;

      FoodItem.findAll(query)
      .then(fooditems => {
        fooditems = fooditems.map(FoodItemPublic)
        res.json({
          error: false,
          fooditems: fooditems
        });
      })
      .catch(err => {
        res.json({
          error: true,
          errorMsg: err.message
        })
      })
    }
  );

  router.post("/food",
    jwtauth,
    forbiddenIfNoUser,
    function(req, res) {
      let fooditem = req.body;
      fooditem.UserId = req.user.id;
      if (fooditem.purchased === undefined) {
        fooditem.purchased = Date.now();
      }
      return FoodItem.create(fooditem)
      .then(fi => {
        fi = FoodItemPublic(fi);
        res.json({
          error: false,
          fooditem: fi
        })
      })
    }
  );

  /* Grocery List */

  router.get("/groceries",
    jwtauth,
    forbiddenIfNoUser,
    function(req, res) {
      let query = {where: {UserId: req.user.dataValues.id}};
      query.where.location = "groceries";

      FoodItem.findAll(query)
      .then(fooditems => {
        fooditems = fooditems.map(FoodItemPublic)
        res.json({
          error: false,
          fooditems: fooditems
        });
      })
      .catch(err => {
        res.json({
          error: true,
          errorMsg: err.message
        })
      })
    }
  );

  return router;
}
