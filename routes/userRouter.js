const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/signup", (req, res) => {
    res.render("signup", { title: "Signup", error: 0 });
});

router.get("/login", (req, res) => {
    res.render("login", { title: "Login", error: 0 });
});

router.post("/signup", usersController.createAccount);
router.post("/login", usersController.login);
module.exports = router;