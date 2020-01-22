'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    name: DataTypes.TEXT,
    image: DataTypes.TEXT,
    location: DataTypes.TEXT
  }, {});
  company.associate = function(models) {
    // associations can be defined here
  };
  return company;
};