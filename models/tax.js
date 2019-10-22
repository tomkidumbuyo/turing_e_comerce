const uuid = require('uuid/v4'); // ES5

'use strict';
module.exports = (sequelize, DataTypes) => {
  const tax = sequelize.define('tax', {
    tax_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    tax_type: DataTypes.STRING(100),
    tax_percentage: DataTypes.DECIMAL
  }, {
    freezeTableName: true,
    timestamps: false
  });
  tax.associate = function(models) {
    // associations can be defined here
  };
  return tax;
};