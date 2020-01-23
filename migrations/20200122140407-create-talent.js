'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('talents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.TEXT
      },
      occupation: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.TEXT
      },
      id_company: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'companies',
        key:'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
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
    return queryInterface.dropTable('talents');
  }
};
