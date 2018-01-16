var crypto = require("crypto");

function hash(s) {
  return crypto.createHash("sha256").update(s).digest("hex");
}

module.exports = {
  hash: hash,
  newSalt: function(s) {
    let time = new Date().getTime();
    let data = s + time.toString();
    return hash(data);
  },
  hashPassword: function(password, salt) {
    let rounds = 50000;
    let bits   = 256;
    let algo   = "sha512";
    return new Promise(function(resolve, reject) {
      crypto.pbkdf2(
        password, salt,
        rounds, bits, algo,
        function(err, result) {
          if (err != undefined) {
            reject(err);
          } else {
            resolve(result.toString("hex"));
          }
        }
      );
    });
  }
}
