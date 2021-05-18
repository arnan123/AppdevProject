// // const { DataTypes } = require("sequelize");
// // const instance = require("../connection");

// // const dish_ingredients = instance.sequelize.define("dish_ingredients", {
// //     dishID: {
// //         type: DataTypes.BIGINT,
// //         allowNull: false
// //     },
// //     ingredientID: {
// //         type: DataTypes.BIGINT,
// //         allowNull: false
// //     },
// //     amount: {
// //         type: DataTypes.FLOAT,
// //         allowNull: false
// //     },
// //     measurement: {
// //         type: DataTypes.ENUM('teaspoon', 'cup', 'whole', 'part', 'pound'),
// //         allowNull: false
// //     }
// // }, {

// //     createdAt: true,
// //     deletedAt: true,
// //     updatedAt: true,
// //     tableName: "dish_ingredients"

// // })

// // exports.model = dish_ingredients;

const { DataTypes } = require("sequelize");
const instance = require("../connection");

const ingredients = instance.sequelize.define("ingredients", {
    dishIngID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    dishID: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    ingredientID: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    measurement: {
        type: DataTypes.ENUM('teaspoon', 'cup', 'whole', 'part', 'pound'),
        allowNull: false
    }
}, {
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
    tableName: "dish_ingredients"
})

exports.model = ingredients;