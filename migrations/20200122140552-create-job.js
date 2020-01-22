'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      id_talent: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'talents',
          key:'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      launch_date: {
        type: Sequelize.DATE
      },
      is_done: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jobs');
  }
};