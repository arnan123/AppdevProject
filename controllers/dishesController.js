const dishes = require("../models/dishes")
const ingredients = require("../models/ingredients")
const dish_ingredients = require("../models/dish_ingredients")

exports.readDishes = async(req, res) => {
    let data = await dishes.model.findAll();
    res.render("dishlist", { dishes: data, title: "Dish List" });
}