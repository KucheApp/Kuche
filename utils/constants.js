var constants = {};

module.exports = {
  set: function(key, value) {
    constants[key] = value;
  },
  get: function(key) {
    return constants[key];
  }
}
