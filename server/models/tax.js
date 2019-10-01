'use strict';
module.exports = (sequelize, DataTypes) => {
  const tax = sequelize.define('tax', {
    tax_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tax_type: DataTypes.STRING(100),
    tax_percentage: DataTypes.DECIMAL
  }, {});
  tax.associate = function(models) {
    // associations can be defined here
  };
  return tax;
};