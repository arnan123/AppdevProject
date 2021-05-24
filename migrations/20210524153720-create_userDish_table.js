'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable("usersDish", {
            udID: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                allowNull: false
            },
            userUID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            dishID: {
                type: Sequelize.BIGINT,
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

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable("usersDish");
    }
};