const user = require("../models/users")
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
            res.render("index", { error: 0, title: "Signup" });
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
            userEmail: req.body.email,
            userPassword: hash,
            userType: 0,
            userUID: req.body.code,
            updatedAt: null

        })

        req.session.user = data
        res.locals.user = req.session.user
        res.render("index", { error: 0, title: "Signup" });

    }
    res.render("index", { error: 0, title: "Signup" });


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