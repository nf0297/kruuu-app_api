'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jobs', [
      {
       title:'Headshot',
       image:'https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Headshot_%282016_film%29.jpg/220px-Headshot_%282016_film%29.jpg',
       id_talent:'3',
       launch_date:'2016-12-08',
       is_done:true,
       createdAt:new Date,
       updatedAt:new Date,
      },
      {
       title:'3 Heroines',
       image:'https://img.reelgood.com/content/movie/bbde6920-11ae-40e1-90a4-77e458cdd223/poster-780.jpg',
       id_talent:'3',
       launch_date:'2016-08-06',
       is_done:true,
       createdAt:new Date,
       updatedAt:new Date,
      },
      {
       title:'Dream High',
       image:'https://img.reelgood.com/content/show/2f579eb2-cea5-4dd0-a981-4dac2bbd0ab9/poster-780.jpg',
       id_talent:'2',
       launch_date:'2011-01-03',
       is_done:true,
       createdAt:new Date,
       updatedAt:new Date,
      },
      {
       title:'Hotel Del Luna',
       image:'https://www.hancinema.net/photos/fullsizephoto1080037.jpg',
       id_talent:'2',
       launch_date:'2019-07-13',
       is_done:true,
       createdAt:new Date,
       updatedAt:new Date,
      },
      {
        title:'Moon Lovers: Scarlet Heart Ryeo',
        image:'http://www.koreandrama.org/wp-content/uploads/2016/08/Scarlet-Heart-Ryeo-03.jpg',
        id_talent:'2',
        launch_date:'2016-08-29',
        is_done:true,
        createdAt:new Date,
        updatedAt:new Date,     
      },
      {
        title:'The Witcher',
        image:'https://gamespot1.cbsistatic.com/uploads/scale_super/1582/15828986/3606754-witcher%20poster.jpg',
        id_talent:'4',
        launch_date:'2019-12-20',
        is_done:true,
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        title:'Man of Steel',
        image:'https://images-na.ssl-images-amazon.com/images/I/71j%2BjX%2BnBBL._AC_SY679_.jpg',
        id_talent:'5',
        launch_date:'2013-06-13',
        is_done:true,
        createdAt:new Date,
        updatedAt:new Date
      },
      {
        title:'Batman v Superman',
        image:'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        id_talent:'5',
        launch_date:'2016-03-23',
        is_done:true,
        createdAt:new Date,
        updatedAt:new Date
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
