'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ingredients", {
      ingredientID: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      ingredientName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ingredientDescription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ingredientType: {
        type: Sequelize.ENUM('Spice/Seasoning', 'Meat', 'Vegetable/Fruit','Basic'),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
