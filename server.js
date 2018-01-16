const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");

const utils = require("./utils");
const crypto = utils.crypto;
const constants = utils.constants;

const app = express();
const port = process.env.PORT || 3001;

app.use(bp.urlencoded({extended: false}));
app.use(bp.json());

app.use(express.static("client/build"));
app.use(require("./routes"))

let randomSecret = crypto.hash(Date.now().toString());
let jwtSecret = process.env.JWT_SECRET || randomSecret;
constants.set("JWT_SECRET", jwtSecret);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kuche", {useMongoClient: true});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
