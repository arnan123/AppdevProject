const { DataTypes } = require("sequelize");
const instance = require("../connection");

const usersdish = instance.sequelize.define("usersdish", {
    udID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userUID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dishID: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
    tableName: "usersdish"
})

exports.model = usersdish;