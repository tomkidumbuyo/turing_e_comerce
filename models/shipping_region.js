const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const shipping_region = sequelize.define('shipping_region', {
    shipping_region_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    shipping_region: DataTypes.STRING(100)
  }, {
    freezeTableName: true,
    timestamps: false
  });
  shipping_region.associate = function(models) {
    // associations can be defined here
  };
  return shipping_region;
};