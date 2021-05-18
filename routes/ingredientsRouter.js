const express = require("express");
const router = express.Router();
const ingredientsController = require("../controllers/ingredientsController");

router.get("/generate", ingredientsController.readIngredients);
router.post("/generateDish", ingredientsController.getIngredients);
module.exports = router;