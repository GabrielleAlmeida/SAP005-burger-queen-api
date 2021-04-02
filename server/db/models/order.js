"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Order.belongsTo(models.User);
      Order.belongsToMany(models.Product, { through: models.ProductsOrder });
    }
  }
  Order.init(
    {
      client_name: DataTypes.STRING,
      table: DataTypes.FLOAT,
      status: DataTypes.STRING,
      processedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
