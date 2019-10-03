const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const shipping = sequelize.define('shipping', {
    shipping_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    shipping_type: DataTypes.STRING(100),
    shipping_cost: DataTypes.DECIMAL(10,2),
    shipping_region_id: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false
  });
  shipping.associate = function(models) {
    shipping.belongsTo(models.shipping_region, {foreignKey: 'shipping_region_id', as: 'shipping_region'});

  };
  return shipping;
};