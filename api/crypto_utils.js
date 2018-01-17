var crypto = require("crypto");

function hash(name) {
  return crypto.createHash("sha256").update(name).digest("hex");
}

module.exports = {
  hashSync: hash,

  newSaltSync: function(name) {
    var time = new Date().getTime();
    var data = name + time.toString();
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
        function(err, result) { resolve(result.toString("hex")); }
      );
    });
  },

  encrypt: function(plaintext, key) {
    return new Promise(function(resolve, reject) {
      let cipher = crypto.createCipher("aes256", key);
      let encrypted = "";

      cipher.on("readable", function() {
        let data = cipher.read();
        if (data) encrypted += data.toString("hex");
      });

      cipher.on("end", function() {
        resolve(encrypted);
      });

      cipher.write(plaintext);
      cipher.end();
    });
  },

  decrypt: function(ciphertext, key) {
    return new Promise(function(resolve, reject) {
      let decipher = crypto.createDecipher("aes256", key);
      let decrypted = "";

      decipher.on("readable", function() {
        let data = decipher.read();
        if (data) decrypted += data.toString("utf8");
      });

      decipher.on("end", function() {
        resolve(decrypted);
      });

      decipher.write(ciphertext, "hex");
      decipher.end();
    });
  },
}
