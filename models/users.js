const { DataTypes } = require("sequelize");
const instance = require("../connection");

const users = instance.sequelize.define("users", {
    userID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userFullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userUID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userType: {
        type: DataTypes.BIGINT,
        allowNull: false
    },userBio: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
    tableName: "users"
})

exports.model = users;