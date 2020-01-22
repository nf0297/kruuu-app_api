'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('companies', [
      {
        name: "Samsung",
        image: "https://www.phoneworld.com.pk/wp-content/uploads/2017/10/1200px-Samsung_Logo.svg_.png",
        location: "Korea Selatan",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: "Toyota",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Toyota_logo_2019.png",
        location: "Jepang",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: "Tokopedia",
        image: "https://qibla.co/wp-content/uploads/2018/02/logo-tokopedia.png",
        location: "Indonesia",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: "Lazada",
        image: "https://technobusiness.id/wp-content/uploads/2019/06/Lazada-Baru.png",
        location: "Indonesia",
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
