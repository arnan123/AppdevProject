const express = require("express");
const router = express.Router();
const dishesController = require("../controllers/dishesController");

router.get("/", (req, res) => {
    res.render("index", { title: "Putahe de Amore", account: req.session.account });
})

router.get("/dishlist", dishesController.readDishes);

router.get("/addDish", (req, res) => {
    res.render("addDish", { title: "Ambot", user: null });
})

router.get("/deleteDish", dishesController.deleteDish);

module.exports = router;