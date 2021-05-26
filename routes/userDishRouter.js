const express = require("express");
const router = express.Router();
const userDishController = require("../controllers/userDishController");


router.get("/addFave", userDishController.addFave);
router.get("/deleteFave", userDishController.deleteFave);
module.exports = router;