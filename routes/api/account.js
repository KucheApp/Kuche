const router = require("express").Router();
const controllers = require("../../controllers");

const userController = controllers.user;
const sessionController = controllers.session;

router.post("/register", (req, res) => {
  let {username, displayName, password} = req.body;
  userController.add(username, password, displayName)
  .then(() => res.sendStatus(200))
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = router;
