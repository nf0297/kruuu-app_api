'use strict';
module.exports = (sequelize, DataTypes) => {
  const job = sequelize.define('job', {
    title: DataTypes.TEXT,
    image: DataTypes.TEXT,
    id_talent: DataTypes.INTEGER,
    launch_date: DataTypes.DATE,
    is_done: DataTypes.BOOLEAN
  }, {});
  job.associate = function(models) {
    // associations can be defined here
    // if its HasMany then the foreignKey is from other table
    // if its belongsTo then the foreignKey is from this table
    job.belongsTo(models.talent, {
      as: "Talent",
      foreignKey: "id_talent"
    })
  };
  return job;
};