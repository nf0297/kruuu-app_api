'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('talents', [
      {
        fullname: "Aimer",
        occupation:"Singer",
        image: "https://cdnx.natalie.mu/media/pp/static/music/aimer15/photo04.jpg",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fullname: "Lee Ji-eun",
        occupation: "Singer",
        image: "https://asset.kompas.com/crops/bw0QAj68dglRsBgxXbWXflA79TM=/82x0:886x536/750x500/data/photo/2018/05/08/1328492635.jpg",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fullname: "Chelsea Islan",
        occupation: "Actress",
        image: "https://cdn-brilio-net.akamaized.net/news/2016/08/26/92772/435915-chelsea-islan.jpg",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fullname: "Freya Allan",
        occupation: "Actress",
        image: "https://fashionwomentop.com/wp-content/uploads/2019/12/Freya-Allan.jpg",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fullname: "Henry Cavill",
        occupation: "Actor",
        image: "https://www.theyoungfolks.com/wp-content/uploads/2011/01/Henry-Cavill.jpg",
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
