const dishes = require("../models/dishes")
const ingredients = require("../models/ingredients")
const dish_ingredients = require("../models/dish_ingredients")
const userDish = require("../models/userDish")
const { Op } = require("sequelize");

exports.readDishes = async(req, res) => {

    let alldish = await dishes.model.findAll();
    let userDishes = await userDish.model.findAll();
    var dishI = new Array(alldish.length);
    var ingrdt = new Array(alldish.length);
    var i = new Array();
    var x, y, z;


    for (x = 0; x < alldish.length; x++) {

        alldish[x].check = "0"
        for (z = 0; z < userDishes.length; z++) {
            if (userDishes[z].dishID == alldish[x].dishID) {
                alldish[x].check = "1"
                    // console.log(alldish[x].dishID);
            }
        }

        dishI[x] = await dish_ingredients.model.findAll({
            where: {
                dishID: alldish[x].dishID
            }
        });

        for (y = 0; y < dishI[x].length; y++) {
            i[y] = dishI[x][y].ingredientID;
        }

        for (y = 0; y < dishI[x].length; y++) {
            ingrdt[x] = await ingredients.model.findAll({
                where: {
                    ingredientID: {
                        [Op.in]: i
                    }
                }
            });
        }
    }

    res.render("dishlist", { dishes: alldish, title: "Dish List", dishingredient: dishI, ingredient: ingrdt, account: req.session.account });
}

exports.deleteDish = async(req, res) => {

    let dish = await dishes.model.destroy({
        where: {
            dishID: req.query.id
        }
    })

    let dishI = await dish_ingredients.model.destroy({
        where: {
            dishID: req.query.id
        }
    })

    let data = await userDish.model.destroy({
        where: {
            dishID: req.query.id
        }
    })

    res.redirect("back");
}