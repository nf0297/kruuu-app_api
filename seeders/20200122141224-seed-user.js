'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        fullname: "Aimer",
        email:'aimer@aimer.com',
        password:'aimer',
        image: "https://cdnx.natalie.mu/media/pp/static/music/aimer15/photo04.jpg",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fullname: "Lee Ji-eun",
        email:'iu@iu.com',
        password:'iu',
        image: "https://asset.kompas.com/crops/bw0QAj68dglRsBgxXbWXflA79TM=/82x0:886x536/750x500/data/photo/2018/05/08/1328492635.jpg",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fullname: "Chelsea Islan",
        email: "chelsea@chelsea.com",
        password: "chelsea",
        image: "https://cdn-brilio-net.akamaized.net/news/2016/08/26/92772/435915-chelsea-islan.jpg",
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
