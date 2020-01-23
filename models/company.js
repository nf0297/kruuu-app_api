'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    name: DataTypes.TEXT,
    image: DataTypes.TEXT,
    location: DataTypes.TEXT
  }, {});
  company.associate = function(models) {
    // associations can be defined here
    // if its HasMany then the foreignKey is from other table
    // if its belongsTo then the foreignKey is from this table
    company.hasMany(models.talent, {
      as: "Talent",
      foreignKey: "id_company"
    })
  };
  return company;
};
