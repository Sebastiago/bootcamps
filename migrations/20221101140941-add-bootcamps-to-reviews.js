'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'reviews',
      'bootcamp_id',
      {
        type: Sequelize.INTEGER,
        refereces:{
          model: 'bootcamps',
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('reviews' , 'bootcamp_id')
  }
};
