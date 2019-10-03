const uuid = require('uuid/v4'); // ES5

'use strict';
module.exports = (sequelize, DataTypes) => {
  const shopping_cart = sequelize.define('shopping_cart', {
    item_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    cart_id: DataTypes.STRING(32),
    product_id: DataTypes.INTEGER,
    attributes: DataTypes.STRING(1000),
    quantity: DataTypes.INTEGER,
    buy_now: DataTypes.BOOLEAN,
    added_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {
    freezeTableName: true,
    timestamps: false
  });
  shopping_cart.associate = function(models) {
    shopping_cart.belongsTo(models.product, {foreignKey: 'product_id', as: 'product'});
  };
  return shopping_cart;
};