const express = require("express");
const router = express.Router();
const dishIngredientsController = require("../controllers/dishIngredientsController");

router.get("/dishProfile/:id", (req, res) => {
    // res.render("index", { title: "Ambot" });
    res.redirect("/dishProfile?id=" + req.params.id)
})

router.get("/dishProfile", dishIngredientsController.readDI);



module.exports = router;