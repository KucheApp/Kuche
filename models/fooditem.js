module.exports = function(sequelize, DataTypes) {
  var FoodItem = sequelize.define("FoodItem", {
    name: {type: DataTypes.STRING, allowNull: false},
    location: {type: DataTypes.STRING, allowNull: false},
    quantity: {type: DataTypes.INTEGER, allowNull: false},
    quantityUnits: {type: DataTypes.STRING, allowNull: true},
    purchased: {type: DataTypes.DATE, defaultValue: sequelize.NOW, allowNull: true},
    expires: {type: DataTypes.DATE, allowNull: true},
    nutritionId: {type: DataTypes.INTEGER, allowNull: true}
  });

  FoodItem.associate = function(models) {
    FoodItem.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  return FoodItem;
}
