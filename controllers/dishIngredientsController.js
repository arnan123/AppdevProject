const dish_ingredients = require("../models/dish_ingredients")
const dishes = require("../models/dishes")
const ingredients = require("../models/ingredients")



exports.readDI = async(req, res) => {

    var x;
    let dataI = []
    let data = await dishes.model.findOne({
        where: {
            dishID: req.query.id
        },
        raw: true
    });


    let dataDI = await dish_ingredients.model.findAll({
        where: {
            dishID: req.query.id
        },
        raw: true
    })

    for (x = 0; x < dataDI.length; x++) {
        dataI[x] = await ingredients.model.findOne({
            where: {
                ingredientID: dataDI[x].ingredientID
            }
        })
    }
    res.render("sample", { dish: data, ingredient: dataI, DI: dataDI, title: "Dish", account: req.session.account });
}