const express = require("express");
const router = express.Router();
const dishesController = require("../controllers/dishesController");

router.get("/", (req, res) => {
    res.render("index", { title: "Putahe de Amore" });
})

router.get("/dishlist", dishesController.readDishes);

router.get("/addDish", (req, res) => {
    res.render("addDish", { title: "Ambot" });
})

module.exports = router;