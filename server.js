const express = require("express");
const bp = require("body-parser");
const db = require("./models");

const app = express();
const port = process.env.PORT || 3001;

app.use(bp.urlencoded({extended: false}));
app.use(bp.json());

app.use(express.static("client/build"));
app.use("/api", require("./api")(app));

var cu = require("./api/crypto_utils");
var randomSecret = cu.hashSync(Date.now().toString());
app.set("jwtSecret", process.env.JWT_SECRET || randomSecret);

var db_options = {};
if (true){//process.env.NODE_DB_ENV === "overwrite") {
  console.log("OVERWRITING DATABASE ON RELOAD");
  db_options.force = true;
}

db.sequelize.sync(db_options)
.then(() => {
  app.listen(port, () => console.log(`API Server listening on port ${port}`));
});
