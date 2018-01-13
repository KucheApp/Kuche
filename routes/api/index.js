const router = require("express").Router();

router.use("/account", require("./account"));
router.use("/kitchen", require("./kitchen"));

module.exports = router;
