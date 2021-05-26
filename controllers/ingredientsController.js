const ingredients = require("../models/ingredients")
const dishes = require("../models/dishes")
const dish_ingredients = require("../models/dish_ingredients");


exports.readIngredients = async(req, res) => {
    let dataD = null;
    let data = await ingredients.model.findAll();
    res.render("generator", { ingredients: data, title: "Dish Generator", dishes: dataD, account: req.session.account });
}

exports.getIngredients = async(req, res) => {



    let data = await ingredients.model.findAll();

    var x, y, z, m = 0,
        n = 0,
        a, b;
    var datas = new Array()
    let dataDI = []
    let dataD = []
    let dataI = []

    if (req.body.count > 1) {
        for (x = 0; x < req.body.count; x++) {
            dataDI.push(await dish_ingredients.model.findAll({
                where: {
                    ingredientID: req.body.ingredient[x]
                },
                raw: true
            }))
        }

        for (x = 0; x < req.body.count; x++) {
            dataDI[x] = await dish_ingredients.model.findOne({
                where: {
                    ingredientID: req.body.ingredient[x]
                },
                raw: true
            })
        }


    } else {
        for (x = 0; x < req.body.count; x++) {
            dataDI.push(await dish_ingredients.model.findAll({
                where: {
                    ingredientID: req.body.ingredient
                },
                raw: true
            }))
        }

        for (x = 0; x < req.body.count; x++) {
            dataDI[x] = await dish_ingredients.model.findOne({
                where: {
                    ingredientID: req.body.ingredient
                },
                raw: true
            })
        }



    }

    for (y = 0; y < dataDI.length; y++) {
        for (z = 0; z < dataD.length && dataDI[y].dishID != dataD[z].dishID; z++) {}

        if (z == dataD.length) {
            dataD[m] = await dishes.model.findOne({
                where: {
                    dishID: dataDI[y].dishID
                }
            })
            m++;
        }

    }

    for (a = 0; a < dataDI.length; a++) {

        dataI[n] = await ingredients.model.findOne({
            where: {
                ingredientID: dataDI[a].ingredientID
            }
        })
        n++;
    }

    // let data = await dish_ingredients.model.findAll()

    // res.send(data)

    // res.send(dataI);

    res.render("generator", { ingredients: data, title: "Dish Generator", dishes: dataD, account: req.session.account });

}