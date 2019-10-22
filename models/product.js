const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    product_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    name: DataTypes.STRING(100),
    description: DataTypes.STRING(1000),
    price: DataTypes.DECIMAL(10,2),
    discounted_price: DataTypes.DECIMAL(10,2),
    image: DataTypes.STRING(150),
    image_2: DataTypes.STRING(150),
    thumbnail: DataTypes.STRING(150),
    display: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};