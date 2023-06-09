'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales_products',
      [
        {
          sale_id: 1,
          product_id: 1,
          quantity: 1,
        },
        {
          sale_id: 1,
          product_id: 2,
          quantity: 1,
        },
        {
          sale_id: 2,
          product_id: 7,
          quantity: 2,
        },
        {
          sale_id: 3,
          product_id: 4,
          quantity: 2,
        },
      ]
      );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales_products', null, {});
  },
};
