const user = require("../models/users")
const dish_ingredients = require("../models/dish_ingredients")
const dishes = require("../models/dishes")
const ingredients = require("../models/ingredients")
const userDish = require("../models/userDish")
const { Op } = require("sequelize");
const bcrypt = require("bcrypt")
var saltRounds = 10

exports.readAccount = async(req, res) => {
    let data = await user.model.findByPk(
        req.body.id, { raw: true }
    )

    res.send(data);
}

exports.login = async(req, res) => {


    let account = await user.model.findOne({
        where: {
            userEmail: req.body.email
        }
    })
    if (account != null) {
        if (bcrypt.compareSync(req.body.password, account.userPassword) && account.userPassword != "") {
            req.session.account = account;
            res.render("index", { error: 0, title: "Putahe de Amore", account: req.session.account });
        } else {
            res.render("login", { error: 2, title: "Signup" });
        }
    } else {
        res.render("login", { error: 1, title: "Login" });
    }


}


exports.createAccount = async(req, res) => {
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    req.body.code = generateCode();
    let findAcc = await user.model.findOne({
        where: {
            userEmail: req.body.email
        }
    })

    if (findAcc != null) {
        res.render("signup", { title: "Signup", error: 1 });
    } else {
        let data = await user.model.create({
            userName: req.body.name,
            userFullName: req.body.fullname,
            userEmail: req.body.email,
            userPassword: hash,
            userType: 0,
            userBio: " ",
            userUID: req.body.code,
            updatedAt: null
        })

        res.redirect("/login");

    }
    res.redirect("/login");


}

exports.checkProfile = async(req, res) => {
    var z;
    let userDishes = await userDish.model.findAll();

    let alldish = []
    for (z = 0; z < userDishes.length; z++) {
        alldish[z] = await dishes.model.findOne({
            where: {
                dishID: userDishes[z].dishID
            }
        });
    }

    var dishI = new Array(alldish.length);
    var ingrdt = new Array(alldish.length);
    var i = new Array();

    var x, y;

    for (x = 0; x < alldish.length; x++) {
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

    res.render("profile", { dishes: alldish, title: "Profile", dishingredient: dishI, ingredient: ingrdt, account: req.session.account })

}

exports.editProfile = async(req, res) => {
    let data = await user.model.findByPk(req.body.id);

    data.userName = req.body.username;
    data.userFullName = req.body.fullname;
    data.userEmail = req.body.email;
    data.userBio = req.body.biography;
    data.userPassword = req.body.password;

    await data.save();
    req.session.account = data;
    res.redirect("/profile");
}

generateCode = () => {
    let generate = "";
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 8;
    for (var i = 0; i < length; i++) {
        generate += char.charAt(Math.floor(Math.random() * char.length));
    }
    return generate;
}