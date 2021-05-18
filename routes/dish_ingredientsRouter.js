const express = require("express");
const router = express.Router();
const dishIngredientsController = require("../controllers/dishIngredientsController");

router.get("/dish/:id", (req, res) => {
    // res.render("index", { title: "Ambot" });
    res.redirect("/dish?id=" + req.params.id)
})

router.get("/dish", dishIngredientsController.readDI);



module.exports = router;