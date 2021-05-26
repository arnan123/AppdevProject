const userDish = require("../models/userDish")
const dishes = require("../models/dishes")

exports.addFave = async(req, res) => {

    let dish = await dishes.model.findOne({
        where: {
            dishID: req.query.id
        }
    })

    let data = await userDish.model.create({

        userUID: req.session.account.userUID,
        dishID: dish.dishID,

    })

    res.redirect("/dishProfile?id=" + req.query.id);

}

exports.deleteFave = async(req, res) => {

    let data = await userDish.model.destroy({
        where: {
            dishID: req.query.id,
            userUID: req.session.account.userUID
        }
    })

    res.redirect("/profile");

}