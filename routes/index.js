const path = require("path");
const router = require("express").Router();

// Serve the API
const apiRouter = require("./api");
router.use("/api", apiRouter);

// Serve the app by default
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
