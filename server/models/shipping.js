'use strict';
module.exports = (sequelize, DataTypes) => {
  const shipping = sequelize.define('shipping', {
    shipping_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    shipping_type: DataTypes.STRING(100),
    shipping_cost: DataTypes.DECIMAL(10,2),
    shipping_region_id: DataTypes.INTEGER
  }, {});
  shipping.associate = function(models) {
    shipping.belongsTo(models.shipping_region, {foreignKey: 'shipping_region_id', as: 'shipping_region'});

  };
  return shipping;
};