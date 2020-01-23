'use strict';
module.exports = (sequelize, DataTypes) => {
  const talent = sequelize.define('talent', {
    fullname: DataTypes.TEXT,
    occupation: DataTypes.STRING,
    image: DataTypes.TEXT,
    id_company: DataTypes.INTEGER
  }, {});
  talent.associate = function(models) {
    // associations can be defined here
    // if its HasMany then the foreignKey is from other table
    // if its belongsTo then the foreignKey is from this table
    talent.hasMany(models.job, {
      as: "Job",
      foreignKey: "id_talent"
    })
    talent.belongsTo(models.company, {
      as: "Talent",
      foreignKey: "id_company"
    })
  };
  return talent;
};
