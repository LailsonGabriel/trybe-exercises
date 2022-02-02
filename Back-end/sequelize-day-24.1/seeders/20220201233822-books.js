'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Books', [
      {
        title: "A volta dos que não foram",
        author: "Texugo",
        pageQuantity: 1,
        createdAt: new Date()
      },
      {
        title: "As tranças do rei careca",
        author: "Texugo",
        pageQuantity: 12,
        createdAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', null, {});
  }
};
