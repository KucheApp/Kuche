module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING(64),
      validate: {is: /^[a-f0-9]{64}$/i},
    },
    salt: {
      type: DataTypes.STRING(64),
      validate: {is: /^[a-f0-9]{64}$/i},
    },
    password: {
      type: DataTypes.STRING(512),
      validate: {is: /^[a-f0-9]{512}$/i},
    },
    username: {
      type: DataTypes.STRING
    }
  });

  User.associate = function(models) {
    User.hasMany(models.FoodItem, {
      onDelete: "cascade"
    });
  };

  return User;
}
