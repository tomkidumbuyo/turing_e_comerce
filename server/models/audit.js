'use strict';
module.exports = (sequelize, DataTypes) => {
  const audit = sequelize.define('audit', {
    audit_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    order_id: DataTypes.INTEGER,
    created_on: DataTypes.DATE,
    message: DataTypes.TEXT,
    code: DataTypes.INTEGER
  }, {});
  audit.associate = function(models) {
    audit.belongsTo(models.orders, {foreignKey: 'order_id', as: 'order'});

  };
  return audit;
};