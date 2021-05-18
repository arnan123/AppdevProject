const { DataTypes } = require("sequelize");
const instance = require("../connection");

const dishes = instance.sequelize.define("dishes", {
    dishID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    dishName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dishDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dishMenu: {
        type: DataTypes.ENUM('Breakfast', 'Lunch', 'Dinner'),
        allowNull: false
    },
    dishPic: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
    tableName: "dishes"
})

exports.model = dishes;