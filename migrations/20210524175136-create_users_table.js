'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable("users", {
            userID: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            userName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            userUID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            userEmail: {
                type: Sequelize.STRING,
                allowNull: false
            },
            userPassword: {
                type: Sequelize.STRING,
                allowNull: false
            },
            userType: {
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
        await queryInterface.dropTable("users");
    }
};