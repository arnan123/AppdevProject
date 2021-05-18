const dishes = require("../models/dishes")
const ingredients = require("../models/ingredients")
const dish_ingredients = require("../models/dish_ingredients")
const { Op } = require("sequelize");

exports.readDishes = async(req, res) => {
    let alldish = await dishes.model.findAll();
    var dishI = new Array(alldish.length);
    var ingrdt = new Array(alldish.length);
    var i = new Array();

    var x,y;

    for (x=0;x<alldish.length;x++){
        dishI[x] = await dish_ingredients.model.findAll({
            where: {
                dishID: alldish[x].dishID
            }
        });

        for(y=0;y<dishI[x].length;y++){
            i[y]=dishI[x][y].ingredientID;
        }

        for(y=0;y<dishI[x].length;y++){
            ingrdt[x] = await ingredients.model.findAll({
                where: {
                    ingredientID: {
                        [Op.in]: i
                    }
                }
            });
        }
    }

    res.render("dishlist", { dishes: alldish, title: "Dish List", dishingredient: dishI, ingredient: ingrdt });
}