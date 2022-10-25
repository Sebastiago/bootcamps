'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    //Add seed commands here.

    //Example:
    await queryInterface.bulkInsert('users', [
      {
        name: 'Luis Angel',
        email: 'Luisangel@gmail.com',
        password: '271107'
      },
      {
        name: 'Michelle',
        email: 'mich21@gmail.com',
        password: '2109'
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
