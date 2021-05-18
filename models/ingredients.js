const {DataTypes} = require("sequelize");
const instance = require("../connection");

const ingredients = instance.sequelize.define("ingredients", {
    ingredientID: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    ingredientName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredientDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredientType: {
      type: DataTypes.ENUM('Spice/Seasoning', 'Meat', 'Vegetable/Fruit','Basic'),
      allowNull: false
    }
  },{
    createdAt:true,
    deletedAt:true,
    updatedAt:true,
    tableName: "ingredients"
  }
)

exports.model = ingredients;