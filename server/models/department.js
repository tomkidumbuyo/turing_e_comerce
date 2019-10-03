const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    depertment_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    name: DataTypes.STRING(100),
    description: DataTypes.STRING(1000),
  }, {
    freezeTableName: true,
    timestamps: false
  });
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};