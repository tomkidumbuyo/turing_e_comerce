'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    depertment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING(100),
    description: DataTypes.STRING(1000),
  }, {});
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};