const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const audit = sequelize.define('audit', {
    audit_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    order_id: DataTypes.INTEGER,
    created_on: DataTypes.DATE,
    message: DataTypes.TEXT,
    code: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false
  });
  audit.associate = function(models) {
    audit.belongsTo(models.orders, {foreignKey: 'order_id', as: 'order'});
  };
  return audit;
};