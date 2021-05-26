const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/signup", (req, res) => {
    res.render("signup", { title: "Signup", error: 0, account: req.session.account });
});

router.get("/login", (req, res) => {
    res.render("login", { title: "Login", error: 0, account: req.session.account });
});

router.get("/profile", (req, res) => {
    res.render("profile", { title: "Profile", account: req.session.account });
});

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})

router.post("/signup", usersController.createAccount);
router.post("/login", usersController.login);
router.post("/profile", usersController.editProfile);
module.exports = router;